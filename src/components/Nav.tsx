'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import TrialModal from './TrialModal'
import {
  UserPlus, LayoutDashboard, ClipboardList, FileText,
  CheckSquare, TrendingUp, Users, Sparkles, Heart,
  Eye, Shield, Zap, Lock, Target, Star, Briefcase, type LucideIcon,
} from 'lucide-react'

interface NavLink {
  href: string
  label: string
  desc: string
  icon?: LucideIcon
}

const FEATURE_LINKS: NavLink[] = [
  { href: '/features/registration', label: 'Student Registration',  desc: 'Register students and configure your school',      icon: UserPlus },
  { href: '/features/dashboard',    label: 'Assessment Dashboard',  desc: 'Track every applicant in real time',               icon: LayoutDashboard },
  { href: '/features/assessment',   label: 'The Assessment',        desc: 'What students experience',                         icon: ClipboardList },
  { href: '/features/reports',      label: 'Report Generation',     desc: 'From submission to PDF in minutes',                icon: FileText },
  { href: '/features/decisions',    label: 'Decision Workflow',     desc: 'One-click decisions from your inbox',              icon: CheckSquare },
  { href: '/features/strategy',     label: 'Strategy & Enrolment', desc: 'Live enrolment KPIs and Evalent grade signals',         icon: TrendingUp },
  { href: '/features/team',         label: 'Team Management',       desc: 'Role-based access for your whole team',            icon: Users },
]

const WHY_LINKS: NavLink[] = [
  { href: '/why/evaluation',    label: 'Intelligent Evaluation', desc: 'Evalent-powered, rubric-based scoring',              icon: Sparkles },
  { href: '/why/wellbeing',     label: 'Student Wellbeing',      desc: 'Calm, supported assessment experience',         icon: Heart },
  { href: '/why/transparency',  label: 'Transparency',           desc: 'Full audit trail, every decision documented',   icon: Eye },
  { href: '/why/defensibility', label: 'Defensibility',          desc: 'Evidence-based, accreditation-ready records',   icon: Shield },
  { href: '/why/conversion',    label: 'Conversion & Speed',     desc: 'Faster decisions, higher yield',                icon: Zap },
  { href: '/why/data-security',    label: 'Data Security',            desc: 'UAE and GDPR-aligned · student data protected',       icon: Lock },
  { href: '/why/decision-making',  label: 'Informed Decision Making', desc: 'Intelligence for leaders and governors',         icon: Target },
  { href: '/why/operational-benefits', label: 'Operational Benefits', desc: 'Smooth admissions through summer — automated, remote, zero staffing dependency', icon: Briefcase },
  { href: '/why/fit-and-motivation', label: 'Motivation & School Fit',           desc: 'Authentic motivation and school-fit signals from every applicant', icon: Star },
]

const CURRICULA_LINKS: NavLink[] = [
  { href: '/curricula/ib',          label: 'IB',          desc: 'PYP & MYP · Grades 3–10' },
  { href: '/curricula/british',     label: 'British',     desc: 'KS2, KS3 & KS4 · Years 4–11' },
  { href: '/curricula/american',    label: 'American',    desc: 'Common Core · Grades 3–10' },
  { href: '/curricula/australian',  label: 'Australian',  desc: 'ACARA · Years 4–10' },
  { href: '/curricula/new-zealand', label: 'New Zealand', desc: 'NZC · Years 4–10' },
]

const SCHOOLS_LINKS: NavLink[] = [
  { href: '/uk',            label: 'United Kingdom',        desc: 'British National Curriculum · Years 4–11' },
  { href: '/usa',           label: 'United States',         desc: 'Common Core · Grades 3–10' },
  { href: '/international', label: 'International Schools', desc: 'All curricula · Global campuses' },
  { href: '/australia',     label: 'Australia',             desc: 'ACARA · Years 4–10' },
  { href: '/new-zealand',   label: 'New Zealand',           desc: 'NZC · Years 4–10' },
]

function Dropdown({ label, links, extraItem, isActive, columns = 2 }: {
  label: string
  links: NavLink[]
  extraItem?: { href: string; label: string }
  isActive: boolean
  columns?: number
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const hasIcons = links.some(l => l.icon)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 text-sm cursor-pointer select-none transition-colors ${
          isActive ? 'text-brand font-semibold' : 'text-gray-500 hover:text-navy'
        }`}
      >
        {label}
        <svg className={`w-3 h-3 mt-0.5 transition-transform duration-150 ${open ? 'rotate-180' : ''} ${isActive ? 'text-brand' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-3 ${
          columns === 3 ? (hasIcons ? 'min-w-[740px]' : 'min-w-[520px]') : (hasIcons ? 'min-w-[560px]' : 'min-w-[340px]')
        }`}>
          <div className={`grid gap-0.5 px-2 ${columns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {links.map(({ href, label: lbl, desc, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-start gap-3 px-3 py-3 rounded-lg transition-colors ${
                    active ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-brand rounded-r" />
                  )}
                  {Icon && (
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      active ? 'bg-brand' : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-4 w-4 ${active ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                  )}
                  <div className="min-w-0">
                    <span className={`block text-sm font-semibold leading-tight ${active ? 'text-brand' : 'text-navy'}`}>
                      {lbl}
                    </span>
                    <span className="block text-xs text-gray-400 mt-0.5 leading-relaxed">{desc}</span>
                  </div>
                </Link>
              )
            })}
          </div>
          {extraItem && (
            <div className="border-t border-gray-100 mt-2 pt-1 mx-2">
              <Link
                href={extraItem.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  pathname === extraItem.href ? 'text-brand bg-blue-50' : 'text-brand hover:bg-blue-50'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [trialOpen, setTrialOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isFeatures  = pathname.startsWith('/features')
  const isWhy       = pathname.startsWith('/why')
  const isCurricula = pathname.startsWith('/curricula')
  const isCountries = ['/uk', '/usa', '/australia', '/new-zealand', '/international'].some(p => pathname === p)
  const isPricing   = pathname === '/pricing'
  const isBlog      = pathname.startsWith('/blog')

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/evalent-logo.png" alt="Evalent" width={280} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <Dropdown label="Features"    links={FEATURE_LINKS}  isActive={isFeatures}  columns={3} />
            <Dropdown label="Why Evalent" links={WHY_LINKS}       isActive={isWhy}       columns={3} />
            <Dropdown label="Curricula"   links={CURRICULA_LINKS} isActive={isCurricula} columns={3} />
            <Dropdown label="Regions"     links={SCHOOLS_LINKS}   isActive={isCountries} columns={3} />
            <Link href="/pricing" className={`transition-colors ${isPricing ? 'text-brand font-semibold' : 'hover:text-navy'}`}>
              Pricing
            </Link>
            <a href="https://app.evalent.io/login" className="hover:text-navy transition-colors">Sign in</a>
          </div>

          {/* Try free */}
          <button onClick={() => setTrialOpen(true)}
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
            <Link href="/features" className={`block font-semibold ${isFeatures ? 'text-brand' : 'text-navy'}`}>Features</Link>
            {FEATURE_LINKS.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}
                className={`flex items-center gap-2 pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}>
                {Icon && <Icon className="h-3.5 w-3.5 flex-shrink-0" />}
                {label}
              </Link>
            ))}
            <div className={`font-semibold pt-1 ${isWhy ? 'text-brand' : 'text-navy'}`}>Why Evalent</div>
            {WHY_LINKS.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}
                className={`flex items-center gap-2 pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}>
                {Icon && <Icon className="h-3.5 w-3.5 flex-shrink-0" />}
                {label}
              </Link>
            ))}
            <Link href="/curricula" className={`block font-semibold pt-1 ${isCurricula ? 'text-brand' : 'text-navy'}`}>Curricula</Link>
            {CURRICULA_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}>
                → {label}
              </Link>
            ))}
            <div className={`font-semibold pt-1 ${isCountries ? 'text-brand' : 'text-navy'}`}>Countries</div>
            {SCHOOLS_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`block pl-3 transition-colors ${pathname === href ? 'text-brand font-medium' : 'text-gray-500'}`}>
                → {label}
              </Link>
            ))}
            <Link href="/blog" className={`block pt-1 transition-colors ${isBlog ? 'text-brand font-semibold' : 'text-gray-600'}`}>Blog</Link>
            <Link href="/pricing" className={`block pt-1 transition-colors ${isPricing ? 'text-brand font-semibold' : 'text-gray-600'}`}>Pricing</Link>
            <a href="https://app.evalent.io/login" className="block text-gray-600">Sign in</a>
            <button onClick={() => { setMenuOpen(false); setTrialOpen(true) }}
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
