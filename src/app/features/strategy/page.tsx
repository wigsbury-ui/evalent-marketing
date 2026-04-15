import HeroTrialButton from '@/components/HeroTrialButton'
import StrategyDemo from '@/components/features/StrategyDemo'
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
            Admissions intelligence,<br/>
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
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1183290560?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — Strategy & Enrolment"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
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

      {/* INTERACTIVE KPI DEMO */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE PREVIEW</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">See it in action</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Click any grade pill to see how the six KPI cards update instantly — just like the real Strategy page in your school account.</p>
          </div>
          <StrategyDemo />
        </div>
      </section>

      {/* ENROLMENT CHART */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">ENROLMENT BY GRADE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Every grade. One view.</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
              The Enrolment by Grade chart shows your whole school on a single canvas — current year as a thin blue bar, next year projected as a stacked column, leavers below the baseline, and your target as a dashed line. Seven legend items are individually clickable, fading everything else to reveal the signal you&apos;re looking for.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <img
              src="/enrolment-chart.png"
              alt="Enrolment by Grade chart showing all grades with stacked bars for returning students, accepted new, pipeline, and leavers below baseline"
              className="w-full block"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {([
              { color: "#93c5fd", label: "Current year", dashed: false },
              { color: "#15803d", label: "Returning", dashed: false },
              { color: "#22c55e", label: "Accepted (new)", dashed: false },
              { color: "#94a3b8", label: "Unsure", dashed: false },
              { color: "#f59e0b", label: "In Pipeline", dashed: false },
              { color: "#fecaca", label: "Leavers", dashed: false },
              { color: "#15803d", label: "Target", dashed: true },
            ] as { color: string; label: string; dashed: boolean }[]).map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                {item.dashed ? (
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <line x1="0" y1="5" x2="16" y2="5" stroke={item.color} strokeWidth="2" strokeDasharray="3 2"/>
                  </svg>
                ) : (
                  <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                )}
                <span className="text-xs text-gray-500">{item.label}</span>
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
