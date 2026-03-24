import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — Evalent',
  description: 'How Evalent collects, uses and protects your personal data. GDPR compliant. Paddle processes buyer data as Merchant of Record.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      {/* Hero */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Privacy<br />
            <span className="text-blue-300">Policy.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-2xl">
            How we collect, use, and protect personal data across the Evalent platform.
          </p>
          <p className="text-blue-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-sm max-w-none">

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent Ltd (&ldquo;Evalent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data. This policy explains what we collect, why we collect it, and your rights under UK GDPR and EU GDPR.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">1. Data Controller</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent Ltd is the data controller for school administrator and assessor data. For assessment data relating to student applicants (who may be minors), the school is the data controller and Evalent acts as data processor.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <strong>Payment data</strong> is controlled by Paddle.com, who acts as Merchant of Record for all transactions. Paddle&apos;s privacy policy is available at <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">paddle.com/legal/privacy</a>.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">2. Data We Collect</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-2"><strong>School administrators:</strong> name, work email address, role, school name and country, collected when you create an account.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-2"><strong>Student applicants:</strong> first name, last name, email address, grade applied for, curriculum, and assessment responses (MCQ answers and extended writing). This data is provided by the school when registering students.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-2"><strong>Usage data:</strong> log data, IP addresses, browser type, and pages visited, collected automatically via our hosting infrastructure.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4"><strong>Payment data:</strong> we do not store card details. All payment information is handled by Paddle as Merchant of Record.</p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">3. Legal Basis for Processing</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-2"><strong>Contract performance:</strong> we process admin and assessor data to provide the platform services you have contracted for.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-2"><strong>Legitimate interest:</strong> we process usage data to maintain platform security and improve our services.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4"><strong>Legal obligation:</strong> we may process data where required by applicable law.</p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">4. Student Data</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Assessment data relating to student applicants is processed on behalf of the school. We process this data only as instructed by the school (data controller) and do not use it for any other purpose. Student data is retained for the period specified in your school&apos;s data retention configuration and deleted on request. Schools are responsible for obtaining any necessary consents from parents or guardians before registering student applicants.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">5. Data Sharing</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            We share data only with the following categories of third party, each bound by appropriate data processing agreements:
          </p>
          <ul className="text-sm text-gray-600 leading-relaxed mb-4 space-y-1 list-disc pl-5">
            <li><strong>Paddle</strong> — payment processing and Merchant of Record services</li>
            <li><strong>Supabase</strong> — database hosting and infrastructure</li>
            <li><strong>Anthropic</strong> — AI writing evaluation (assessment text is processed to generate report commentary)</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
            <li><strong>Vercel</strong> — platform hosting</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">We do not sell personal data to any third party.</p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">6. International Transfers</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Some of our sub-processors operate outside the UK and EEA. Where this is the case, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the UK ICO and European Commission.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">7. Retention</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            School admin account data is retained for the duration of your subscription plus 12 months. Assessment data is retained according to your school&apos;s configured retention period. You may request deletion at any time by contacting hello@evalent.io.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">8. Your Rights</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Under UK GDPR and EU GDPR you have the right to: access your personal data; correct inaccurate data; request erasure; restrict or object to processing; and data portability. To exercise any right, contact us at <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a>. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ico.org.uk) or your local supervisory authority.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">9. Cookies</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            See our <a href="/legal/cookies" className="text-brand hover:underline">Cookie Policy</a> for details of the cookies we use.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">10. Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Data protection queries: <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
