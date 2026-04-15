import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Informed Decision Making — Why Evalent',
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
            From real-time enrolment KPIs to board-ready executive reports, Evalent ensures every stakeholder — admissions, senior leadership, and governors — has exactly the information they need to make confident, evidence-based decisions.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 bg-white pt-12 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative bg-gray-100 flex items-center justify-center" style={{ paddingTop: '56.25%' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-sm text-gray-400 font-medium">Video walkthrough coming soon</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">90-second walkthrough</p>
          <h2 className="text-center text-xl font-bold text-navy mt-6">
            Every layer of leadership, perfectly informed
          </h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">
            Most schools manage enrolment through a patchwork of spreadsheets, email threads, and meeting notes — leaving leaders to make decisions based on incomplete or out-of-date information. Evalent replaces that with a structured intelligence layer: live data, Evalent-generated signals, and governed access that ensures the right people see the right things.
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
                The Strategy page gives principals and senior leadership a real-time view of every grade&apos;s enrolment position — fill rate, retention, new entrants, gap to target, leaver risk, and pipeline velocity. Six live KPI cards update automatically as data changes. No refreshing, no chasing. Just an honest picture of where the school stands, right now.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Evalent signals that surface what matters</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evalent&apos;s strategic signals engine analyses your enrolment data and generates specific, grade-level intelligence — organised into three categories: Enrolment &amp; Capacity, Retention, and Pipeline. Leaders don&apos;t have to hunt for problems. The system surfaces them, with recommended actions, so attention goes where it&apos;s needed most.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Board-ready reporting in one click</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Executive Report Generator produces a professional, narrative admissions report — in the language of your school&apos;s curriculum — covering pipeline activity, enrolment trends, and three strategic recommendations. Available as PDF or Word, it is designed to be placed directly into a board pack. No formatting, no summarising, no preparation time.
              </p>
            </div>

            <div className="border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Governed access for every stakeholder</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Not everyone needs to see everything. Evalent&apos;s Team Management page lets you assign each person to a role group — Admissions Team, Senior Leadership, Board Chair, or Board Members — each with permissions calibrated to what that layer genuinely needs. Board members see strategy and enrolment position. They do not see individual student data. Admissions staff manage the pipeline. Senior leaders have strategic visibility without operational controls. Everyone is informed at exactly the right level.
              </p>
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
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/signup"
              className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
              Start free trial →
            </a>
            <Link href="/why"
              className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              All benefits →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
