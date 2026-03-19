'use client'
import { useState } from 'react'
import TrialModal from './TrialModal'

export default function HeroTrialButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="mt-7 flex flex-col items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-white text-brand font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
          Start free trial →
        </button>
        <div className="flex items-center gap-2.5 text-[11px] text-blue-200/80 mt-1">
          <span>✓ 10 free reports</span>
          <span>·</span>
          <span>✓ No credit card</span>
          <span>·</span>
          <span>✓ 5 minute setup</span>
        </div>
      </div>
      <TrialModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
