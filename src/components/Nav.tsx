'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import TrialModal from './TrialModal'

const FEATURE_LINKS = [
  { href: '/features/registration', label: 'Student Registration', desc: 'Register students and configure your school' },
  { href: '/features/dashboard',    label: 'Assessment Dashboard', desc: 'Track every applicant in real time' },
  { href: '/features/assessment',   label: 'The Assessment',       desc: 'What students experience' },
  { href: '/features/reports',      label: 'Report Generation',    desc: 'From submission to PDF in minutes' },
  { href: '/features/decisions',    label: 'Decision Workflow',    desc: 'One-click decisions from your inbox' },
]

const CURRICULA_LINKS = [
  { href: '/curricula/ib',          label: 'IB',           desc: 'PYP & MYP · Grades 3–10' },
  { href: '/curricula/british',     label: 'British',      desc: 'KS2, KS3 & KS4 · Years 4–11' },
  { href: '/curricula/american',    label: 'American',     desc: 'Common Core · Grades 3–10' },
  { href: '/curricula/australian',  label: 'Australian',   desc: 'ACARA · Years 4–10' },
  { href: '/curricula/new-zealand', label: 'New Zealand',  desc: 'NZC · Years 4–10' },
]

const WHY_LINKS = [
  { href: '/why/evaluation',   label: 'Intelligent Evaluation', desc: 'AI-powered, rubric-based scoring' },
  { href: '/why/wellbeing',    label: 'Student Wellbeing',      desc: 'Calm, supported assessment experience' },
  { href: '/why/transparency', label: 'Transparency',           desc: 'Full audit trail, every decision documented' },
  { href: '/why/defensibility',label: 'Defensibility',          desc: 'Evidence-based, accreditation-ready records' },
  { href: '/why/conversion',   label: 'Conversion & Speed',     desc: 'Faster decisions, higher yield' },
  { href: '/why/data-security',  label: 'Data Security',           desc: 'GDPR compliant · student data protected' },
]

const SCHOOLS_LINKS = [
  { href: '/uk',          label: 'United Kingdom', desc: 'British National Curriculum · Years 4–11' },
  { href: '/usa',         label: 'United States',  desc: 'Common Core · Grades 3–10' },
  { href: '/australia',   label: 'Australia',      desc: 'ACARA · Years 4–10' },
  { href: '/new-zealand', label: 'New Zealand',    desc: 'NZC · Years 4–10' },
]

function Dropdown({ label, links, extraItem, isActive }: {
  label: string
  links: { href: string; label: string; desc: string }[]
  extraItem?: { href: string; label: string }
  isActive: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close dropdown on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 text-sm cursor-pointer select-none transition-colors ${
          isActive
            ? 'text-brand font-semibold'
            : 'text-gray-500 hover:text-navy'
        }`}
      >
        {label}

        <svg
          className={`w-3 h-3 mt-0.5 transition-transform duration-150 ${open ? 'rotate-180' : ''} ${isActive ? 'text-brand' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 min-w-[220px]">
          {links.map(({ href, label: lbl, desc }) => {
            const isCurrentPage = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex flex-col px-4 py-2.5 transition-colors relative ${
                  isCurrentPage
                    ? 'bg-blue-50'
                    : 'hover:bg-gray-50'
                }`}
              >
                {isCurrentPage && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-brand rounded-r" />
                )}
                <span className={`text-sm font-semibold ${isCurrentPage ? 'text-brand' : 'text-navy'}`}>
                  {lbl}
                </span>
                <span className="text-xs text-gray-400 mt-0.5">{desc}</span>
              </Link>
            )
          })}
          {extraItem && (
            <div className="border-t border-gray-100 mt-1 pt-1">
              <Link
                href={extraItem.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold transition-colors ${
                  pathname === extraItem.href
                    ? 'text-brand bg-blue-50'
                    : 'text-brand hover:bg-blue-50'
                }`}
              >
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
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isFeatures   = pathname.startsWith('/features')
  const isWhy        = pathname.startsWith('/why')
  const isCurricula  = pathname.startsWith('/curricula')
  const isCountries  = ['/uk', '/usa', '/australia', '/new-zealand'].some(p => pathname === p)
  const isPricing    = pathname === '/pricing'
  const isDemo      = pathname === '/live-demo'
  const isBlog       = pathname.startsWith('/blog')

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/evalent-logo.png"
              alt="Evalent"
              width={280}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <Dropdown
              label="Features"
              links={FEATURE_LINKS}
              isActive={isFeatures}
            />
            <Dropdown
              label="Why Evalent"
              links={WHY_LINKS}
              isActive={isWhy}
            />
            <Dropdown
              label="Curricula"
              links={CURRICULA_LINKS}
              isActive={isCurricula}
            />
            <Dropdown
              label="Countries"
              links={SCHOOLS_LINKS}
              isActive={isCountries}
            />
            <Link
              href="/pricing"
              className={`transition-colors ${
                isPricing
                  ? 'text-brand font-semibold'
                  : 'hover:text-navy'
              }`}
            >
              Pricing

            </Link>
            <Link href="/about" className={`transition-colors ${ pathname === '/about' ? 'text-brand font-semibold' : 'hover:text-navy' }`}>About</Link>
          <Link href="/live-demo" className={`transition-colors flex items-center gap-1.5 ${isDemo ? 'text-brand font-semibold' : 'hover:text-navy'}`}>
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live demo
          </Link>
          <a href="https://app.evalent.io/login" className="hover:text-navy transition-colors">Sign in</a>
          </div>

          {/* Try free */}
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
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-2 text-sm max-h-[80vh] overflow-y-auto">
            <Link
              href="/features"
              className={`block font-semibold ${isFeatures ? 'text-brand' : 'text-navy'}`}
            >
              Features
            </Link>
            {FEATURE_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}
              >
                → {label}
              </Link>
            ))}

            <div className={`font-semibold pt-1 ${isWhy ? 'text-brand' : 'text-navy'}`}>
              Why Evalent
            </div>
            {WHY_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}
              >
                → {label}
              </Link>
            ))}

            <Link
              href="/curricula"
              className={`block font-semibold pt-1 ${isCurricula ? 'text-brand' : 'text-navy'}`}
            >
              Curricula
            </Link>
            {CURRICULA_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}
              >
                → {label}
              </Link>
            ))}

            <div className={`font-semibold pt-1 ${isCountries ? 'text-brand' : 'text-navy'}`}>
              Countries
            </div>
            {SCHOOLS_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}
              >
                → {label}
              </Link>
            ))}

            <Link href="/live-demo" className={`block pt-1 transition-colors font-semibold flex items-center gap-1.5 ${isDemo ? 'text-brand' : 'text-gray-900'}`}>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Live demo
            </Link>
            <Link
              href="/blog"
              className={`block pt-1 transition-colors ${isBlog ? 'text-brand font-semibold' : 'text-gray-600'}`}
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className={`block pt-1 transition-colors ${isPricing ? 'text-brand font-semibold' : 'text-gray-600'}`}
            >
              Pricing
            </Link>
            <Link href="/about" className={`block pt-1 transition-colors ${pathname === '/about' ? 'text-brand font-semibold' : 'text-gray-600'}`}>About</Link> <a href="https://app.evalent.io/login" className="block text-gray-600">Sign in</a>
            <button
              onClick={() => { setMenuOpen(false); setTrialOpen(true) }}
              className="block w-full bg-brand text-white font-bold px-4 py-2 rounded-lg text-center mt-2">
              Try free
            </button>
          </div>
        )}
      </nav>

      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
    </>
  )
}
