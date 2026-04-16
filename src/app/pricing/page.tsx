'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TrialModal from '@/components/TrialModal'

const pricingProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Evalent Admissions Assessment Platform",
  "description": "Structured admissions assessments, automated professional reports, one-click decisions, and live enrolment intelligence for international and independent schools.",
  "url": "https://www.evalent.io/pricing",
  "brand": {"@type": "Brand", "name": "Evalent"},
  "offers": [
    {"@type": "Offer", "name": "Essentials", "price": "2900", "priceCurrency": "USD", "url": "https://app.evalent.io/signup"},
    {"@type": "Offer", "name": "Professional", "price": "5500", "priceCurrency": "USD", "url": "https://app.evalent.io/signup"},
    {"@type": "Offer", "name": "Enterprise", "price": "9500", "priceCurrency": "USD", "url": "https://app.evalent.io/signup"}
  ]
}

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does Evalent cost?", "acceptedAnswer": {"@type": "Answer", "text": "Evalent offers three plans: Essentials at $2,900 per year (100 assessments), Professional at $5,500 per year (250 assessments), and Enterprise at $9,500 per year (500+ assessments). All plans include a 10-report free trial with no credit card required."}},
    {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Evalent offers 10 free assessment reports with no credit card required. The trial includes full access to all features including the Strategy page and Team Management."}},
    {"@type": "Question", "name": "What is included in all plans?", "acceptedAnswer": {"@type": "Answer", "text": "All plans include full report generation, school branding, admin dashboard, assessor email workflow, automated reminders, Strategy page with live enrolment KPIs, Team Management with role-based access, and support."}},
    {"@type": "Question", "name": "Can we get a refund?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Evalent offers a 14-day full refund on the first paid payment. Email hello@evalent.io with your account email and Paddle order reference."}}
  ]
}

const plans = [
  {
    name: 'Essentials',
    usd: '$2,900',
    gbp: '£2,300',
    period: '/yr',
    subtext: '£2,300/yr · Billed annually',
    perAssessment: '$29',
    assessments: 100,
    tagline: 'For schools assessing up to 100 candidates per year, typically a single entry point or smaller prep school.',
    popular: false,
    cta: 'Start free trial',
    isEnterprise: false,
  },
  {
    name: 'Professional',
    usd: '$5,500',
    gbp: '£4,400',
    period: '/yr',
    subtext: '£4,400/yr · Billed annually',
    perAssessment: '$22',
    assessments: 250,
    tagline: 'Most popular for mid-size international schools with multiple entry grades.',
    popular: true,
    cta: 'Start free trial',
    isEnterprise: false,
  },
  {
    name: 'Enterprise',
    usd: '$9,500',
    gbp: '£7,600',
    period: '/yr',
    subtext: '£7,600/yr · Billed annually',
    perAssessment: '$19',
    assessments: '500+',
    tagline: 'For larger schools, multi-campus groups, and networks with high volumes or complex requirements.',
    popular: false,
    cta: 'Talk to us',
    isEnterprise: true,
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
    a: 'On Essentials it works out at $29 per assessment. Professional is $22, and Enterprise is $19 or lower depending on volume. Multi-year discounts are available, contact us.',
  },
  {
    q: 'Is there a contract or minimum term?',
    a: 'Plans are billed annually. There is no long-term contract beyond the annual term. You can cancel before renewal and your data is exportable at any time.',
  },
  {
    q: 'How is student data handled?',
    a: 'Student data is stored in ISO 27001-compliant infrastructure and never used to train language models. We are GDPR compliant. Full details are on our data security page.',
  },
  {
    q: 'Do you offer multi-campus or group pricing?',
    a: 'Yes. If you are managing multiple campuses or part of a school group, contact us for a custom quote. Enterprise plans include multi-campus management as standard.',
  },
  {
    q: 'Can we trial with real applicants?',
    a: 'Yes, that is exactly what the free trial is for. Your 10 free reports work on real applicants, with full functionality. No synthetic data required.',
  },
  {
    q: 'Which plan is right for us?',
    a: 'Essentials suits schools assessing up to 100 candidates a year. Professional is ideal for schools with multiple grades or 100–250 applicants. Enterprise is for large schools or networks above 250 per year.',
  },
]


export default function Pricing() {
  const [trialOpen, setTrialOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-navy text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-3">Simple, transparent pricing</h1>
        <p className="text-blue-300 max-w-lg mx-auto">
          All plans include full report generation, school branding, and the complete Evalent platform.
          Start with 10 free assessments.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 flex flex-col h-full ${
                plan.popular
                  ? 'border-2 border-brand shadow-xl relative'
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <h2 className="text-xl font-black text-navy mb-1">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-navy">{plan.usd}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{plan.subtext}</p>
              <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
                ≈ {plan.perAssessment} per assessment
              </span>

              <p className="text-sm text-gray-600 mb-5">{plan.tagline}</p>

              <p className="font-bold text-navy mb-3 text-sm">
                Up to {plan.assessments} assessments/year
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d="M5 10l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.isEnterprise && (
                  <li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">
                    Custom quote · Volume discounts available
                  </li>
                )}
              </ul>

              {plan.isEnterprise ? (
                <button
                  onClick={() => setTrialOpen(true)}
                  className="block w-full text-center py-4 rounded-xl bg-gray-50 text-navy border border-gray-200 hover:bg-gray-100 font-bold text-sm transition-colors cursor-pointer border-0"
                >
                  Start free trial
                </button>
              ) : (
                <button
                  onClick={() => setTrialOpen(true)}
                  className={`block w-full text-center py-4 rounded-xl font-bold text-sm transition-colors cursor-pointer border-0 ${
                    plan.popular
                      ? 'bg-brand text-white hover:bg-blue-800'
                      : 'bg-gray-50 text-navy border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {FAQ && FAQ.length > 0 && (
        <section className="py-16 px-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-navy text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQ.map((item: {q: string, a: string}, i: number) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-semibold text-navy flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  {item.q}
                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-navy text-white text-center">
        <h2 className="text-3xl font-black mb-4">Start your free trial today</h2>
        <p className="text-blue-300 mb-8 max-w-md mx-auto">
          10 free assessment reports. No credit card needed. Set up in minutes.
        </p>
        <button
          onClick={() => setTrialOpen(true)}
          className="bg-white text-navy font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border-0"
        >
          Start your free trial →
        </button>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }} />
      <Footer />
      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
    </>
  )
}
