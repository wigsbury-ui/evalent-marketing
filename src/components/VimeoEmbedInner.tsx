'use client'
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
