'use client'
import { useState } from 'react'
import TrialModal from './TrialModal'

/**
 * CtaTrialButton — opens the trial modal in the current window.
 * variant="dark"  → brand background, white text (use on light/white sections)
 * variant="light" → white background, brand text (use on navy/dark sections)
 */
export default function CtaTrialButton({
  variant = 'dark',
}: {
  variant?: 'dark' | 'light'
}) {
  const [open, setOpen] = useState(false)
  const styles =
    variant === 'light'
      ? 'bg-white text-brand hover:bg-blue-50'
      : 'bg-brand text-white hover:bg-blue-800'
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`font-bold text-sm px-6 py-3 rounded-xl transition-colors ${styles}`}
      >
        Start free trial →
      </button>
      <TrialModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
