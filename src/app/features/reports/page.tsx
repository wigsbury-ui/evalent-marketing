'use client'
import { useState } from 'react'
import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportsDemo from '@/components/features/ReportsDemo'
import Link from 'next/link'

export const metadata = {
  title: 'Report Generation | Evalent Features',
  description: 'From assessment submission to a professional, school-branded PDF report in under 5 minutes. Scores, narrative, and recommendation included.',
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const reportItems = [
    'Domain scores: English, Mathematics, Reasoning (% vs your threshold)',
    'Writing band: Excellent / Good / Developing / Emerging / Insufficient with commentary',
    'Evalent recommendation: Ready to admit, Admit with support, Borderline, Not yet ready',
    "Student's actual written responses, verbatim",
    'Mindset and values lens summary',
    'School-branded cover page with student reference',
  ]

  const bands = [
    { band: 'Ready to admit',               cls: 'border-green-300 bg-green-50',   tc: 'text-green-700', icon: '✓', desc: 'All core domains meet your school’s entrance threshold and mindset score is strong. No significant concerns identified.' },
    { band: 'Ready to admit with support',   cls: 'border-blue-200 bg-blue-50',    tc: 'text-blue-700',  icon: '≈', desc: 'Core domains meet threshold but one area suggests the student will benefit from structured academic support in their first term.' },
    { band: 'Borderline: further review',cls: 'border-yellow-200 bg-yellow-50',tc: 'text-yellow-700',icon: '?',     desc: 'One or more domains are below threshold. The report flags which and by how much. An interview or further assessment is recommended.' },
    { band: 'Not yet ready',                  cls: 'border-red-200 bg-red-50',      tc: 'text-red-700',   icon: '✕', desc: 'Multiple domains are significantly below threshold. The report supports a clear, defensible decision with enough detail to explain to families.' },
  ]

  const faqs = [
    ['How long does it take to receive the report after submission?', 'The report is generated automatically within five minutes of the student submitting. Your assessor receives it by email immediately with no manual steps required.'],
    ['What does an Evalent admissions report include?', 'Every report includes domain scores for English, Mathematics, and Reasoning versus your thresholds; writing evaluation with band and commentary; Mindset lens; Motivation and School Fit lens; an AI executive summary; and the student written responses verbatim.'],
    ['What are the Evalent recommendation bands?', 'Evalent uses four bands: Ready to Admit, Admit with Support, Borderline, and Not Yet Ready. Each is calculated against your school entrance thresholds, not national norms.'],
    ['Can entrance thresholds be set differently for each grade?', 'Yes. English, Mathematics, and Reasoning thresholds are configured independently per grade. A Grade 3 entry uses different thresholds from a Grade 10 entry.'],
    ['Can reports be shared with parents?', 'Reports can be shared via a secure time-limited link. They are written in accessible language. Schools should apply their own judgement on what to share with families and when.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 4 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            A report your assessors<br/>
            <span className="text-blue-300">can act on immediately.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Every completed assessment triggers an automatic pipeline that scores, analyses, and formats a professional admissions report, ready in under 5 minutes, without any human involvement.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO — directly under hero */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175800177?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Report Generation"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHAT YOU RECEIVE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Not just scores. A complete admissions picture</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              The Evalent report gives your assessors everything they need to make a confident, defensible decision, with domain-level commentary, the student's actual written responses, and a clear recommendation calibrated to your school's entrance thresholds.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reports are school-branded and look like they came from your institution. This makes them suitable to share with parents when a decision needs to be explained.
            </p>
          </div>
          <div className="space-y-2">
            {reportItems.map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE DEMO</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Watch the pipeline run</h2>
          <p className="text-gray-500 text-sm">Click the button to see the full automated report pipeline from submission to delivery.</p>
        </div>
        <ReportsDemo />
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">RECOMMENDATION BANDS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">What the recommendation means</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Recommendations are calculated against your school&apos;s own thresholds, not national norms.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {bands.map((b) => (
              <div key={b.band} className={`border-2 rounded-2xl p-5 ${b.cls}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-black ${b.tc}`}>{b.icon} {b.band}</span>
                </div>
                <div className="text-xs text-gray-700 leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">&lt;5 min</div><div className="text-sm text-blue-300 mt-1">Submission to report</div></div>
          <div><div className="text-3xl font-black text-white">100%</div><div className="text-sm text-blue-300 mt-1">Automatic</div></div>
          <div><div className="text-3xl font-black text-white">Branded</div><div className="text-sm text-blue-300 mt-1">Every report</div></div>
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
          <Link href="/features/assessment" className="text-gray-400 hover:text-brand text-sm">← The Assessment</Link>
          <Link href="/features/decisions" className="text-brand font-semibold hover:underline text-sm">Next: Decision Workflow →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
