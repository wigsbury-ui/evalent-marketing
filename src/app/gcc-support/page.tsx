import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import CtaTrialButton from '@/components/CtaTrialButton'

export const metadata: Metadata = {
  title: 'Standing with GCC International Schools',
  description: 'Evalent is a GCC-founded company. We are offering all GCC international schools a free year of Essentials as a gesture of solidarity during a difficult period.',
}

export default function GccSupportPage() {
  // Offer expired — hide page after 1 June 2026 00:00 UTC
  if (new Date() > new Date('2026-06-01T00:00:00Z')) {
  }

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
            every GCC international school can use Evalent free for a full year.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-8 py-4">
            <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">Your code</span>
            <span className="text-white text-3xl font-black tracking-widest font-mono">GCC2026</span>
          </div>
        </div>
      </section>

      {/* ── Hero video ── */}
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1181466579?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Standing with GCC International Schools"
            />
          </div>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Why we are doing this</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Evalent was founded in the GCC. Our team and our understanding
            of what excellent international schooling looks like. All of it was shaped in this region.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We know that international schools across the Gulf are navigating an unusually difficult period right now.
            Admissions teams are under pressure. Families are making decisions in uncertain circumstances.
            The last thing you need is more friction in your processes.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            So we wanted to do something concrete. Every accredited international school in the GCC in good standing can use Evalent free for a
            full year, no charge, and no commitment beyond one thing: if it helps, we ask that you
            share your experience with us.
          </p>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block bg-blue-50 text-brand text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-3">WHAT YOU GET</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Everything in Essentials, free for 12 months</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Up to 75 assessments', 'Send up to 75 assessments to applicants across all grades during your free year.'],
              ['Evalent-generated reports', 'Each completed assessment produces a professional report ready for your assessor within minutes.'],
              ['Full admissions workflow', 'Register students, track progress, record decisions, and maintain a full audit trail.'],
              ['All grades 3–10', 'Assessments calibrated to each grade level for every curriculum you teach.'],
              ['Assessor decision tools', 'Email-based decision workflow: accept, waitlist, or decline with one click.'],
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

      {/* ── Eligible countries ── */}
      <section className="py-5 px-6 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Eligible countries</p>
          <div className="flex flex-wrap gap-3">
            {[
              { flag: '🇦🇪', name: 'United Arab Emirates' },
              { flag: '🇸🇦', name: 'Saudi Arabia' },
              { flag: '🇶🇦', name: 'Qatar' },
              { flag: '🇰🇼', name: 'Kuwait' },
              { flag: '🇧🇭', name: 'Bahrain' },
              { flag: '🇴🇲', name: 'Oman' },
              { flag: '🇯🇴', name: 'Jordan' },
            ].map(({ flag, name }) => (
              <div key={name} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <span className="text-lg">{flag}</span>
                <span className="text-sm font-medium text-navy">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── One small ask ── */}
      <section className="py-10 px-6 bg-blue-50 border-t border-b border-blue-100">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-blue-100 text-brand text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">ONE SMALL ASK</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-4">
            In return, we ask for your story.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            This offer is completely free, but it is not unconditional. In exchange for your free year,
            we ask that your international school agrees to provide either a written testimonial or a short case study
            about your experience with Evalent.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We are not asking for a marketing brochure. A few honest sentences from your admissions
            lead about what worked, what changed, and whether you would recommend it. That is all we need.
            We will reach out near the end of your free year to collect it.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Your feedback helps other GCC international schools make an informed decision. It also helps us build
            a better product. That feels like a fair exchange.
          </p>
        </div>
      </section>

      {/* ── How to redeem ── */}
      <section className="py-10 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block bg-blue-50 text-brand text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-3">REDEEM YOUR CODE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Up and running in four steps</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ['Start a free trial', 'Create your school account at evalent.io. It takes under two minutes.'],
              ['Complete your school setup', 'Configure your curriculum, grades, and assessor details in the onboarding flow.'],
              ['Enter GCC2026 on the Billing page', 'In your dashboard, go to Billing → type GCC2026 → click Apply before proceeding to checkout.'],
              ['Check out at $0', 'Essentials shows as free for Year 1. Your card is saved for auto-renewal after 12 months, cancel any time before then at no cost.'],
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
            Available to all international schools based in the GCC. Offer expires 1 June 2026.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Use code <strong className="text-navy font-mono tracking-widest">GCC2026</strong> at checkout after signing up.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <CtaTrialButton />
            <Link href="/pricing" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              View Essentials features
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Questions? Email <a href="mailto:team@evalent.io" className="text-brand">team@evalent.io</a>. We respond personally.
          </p>
        </div>
      </section>

      {/* ── Terms & Conditions ── */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-navy mb-4">Terms and conditions</h2>
          <ul className="space-y-2">
            {[
              'This offer is available to international schools physically located in the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, or Jordan.',
                'Eligible schools must hold current accreditation from a recognised international accrediting body (such as CIS, NEASC, IBO, or equivalent) and must be in good standing with that accrediting body at the time of application.',
                'Eligible schools must hold current accreditation from a recognised international accrediting body (such as CIS, NEASC, IBO, or equivalent) and must be in good standing with that accrediting body at the time of application.',
              'To qualify, your international school must register and activate a subscription using coupon code GCC2026 before 11:59 pm (GST) on 31 May 2026.',
              'The offer provides 12 months of the Essentials plan at no charge. After 12 months, your subscription will automatically renew at the standard Essentials rate unless cancelled.',
              'A valid payment method is required at checkout. No charge will be made during the free 12-month period.',
              'The offer is limited to one subscription per international school. It may not be combined with any other promotion or discount.',
              'In accepting this offer, your international school agrees to provide Evalent with either a written testimonial or a short case study about your experience. We will contact you near the end of your free year to collect this.',
              'Evalent reserves the right to verify the eligibility of any international school and to withdraw this offer at any time prior to activation.',
              'This offer applies to new Evalent customers only. International schools with an existing paid subscription are not eligible.',
              'Standard Evalent terms of service apply throughout the subscription period.',
            ].map((term, i) => (
              <li key={i} className="flex gap-3 text-xs text-gray-500 leading-relaxed">
                <span className="flex-shrink-0 text-gray-300 font-semibold">{i + 1}.</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
