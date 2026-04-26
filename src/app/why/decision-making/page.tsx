import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import CtaTrialButton from '@/components/CtaTrialButton'
import VimeoEmbedInner from '@/components/VimeoEmbedInner'

export const metadata = {
  title: 'Informed Decision Making | Why Evalent',
  description: 'Give your leaders and governors the intelligence they need to make confident, evidence-based enrolment decisions.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The intelligence your leaders need. At exactly the right level.
          </h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">
            From real-time enrolment KPIs to board-ready executive reports, Evalent ensures every stakeholder, including admissions teams, senior leadership, and governors, has exactly the information they need to make confident, evidence-based decisions.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 bg-white pt-12 pb-2">
        <div className="max-w-4xl mx-auto">
          <VimeoEmbedInner videoId="1183285241" title="Evalent | Informed Decision Making" />
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second walkthrough</p>
          <h2 className="text-center text-xl font-bold text-navy mt-6">
            Every layer of leadership, perfectly informed
          </h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">
            Most schools manage enrolment through a patchwork of spreadsheets, email threads, and meeting notes, leaving leaders to make decisions based on incomplete or out-of-date information. Evalent replaces that with a structured intelligence layer: live data, Evalent-generated signals, and governed access that ensures the right people see the right things.
          </p>
        </div>
      </section>

      {/* CONTENT CARDS */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">A live picture of every grade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Strategy page gives principals and senior leadership a real-time view of every grade&apos;s enrolment position, covering fill rate, retention, new entrants, gap to target, leaver risk, and pipeline velocity. Six live KPI cards update automatically as data changes. No refreshing, no chasing. Just an honest picture of where the school stands, right now.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Automatic alerts when your enrolment data needs attention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evalent continuously monitors your enrolment data and fires specific, grade-level alerts across three categories: Enrolment &amp; Capacity, Retention, and Pipeline. When a grade is at risk of under-filling, retention is declining, or pipeline is thinning, an alert appears automatically — with a plain-English summary and a recommended next action. Leaders see the issue and what to do about it, without digging through a single spreadsheet.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Board-ready reporting in one click</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Executive Report Generator produces a professional, narrative admissions report in the language of your school&apos;s curriculum, covering pipeline activity, enrolment trends, and three strategic recommendations. Available as PDF or Word, it is designed to be placed directly into a board pack. No formatting, no summarising, no preparation time.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Governed access for every stakeholder</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Not everyone needs to see everything. Evalent&apos;s Team Management page lets you assign each person to a role group: Admissions Team, Senior Leadership, Board Chair, or Board Members, each with permissions calibrated to what that layer genuinely needs. Board members see strategy and enrolment position. They do not see individual student data. Admissions staff manage the pipeline. Senior leaders have strategic visibility without operational controls. Everyone is informed at exactly the right level.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REPORT SHOWCASE */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">BOARD REPORT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What your board actually receives</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
              Generated in one click from the Strategy page. A professional admissions report covering pipeline activity, enrolment position, grade-level trends, and three strategic recommendations, written in the language of your school, ready to drop into a board pack.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
            <img
              src="/leadership-report.png"
              alt="Evalent Strategic Admissions Report showing executive summary, enrolment position, analysis and strategic recommendations for the Board"
              className="w-full block"
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-8">
            <div className="text-center">
              <div className="text-2xl font-black text-navy mb-1">1</div>
              <div className="text-xs text-gray-500">Click to generate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-navy mb-1">PDF or Word</div>
              <div className="text-xs text-gray-500">Board-pack ready</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-navy mb-1">Confidential</div>
              <div className="text-xs text-gray-500">Marked for Senior Leadership &amp; Board</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="py-12 px-6 bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-black text-white leading-snug mb-3">
            &ldquo;The board should know whether the school is filling. They should not need to ask.&rdquo;
          </p>
          <p className="text-blue-300 text-sm">The Evalent principle of structured access</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">
            Try Evalent free with your next 10 applicants.
          </h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <CtaTrialButton />
        </div>
      </section>

      <Footer />
    </div>
  )
}
