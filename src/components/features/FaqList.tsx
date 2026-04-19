'use client'
import { useState } from 'react'
export default function FaqList({ faqs }: { faqs: string[][] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map(([q, a], i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-4 py-3.5 font-semibold text-navy text-sm flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
            {q}
            <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ml-3 ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          {open === i && <div className="px-4 py-3 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">{a}</div>}
        </div>
      ))}
    </div>
  )
}
