import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Data Security — Why Evalent',
  description: 'How Evalent protects student data. UK and EU GDPR compliant. Student data never used to train AI. School is the data controller.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Student data handled the right way.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">UK and EU GDPR compliant. School is the data controller. Student assessment data is never used to train AI models — ever.</p>
          <HeroTrialButton />
        </div>
      </section>

      {/* Video */}
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1177671437?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — Data Security"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">Why data protection matters in admissions</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Independent schools assess applicants who are minors. That data — names, writing samples, scores, contact details — carries serious legal and ethical weight. Every school using Evalent needs to be confident that the platform meets its obligations under UK GDPR and EU GDPR, and that student data is never misused. This page explains exactly how Evalent handles that responsibility.</p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Your school is the data controller</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Under GDPR, the organisation that determines the purpose and means of processing personal data is the data controller. For student applicant data, that is your school — not Evalent. Evalent acts only as a data processor, processing data strictly on your school's instructions. This means your school retains full ownership and control of all assessment data from day one.</p>
            </div>

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Student data is never used to train AI</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Assessment responses — including extended writing — are processed by AI only to generate the report for that specific student. This processing is governed by a data processing agreement with Anthropic, our AI sub-processor, which contractually prohibits the use of your students' data for AI training purposes. Student data is used for one purpose: producing the admissions report your school requested.</p>
            </div>

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">UK GDPR and EU GDPR compliant</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Evalent is operated by Evalent Ltd, a UK-registered company. We comply with both UK GDPR (as administered by the Information Commissioner's Office) and EU GDPR. Where sub-processors operate outside the UK and EEA, we ensure appropriate safeguards are in place — including Standard Contractual Clauses approved by the UK ICO and European Commission.</p>
            </div>

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Configurable data retention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Schools can configure their own data retention period in Evalent's settings. Assessment data is automatically deleted after the period you specify — or immediately on request by emailing hello@evalent.io. You are never locked into holding data longer than your school's own policy requires.</p>
            </div>

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Sub-processors bound by data processing agreements</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Evalent shares data only with the sub-processors required to deliver the service — database hosting (Supabase), AI evaluation (Anthropic), transactional email (Resend), and platform infrastructure (Vercel). Each is bound by a formal data processing agreement. We do not sell personal data to any third party, and we do not use student data for advertising, profiling, or any purpose beyond delivering your school's reports.</p>
            </div>

            <div className="border border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Secure infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed">All data is encrypted in transit (TLS 1.2+) and at rest. Access to assessment data is restricted to authenticated school users only — assessors receive a secure, time-limited link to view the specific report they need, with no access to any other student data. Multi-factor authentication is available for all school accounts.</p>
            </div>

          </div>
        </div>
      </section>

      {/* GDPR summary strip */}
      <section className="py-10 px-6 bg-blue-50 border-t border-blue-100">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 text-center">
          {[
            ['UK & EU GDPR', 'Compliant with both UK ICO and EU GDPR frameworks'],
            ['School controls the data', 'You are the data controller. We are the processor.'],
            ['AI never trains on student data', 'Contractually prohibited. No exceptions.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-blue-100">
              <div className="text-xs font-black text-brand uppercase tracking-widest mb-2">{title}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Links to policies */}
      <section className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-3">Read the full legal detail in our documentation:</p>
          <div className="flex gap-4 justify-center flex-wrap text-sm">
            <Link href="/legal/privacy" className="text-brand hover:underline font-semibold">Privacy Policy →</Link>
            <Link href="/security" className="text-brand hover:underline font-semibold">Security Overview →</Link>
            <Link href="/legal/terms" className="text-brand hover:underline font-semibold">Terms of Service →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/signup" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <Link href="/why" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">All benefits →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
