import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Evalent for UK Independent Schools',
  description: 'Admissions assessment software built for UK independent schools. Structured, evidence-based reports aligned to the British National Curriculum. 10 free reports to start.',
}

export default function Page() {
  const challenges = [
    { title: 'Assessors are classroom teachers with full timetables', desc: 'Most UK prep and senior schools rely on heads of year or subject leads to review applications. These are experienced professionals, but they are not full-time admissions staff. Every hour spent reviewing a thin application file is an hour taken from teaching.' },
    { title: 'CE and scholarship papers are not entry-level tools', desc: 'Common Entrance serves a specific pathway. For non-CE entry, or for prep school admissions at Year 3–6, there is no equivalent standard. Schools either use ad hoc tests or rely entirely on school reports and interviews.' },
    { title: 'Parental expectation of rigour is rising', desc: 'Families paying independent school fees expect a professional admissions process. An assessment that arrives as a handwritten paper or a generic online quiz does not signal the standards the school markets itself on.' },
    { title: 'Supporting evidence for difficult decisions', desc: 'When a borderline candidate is declined, schools need more than a hunch. A structured written record of the assessment and recommendation protects the school and gives something concrete to communicate to families.' },
  ]

  const differences = [
    ['KS2, KS3 and KS4 language', 'Reports use Key Stage attainment framing throughout. A Year 6 entry report reads differently from a Year 9 one.'],
    ['Year labels, not Grade labels', 'The platform uses Year groups automatically when set to British curriculum. Your assessors see Year 7, Year 8 — not Grade 7.'],
    ['PEE writing framework', 'Extended writing is evaluated against Point-Evidence-Explanation structure, the standard your English department teaches.'],
    ['Formal register assessment', 'British independent schools expect formal academic register. Evalent marks informal register as a development area.'],
    ['IGCSE pathway indicators at KS4', 'For Year 10 and Year 11 entry, the report includes readiness indicators for GCSE and IGCSE-level demands.'],
    ['No CE overlap', 'Evalent is not a CE preparation tool. It is a pre-entry assessment that works alongside or instead of CE.'],
  ]

  const faqs = [
    ['Do UK independent schools actually use this?', 'Yes. Prep schools and senior schools both use Evalent for entry at Year 3 through Year 11. It is particularly useful for mid-year entry, sixth form feeder assessment, and schools that do not sit Common Entrance.'],
    ['Can we use Evalent alongside our existing interview process?', 'Absolutely. Most schools use Evalent as a structured first stage before interview. The report gives the interviewer something concrete to explore rather than going in blind.'],
    ['Is the assessment supervised or unsupervised?', 'Evalent is designed as a secure, remote assessment. The student takes it at home or at school via a unique link. Question order is randomised to reduce sharing. Schools can choose to invigilate if preferred.'],
    ['What year groups are covered?', 'Year 4 through Year 11. Year 3 entry is on the roadmap.'],
    ['How does Evalent handle SEND candidates?', 'Extended time and other reasonable adjustments can be configured per student in the dashboard before the assessment link is sent.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Admissions assessment<br/>
            <span className="text-blue-300">built for UK independent schools.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed max-w-xl mx-auto mb-2">
            Structured, evidence-based reports aligned to the British National Curriculum. Year 4 to Year 11 — in under 5 minutes per candidate.
          </p>

          <div className="mt-6">
            <HeroTrialButton />
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto mb-10">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175621446?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — How it works"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE UK INDEPENDENT SCHOOL CONTEXT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Most UK independent schools are assessing on instinct. Evalent gives you evidence.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The UK independent sector is academically rigorous and professionally run — but admissions is often its weakest administrative process. Schools that would never accept a vague marking scheme in the classroom routinely make entry decisions on the basis of a brief written paper, a school report from a source they cannot verify, and a 20-minute interview.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Evalent does not replace the interview. It replaces the thin paper test that precedes it. Every candidate completes a structured, timed assessment covering English, Mathematics, Reasoning and Mindset. The platform scores it automatically, evaluates the extended writing with AI, and delivers a professional report to your assessor — typically within 5 minutes of submission.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The result is a defensible, documented assessment profile for every candidate, produced without any additional burden on your teaching staff.
            </p>
          </div>
          <div className="space-y-3">
            {challenges.map((c) => (
              <div key={c.title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-1.5"/>
                <div>
                  <div className="text-xs font-bold text-navy mb-1">{c.title}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">BUILT FOR BRITISH SCHOOLS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What makes Evalent right for UK independent schools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map((d) => (
              <div key={d[0]} className="border border-red-100 bg-red-50 rounded-xl p-4">
                <div className="text-xs font-bold text-red-700 mb-1.5">{d[0]}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{d[1]}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/curricula/british" className="text-brand text-sm font-semibold hover:underline">
              Full details: how Evalent handles the British curriculum →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">Y4–Y11</div><div className="text-sm text-blue-300 mt-1">Year groups covered</div></div>
          <div><div className="text-3xl font-black text-white">&lt;5 min</div><div className="text-sm text-blue-300 mt-1">From submission to report</div></div>
          <div><div className="text-3xl font-black text-white">0</div><div className="text-sm text-blue-300 mt-1">Extra burden on teaching staff</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">HOW IT FITS YOUR PROCESS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Where Evalent fits in a typical UK admissions timeline</h2>
            <div className="space-y-3">
              {[
                ['Application received', 'Family submits enquiry or application form to your registrar.'],
                ['Evalent link sent', 'Registrar registers the student in Evalent. Secure assessment link sent automatically. Takes under 60 seconds.'],
                ['Student completes assessment', 'At home or at school, on any device. 25–60 minutes depending on year group.'],
                ['Report delivered', 'Your assessor receives the full report by email within 5 minutes of submission. No login required.'],
                ['Interview', 'Interviewer reviews the Evalent report in advance. Has specific areas to explore. Goes in prepared.'],
                ['Decision recorded', 'One-click decision from the email. Audit trail created automatically.'],
              ].map(([step, desc], i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <div className="text-xs font-bold text-navy">{step}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">COMMON QUESTIONS</div>
            <div className="space-y-3">
              {faqs.map(([q, a]) => (
                <div key={q} className="border border-gray-200 rounded-xl p-4">
                  <div className="text-sm font-bold text-navy mb-1.5">{q}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-12 px-6 border-t border-red-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">No credit card. No contract. Set up in 5 minutes. Use with real candidates from day one.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <a href="mailto:hello@evalent.io" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">Talk to us</a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/curricula/british" className="text-gray-400 hover:text-brand text-sm">← British curriculum</Link>
          <Link href="/usa" className="text-brand font-semibold hover:underline text-sm">USA →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
