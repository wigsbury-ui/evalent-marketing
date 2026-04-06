import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Standing with GCC Schools',
  description: 'Evalent is a GCC-founded company. We are offering all GCC schools a free year of Essentials as a gesture of solidarity during a difficult period.',
}

export default function GccSupportPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* ── Hero ── */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            🇦🇪 &nbsp;A MESSAGE FROM EVALENT
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Standing with GCC Schools
          </h1>
          <p className="text-blue-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Evalent was built in the Gulf. As a gesture of support during a difficult period,
            every GCC school can use Evalent free for a full year.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
            <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">Your code</span>
            <span className="text-white text-3xl font-black tracking-widest font-mono">GCC2026</span>
          </div>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Why we are doing this</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Evalent was founded in the GCC. Our team, our first customers, and our understanding
            of what excellent international schooling looks like — all of it was shaped in this region.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We know that schools across the Gulf are navigating an unusually difficult period right now.
            Admissions teams are under pressure. Families are making decisions in uncertain circumstances.
            The last thing you need is more friction in your processes.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            So we wanted to do something concrete. Every school in the GCC can use Evalent for free for
            a full year — no charge, no commitment beyond trying it. If it helps, we would love to
            continue working with you.
          </p>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-50 text-brand text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-3">WHAT YOU GET</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Everything in Essentials — free for 12 months</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Unlimited assessments', 'Send assessments to as many applicants as your school needs throughout the year.'],
              ['AI-generated reports', 'Each completed assessment produces a professional report ready for your assessor within minutes.'],
              ['Full admissions workflow', 'Register students, track progress, record decisions, and maintain a full audit trail.'],
              ['All grades 3–10', 'Assessments calibrated to each grade level for every curriculum you teach.'],
              ['Assessor decision tools', 'Email-based decision workflow — accept, waitlist, or decline with one click.'],
              ['Priority onboarding', 'We will personally help you set up your first cohort.'],
            ].map(([title, desc]) => (
              <div key={title} className="border border-blue-100 rounded-xl p-5">
                <h3 className="text-sm font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to redeem ── */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-50 text-brand text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-3">REDEEM YOUR CODE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Up and running in four steps</h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              ['Start a free trial', 'Create your school account at evalent.io — it takes under two minutes.'],
              ['Complete your school setup', 'Configure your curriculum, grades, and assessor details in the onboarding flow.'],
              ['Enter GCC2026 on the Billing page', 'In your dashboard, go to Billing → type GCC2026 → click Apply before proceeding to checkout.'],
              ['Check out at $0', 'Essentials shows as free for Year 1. Your card is saved for auto-renewal after 12 months — cancel any time before then at no cost.'],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">
            Claim your free year today.
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Available to all schools based in the GCC. Offer expires 1 June 2026.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Use code <strong className="text-navy font-mono tracking-widest">GCC2026</strong> at checkout after signing up.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/school" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
              Start free trial →
            </a>
            <Link href="/pricing" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              View Essentials features
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Questions? Email <a href="mailto:team@evalent.io" className="text-brand">team@evalent.io</a> — we respond personally.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
