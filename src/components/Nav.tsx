'use client'
import Link from 'next/link'
import { useState } from 'react'

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
  { href: '/uk',          label: 'United Kingdom',  desc: 'British National Curriculum · Years 4–11' },
  { href: '/usa',         label: 'United States',   desc: 'Common Core · Grades 3–10' },
  { href: '/australia',   label: 'Australia',       desc: 'ACARA · Years 4–10' },
  { href: '/new-zealand', label: 'New Zealand',     desc: 'NZC · Years 4–10' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [featOpen, setFeatOpen]     = useState(false)
  const [curricOpen, setCurricOpen] = useState(false)
  const [schoolsOpen, setSchoolsOpen] = useState(false)

  const Chevron = () => (
    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tight text-navy">
          EVAL<span className="text-brand italic">ENT</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">

          {/* Features */}
          <div className="relative" onMouseEnter={() => setFeatOpen(true)} onMouseLeave={() => setFeatOpen(false)}>
            <Link href="/features" className="hover:text-navy transition-colors flex items-center gap-1">
              Features <Chevron />
            </Link>
            {featOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                {FEATURE_LINKS.map(({ href, label, desc }) => (
                  <Link key={href} href={href} className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-navy">{label}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{desc}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link href="/features" className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-brand hover:bg-blue-50 transition-colors">All features →</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/demo" className="hover:text-navy transition-colors font-semibold text-brand">See Evalent in action</Link>

          {/* Curricula */}
          <div className="relative" onMouseEnter={() => setCurricOpen(true)} onMouseLeave={() => setCurricOpen(false)}>
            <Link href="/curricula" className="hover:text-navy transition-colors flex items-center gap-1">
              Curricula <Chevron />
            </Link>
            {curricOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                {CURRICULA_LINKS.map(({ href, label, desc }) => (
                  <Link key={href} href={href} className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-navy">{label}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{desc}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link href="/curricula" className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-brand hover:bg-blue-50 transition-colors">All curricula →</Link>
                </div>
              </div>
            )}
          </div>

          {/* Schools by country */}
          <div className="relative" onMouseEnter={() => setSchoolsOpen(true)} onMouseLeave={() => setSchoolsOpen(false)}>
            <button className="hover:text-navy transition-colors flex items-center gap-1 text-sm text-gray-500">
              Schools <Chevron />
            </button>
            {schoolsOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                <div className="px-4 py-2 text-[10px] font-bold text-gray-400 tracking-widest border-b border-gray-100 mb-1">BY COUNTRY</div>
                {SCHOOLS_LINKS.map(({ href, label, desc }) => (
                  <Link key={href} href={href} className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-navy">{label}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className="hover:text-navy transition-colors">Pricing</Link>
          <a href="https://app.evalent.io/login" className="hover:text-navy transition-colors">Sign in</a>
        </div>

        <a href="#trial" className="hidden md:inline-flex bg-brand text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors">Try free</a>

        <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
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
          <div className="block font-semibold text-navy pt-1">Schools</div>
          {SCHOOLS_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="block pl-3 text-gray-500">→ {label}</Link>
          ))}
          <Link href="/pricing" className="block text-gray-600 pt-1">Pricing</Link>
          <a href="https://app.evalent.io/login" className="block text-gray-600">Sign in</a>
          <a href="#trial" className="block bg-brand text-white font-bold px-4 py-2 rounded-lg text-center mt-2">Try free</a>
        </div>
      )}
    </nav>
  )
}
