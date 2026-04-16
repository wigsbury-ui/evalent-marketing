import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'IB Curriculum | Evalent',
  description: 'Evalent assessments are fully calibrated for the International Baccalaureate. PYP language for Grades 3–5, MYP language for Grades 6–10.',
}

export default function IBPage() {
  const grades = [
    ['Grade 3', 'PYP', '~25 min', '24 items'],
    ['Grade 4', 'PYP', '~35 min', '36 items'],
    ['Grade 5', 'PYP', '~45 min', '44 items'],
    ['Grade 6', 'MYP Year 1', '~50 min', '47 items'],
    ['Grade 7', 'MYP Year 2', '~50 min', '45 items'],
    ['Grade 8', 'MYP Year 3', '~52 min', '48 items'],
    ['Grade 9', 'MYP Year 4', '~55 min', '50 items'],
    ['Grade 10','MYP Year 5', '~60 min', '52 items'],
  ]

  const differences = [
    ['Learner Profile language', 'Reports reference IB Learner Profile attributes including Inquirer, Thinker, Communicator, Principled, Reflective and others — where genuinely evidenced in the student’s writing.'],
    ['PYP framing (G3–5)', 'Younger students are assessed with transdisciplinary language, five essential elements, and Units of Inquiry framing. Attainment is described holistically, not against national Key Stage targets.'],
    ['MYP framing (G6–10)', 'Older students are assessed against ATL skill clusters (thinking, communication, self-management, research, social), MYP global contexts, and criterion-referenced expectations.'],
    ['Evaluation tone', 'IB reports are warm, asset-focused, and growth-oriented, reflecting the IB’s emphasis on the whole learner. Commentary never uses deficit language.'],
    ['No leakage', 'British Key Stage language, SATs references, and American Common Core terminology are explicitly excluded from IB reports. What you receive is programme-pure.'],
  ]

  const faqs = [
    ['Does Evalent cover both PYP and MYP?', 'Yes. Grades 3–5 use PYP framing; Grades 6–10 use MYP framing. The transition is automatic based on the grade selected at registration.'],
    ['What about the DP (Diploma Programme)?', 'Evalent currently covers entry up to Grade 10 (MYP Year 5). DP entry assessment (Grade 11 entry) is on the roadmap.'],
    ['Do IB schools in the Middle East use Evalent?', 'Yes. The platform is particularly common in UAE, Qatar, Singapore, and Hong Kong — markets where IB entry is competitive and assessment rigour is expected.'],
    ['Can we set our own IB-specific thresholds?', 'Yes. You configure your school’s entrance threshold per domain per grade. Evalent recommends starting at 55% and adjusting based on your cohort data.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">INTERNATIONAL BACCALAUREATE</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            IB assessment.<br/>
            <span className="text-blue-300">In IB language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Evalent assessments for IB schools use Learner Profile attributes, ATL skill clusters, and programme-appropriate language at every grade level — PYP for Grades 3–5, MYP for Grades 6–10.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">IB admissions require IB thinking</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              International Baccalaureate schools attract families who have specifically chosen an inquiry-based, internationally-minded education. When your admissions report uses the language of your programme — not generic schooling language — it signals to families and assessors that the evaluation is grounded in the values of the school they are applying to.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent’s IB configuration was developed with input from IB practitioners. The writing evaluation specifically looks for evidence of the traits your programme develops: self-directedness, intellectual risk-taking, balanced argumentation, and reflective awareness.
            </p>
            <div className="space-y-2">
              {['Learner Profile attributes referenced in commentary', 'PYP transdisciplinary framing at primary level', 'MYP criterion-referenced language at secondary level', 'ATL skill clusters identified in writing evaluation', 'Growth-oriented, asset-focused report tone', 'Zero Key Stage / SATs / GCSE language'].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-20">
            <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175778276?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | IB Curriculum"
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
            <h2 className="text-2xl font-black text-navy tracking-tight">All IB entry grades covered</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">GRADE</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">IB PROGRAMME</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">DURATION</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map(([grade, prog, dur, items], i) => (
                  <tr key={grade} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-xs font-bold text-navy">{grade}</td>
                    <td className="px-5 py-3 text-xs text-gray-600">{prog}</td>
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT&apos;S DIFFERENT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">How the IB configuration differs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map(([title, desc]) => (
              <div key={title} className="border border-blue-100 bg-blue-50 rounded-xl p-4">
                <div className="text-xs font-bold text-blue-700 mb-1.5">{title}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">8</div><div className="text-sm text-blue-300 mt-1">IB grade levels covered</div></div>
          <div><div className="text-3xl font-black text-white">PYP + MYP</div><div className="text-sm text-blue-300 mt-1">Both programmes supported</div></div>
          <div><div className="text-3xl font-black text-white">10</div><div className="text-sm text-blue-300 mt-1">Learner Profile attributes</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from IB schools</h2>
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

      <section className="bg-blue-50 py-12 px-6 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Ready to try Evalent for your IB school?</h2>
          <p className="text-gray-600 text-sm mb-6">10 free trial reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <Link href="/curricula/british" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">British curriculum →</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/curricula" className="text-gray-400 hover:text-brand text-sm">← All curricula</Link>
          <Link href="/curricula/british" className="text-brand font-semibold hover:underline text-sm">British curriculum →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
