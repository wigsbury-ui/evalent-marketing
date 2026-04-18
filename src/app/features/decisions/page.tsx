import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DecisionsDemo from '@/components/features/DecisionsDemo'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Decision Workflow | Evalent Features',
  description: 'One-click decisions directly from your inbox. No portal login. No manual data entry. Every decision timestamped and audit-logged automatically.',
}

export default function Page() {
  const featureGrid = [
    { label: 'No portal login',        desc: 'Works from any inbox, any device' },
    { label: 'Full report in email',   desc: 'Scores, band, and commentary included' },
    { label: 'Instant dashboard update', desc: 'Reflected in real time on completion' },
    { label: 'Permanent audit log',    desc: 'Timestamped and attributed to assessor' },
  ]

  const decisions = [
    { label: 'Admit',                       cls: 'border-green-300 bg-green-50',   tc: 'text-green-800',  desc: 'The student meets entrance criteria across all domains. The offer process can begin immediately.' },
    { label: 'Admit with academic support',  cls: 'border-blue-200 bg-blue-50',    tc: 'text-blue-800',   desc: 'Suitable for admission but will benefit from targeted support. This flag travels with the applicant record through to enrolment.' },
    { label: 'Waitlist',                     cls: 'border-yellow-200 bg-yellow-50', tc: 'text-yellow-800', desc: 'A potential candidate but a place is not currently available. Can be moved to Admit at any time.' },
    { label: 'Do not admit',                 cls: 'border-red-200 bg-red-50',       tc: 'text-red-800',    desc: 'The assessment profile does not meet entrance criteria. The report provides evidence to explain the decision to families if required.' },
  ]

  const auditLog = [
    { time: '09:14:22', event: 'Report generated',      detail: 'Sara Ahmed · Grade 7 · IB',           status: 'auto' },
    { time: '09:14:28', event: 'Report email sent',     detail: 'To: sarah.principal@diacademy.ae',    status: 'auto' },
    { time: '10:31:07', event: 'Email opened',          detail: 'By: sarah.principal@diacademy.ae',    status: 'tracked' },
    { time: '10:31:44', event: 'Decision recorded: Admit', detail: 'By: sarah.principal@diacademy.ae', status: 'decision' },
    { time: '10:31:44', event: 'Dashboard updated',     detail: 'Status: Decision made · Admit',          status: 'auto' },
  ]

  const decisionsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does the assessor need to log in to record a decision?', acceptedAnswer: { '@type': 'Answer', text: 'No. The report email contains four decision buttons. One click records the decision without any portal login.' } },
    { '@type': 'Question', name: 'What if the assessor does not respond?', acceptedAnswer: { '@type': 'Answer', text: 'A follow-up reminder is sent automatically after 48 hours. School admins can reassign the decision to another assessor at any time.' } },
    { '@type': 'Question', name: 'Can a decision be changed after it is recorded?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. School admin users can amend decisions from the dashboard. Both decisions are recorded in the audit log with timestamps.' } },
    { '@type': 'Question', name: 'Is every admissions decision permanently recorded?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every decision is timestamped, attributed to the assessor, and stored in a tamper-proof audit log that is exportable.' } },
    { '@type': 'Question', name: 'Can notes be added to an applicant record?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Free-text notes can be added to any applicant record from the dashboard and stored alongside the decision in the audit log.' } },
  ],
}

const FAQ = [
  { q: 'Does the assessor need to log in to record a decision?', a: 'No. The report email contains four decision buttons — Admit, Admit with Support, Waitlist, Do Not Admit. One click records the decision without any portal login.' },
  { q: 'What if the assessor does not respond?', a: 'A follow-up reminder is sent automatically after 48 hours. The dashboard flags unactioned reports and school admins can reassign the decision to another assessor at any time.' },
  { q: 'Can a decision be changed after it is recorded?', a: 'Yes. School admin users can amend decisions from the dashboard. Both the original and amended decision are recorded in the audit log with timestamps and attribution.' },
  { q: 'Is every decision permanently recorded for compliance?', a: 'Yes. Every decision is timestamped, attributed to the assessor, and stored in a tamper-proof audit log. This is exportable and can be retained for as long as your school requires.' },
  { q: 'Can notes be added to an applicant record?', a: 'Yes. Free-text notes can be added to any applicant record from the dashboard and stored alongside the decision in the audit log.' },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <FaqAccordion faqs={FAQ} />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">You&apos;ve seen all five features.</h2>
          <p className="text-blue-300 mb-7">10 free reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Start your free trial →</a>
            <Link href="/demo" className="bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">See Evalent evaluate</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/reports" className="text-gray-400 hover:text-brand text-sm">← Report Generation</Link>
          <Link href="/features/strategy" className="text-brand font-semibold hover:underline text-sm">Next: Strategy & Enrolment →</Link>
        </div>
      </div>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(decisionsFaqSchema) }} />
      <Footer />
    </div>
  )
}
