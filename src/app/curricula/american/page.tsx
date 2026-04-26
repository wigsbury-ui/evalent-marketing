import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FaqAccordion from '@/components/features/FaqAccordion'
import CtaTrialButton from '@/components/CtaTrialButton'

export const metadata = {
  title: 'American Curriculum | Evalent',
  description: 'Evalent assessments calibrated for the American curriculum. Common Core-aligned. Thesis-driven. AP/honours pathway readiness at Grade 9–10.',
}

export default function AmericanPage() {
  const grades = [
    ['Grade 3', 'Elementary', '~25 min', '24 items'],
    ['Grade 4', 'Elementary', '~35 min', '36 items'],
    ['Grade 5', 'Elementary', '~45 min', '44 items'],
    ['Grade 6', 'Middle School', '~50 min', '47 items'],
    ['Grade 7', 'Middle School', '~50 min', '45 items'],
    ['Grade 8', 'Middle School', '~52 min', '48 items'],
    ['Grade 9', 'High School', '~55 min', '50 items'],
    ['Grade 10','High School', '~60 min', '52 items'],
  ]

  const differences = [
    ['Common Core alignment', 'Questions and evaluation criteria are mapped to Common Core ELA and Math standards. Grade-level benchmarks use CCSS language explicitly, so commentary is familiar to American-trained educators.'],
    ['Thesis-driven writing', 'American writing instruction emphasises a clear thesis statement, supporting body paragraphs, and a synthesising conclusion. Evalent’s evaluation reflects this structure and rewards it explicitly.'],
    ['School level framing', 'Reports distinguish between elementary (G3–5), middle school (G6–8), and high school (G9–10) expectations. The language shift across levels matches how American educators think about student progression.'],
    ['AP/honors readiness (G9–10)', 'At high school entry, commentary includes explicit indicators of readiness for advanced placement or honours courses, a significant data point for selective American curriculum schools.'],
    ['Text-based evidence', 'Close reading and evidence-based argument are central to American ELA instruction. Writing evaluation specifically assesses whether the student grounds their argument in specific, cited examples.'],
  ]

  const faqs = [
    ['Do American schools outside the US use Evalent?', 'Yes. American curriculum schools in the Middle East, Asia-Pacific, and Latin America are well represented in our user base. Selective entry is common in these markets.'],
    ['Is this aligned to Common Core or state standards?', 'Evalent uses Common Core as the primary reference, which is the most widely adopted framework. State-specific standards (Texas TEKS, Virginia SOLs, etc.) are broadly consistent with CCSS at the grade levels we cover.'],
    ['What does AP readiness look like in a report?', 'At Grade 9–10 entry, the commentary includes a section on academic independence and analytical writing quality, with a statement on whether the profile is consistent with a student likely to benefit from AP/IB or honors tracking.'],
    ['Can we use Evalent for both American and IB students?', 'Yes. Multi-curriculum accounts are supported. You select the curriculum when registering each student, so students on different programmes are assessed and reported appropriately.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">AMERICAN CURRICULUM</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            American standards.<br/>
            <span className="text-blue-300">American language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Common Core-aligned evaluation, thesis-driven writing assessment, and AP/honours pathway readiness indicators at Grade 9–10, calibrated to how American educators actually think about student progression.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">American educators speak a different professional language. Reports should reflect that.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              American curriculum schools, whether in Chicago, Dubai, or Singapore, share a common set of expectations around how students should write, argue, and demonstrate subject knowledge. A report that uses British Key Stage language or IB Learner Profile attributes signals to an American-trained head of admissions that the tool wasn’t designed for their context.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent’s American configuration was developed with American curriculum practitioners. It reflects how Common Core ELA and Math standards describe grade-level readiness, and how American schools communicate about student potential.
            </p>
            <div className="space-y-2">
              {['Common Core ELA and Math alignment', 'Thesis-body-conclusion essay framing', 'Elementary / Middle / High school level language', 'Close reading and text-based evidence assessed', 'AP and honours readiness indicators at G9–10', 'College and career readiness framing'].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-indigo-600 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-20">
            <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175778182?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | American Curriculum"
            />
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">Watch this 2-minute walkthrough</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">GRADE COVERAGE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Grade 3 through Grade 10</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">GRADE</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">SCHOOL LEVEL</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">DURATION</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map(([grade, level, dur, items], i) => (
                  <tr key={grade} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-xs font-bold text-navy">{grade}</td>
                    <td className="px-5 py-3 text-xs text-gray-600">{level}</td>
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
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT&apos;S DIFFERENT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">How the American configuration differs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map(([title, desc]) => (
              <div key={title} className="border border-indigo-100 bg-indigo-50 rounded-xl p-4">
                <div className="text-xs font-bold text-indigo-700 mb-1.5">{title}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">8</div><div className="text-sm text-blue-300 mt-1">Grade levels covered</div></div>
          <div><div className="text-3xl font-black text-white">Common Core</div><div className="text-sm text-blue-300 mt-1">Standards-aligned</div></div>
          <div><div className="text-3xl font-black text-white">AP</div><div className="text-sm text-blue-300 mt-1">Readiness indicated at G9–10</div></div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />

      <section className="bg-indigo-50 py-12 px-6 border-t border-indigo-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Ready to try Evalent for your American school?</h2>
          <p className="text-gray-600 text-sm mb-6">10 free trial reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <CtaTrialButton />
            <Link href="/curricula/ib" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">IB curriculum →</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/curricula/british" className="text-gray-400 hover:text-brand text-sm">← British curriculum</Link>
          <Link href="/curricula" className="text-brand font-semibold hover:underline text-sm">All curricula →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
