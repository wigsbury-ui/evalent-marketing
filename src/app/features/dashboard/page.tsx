'use client'
import { useState } from 'react'
import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DashboardDemo from '@/components/features/DashboardDemo'
import Link from 'next/link'

export const metadata = {
  title: 'Assessment Dashboard | Evalent Features',
  description: 'Track every applicant in real time. See who has completed, who is in progress, and who needs a nudge, all from one screen.',
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const features = [
    { label: 'Live updates', desc: 'Status changes instantly on completion' },
    { label: 'Score breakdown', desc: 'English, Maths, Reasoning per student' },
    { label: 'Recommendation', desc: 'Ready to admit, support, waitlist' },
    { label: 'Full report', desc: 'One click from dashboard to PDF' },
  ]

  const statuses = [
    { status: 'Registered',    cls: 'bg-gray-100 text-gray-600',    dot: 'bg-gray-400',     desc: 'Student added to the system. Assessment link not yet sent.' },
    { status: 'Link sent',     cls: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-500',   desc: 'The secure link has been emailed. Evalent monitors for completion and sends reminders.' },
    { status: 'In progress',   cls: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500',     desc: 'The student has opened the link and begun the assessment. The timer is running.' },
    { status: 'Complete',      cls: 'bg-green-100 text-green-700',  dot: 'bg-green-500',    desc: 'Assessment submitted. Scores calculated. Report generated and sent to the assessor.' },
    { status: 'Expired',       cls: 'bg-red-100 text-red-600',      dot: 'bg-red-400',      desc: 'The 72-hour link has expired without completion. You are notified and can extend or proceed.' },
    { status: 'Decision made', cls: 'bg-purple-100 text-purple-700',dot: 'bg-purple-500',   desc: 'The assessor has recorded their decision. The record is final and audit-logged.' },
  ]

  const faqs = [
    ['How quickly does the dashboard update after a student completes?', 'Instantly. Domain scores, the writing band, and the Evalent recommendation appear on the dashboard within seconds of the student submitting.'],
    ['Can I filter applicants by grade, status, or curriculum?', 'Yes. The dashboard can be filtered by grade, curriculum, and pipeline status, useful for schools running assessments across multiple entry grades simultaneously.'],
    ['Can multiple team members access the dashboard?', 'Yes. All authorised users on your school account have dashboard access, governed by their assigned role group and permission settings.'],
    ['Can I export applicant data from the dashboard?', 'Yes. CSV export is available covering all registered applicants with their current status, domain scores, and decisions.'],
    ['What happens when an assessment link expires without completion?', 'The student status updates to Expired on the dashboard and you are notified. You can send a new link from the admin panel at any time.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 2 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Every applicant.<br/>
            <span className="text-blue-300">One screen. Real time.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Your dashboard shows every registered applicant, their current status, their domain scores, and your school&apos;s recommendation, updating automatically as assessments complete.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO — directly under hero */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175796126?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Assessment Dashboard"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE COMMAND CENTRE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Know where every applicant stands, without asking</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Tracking twenty or thirty applicants traditionally means chasing emails, updating spreadsheets, and asking colleagues whether they've seen a result. Evalent replaces all of that with a single automatically updated dashboard.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The moment an applicant completes their assessment, their scores appear. The moment an assessor records a decision, the recommendation updates. Nothing is manual. Nothing falls through the gaps.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.label} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                <div className="text-xs font-bold text-navy mb-0.5">{f.label}</div>
                <div className="text-xs text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE DEMO</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Your dashboard, right now</h2>
          <p className="text-gray-500 text-sm">Click any row to highlight it. This is the real interface your team will use.</p>
        </div>
        <DashboardDemo />
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">STATUS GUIDE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What each status means</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {statuses.map((s) => (
              <div key={s.status} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${s.cls}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />{s.status}
                </span>
                <span className="text-xs text-gray-600 leading-relaxed">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">Live</div><div className="text-sm text-blue-300 mt-1">Automatic updates</div></div>
          <div><div className="text-3xl font-black text-white">6</div><div className="text-sm text-blue-300 mt-1">Applicant statuses tracked</div></div>
          <div><div className="text-3xl font-black text-white">0</div><div className="text-sm text-blue-300 mt-1">Spreadsheets needed</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-navy text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-semibold text-navy flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  {q}
                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/registration" className="text-gray-400 hover:text-brand text-sm">← Student Registration</Link>
          <Link href="/features/assessment" className="text-brand font-semibold hover:underline text-sm">Next: The Assessment →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
