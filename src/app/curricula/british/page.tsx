import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'British Curriculum — Evalent',
  description: 'Evalent assessments calibrated for the British National Curriculum. KS2, KS3 and KS4 attainment language. Formal register throughout.',
}

export default function BritishPage() {
  const grades = [
    ['Year 4',  'KS2', '~35 min', '36 items'],
    ['Year 5',  'KS2', '~45 min', '44 items'],
    ['Year 6',  'KS2', '~50 min', '47 items'],
    ['Year 7',  'KS3', '~50 min', '45 items'],
    ['Year 8',  'KS3', '~52 min', '48 items'],
    ['Year 9',  'KS3', '~55 min', '50 items'],
    ['Year 10', 'KS4', '~60 min', '52 items'],
    ['Year 11', 'KS4', '~60 min', '52 items'],
  ]

  const differences = [
    ['KS attainment language', 'Reports reference Key Stage attainment targets precisely — KS2 age-related expectations, KS3 disciplinary thinking, KS4 GCSE/IGCSE readiness. No IB or American terminology bleeds in.'],
    ['PEE writing framing', 'Extended writing is evaluated against Point-Evidence-Explanation structure, which is the standard taught framework in British schools. Commentary reflects this explicitly.'],
    ['Formal register expectation', 'British schools expect formal academic register. Evalent’s British evaluation marks informal register as a development area rather than simply a stylistic choice.'],
    ['IGCSE pathway (Y10–11)', 'At KS4, commentary includes IGCSE and GCSE pathway readiness indicators. This is particularly useful for schools whose Year 11 entry feeds directly into external examinations.'],
    ['British spelling', 'Reports use British English spelling throughout (organisation, behaviour, fulfil, etc.) — consistent with the school’s own communication to families.'],
  ]

  const faqs = [
    ['Do British schools in the UAE use Evalent?', 'Yes. British curriculum schools are the largest single group of Evalent users. The UAE, Qatar, Malaysia, and East Africa are the most active markets.'],
    ['Do you cover Year 3 (the equivalent of Grade 3)?', 'Year 4 is our current starting point for British schools. Year 3 entry assessment is on the roadmap.'],
    ['Does Evalent support IGCSE-specific questions?', 'The assessment at KS4 level is calibrated to IGCSE readiness expectations, but is not itself a practice IGCSE paper. It assesses readiness, not content knowledge of specific subjects.'],
    ['What does the grade label look like in the report?', 'British schools are shown Year labels throughout — Year 7, Year 8, etc. — rather than Grade labels. This is configured when you set your school’s curriculum to British.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">BRITISH NATIONAL CURRICULUM</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            British standards.<br/>
            <span className="text-blue-300">British language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Evalent’s British configuration uses Key Stage attainment language, PEE writing framing, and formal register expectations — from KS2 primary entry through to KS4 GCSE pathway.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Your assessors speak British English. So should the reports.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              British curriculum schools — whether in the UK, UAE, Malaysia, or Africa — share a common professional vocabulary. Reports that use American terminology or IB language signal that the evaluation tool doesn’t understand the context it’s operating in.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent’s British configuration was built with heads of admissions at independent British schools. It uses the language your senior leadership team uses in conversation, and the language parents who have chosen a British education expect to see.
            </p>
            <div className="space-y-2">
              {['Key Stage attainment language throughout', 'PEE writing framework in evaluation', 'Formal academic register assessed', 'IGCSE readiness indicators at KS4', 'British spelling throughout', 'Year labels, not Grade labels'].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-navy rounded-2xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-[#002ec1] opacity-90" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="relative text-center z-10">
                <div className="w-16 h-16 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="text-white font-bold text-sm mb-1">British Curriculum Overview</div>
                <div className="text-blue-300 text-xs">2 min walkthrough</div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-gray-400">Video walkthrough coming soon</div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">YEAR GROUP COVERAGE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Year 4 through Year 11</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">YEAR GROUP</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">KEY STAGE</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">DURATION</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map(([yr, ks, dur, items], i) => (
                  <tr key={yr} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-xs font-bold text-navy">{yr}</td>
                    <td className="px-5 py-3 text-xs text-gray-600">{ks}</td>
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
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT&apos;S DIFFERENT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">How the British configuration differs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map(([title, desc]) => (
              <div key={title} className="border border-red-100 bg-red-50 rounded-xl p-4">
                <div className="text-xs font-bold text-red-700 mb-1.5">{title}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">8</div><div className="text-sm text-blue-300 mt-1">Year groups covered</div></div>
          <div><div className="text-3xl font-black text-white">KS2–KS4</div><div className="text-sm text-blue-300 mt-1">Three Key Stages</div></div>
          <div><div className="text-3xl font-black text-white">Year</div><div className="text-sm text-blue-300 mt-1">Labels, not Grades</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from British schools</h2>
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

      <section className="bg-red-50 py-12 px-6 border-t border-red-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Ready to try Evalent for your British school?</h2>
          <p className="text-gray-600 text-sm mb-6">10 free trial reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <Link href="/curricula/american" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">American curriculum →</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/curricula/ib" className="text-gray-400 hover:text-brand text-sm">← IB curriculum</Link>
          <Link href="/curricula/american" className="text-brand font-semibold hover:underline text-sm">American curriculum →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
