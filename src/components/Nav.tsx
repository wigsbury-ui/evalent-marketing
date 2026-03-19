'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tight text-navy">
          EVAL<span className="text-brand italic">ENT</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-500">
          <Link href="/features" className="hover:text-navy transition-colors">Features</Link>
          <Link href="/curricula" className="hover:text-navy transition-colors">Curricula</Link>
          <Link href="/pricing" className="hover:text-navy transition-colors">Pricing</Link>
          <a href="https://app.evalent.io/login" className="hover:text-navy transition-colors">Sign in</a>
        </div>
        <a
          href="#trial"
          className="hidden md:inline-flex bg-brand text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Try free
        </a>
        <button className="md:hidden text-gray-500" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 text-sm">
          <Link href="/features" className="block text-gray-600">Features</Link>
          <Link href="/curricula" className="block text-gray-600">Curricula</Link>
          <Link href="/pricing" className="block text-gray-600">Pricing</Link>
          <a href="https://app.evalent.io/login" className="block text-gray-600">Sign in</a>
          <a href="#trial" className="block bg-brand text-white font-bold px-4 py-2 rounded-lg text-center">Try free</a>
        </div>
      )}
    </nav>
  )
}
