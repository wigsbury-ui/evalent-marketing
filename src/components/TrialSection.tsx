'use client'
import { useState } from 'react'
import TrialModal from './TrialModal'

export default function TrialSection() {
  const [open, setOpen] = useState(false)

  return (
    <section style={{
      background: '#eef3ff',
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#002ec1', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>
          Free Trial
        </p>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: '#07112e', margin: '0 0 16px', lineHeight: 1.2 }}>
          Get your 10 free reports
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', margin: '0 0 36px', lineHeight: 1.6 }}>
          Set up in minutes. Use with real applicants. No credit card needed.
        </p>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: '#002ec1', color: 'white', border: 'none',
            borderRadius: 12, padding: '16px 36px', fontSize: 16,
            fontWeight: 700, cursor: 'pointer', display: 'inline-block',
          }}
        >
          Start your free trial &rarr;
        </button>
        <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 16 }}>
          No credit card required &middot; Cancel any time
        </p>
      </div>
      <TrialModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
