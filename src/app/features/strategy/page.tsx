import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Strategy & Enrolment Planning — Evalent Features',
  description: 'See your school\'s complete enrolment picture in real time. Six live KPI metrics, Evalent-generated grade signals, and board-ready executive reports.',
}

export default function Page() {
  const features = [
    { label: 'Six live KPIs',           desc: 'Fill rate, retention, new entrants, gap to target, leaver risk, pipeline velocity' },
    { label: 'Evalent strategic signals',    desc: 'Grade-level intelligence organised into capacity, retention, and pipeline sections' },
    { label: 'Enrolment planning',      desc: 'All grades in one editable view, with 8-week trend tracking per grade' },
    { label: 'Executive report',        desc: 'Evalent-generated board summary, available as PDF or Word in one click' },
  ]

  const pillars = [
    {
      title: 'Enrolment & Capacity',
      color: '#1a2b6b',
      bg: '#f0f4ff',
      border: '#c7d2fe',
      desc: 'Fill rate and gap to target — how close each grade is to its intake target, with trend direction over eight weeks.',
    },
    {
      title: 'Retention',
      color: '#15803d',
      bg: '#f0fdf4',
      border: '#bbf7d0',
      desc: 'Returning confirmed, leavers, and undecided — who is staying next year and which grades carry attrition risk.',
    },
    {
      title: 'Pipeline & Growth',
      color: '#b45309',
      bg: '#fffbeb',
      border: '#fde68a',
      desc: 'New entrants accepted, students in process, and pipeline velocity — how actively each grade is building towards its target.',
    },
  ]

  const faqs = [
    ['Does the strategy page cover all grades, including Early Years?', 'Yes. The enrolment planning table covers every grade from Pre-K to G12. Grades assessed via Evalent have their Accepted and In Process figures auto-populated. All other data is entered manually by your team.'],
    ['Where does the enrolment data come from?', 'Your admissions team enters current enrolment, targets, leavers, and returning students directly into the planning table. Evalent auto-populates pipeline data for assessed grades. You can also upload data via CSV.'],
    ['How do the Evalent signals work?', 'Evalent analyses your grade data and generates 3–5 signals classified into Enrolment & Capacity, Retention, and Pipeline. Each signal is specific to your school\'s numbers and recommends a concrete next action. Signals regenerate each time you click Generate.'],
    ['Can I filter the view by grade group?', 'Yes. Filter pills at the top let you switch between Whole School, Early Years & Primary, your middle school range, Senior School, or any individual grade. KPI cards, Evalent signals, and the chart all update instantly.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 6 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Enrolment intelligence,<br/>
            <span className="text-blue-300">for the whole school.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Six live KPI cards. Evalent-generated grade signals. An executive report your board can act on.
            All powered by data your team already has.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO PLACEHOLDER — replace src with Vimeo ID when available */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl bg-gray-100 flex items-center justify-center" style={{ paddingTop: '56.25%' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-sm text-gray-400 font-medium">Video walkthrough coming soon</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE ENROLMENT COMMAND CENTRE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Know where every grade stands — without a spreadsheet</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Most schools manage enrolment across a patchwork of spreadsheets, emails, and meeting notes.
              Evalent replaces that with a single live view of every grade: how full it is, who is leaving,
              who has confirmed they are returning, and how many new students are in the pipeline.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Six KPI cards update automatically as your admissions data changes. Evalent-generated signals surface
              the grades that need attention. And when it is time to report to your board, one click generates
              a professional executive summary written in the language of your school.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.label} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                <div className="text-xs font-bold text-navy mb-0.5">{f.label}</div>
                <div className="text-xs text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">THREE PILLARS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Intelligence organised the way you think</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Every KPI and Evalent signal maps to one of three strategic areas — so you always know what kind of problem you are looking at.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border p-5" style={{ backgroundColor: p.bg, borderColor: p.border }}>
                <div className="text-sm font-bold mb-2" style={{ color: p.color }}>{p.title}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">6</div><div className="text-sm text-blue-300 mt-1">Live KPI metrics</div></div>
          <div><div className="text-3xl font-black text-white">✦</div><div className="text-sm text-blue-300 mt-1">Grade-level signals</div></div>
          <div><div className="text-3xl font-black text-white">1</div><div className="text-sm text-blue-300 mt-1">Click to board report</div></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions</h2>
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

      {/* PREV / NEXT */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/decisions" className="text-gray-400 hover:text-brand text-sm">← Decision Workflow</Link>
          <Link href="/features/team" className="text-brand font-semibold hover:underline text-sm">Next: Team Management →</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
