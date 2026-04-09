import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Australian Curriculum — Evalent',
  description: 'Evalent assessments for Australian independent schools use ACARA general capabilities language, Year group labels, and criterion-referenced scoring. Years 4 to 10.',
}

export default function AustralianPage() {
  const grades = [
    ['Year 4',  'ACARA Primary',    '~35 min', '36 items'],
    ['Year 5',  'ACARA Primary',    '~45 min', '44 items'],
    ['Year 6',  'ACARA Primary',    '~50 min', '47 items'],
    ['Year 7',  'ACARA Lower Sec.', '~50 min', '45 items'],
    ['Year 8',  'ACARA Lower Sec.', '~52 min', '48 items'],
    ['Year 9',  'ACARA Lower Sec.', '~55 min', '50 items'],
    ['Year 10', 'ACARA Lower Sec.', '~60 min', '52 items'],
  ]
  const differences = [
    ['ACARA general capabilities language', 'Reports use language aligned to the Australian Curriculum&apos;s general capabilities framework — literacy, numeracy, critical and creative thinking, and personal and social capability — where evidenced in the student&apos;s work.'],
    ['Year group labels throughout', 'Year labels are used throughout — Year 4 to Year 10. Grade labels do not appear anywhere in the assessment or report. Primary and lower secondary framing is applied automatically based on year group.'],
    ['NAPLAN is not a comparison point', 'Evalent is a criterion-referenced admissions assessment, not a population measure. Scores are expressed against your school&apos;s entry thresholds, not national percentiles or NAPLAN bands.'],
    ['Writing evaluated against Australian standards', 'Extended writing tasks are evaluated for task completion, organisation, vocabulary, and accuracy — using language consistent with Australian Curriculum achievement standards at the appropriate year level.'],
    ['Senior pathway readiness at Year 10', 'For Year 10 entry, the report includes academic maturity indicators relevant to ATAR, IB, and IGCSE pathway readiness — giving your admissions team evidence for both the entry decision and initial subject pathway placement.'],
    ['No offshore terminology', 'Key Stage language, SATs references, Common Core, and any UK or US-specific framing are excluded. What you receive reflects Australian schooling norms throughout.'],
  ]
  const faqs = [
    ['What year groups are covered?', 'Year 4 through Year 10. Each year group has its own calibrated question set. Year 3 entry is on the product roadmap.'],
    ['How does Evalent relate to NAPLAN?', 'NAPLAN is a population measure designed to track national performance trends. Evalent is a school-administered criterion-referenced assessment built for entry decisions. They serve different purposes — many schools use both.'],
    ['How does Evalent compare to ACER assessments?', 'ACER provides norm-referenced scholarship ranking. Evalent provides criterion-referenced entry profiling. Many schools use Evalent for general enrolment and ACER specifically for scholarship selection.'],
    ['Is Evalent suitable for boarding school applicants?', 'Particularly well-suited. Boarding applicants often cannot attend assessment days in person. Evalent&apos;s remote-first model means a student in rural Queensland or based overseas completes the same structured assessment as a local day applicant.'],
    ['Can we configure our own thresholds?', 'Yes. Each school sets its own pass thresholds per domain per year group. Evalent reflects your standards, not a national benchmark.'],
    ['Does Evalent use Year or Grade labels?', 'Year labels throughout — Year 4 to Year 10. Grade labels do not appear anywhere in the assessment or the report.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">AUSTRALIAN CURRICULUM</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Australian assessment.<br/>
            <span className="text-blue-300">Australian language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Evalent assessments for Australian schools use ACARA general capabilities language, Year group labels, and criterion-referenced scoring calibrated to your school&apos;s own entry standards — Year 4 to Year 10.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Australian schools need Australian language.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Australian independent schools invest heavily in academic programmes and student outcomes. But the evidence gathered during admissions is often thinner than the data collected in a single semester of student performance. A NAPLAN result tells you where a student ranked nationally two years ago. It does not tell you whether they are ready for your school.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent fills that gap — with a structured, timed assessment that uses Australian Curriculum language, Year group labels, and criterion-referenced scoring against the entry standards your school defines.
            </p>
            <div className="space-y-2">
              {[
                'ACARA general capabilities language in reports',
                'Year group labels throughout — no Grade labels',
                'Criterion-referenced against your thresholds, not NAPLAN bands',
                'Writing evaluated against Australian Curriculum standards',
                'ATAR / IB / IGCSE pathway indicators at Year 10',
                'Suitable for remote and international applicants',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-20">
            <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1175969866?badge=0&autopause=0&player_id=0&app_id=58479"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Evalent — Australian Curriculum"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">Watch this 2-minute walkthrough</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">YEAR GROUP COVERAGE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Year 4 through Year 10</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">YEAR GROUP</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">CURRICULUM BAND</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">DURATION</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map(([yr, band, dur, items], i) => (
                  <tr key={yr} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-xs font-bold text-navy">{yr}</td>
                    <td className="px-5 py-3 text-xs text-gray-600">{band}</td>
                    <td className="px-5 py-3 text-xs text-gray-500">{dur}</td>
                    <td className="px-5 py-3 text-xs text-gray-500">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT&apos;S DIFFERENT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">How the Australian configuration differs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map(([title, desc]) => (
              <div key={title} className="border border-green-100 bg-green-50 rounded-xl p-4">
                <div className="text-xs font-bold text-green-700 mb-1.5">{title}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from Australian schools</h2>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm font-bold text-navy mb-1.5">{q}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-12 px-6 border-t border-green-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/signup" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <Link href="/curricula" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">All curricula →</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/curricula" className="text-gray-400 hover:text-brand text-sm">← All curricula</Link>
          <Link href="/curricula/new-zealand" className="text-brand font-semibold hover:underline text-sm">New Zealand curriculum →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
