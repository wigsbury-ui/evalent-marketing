import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — Evalent | School Admissions Assessment Software',
  description: 'Simple, transparent pricing for international and independent schools. From £2,300/yr. 10 free trial reports included. No credit card required.',
  openGraph: {
    title: 'Evalent Pricing — School Admissions Assessment Software',
    description: 'Plans from £2,300/yr. Includes full AI report generation, school branding, and admin dashboard.',
    url: 'https://www.evalent.io/pricing',
  },
}

const plans = [
  {
    name: 'Essentials',
    usd: '$2,900',
    gbp: '£2,300',
    assessments: 100,
    perAssessment: '$29',
    tagline: 'For schools assessing up to 100 candidates per year — typically a single entry point or smaller prep school.',
    popular: false,
    cta: 'Start free trial',
    ctaHref: 'https://app.evalent.io/signup',
  },
  {
    name: 'Professional',
    usd: '$5,500',
    gbp: '£4,400',
    assessments: 250,
    perAssessment: '$22',
    tagline: 'Most popular for mid-size international schools with multiple entry grades.',
    popular: true,
    cta: 'Start free trial',
    ctaHref: 'https://app.evalent.io/signup',
  },
  {
    name: 'Enterprise',
    usd: '$9,500',
    gbp: '£7,600',
    assessments: '500+',
    perAssessment: '$19',
    tagline: 'For larger schools, multi-campus groups, and networks with high volumes or complex requirements.',
    popular: false,
    cta: 'Talk to us',
    ctaHref: 'mailto:hello@evalent.io?subject=Enterprise%20enquiry',
  },
]

const FEATURES = [
  'Full report generation',
  'School branding',
  'Admin dashboard',
  'Assessor email flow',
  'Automated reminders',
  'Support included',
]

const FAQ = [
  {
    q: 'What happens after my 10 free trial reports?',
    a: 'After your trial, you choose a plan and pay annually. Your trial data and settings are preserved. There is no pressure to upgrade before you are ready.',
  },
  {
    q: 'What is the cost per assessment?',
    a: 'On Essentials it works out at $29 per assessment. Professional is $22, and Enterprise is $19 or lower depending on volume. Multi-year discounts are available — contact us.',
  },
  {
    q: 'Is there a contract or minimum term?',
    a: 'Plans are billed annually. There is no long-term contract beyond the annual term. You can cancel before renewal and your data is exportable at any time.',
  },
  {
    q: 'How is student data handled?',
    a: 'Student data is stored in ISO 27001-compliant infrastructure and never used to train AI models. We are GDPR compliant. Full details are on our data security page.',
  },
  {
    q: 'Do you offer multi-campus or group pricing?',
    a: 'Yes. If you are managing multiple campuses or part of a school group, contact us for a custom quote. Enterprise plans include multi-campus management as standard.',
  },
  {
    q: 'Can we trial with real applicants?',
    a: 'Yes — that is exactly what the free trial is for. Your 10 free reports work on real applicants, with full functionality. No synthetic data required.',
  },
  {
    q: 'Which plan is right for us?',
    a: 'Essentials suits schools assessing up to 100 candidates a year. Professional is ideal for schools with multiple grades or 100–250 applicants. Enterprise is for large schools or networks above 250 per year.',
  },
]

export default function Pricing() {
  return (
    <div>
      <Nav />
      <section className="bg-navy text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-3">Simple, transparent pricing</h1>
        <p className="text-blue-300 max-w-lg mx-auto">All plans include full report generation, school branding, admin dashboard, and support. No hidden fees.</p>
      </section>

      {/* Pricing cards */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div key={plan.name} className={`rounded-2xl border p-7 relative flex flex-col ${plan.popular ? 'border-brand border-2 shadow-lg' : 'border-gray-200'}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full">Most popular</div>}
              <div className="text-lg font-black text-navy mb-1">{plan.name}</div>
              <div className="text-3xl font-black text-navy tracking-tight mb-0.5">{plan.usd}<span className="text-base font-medium text-gray-400">/yr</span></div>
              <div className="text-sm text-gray-400 mb-1">{plan.gbp}/yr · Billed annually</div>
              <div className="inline-flex items-center gap-1 bg-blue-50 text-brand text-xs font-bold px-2.5 py-1 rounded-full mb-4 w-fit">
                ≈ {plan.perAssessment} per assessment
              </div>
              <div className="text-sm text-gray-600 mb-5 leading-relaxed">{plan.tagline}</div>
              <div className="text-sm font-bold text-navy mb-4">Up to {plan.assessments} assessments/year</div>
              <div className="space-y-2 text-xs text-gray-500 mb-6 flex-1">
                {FEATURES.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={plan.ctaHref}
                className={`block text-center text-sm font-bold py-3 rounded-xl transition-colors mt-auto ${
                  plan.name === 'Enterprise'
                    ? 'bg-navy text-white hover:bg-gray-800'
                    : plan.popular
                    ? 'bg-brand text-white hover:bg-blue-800'
                    : 'bg-gray-50 text-navy border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </a>
              {plan.name === 'Enterprise' && (
                <p className="text-center text-xs text-gray-400 mt-2">Custom quote · Volume discounts available</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">Prices correct as of early 2026. Contact us for multi-year or multi-campus pricing.</p>
        <p className="text-center text-xs text-gray-400 mt-2">All prices are exclusive of tax. Local taxes (including VAT where applicable) will be calculated at checkout based on your location.</p>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">COMMON QUESTIONS</div>
            <h2 className="text-3xl font-black text-navy tracking-tight mb-2">Pricing questions, answered</h2>
            <p className="text-gray-500 text-sm">Everything you need to make a decision. If it is not here, <a href="mailto:hello@evalent.io" className="text-brand hover:underline">get in touch</a>.</p>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-sm font-bold text-navy mb-2">{q}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">Start with 10 free reports</h2>
          <p className="text-blue-300 mb-7">No credit card. No commitment. Use with your next real applicants.</p>
          <a href="https://app.evalent.io/signup" className="inline-block bg-white text-brand font-bold text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Start your free trial →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
