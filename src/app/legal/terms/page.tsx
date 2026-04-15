import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service — Evalent',
  description: 'Evalent Terms of Service. Payments processed by Paddle as Merchant of Record.',
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
            Terms of<br />
            <span className="text-blue-300">Service.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-2xl">
            The terms that govern your use of the Evalent platform and services.
          </p>
          <p className="text-blue-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-sm max-w-none">

          <h2 className="text-lg font-black text-navy mt-8 mb-3">1. About Evalent</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent is an online admissions assessment platform operated by Evalent Ltd (&ldquo;Evalent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). The platform enables international schools to register students, administer structured admissions assessments, and receive Evalent-assisted evaluation reports and recommendations.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            By accessing or using Evalent, you agree to these Terms of Service. If you are using Evalent on behalf of a school or organisation, you represent that you have authority to bind that organisation to these terms.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">2. Payments and Billing</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            All payments are processed by <strong>Paddle.com</strong> (&ldquo;Paddle&rdquo;), who acts as the <strong>Merchant of Record</strong> for all Evalent transactions. This means that when you purchase an Evalent subscription or plan, you are purchasing from Paddle as the authorised reseller, not directly from Evalent Ltd.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Your purchase is also subject to <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Paddle&apos;s Buyer Terms and Conditions</a>. Paddle is responsible for processing your payment, issuing invoices and receipts, and handling applicable taxes.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Paddle&apos;s registered addresses are: Paddle.com Market Ltd, 15 Finsbury Square, London EC2A 1QA, UK; and Paddle.com Inc, 3811 Ditmars Blvd, 1071, Astoria, NY 11105, USA.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">3. Subscription Terms</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent is offered on a subscription basis. Your subscription begins on the date of purchase and renews automatically at the end of each billing period (monthly or annual, as selected) at the then-current price, unless you cancel before the renewal date.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <strong>You will be charged automatically at the start of each renewal period.</strong> You can cancel your subscription at any time from your account settings or by contacting support at hello@evalent.io. Cancellation takes effect at the end of the current billing period; you retain access until that date.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            We will notify you of any price changes with at least 30 days&apos; notice before they take effect.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">4. Free Trial</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent offers a free trial of 10 assessment reports. No credit card is required to access the free trial. At the end of your trial, you will be invited to select a paid plan to continue using the platform. You will not be charged unless you explicitly select and confirm a paid plan.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">5. Acceptable Use</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent may be used only for lawful admissions assessment purposes by authorised school administrators and assessors. You agree not to misuse the platform, attempt to access student data without authorisation, reverse-engineer any component of the platform, or use assessment results for any purpose other than legitimate school admissions.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Assessment data submitted through the platform relates to minors. You agree to handle this data in accordance with applicable data protection law, including the UK GDPR and, where applicable, the EU GDPR and FERPA.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">6. Assessment Results and Evalent Evaluation</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent&apos;s reports are generated using automated scoring and Evalent-assisted writing evaluation. They are designed to support, not replace, the professional judgement of qualified admissions staff. Evalent makes no guarantee that assessment results will predict future academic performance. Admissions decisions remain the sole responsibility of the school.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">7. Intellectual Property</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            All assessment content, scoring rubrics, report templates, and platform software are the proprietary intellectual property of Evalent Ltd. You may not reproduce, redistribute, or resell any component of the platform or its outputs without prior written consent.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">8. Limitation of Liability</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            To the maximum extent permitted by law, Evalent Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the fees paid by you in the 12 months preceding the claim.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">9. Governing Law</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">10. Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            For questions about these terms, contact us at <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
