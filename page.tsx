import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FaqAccordion from '@/components/features/FaqAccordion'

export const metadata = {
  title: 'Report Card Evaluation | Evalent Features',
  description: 'Upload previous school reports in any language. Evalent analyses them, verifies the student name, and adds a structured appendix to the admissions report. Files are never stored.',
}

export default function Page() {
  const features = [
    'Reports in any language — Arabic, Mandarin, French, Spanish and 90+ others',
    'Automatic name verification with transliteration and romanisation support',
    'Extracts holistic summary, subject breakdown, teacher observations, and trajectory',
    'Cross-referenced with Evalent assessment score in the executive summary',
    'Files processed in memory and immediately discarded — never stored',
    'Up to 3 documents per student · PDF format · Max 4MB each',
  ]

  const extracted = [
    { label: 'Holistic summary', desc: 'Academic narrative across all years covered' },
    { label: 'English & Literacy', desc: 'Performance trend and teacher observations' },
    { label: 'Mathematics', desc: 'Performance trend and progression notes' },
    { label: 'Other subjects', desc: 'Sciences, humanities, languages, arts' },
    { label: 'Teacher observations', desc: 'Qualitative comments on character and approach' },
    { label: 'Trajectory', desc: 'Improving · Consistent · Declining · Mixed' },
    { label: 'Name match', desc: 'Confirmed · Probable · Uncertain · Not found' },
    { label: 'Languages detected', desc: 'Original document language(s) noted' },
  ]

  const faqs: [string, string][] = [
    ['Which file formats are supported?', 'PDF only. Most school reports and transcripts are available in PDF format. If your document is in another format, converting it to PDF takes seconds.'],
    ['Can Evalent read reports in Arabic, Mandarin, French, or Spanish?', 'Yes. Evalent reads documents in any language — Arabic, Mandarin, French, Spanish, and 90+ others. The full analysis is returned in English regardless of the document language. The detected language is noted in the report appendix.'],
    ['What happens if the student name in the uploaded report does not match?', 'Evalent checks automatically, accounting for transliteration differences (Mohammed/Muhammad), romanisation variations, surname-first ordering, and abbreviations. If confidence is uncertain or the name is not found, a warning is displayed. The analysis is still saved — it is a flag for the admissions panel, not a block.'],
    ['Are the uploaded files stored by Evalent?', 'No. Files are processed entirely in memory and discarded immediately afterwards. Nothing is written to disk or retained. Only the AI-generated text summary is saved to the student record — not the original documents.'],
    ['Does the school report evaluation affect the recommendation band?', 'No. The recommendation band is determined solely by Evalent assessment scores against your school thresholds. The school report analysis is contextual — it cross-references with the executive summary but does not override the recommendation.'],
    ['Which plans include this feature?', 'Professional, Enterprise, and Trial plans. It is not available on the Essentials plan.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 6 OF 9</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Previous school reports,<br/>
            <span className="text-blue-300">read in any language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Upload previous school reports in any language or format. Evalent analyses them, verifies the student name, and adds a structured appendix to the admissions report — without ever storing the files.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* Intro two-col */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHAT IT DOES</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Context from the student&apos;s current school, built into the report.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              After registering a student, upload their previous school reports directly from the registration page. Evalent reads the documents — in any language — extracts structured academic intelligence, and adds a two-page appendix to the Evalent admissions report.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              The executive summary on the report cover page cross-references school report findings with the Evalent assessment score. If a student&apos;s prior academic performance is inconsistent with their assessment result, the panel is told. If it confirms it, that is noted too.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Files are processed in memory and discarded immediately. No documents are written to storage. Only the AI-generated summary is saved — giving schools full GDPR compliance and zero document-retention risk.
            </p>
          </div>
          <div className="space-y-2">
            {features.map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-step flow + extracted data */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">HOW IT WORKS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Three steps from PDF to panel-ready insight</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">The entire process takes under 60 seconds from upload to analysis complete.</p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
              </div>
              <h3 className="font-black text-navy mb-2">1. Upload</h3>
              <p className="text-sm text-gray-500 leading-relaxed">After registering a student, upload up to 3 PDF school reports. Any language, any school format, any country.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="font-black text-navy mb-2">2. Analyse</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Evalent reads the documents in their original language, extracts structured academic evidence, and verifies the student name.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="font-black text-navy mb-2">3. Included in report</h3>
              <p className="text-sm text-gray-500 leading-relaxed">A two-page appendix is added to the Evalent admissions report. The executive summary cross-references findings with assessment scores.</p>
            </div>
          </div>

          {/* Extracted data grid */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="font-black text-navy text-lg mb-1">What Evalent extracts from each document</h3>
              <p className="text-sm text-gray-500">Every field appears as structured text in the report appendix.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {extracted.map(item => (
                <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <div className="text-xs font-bold text-navy mb-0.5">{item.label}</div>
                  <div className="text-xs text-gray-400 leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What appears in the report */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">IN THE EVALENT REPORT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Two new pages added to every report with uploaded documents</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">The school report appendix sits after the Mindset page at the end of the admissions report.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-100 bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <span className="font-black text-navy">Page 1 — Previous School Reports</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-brand font-bold mt-0.5">·</span>Documents reviewed, languages detected, years covered</li>
                <li className="flex items-start gap-2"><span className="text-brand font-bold mt-0.5">·</span>Trajectory pill: Improving / Consistent / Declining / Mixed</li>
                <li className="flex items-start gap-2"><span className="text-brand font-bold mt-0.5">·</span>Assessor note — contextual synthesis for the admissions panel</li>
                <li className="flex items-start gap-2"><span className="text-brand font-bold mt-0.5">·</span>Holistic summary — academic narrative across all years</li>
                <li className="flex items-start gap-2"><span className="text-brand font-bold mt-0.5">·</span>Teacher observations — qualitative evidence on character and approach</li>
              </ul>
            </div>
            <div className="border-2 border-indigo-100 bg-indigo-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <span className="font-black text-navy">Page 2 — Subject Analysis</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">·</span>English &amp; Literacy — trajectory, observations, specific strengths</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">·</span>Mathematics — performance trajectory and progression notes</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">·</span>Other subjects — sciences, humanities, languages, arts</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">·</span>Written in English regardless of original document language</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">·</span>Structured for professional admissions use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">90+</div><div className="text-sm text-blue-300 mt-1">Languages supported</div></div>
          <div><div className="text-3xl font-black text-white">0</div><div className="text-sm text-blue-300 mt-1">Files stored</div></div>
          <div><div className="text-3xl font-black text-white">3</div><div className="text-sm text-blue-300 mt-1">Documents per student</div></div>
          <div><div className="text-3xl font-black text-white">Auto</div><div className="text-sm text-blue-300 mt-1">Name verification</div></div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/reports" className="text-gray-400 hover:text-brand text-sm">← Report Generation</Link>
          <Link href="/features/decisions" className="text-brand font-semibold hover:underline text-sm">Next: Decision Workflow →</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
