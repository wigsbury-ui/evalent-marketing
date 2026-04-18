'use client'
import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({
  faqs,
  heading = 'Frequently asked questions',
}: {
  faqs: FaqItem[]
  heading?: string
}) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-black text-navy text-center mb-8">{heading}</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-navy flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                {item.q}
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
