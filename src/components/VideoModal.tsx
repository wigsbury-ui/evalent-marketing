'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

function getEmbedUrl(url: string): string {
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return 'https://player.vimeo.com/video/' + vimeo[1] + '?autoplay=1&badge=0&byline=0&title=0'
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
  if (yt) return 'https://www.youtube.com/embed/' + yt[1] + '?autoplay=1'
  return url
}

export default function VideoModal({ open, onClose }: Props) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setLoading(true)
    fetch('https://app.evalent.io/api/site-video')
      .then(r => r.json())
      .then(d => { setVideoUrl(d.url); setLoading(false) })
      .catch(() => setLoading(false))
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(7,17,46,0.88)' }}
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

        <div className="rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
          {loading ? (
            <div className="w-full h-full flex items-center justify-center bg-navy" style={{ aspectRatio: '16/9' }}>
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"/>
            </div>
          ) : videoUrl ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              className="w-full h-full"
              style={{ aspectRatio: '16/9' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-navy text-blue-300 text-sm" style={{ aspectRatio: '16/9' }}>
              Video coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
