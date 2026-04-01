import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Pricing — Evalent | School Admissions Assessment Software',
  description: 'Simple, transparent pricing for international and independent schools. Essentials from £2,300/yr. 10 free trial reports included. No credit card required.',
  openGraph: {
    title: 'Evalent Pricing — School Admissions Assessment Software',
    description: 'Plans from £2,300/yr. Includes full AI report generation, school branding, and admin dashboard. 10 free trial reports.',
    url: 'https://www.evalent.io/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evalent Pricing — School Admissions Assessment Software',
    description: 'Plans from £2,300/yr. 10 free trial reports included.',
  },
}
import Footer from '@/components/Footer'

const plans = [
  { name: 'Essentials', usd: '$2,900', gbp: '£2,300', assessments: 100, tagline: 'Ideal for single-grade entry or smaller schools.', popular: false },
  { name: 'Professional', usd: '$5,500', gbp: '£4,400', assessments: 250, tagline: 'Most popular for mid-size international schools.', popular: true },
  { name: 'Enterprise', usd: '$9,500', gbp: '£7,600', assessments: '500+', tagline: 'For larger schools or multi-campus groups.', popular: false },
]

export default function Pricing() {
  return (
    <div>
      <Nav />
      <section className="bg-navy text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-3">Simple, transparent pricing</h1>
        <p className="text-blue-300 max-w-lg mx-auto">All plans include full report generation, school branding, admin dashboard, and support. No hidden fees.</p>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div key={plan.name} className={`rounded-2xl border p-7 relative ${plan.popular ? 'border-brand border-2 shadow-lg' : 'border-gray-200'}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full">Most popular</div>}
              <div className="text-lg font-black text-navy mb-1">{plan.name}</div>
              <div className="text-3xl font-black text-navy tracking-tight mb-0.5">{plan.usd}<span className="text-base font-medium text-gray-400">/yr</span></div>
              <div className="text-sm text-gray-400 mb-4">{plan.gbp}/yr</div>
              <div className="text-sm text-gray-600 mb-5 leading-relaxed">{plan.tagline}</div>
              <div className="text-sm font-bold text-navy mb-4">Up to {plan.assessments} assessments/year</div>
              <div className="space-y-2 text-xs text-gray-500 mb-6">
                {['Full report generation','School branding','Admin dashboard','Assessor email flow','Automated reminders','Support included'].map(f => (
                  <div key={f} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{f}</div>
                ))}
              </div>
              <a href="https://app.evalent.io/signup" className={`block text-center text-sm font-bold py-3 rounded-xl transition-colors ${plan.popular ? 'bg-brand text-white hover:bg-blue-800' : 'bg-gray-50 text-navy border border-gray-200 hover:bg-gray-100'}`}>
                Start free trial
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">Prices correct as of early 2026. Contact us for multi-year or multi-campus pricing.</p>
        <p className="text-center text-xs text-gray-400 mt-2">All prices are exclusive of tax. Local taxes (including VAT where applicable) will be calculated at checkout based on your location.</p>
      </section>
      <Footer />
    </div>
  )
}
