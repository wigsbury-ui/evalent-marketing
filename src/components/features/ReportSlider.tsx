'use client'
import { useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    title: 'Instant recommendation with full evidence',
    description: "The cover leads with a clear recommendation — Ready to admit, Borderline, or Not yet ready — backed by an AI executive summary and a radar chart plotting all four domains against your school's thresholds.",
    img: '/report_slide_1.jpg',
    annotations: [
      { x: 50, y: 11.5, label: 'Recommendation band', text: 'Generated automatically from scores and thresholds — consistent across every applicant.' },
      { x: 50, y: 25.7, label: 'AI executive summary', text: "2–3 paragraph narrative written specifically for this student's profile. Not a template." },
      { x: 50, y: 54.4, label: 'Radar chart', text: 'Four domains plotted against your thresholds. Student score vs. threshold visible at a glance.' },
      { x: 26, y: 86.3, label: 'Strengths & development', text: "Auto-generated bullet points from the student's actual scores and written responses." },
    ],
  },
  {
    title: 'Academic summary with bar chart breakdown',
    description: 'Page 2 gives a quick-read overview — overall score, bar chart comparing each domain against threshold, and a snapshot table with MCQ scores, writing bands, delta, and plain-English comments.',
    img: '/report_slide_2.jpg',
    annotations: [
      { x: 50, y: 12.4, label: 'Overall academic score', text: 'Weighted combination of all domain scores, calculated to one decimal place.' },
      { x: 44, y: 31.9, label: 'Domain bar chart', text: 'Blue = student score. Green = school threshold. Red bar flags below-threshold performance.' },
      { x: 25, y: 51.3, label: 'Domain snapshot table', text: 'MCQ score, writing band, combined score, and a plain-English comment for each domain.' },
    ],
  },
  {
    title: 'Deep domain analysis — English',
    description: "Each domain gets its own page. English shows MCQ score, writing band, sub-skill breakdown bars, AI MCQ analysis, writing evaluation, and the student's verbatim written response.",
    img: '/report_slide_3.jpg',
    annotations: [
      { x: 82.5, y: 13.3, label: 'Score summary', text: 'MCQ, writing band, and combined score side by side for instant comparison.' },
      { x: 54, y: 27.9, label: 'Sub-skill breakdown', text: 'Bars show reading comprehension, grammar, and inference against the threshold line.' },
      { x: 20, y: 43.4, label: 'AI narrative', text: "Generated from this student's specific answers — not generic boilerplate." },
      { x: 50, y: 76.1, label: "Student's own words", text: 'Verbatim written response. Assessors see exactly what the student produced under timed conditions.' },
    ],
  },
  {
    title: 'Mathematics — granular sub-skill data',
    description: 'The maths page shows where gaps actually are. Sub-skill bars break performance into number & algebra, geometry, and statistics — so a low overall score is properly understood.',
    img: '/report_slide_4.jpg',
    annotations: [
      { x: 82.5, y: 13.3, label: 'Below-threshold flag', text: 'Combined score shown in red when below threshold — immediately visible to the assessor.' },
      { x: 54, y: 29.2, label: 'Sub-skill bars', text: 'Green = above threshold. Red = well below. Statistics at 25% is the critical gap here.' },
      { x: 20, y: 46, label: 'Specific diagnosis', text: 'Identifies exactly which question types were missed — not just a percentage.' },
    ],
  },
  {
    title: 'Mindset lens — the full picture',
    description: "The final page surfaces the student's growth mindset orientation. Contextual data that doesn't gate an admission, but gives assessors something no academic score can: how this student approaches challenge.",
    img: '/report_slide_7.jpg',
    annotations: [
      { x: 50, y: 13.7, label: 'Mindset score', text: 'Scored 0–4 from a 10-item inventory. Shown with a labelled progress bar.' },
      { x: 20, y: 35.4, label: 'Contextual narrative', text: 'Explains what the score means for this specific student — with a recommendation for the panel.' },
      { x: 20, y: 61.9, label: 'How-to-read guide', text: 'Built into every report so any member of the admissions team can interpret results confidently.' },
    ],
  },
]

type Annotation = { x: number; y: number; label: string; text: string }
type Slide = { title: string; description: string; img: string; annotations: Annotation[] }

export default function ReportSlider() {
  const [current, setCurrent] = useState(0)
  const [activePin, setActivePin] = useState(-1)

  const slide: Slide = SLIDES[current]

  function go(idx: number) {
    setCurrent(idx)
    setActivePin(-1)
  }

  return (
    <section className="py-16 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">SAMPLE REPORT</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">See exactly what your assessors receive.</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Every Evalent report is generated within minutes of submission — structured, evidence-based, and ready for decision.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-10 items-start">

          {/* Left — report image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <div className="relative w-full" style={{ aspectRatio: '800/1130' }}>
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover transition-opacity duration-200"
                sizes="(max-width: 900px) 100vw, 60vw"
                priority={current === 0}
              />
              {/* Triangle arrows on the LEFT edge of the image, vertically aligned to each annotation */}
              {slide.annotations.map((ann, i) => (
                <button
                  key={i}
                  onClick={() => setActivePin(activePin === i ? -1 : i)}
                  aria-label={ann.label}
                  className="absolute transition-all z-10 flex items-center"
                  style={{ left: 0, top: `${ann.y}%`, transform: 'translateY(-50%)' }}
                >
                  {/* Right-pointing triangle */}
                  <div style={{
                    width: 0,
                    height: 0,
                    borderTop: activePin === i ? '12px solid transparent' : '10px solid transparent',
                    borderBottom: activePin === i ? '12px solid transparent' : '10px solid transparent',
                    borderLeft: activePin === i ? '16px solid #002ec1' : '13px solid #4b5563',
                    transition: 'all 0.15s',
                    flexShrink: 0,
                  }} />
                  {/* Number label — only when active */}
                  {activePin === i && (
                    <span style={{
                      marginLeft: '4px',
                      background: '#002ec1',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 800,
                      lineHeight: 1,
                      padding: '2px 5px',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                    }}>
                      {i + 1}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — info panel */}
          <div className="md:sticky md:top-8">
            <div className="h-1 bg-gray-200 rounded-full mb-5 overflow-hidden">
              <div
                className="h-full bg-[#002ec1] rounded-full transition-all duration-300"
                style={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
              />
            </div>

            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
              {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-black text-navy mb-3 leading-tight">{slide.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{slide.description}</p>

            <div className="flex flex-col gap-2 mb-6">
              {slide.annotations.map((ann, i) => (
                <button
                  key={i}
                  onClick={() => setActivePin(activePin === i ? -1 : i)}
                  className={`flex gap-3 items-start p-3 rounded-xl border text-left transition-all ${activePin === i ? 'border-[#002ec1] bg-blue-50 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <span className={`w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${activePin === i ? 'bg-[#002ec1]' : 'bg-[#4b5563]'}`}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">
                    <strong className="block text-xs font-bold text-navy uppercase tracking-wide mb-0.5">{ann.label}</strong>
                    {ann.text}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => go(Math.max(0, current - 1))}
                disabled={current === 0}
                className="w-9 h-9 rounded-full border-2 border-gray-200 text-gray-500 hover:border-navy hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-lg"
              >
                &#8592;
              </button>
              <div className="flex gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-2 rounded-full transition-all ${i === current ? 'w-5 bg-[#002ec1]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(Math.min(SLIDES.length - 1, current + 1))}
                disabled={current === SLIDES.length - 1}
                className="w-9 h-9 rounded-full border-2 border-gray-200 text-gray-500 hover:border-navy hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-lg"
              >
                &#8594;
              </button>
            </div>

            <a
              href="/Evalent_Sample_Report_Lilli_Smith_Grade4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-5 bg-[#002ec1] hover:bg-[#07112e] text-white font-bold text-sm rounded-xl transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download full sample report
              <span className="text-blue-200 font-normal text-xs">PDF &middot; 7 pages</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
