import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Evalent for Australian Independent Schools',
  description: 'Admissions assessment software built for Australian independent and private schools. ACARA-aligned reports. Structured evidence for every admissions decision from Year 4.',
}

export default function Page() {
  const challenges = [
    { title: 'NAPLAN is a population measure, not an admissions tool', desc: 'NAPLAN results arrive late, measure a narrow band of skills, and were never designed for school-to-school entry decisions. Many Australian independent schools have no structured alternative for assessing candidates who have not yet sat NAPLAN.' },
    { title: 'Mid-year and out-of-cycle enrolments are hard to assess', desc: 'A family arriving from interstate or overseas cannot sit a scheduled assessment day. Evalent sends a link — the student completes it from wherever they are, within a 72-hour window.' },
    { title: 'International enrolments require a comparable baseline', desc: 'Australian independent schools attract families from Southeast Asia, the Middle East, and Europe. Comparing an application from Singapore to one from regional New South Wales requires a common assessment — which Evalent provides.' },
    { title: 'Scholarship assessment is resource-intensive', desc: 'Most Australian private schools run scholarship programmes with significant logistical overhead. Evalent streamlines the first-pass assessment so your scholarship committee focuses on the shortlist.' },
  ]

  const differences = [
    ['ACARA general capabilities', 'Reports reference the Australian Curriculum’s seven general capabilities, familiar to any Australian educator.'],
    ['Year labels throughout', 'The platform uses Australian Year group naming. Year 4, Year 7, Year 10 — not Grade labels.'],
    ['Primary / secondary framing', 'Foundation–Year 6 and Years 7–10 are assessed and reported with different expectations, consistent with the ACARA band structure.'],
    ['Proficiency strand language', 'Maths reports reference ACARA’s four proficiency strands: understanding, fluency, problem-solving, and reasoning.'],
    ['No UK or US terminology', 'Key Stage, SATs, Common Core, and GCSE language are explicitly excluded. Your assessors see reports written for an Australian context.'],
    ['Remote-first design', 'Australia’s geography makes remote assessment essential. Evalent was built for secure, unsupervised completion on any device, anywhere.'],
  ]

  const faqs = [
    ['Can we use Evalent alongside ACER scholarship tests?', 'Yes. ACER provides norm-referenced scholarship ranking; Evalent provides criterion-referenced entry profiling. Many schools use Evalent for general enrolment and ACER specifically for scholarship selection.'],
    ['Is Evalent suitable for boarding school applicants?', 'Particularly well-suited. Boarding applicants often cannot attend assessment days in person. Evalent’s remote-first model means a student in rural Queensland or based in Singapore completes the same assessment as a local day applicant.'],
    ['What year groups are covered?', 'Year 4 through Year 10. Year 3 entry is on the roadmap.'],
    ['Can we configure our own entry thresholds?', 'Yes. Each school sets its own pass thresholds per domain per year group.'],
    ['Does Evalent cover senior secondary pathway readiness?', 'For Year 10 entry, the report includes academic maturity indicators relevant to ATAR, IB, and IGCSE pathway readiness.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Admissions assessment<br/>
            <span className="text-blue-300">built for Australian independent schools.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed max-w-xl mx-auto mb-2">
            ACARA-aligned reports from Year 4 to Year 10. Structured evidence for local and international applicants alike — delivered in under 5 minutes.
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
              src="https://player.vimeo.com/video/1175613244?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — How it works"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE AUSTRALIAN CONTEXT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Australia’s independent schools are geographically spread and globally connected. Assessment needs to match.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Australian independent and private schools face a specific combination of challenges: a highly mobile domestic population, significant international enrolment, large geographic catchments, and increasing family expectation that the admissions process reflects the school’s academic standards.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Evalent is built for this context. A family relocating from Melbourne to Brisbane can complete the assessment from their current address. A student applying from Singapore receives the same structured experience as a local applicant. Every report uses Australian curriculum language and Year group labels throughout.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The result: a consistent, professional, and fully documented assessment process that works regardless of where your applicants are coming from.
            </p>
          </div>
          <div className="space-y-3">
            {challenges.map((c) => (
              <div key={c.title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"/>
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
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">BUILT FOR AUSTRALIAN SCHOOLS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What makes Evalent right for Australian independent schools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map((d) => (
              <div key={d[0]} className="border border-green-200 bg-green-50 rounded-xl p-4">
                <div className="text-xs font-bold text-green-700 mb-1.5">{d[0]}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{d[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">Y4–10</div><div className="text-sm text-blue-300 mt-1">Year groups covered</div></div>
          <div><div className="text-3xl font-black text-white">Any device</div><div className="text-sm text-blue-300 mt-1">Remote-first design</div></div>
          <div><div className="text-3xl font-black text-white">ACARA</div><div className="text-sm text-blue-300 mt-1">Curriculum-aligned throughout</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from Australian independent schools</h2>
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
            <a href="/#trial" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <a href="mailto:hello@evalent.io" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">Talk to us</a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/usa" className="text-gray-400 hover:text-brand text-sm">← USA</Link>
          <Link href="/new-zealand" className="text-brand font-semibold hover:underline text-sm">New Zealand →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
