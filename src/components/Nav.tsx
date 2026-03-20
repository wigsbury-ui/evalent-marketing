'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import TrialModal from './TrialModal'

const FEATURE_LINKS = [
  { href: '/features/registration', label: 'Student Registration', desc: 'Register students and configure your school' },
  { href: '/features/dashboard',    label: 'Assessment Dashboard', desc: 'Track every applicant in real time' },
  { href: '/features/assessment',   label: 'The Assessment',       desc: 'What students experience' },
  { href: '/features/reports',      label: 'Report Generation',    desc: 'From submission to PDF in minutes' },
  { href: '/features/decisions',    label: 'Decision Workflow',    desc: 'One-click decisions from your inbox' },
]

const CURRICULA_LINKS = [
  { href: '/curricula/ib',       label: 'IB',       desc: 'PYP & MYP · Grades 3–10' },
  { href: '/curricula/british',  label: 'British',  desc: 'KS2, KS3 & KS4 · Years 4–11' },
  { href: '/curricula/american', label: 'American', desc: 'Common Core · Grades 3–10' },
]

const SCHOOLS_LINKS = [
  { href: '/uk',          label: 'United Kingdom', desc: 'British National Curriculum · Years 4–11' },
  { href: '/usa',         label: 'United States',  desc: 'Common Core · Grades 3–10' },
  { href: '/australia',   label: 'Australia',      desc: 'ACARA · Years 4–10' },
  { href: '/new-zealand', label: 'New Zealand',    desc: 'NZC · Years 4–10' },
]

function Dropdown({ label, links, extraItem }: {
  label: string
  links: { href: string; label: string; desc: string }[]
  extraItem?: { href: string; label: string }
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="hover:text-navy transition-colors flex items-center gap-1 text-sm text-gray-500 cursor-pointer select-none">
        {label}
        <svg
          className={`w-3 h-3 mt-0.5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 min-w-[220px]">
          {links.map(({ href, label: lbl, desc }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors">
              <span className="text-sm font-semibold text-navy">{lbl}</span>
              <span className="text-xs text-gray-400 mt-0.5">{desc}</span>
            </Link>
          ))}
          {extraItem && (
            <div className="border-t border-gray-100 mt-1 pt-1">
              <Link href={extraItem.href} onClick={() => setOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-brand hover:bg-blue-50 transition-colors">
                {extraItem.label} →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [trialOpen, setTrialOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/evalent-logo.png"
              alt="Evalent"
              width={132}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <Dropdown label="Features" links={FEATURE_LINKS} extraItem={{ href: '/features', label: 'All features' }} />
            <Link href="/demo" className="hover:text-navy transition-colors font-semibold text-brand">See Evalent in action</Link>
            <Dropdown label="Curricula" links={CURRICULA_LINKS} extraItem={{ href: '/curricula', label: 'All curricula' }} />
            <Dropdown label="Schools" links={SCHOOLS_LINKS} />
            <Link href="/pricing" className="hover:text-navy transition-colors">Pricing</Link>
            <a href="https://app.evalent.io/login" className="hover:text-navy transition-colors">Sign in</a>
          </div>

          {/* Try free — opens trial modal */}
          <button
            onClick={() => setTrialOpen(true)}
            className="hidden md:inline-flex bg-brand text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Try free
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(o => !o)}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-2 text-sm">
            <Link href="/features" className="block font-semibold text-navy">Features</Link>
            {FEATURE_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="block pl-3 text-gray-500">→ {label}</Link>
            ))}
            <Link href="/demo" className="block text-brand font-semibold pt-1">See Evalent in action</Link>
            <Link href="/curricula" className="block font-semibold text-navy pt-1">Curricula</Link>
            {CURRICULA_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="block pl-3 text-gray-500">→ {label}</Link>
            ))}
            <div className="font-semibold text-navy pt-1">Schools</div>
            {SCHOOLS_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="block pl-3 text-gray-500">→ {label}</Link>
            ))}
            <Link href="/pricing" className="block text-gray-600 pt-1">Pricing</Link>
            <a href="https://app.evalent.io/login" className="block text-gray-600">Sign in</a>
            <button
              onClick={() => { setMenuOpen(false); setTrialOpen(true) }}
              className="block w-full bg-brand text-white font-bold px-4 py-2 rounded-lg text-center mt-2">
              Try free
            </button>
          </div>
        )}
      </nav>

      {/* Trial modal — triggered by Try free button */}
      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
    </>
  )
}
