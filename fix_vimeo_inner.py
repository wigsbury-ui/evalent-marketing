#!/usr/bin/env python3
import re, os

inner_component = """'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  videoId: string
  title: string
}

export default function VimeoEmbedInner({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden relative shadow-xl"
      style={{ paddingTop: '56.25%', background: '#07112e' }}
    >
      {loaded ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title={title}
        />
      ) : (
        <div
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          className="flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" style={{ marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
"""

with open('src/components/VimeoEmbedInner.tsx', 'w') as f:
    f.write(inner_component)
print("Created VimeoEmbedInner.tsx")

PATTERN = re.compile(
    r'<div\b[^>]*rounded-2xl[^>]*>\s*\n'
    r'(?:\s*<div\b[^>]*>\s*\n)?'
    r'\s*<iframe\b'
    r'(?:[^>]|\n)*?'
    r'player\.vimeo\.com/video/(\d+)'
    r'(?:[^>]|\n)*?'
    r'title="([^"]+)"'
    r'(?:[^>]|\n)*?/>'
    r'(?:[^<]|\n)*?(?:</div>\s*\n)?'
    r'\s*</div>',
    re.DOTALL
)

files = [
    'src/app/page.tsx',
    'src/app/why/decision-making/page.tsx',
    'src/app/partners/page.tsx',
    'src/app/curricula/american/page.tsx',
    'src/app/curricula/australian/page.tsx',
    'src/app/curricula/british/page.tsx',
    'src/app/curricula/ib/page.tsx',
    'src/app/curricula/new-zealand/page.tsx',
]

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    if 'VimeoEmbedInner' in content:
        print(f"SKIP: {filepath}")
        continue

    if 'player.vimeo.com' not in content:
        print(f"SKIP (no vimeo): {filepath}")
        continue

    m = PATTERN.search(content)
    if not m:
        print(f"NO MATCH: {filepath}")
        idx = content.find('player.vimeo.com')
        print(f"  Context: {repr(content[max(0,idx-150):idx+100])}")
        continue

    video_id = m.group(1)
    title = m.group(2)
    replacement = f'<VimeoEmbedInner videoId="{video_id}" title="{title}" />'
    content = content[:m.start()] + replacement + content[m.end():]

    lines = content.split('\n')
    last_import = max(i for i,l in enumerate(lines) if l.startswith('import '))
    lines.insert(last_import + 1, "import VimeoEmbedInner from '@/components/VimeoEmbedInner'")
    content = '\n'.join(lines)

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"FIXED: {filepath} — {video_id}")

print("\nAll done")
