import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'New Zealand Curriculum — Evalent',
  description: 'Evalent assessments for New Zealand independent schools use NZC key competency language, curriculum levels, and a values-informed mindset section. Years 4 to 10.',
}

export default function NZCPage() {
  const grades = [
    ['Year 4',  'NZC Level 2', '~35 min', '36 items'],
    ['Year 5',  'NZC Level 3', '~45 min', '44 items'],
    ['Year 6',  'NZC Level 3', '~50 min', '47 items'],
    ['Year 7',  'NZC Level 4', '~50 min', '45 items'],
    ['Year 8',  'NZC Level 4', '~52 min', '48 items'],
    ['Year 9',  'NZC Level 5', '~55 min', '50 items'],
    ['Year 10', 'NZC Level 5', '~60 min', '52 items'],
  ]

  const differences = [
    ['Key competency language in reports', 'The five NZC key competencies — Thinking; Using Language, Symbols and Texts; Managing Self; Relating to Others; Participating and Contributing — are referenced in the written commentary where genuinely evidenced in the student\'s work.'],
    ['NZC curriculum level framing', 'Assessment and reporting is structured around NZC curriculum levels rather than year-group attainment targets. Levels 2 through 5 are covered, mapping automatically to the appropriate year group.'],
    ['Writing evaluated through an NZC lens', 'Extended writing tasks are evaluated for clarity of thinking, purposeful use of language, and the capacity to structure and present ideas — the qualities the NZC describes as central to literate, capable learners.'],
    ['Values-informed mindset section', 'The Mindset section draws on the NZC\'s eight values — excellence, innovation, inquiry, curiosity, diversity, equity, community, and integrity — providing a structured lens on the kind of learner you are welcoming into your school.'],
    ['Asset-focused, growth-oriented tone', 'Reports describe what the student demonstrates and where further development is possible — reflecting the NZC\'s vision of confident, connected, actively involved, and lifelong learners.'],
    ['No offshore terminology', 'Key Stage language, SATs references, NAPLAN framing, Common Core, and ACARA terminology are excluded. Reports use Year labels throughout and reflect New Zealand schooling norms.'],
  ]

  const faqs = [
    ['What year groups are covered?', 'Year 4 through Year 10. Each year group has its own calibrated question set mapped to the appropriate NZC curriculum level. Year 3 entry is on the product roadmap.'],
    ['How does the NZC level mapping work?', 'Year 4 maps to NZC Level 2, Years 5–6 to Level 3, Years 7–8 to Level 4, and Years 9–10 to Level 5. The assessment content and report language reflect the appropriate level automatically.'],
    ['Can we use Evalent for international students applying to NZ schools?', 'Yes. The assessment link can be sent to any email address worldwide. Students complete it on any device, making it well-suited for families applying from overseas or from other regions of New Zealand.'],
    ['Is there a national admissions standard Evalent aligns to?', 'New Zealand has no national independent school admissions standard. Evalent provides the structured, documented assessment record that individual schools need to make consistent, evidenced decisions against their own entry criteria.'],
    ['Can we set our own entry thresholds?', 'Yes. You configure your school\'s entrance thresholds by year group and by domain. Evalent reflects your standards, not a national benchmark.'],
    ['Does Evalent use Year or Grade labels?', 'Year labels throughout — Year 4 to Year 10. Grade labels do not appear anywhere in the assessment or report.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">NEW ZEALAND CURRICULUM</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            NZC assessment.<br/>
            <span className="text-blue-300">In NZC language.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Evalent assessments for New Zealand schools use key competency language, NZC curriculum levels, and a values-informed mindset section — from Year 4 to Year 10.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">New Zealand schools need New Zealand language.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The New Zealand Curriculum is built around a vision of young people who are confident, connected, actively involved, and lifelong learners. Most admissions assessment tools were built to measure academic performance against a narrow content syllabus — which is not what the NZC is about, and not what New Zealand independent schools are looking for.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent assesses the domains your school cares about — English, Mathematics, and Reasoning — but frames evaluation and reporting through an NZC lens. Your team will recognise the language. Your applicants experience an assessment that reflects the values of the school they are applying to.
            </p>
            <div className="space-y-2">
              {[
                'Key competency language in written commentary',
                'NZC curriculum level framing (Levels 2–5)',
                'Writing evaluated for thinking and language use',
                'Values-informed mindset section (8 NZC values)',
                'Asset-focused, growth-oriented report tone',
                'Year labels throughout — no Grade labels',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
                    <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175969395?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — New Zealand Curriculum"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 2-minute walkthrough</p>
          </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100">
                <div className="text-xl font-black text-navy">5</div>
                <div className="text-xs text-gray-500 mt-0.5">Key competencies</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100">
                <div className="text-xl font-black text-navy">8</div>
                <div className="text-xs text-gray-500 mt-0.5">NZC values referenced</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100">
                <div className="text-xl font-black text-navy">&lt;5 min</div>
                <div className="text-xs text-gray-500 mt-0.5">Report delivery</div>
              </div>
            </div>
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
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">NZC LEVEL</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">DURATION</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold tracking-widest">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map(([yr, level, dur, items], i) => (
                  <tr key={yr} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 text-xs font-bold text-navy">{yr}</td>
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
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT&apos;S DIFFERENT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">How the NZC configuration differs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map(([title, desc]) => (
              <div key={title} className="border border-teal-100 bg-teal-50 rounded-xl p-4">
                <div className="text-xs font-bold text-teal-700 mb-1.5">{title}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from New Zealand schools</h2>
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

      <section className="bg-teal-50 py-12 px-6 border-t border-teal-100 text-center">
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
          <Link href="/australia" className="text-brand font-semibold hover:underline text-sm">Australian schools →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
