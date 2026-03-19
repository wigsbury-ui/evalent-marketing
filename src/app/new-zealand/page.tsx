import Nav from '@/components/Nav'
import CountryNav from '@/components/CountryNav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Evalent for New Zealand Independent Schools',
  description: 'Admissions assessment software built for New Zealand independent and private schools. NZC-aligned reports using key competencies and values framing.',
}

export default function Page() {
  const challenges = [
    { title: 'No national admissions assessment standard', desc: 'New Zealand has no equivalent to Common Entrance or SSAT. Each independent school designs its own admissions process. Evalent gives you a structured, consistent assessment that is immediately credible to families and professionally documented for governance purposes.' },
    { title: 'The NZC is competency-based, not content-based', desc: 'Generic assessment tools built for British or American curricula fail to reflect the inquiry-based, competency-oriented philosophy of New Zealand schooling. Evalent’s NZC configuration uses the language of the key competencies and the values the curriculum names explicitly.' },
    { title: 'Families are making significant financial commitments', desc: 'New Zealand independent school fees represent a substantial family investment. These families expect the school’s admissions process to match the quality of the education they are paying for. A rigorous, professional assessment signals that standard.' },
    { title: 'International enrolments need a consistent baseline', desc: 'New Zealand independent schools attract families from Asia, the Pacific, and further afield. A student applying from Hong Kong, South Korea, or the UK can complete the same Evalent assessment as a local applicant, on any device, from anywhere.' },
  ]

  const differences = [
    ['NZC key competencies', 'Reports reference all five key competencies: thinking; using language, symbols and texts; managing self; relating to others; and participating and contributing.'],
    ['NZC values framing', 'The mindset and values elements draw on the eight NZC values: excellence, innovation, diversity, equity, community, ecological sustainability, integrity, and respect.'],
    ['Year labels and level mapping', 'Year group naming and NZC curriculum level mapping throughout. No Grade labels, no Key Stage references.'],
    ['Mana-enhancing language', 'Evalent’s NZC evaluation approach is asset-focused and mana-enhancing — describing what the student can do and where growth is possible.'],
    ['No deficit framing', 'Reports do not describe students as failing or below standard. They describe evidence of capability and areas for further development, consistent with New Zealand’s holistic assessment philosophy.'],
    ['Student agency', 'The mindset section assesses readiness to engage as an active, self-directed learner — a quality the NZC places at the centre of its vision for the educated New Zealander.'],
  ]

  const faqs = [
    ['Which New Zealand schools is Evalent suited to?', 'State-integrated and fully independent schools from Year 4 entry upward. Particularly used by schools with selective entry, boarding programmes, and schools attracting international students.'],
    ['How does Evalent relate to the NZC?', 'Evalent is an admissions assessment tool built to be consistent with the NZC’s values, language, and philosophy. It is not a curriculum delivery tool.'],
    ['What year groups are covered?', 'Year 4 through Year 10. Year 3 entry is on the roadmap.'],
    ['Can we use Evalent for overseas applicants?', 'Yes. The assessment is delivered via a secure link that can be sent to any email address in any country. The student completes it on any device within a 72-hour window.'],
    ['Does Evalent support te reo Māori?', 'Not yet. English-medium assessment only at this stage. Te reo Māori support is on the product roadmap.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />
      <CountryNav />

      <section className="bg-navy py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Admissions assessment<br/>
            <span className="text-blue-300">built for New Zealand independent schools.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed max-w-xl mx-auto mb-2">
            NZC-aligned reports using key competency and values framing. Structured, mana-enhancing assessment from Year 4 to Year 10 — for local and international applicants alike.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1164569992?badge=0&autopause=0&player_id=0&app_id=58479"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Evalent — How it works"
              />
            </div>
          </div>
          <div className="mt-6">
            <HeroTrialButton />
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE NEW ZEALAND CONTEXT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">New Zealand schools value the whole child. Evalent’s reports reflect that.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The New Zealand Curriculum is built around a vision of young people who are confident, connected, actively involved, and lifelong learners. Most admissions assessment tools were built to measure academic performance against a narrow content syllabus — which is not what the NZC is about, and not what New Zealand independent schools are looking for.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Evalent’s New Zealand configuration assesses the academic domains your school cares about — English, Mathematics, Reasoning — but does so through an NZC lens. The writing evaluation assesses the qualities the NZC describes: clarity of thinking, purposeful use of language, and capacity to structure and present ideas.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The mindset and values section draws explicitly on the NZC’s eight values, providing a structured, documented lens on the kind of learner you are welcoming into your school community.
            </p>
          </div>
          <div className="space-y-3">
            {challenges.map((c) => (
              <div key={c.title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-1.5"/>
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
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">BUILT FOR NEW ZEALAND SCHOOLS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What makes Evalent right for New Zealand independent schools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map((d) => (
              <div key={d[0]} className="border border-teal-200 bg-teal-50 rounded-xl p-4">
                <div className="text-xs font-bold text-teal-700 mb-1.5">{d[0]}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{d[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">Y4–10</div><div className="text-sm text-blue-300 mt-1">Year groups covered</div></div>
          <div><div className="text-3xl font-black text-white">5</div><div className="text-sm text-blue-300 mt-1">Key competencies referenced</div></div>
          <div><div className="text-3xl font-black text-white">NZC</div><div className="text-sm text-blue-300 mt-1">Values and language throughout</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from New Zealand independent schools</h2>
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
            <a href="/#trial" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <a href="mailto:hello@evalent.io" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">Talk to us</a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/australia" className="text-gray-400 hover:text-brand text-sm">← Australia</Link>
          <Link href="/curricula" className="text-brand font-semibold hover:underline text-sm">All curricula →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
