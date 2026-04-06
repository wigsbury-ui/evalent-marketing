'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function GccBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Hide after May 30 2026
    if (new Date() > new Date('2026-05-30')) return
    // Hide if dismissed
    if (localStorage.getItem('gcc-banner-dismissed') === 'true') return
    setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem('gcc-banner-dismissed', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      background: '#b45309',
      color: 'white',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      fontSize: 14,
      fontWeight: 500,
      position: 'relative',
    }}>
      <span style={{ fontSize: 18 }}>🇦🇪</span>
      <span>
        Supporting GCC schools — free 1-year Essentials subscription.{' '}
        Use code <strong style={{ letterSpacing: '0.05em' }}>GCC2026</strong> at checkout.{' '}
        <Link href="/gcc-support" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Learn more →
        </Link>
      </span>
      <button
        onClick={dismiss}
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: 'white', cursor: 'pointer',
          fontSize: 18, lineHeight: 1, padding: 4, opacity: 0.8,
        }}
        aria-label="Dismiss"
      >×</button>
    </div>
  )
}
