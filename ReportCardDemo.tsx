'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Report = {
  id: string
  flag: string
  pill: string
  sub: string
  school: string
  country: string
  language: string
  system: string
  period: string
  trajectory: { label: string; cls: string }
  assessor: string
  holistic: string
  strengths: string[]
  develop: string[]
}

const REPORTS: Report[] = [
  {
    id: 'barcelona',
    flag: '🇪🇸',
    pill: 'Barcelona',
    sub: 'Spanish · Catalan',
    school: "Col·legi Privat Sant Jordi",
    country: 'Spain',
    language: 'Spanish and Catalan',
    system: 'Spanish national curriculum (Catalonia)',
    period: 'Grade 6 · 2nd trimester 2024–25',
    trajectory: { label: 'Consistent', cls: 'bg-green-100 text-green-800' },
    assessor: "Strong performance across most subjects, with exceptional ability in English, Natural Sciences and Visual Arts. Geometry in Mathematics and written Catalan are clear development areas. Collaborative nature and intellectual maturity are positive indicators for IB programme success.",
    holistic: "Bryan achieves 7.6–9.5 out of 10, placing him between Notable and Sobresaliente throughout. The Catalonian grading scale maps reasonably to the IB 1–7 scale — Sobresaliente broadly equivalent to IB 6–7. Teachers describe him as intellectually mature with a natural willingness to support classmates.",
    strengths: ['Exceptional English proficiency (9.5 — Sobresaliente)', 'Visual Arts and Natural Sciences outstanding', 'Intellectually mature, collaborative learner'],
    develop: ['Geometry in Mathematics (7.6 — Bien)', 'Written Catalan expression needs consolidation'],
  },
  {
    id: 'jeddah',
    flag: '🇸🇦',
    pill: 'Jeddah',
    sub: 'Arabic',
    school: 'Al-Noor Islamic School',
    country: 'Saudi Arabia',
    language: 'Arabic',
    system: 'Saudi National Curriculum',
    period: 'Grade 6 · Academic Year 1446 AH / 2024–25',
    trajectory: { label: 'Insufficient data', cls: 'bg-gray-100 text-gray-600' },
    assessor: "Strong overall academic engagement, particularly in languages and Islamic studies. Critically, Bryan's English score of 85/100 was achieved as a foreign language in a fully Arabic-medium school — highly significant context for an English-medium IB environment.",
    holistic: "Bryan achieves exceptional results in Arabic Literacy (92/100) and Islamic Education (95/100). His English as a foreign language score of 85/100 is particularly notable — this proficiency was built without the benefit of an English-medium school environment. Mathematics at 78/100 indicates some gaps in applied problem-solving. Attendance is excellent at 96 of 98 school days.",
    strengths: ['Exceptional Arabic literacy (92/100)', 'Strong English as a foreign language (85/100)', 'Outstanding attendance — 96 of 98 school days'],
    develop: ['Mathematics — applied problem-solving (78/100)', 'Single-semester record — trajectory not yet established'],
  },
  {
    id: 'hiroshima',
    flag: '🇯🇵',
    pill: 'Hiroshima',
    sub: 'Japanese',
    school: 'Hiroshima City Midori-no-Oka Elementary School',
    country: 'Japan',
    language: 'Japanese',
    system: 'Japanese national elementary curriculum',
    period: 'Grade 6 · Semester 2 · Sep 2024 – Mar 2025',
    trajectory: { label: 'Insufficient data', cls: 'bg-gray-100 text-gray-600' },
    assessor: "The Japanese three-point grading scale limits quantitative nuance, but the teacher narrative provides strong qualitative context. Bryan's English pronunciation is specifically praised — notable given English is a foreign language. Mathematics geometry is flagged consistently across all assessment criteria.",
    holistic: "Bryan achieves the highest grade (３) in Japanese Literacy, Science, English and Art — the top tier of his cohort. Mathematics and Social Studies sit at grade 2 (satisfactory) across all criteria. The homeroom teacher specifically notes his caring behaviour toward classmates and self-directed approach to homework.",
    strengths: ['Top grade (３) in Science, English and Art', 'Praised for verbal expression and curiosity', 'Actively supports classmates — noted by teacher'],
    develop: ['Mathematics geometry — grade 2 across all criteria', 'Social Studies — all criteria at satisfactory level'],
  },
  {
    id: 'shanghai',
    flag: '🇨🇳',
    pill: 'Shanghai',
    sub: 'Chinese · English',
    school: 'Shanghai QiZhi Bilingual Academy',
    country: 'China',
    language: 'Chinese and English',
    system: 'Chinese bilingual system with international elements',
    period: 'Grade 6A · Semester 2 · 2024–25',
    trajectory: { label: 'Insufficient data', cls: 'bg-gray-100 text-gray-600' },
    assessor: "Strong bilingual record confirming exceptional English and creative ability. Bryan is described as a natural class leader in English-medium subjects. The bilingual context provides a richer cross-linguistic picture than most Grade 6 records, with Mandarin-medium performance giving a useful additional data point for IB readiness.",
    holistic: "Bryan scores 76–95 across the bilingual programme. English (95/A+) is exceptional — teachers describe him as a class leader who actively supports peers. Visual Arts (93/A+) and Science (91/A+) are outstanding. Mandarin-medium subjects show solid performance: Chinese Language 87/A, History and Culture 84/A. Mathematics (76/B) is his consistent challenge.",
    strengths: ['Exceptional English (95/A+) — natural class leader', 'Visual Arts and Science both A+', 'Strong performance across both language streams'],
    develop: ['Mathematics — geometry and logical reasoning (76/B)', 'Single semester — trajectory not yet established'],
  },
]

export default function ReportCardDemo() {
  const [selected, setSelected] = useState(0)
  const [visible, setVisible] = useState(true)

  function handleSelect(i: number) {
    if (i === selected) return
    setVisible(false)
    setTimeout(() => {
      setSelected(i)
      setVisible(true)
    }, 160)
  }

  const r = REPORTS[selected]

  return (
    <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
            INTERACTIVE DEMO
          </div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">
            Any language. Any format. Returned in English.
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Select a previous school report below to see what Evalent extracts and how it contextualises the information for the admissions panel.
          </p>
        </div>

        {/* Pill selectors */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-8">
          {REPORTS.map((rep, i) => (
            <button
              key={rep.id}
              onClick={() => handleSelect(i)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-150 focus:outline-none ${
                i === selected
                  ? 'bg-navy border-navy text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
              }`}
            >
              <span className="text-base leading-none">{rep.flag}</span>
              {rep.pill}
              <span className={`text-xs font-normal ${i === selected ? 'text-blue-200' : 'text-gray-400'}`}>
                {rep.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Main panel */}
        <div
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          style={{ transition: 'opacity 160ms ease, transform 160ms ease', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
        >
          {/* Chrome bar */}
          <div className="bg-navy px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-500 opacity-60" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 opacity-70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
              <span className="ml-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">Evalent — Previous School Reports</span>
            </div>
            <span className="text-xs text-blue-300 font-medium">
              Guzman Bryan &nbsp;·&nbsp; {r.language}
            </span>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 divide-x divide-gray-100">

            {/* Left — report card image */}
            <div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Original report card</span>
              </div>
              <div className="p-3 bg-gray-50 overflow-y-auto" style={{ maxHeight: '580px' }}>
                <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src={`/report-demos/${r.id}.jpg`}
                    alt={`School report from ${r.school}`}
                    width={1120}
                    height={1583}
                    className="w-full h-auto"
                    priority={selected === 0}
                  />
                </div>
                <p className="text-center text-xs text-gray-400 mt-2 pb-1 leading-snug">{r.school} · {r.country}</p>
              </div>
            </div>

            {/* Right — Evalent analysis */}
            <div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Evalent analysis</span>
              </div>
              <div className="p-5 overflow-y-auto" style={{ maxHeight: '580px' }}>

                {/* Trajectory */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${r.trajectory.cls}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {r.trajectory.label}
                </span>

                {/* Document metadata */}
                <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
                  <div className="bg-navy px-4 py-2">
                    <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">Document reviewed</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
                    {[
                      { l: 'School', v: r.school },
                      { l: 'Country', v: r.country },
                      { l: 'Language', v: r.language },
                      { l: 'Educational system', v: r.system },
                    ].map(item => (
                      <div key={item.l} className="px-3 py-2.5">
                        <div className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-0.5">{item.l}</div>
                        <div className="text-xs font-semibold text-gray-800 leading-snug">{item.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessor note */}
                <div className="mb-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1 h-3.5 rounded-full bg-brand flex-shrink-0" />
                    <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Assessor note</span>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-brand rounded-r-xl px-4 py-3 text-xs text-blue-900 leading-relaxed">
                    {r.assessor}
                  </div>
                </div>

                {/* Holistic summary */}
                <div className="mt-4 mb-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1 h-3.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Holistic summary</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.holistic}</p>
                </div>

                {/* Insights */}
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="w-1 h-3.5 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Key insights</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {r.strengths.map(s => (
                      <span key={s} className="inline-flex items-center gap-1 text-[11px] font-medium bg-green-50 text-green-800 border border-green-100 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {r.develop.map(s => (
                      <span key={s} className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-100 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Demo reports are synthetic examples generated for illustration purposes. Evalent supports PDF school reports in any language from any country.
        </p>
      </div>
    </section>
  )
}
