'use client'
import { useEffect, useRef, useState } from 'react'

const FALLBACK_URL = 'https://player.vimeo.com/video/1175812373?autoplay=1&badge=0&byline=0&title=0'

interface Props {
  open: boolean
  onClose: () => void
}

function getEmbedUrl(url: string): string {
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) {
    return 'https://player.vimeo.com/video/' + vimeo[1] + '?autoplay=1&badge=0&byline=0&title=0'
  }
  const yt = url.match(/youtu\.be\/([\w-]+)/) || url.match(/youtube\.com\/(?:watch\?v=|embed\/)([\w-]+)/)
  if (yt) {
    return 'https://www.youtube.com/embed/' + yt[1] + '?autoplay=1'
  }
  // Already an embed URL
  if (url.includes('player.vimeo.com') || url.includes('youtube.com/embed')) return url
  return url
}

export default function VideoModal({ open, onClose }: Props) {
  const [embedUrl, setEmbedUrl] = useState<string>(FALLBACK_URL)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    // Try to fetch from admin — fall back to hardcoded if unavailable
    fetch('https://app.evalent.io/api/site-video')
      .then(r => r.json())
      .then(d => {
        if (d.url) setEmbedUrl(getEmbedUrl(d.url))
      })
      .catch(() => {
        setEmbedUrl(FALLBACK_URL)
      })
  }, [open])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
      style={{ background: 'rgba(7,17,46,0.90)' }}
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
          Close
        </button>
        <div className="rounded-2xl overflow-hidden bg-black w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
          <iframe
            src={embedUrl}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  )
}
