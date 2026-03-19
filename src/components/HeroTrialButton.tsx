'use client'
import { useState } from 'react'
import TrialModal from './TrialModal'

export default function HeroTrialButton({ label = 'Start free trial →', className = '' }: {
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className || 'inline-flex items-center gap-2 bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm'}>
        {label}
      </button>
      <TrialModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
