import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy — Evalent',
  description: 'Evalent refund and cancellation policy. 14-day refund on first payment. Powered by Paddle.',
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
            Refund<br />
            <span className="text-blue-300">Policy.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-2xl">
            Our policy on refunds, cancellations, and subscription changes.
          </p>
          <p className="text-blue-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-sm max-w-none">

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            All Evalent purchases are processed by <strong>Paddle</strong> as Merchant of Record. Refund requests are handled in accordance with both this policy and <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Paddle&apos;s Buyer Terms</a>.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Free Trial</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Evalent offers 10 free assessment reports with no credit card required. You will not be charged until you explicitly select and confirm a paid plan.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">14-Day Refund Window</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            If you are unsatisfied with your first paid subscription payment, you may request a full refund within <strong>14 days</strong> of that payment by contacting <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a>. We will process your refund promptly, typically within 5&ndash;10 business days depending on your payment provider.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">EU and UK Consumer Right of Withdrawal</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            If you are a consumer based in the EU or UK, you have a statutory 14-day right of withdrawal from the date of purchase. However, by accessing the Evalent platform and generating assessment reports, you expressly consent to the immediate performance of the service and acknowledge that you may lose your right of withdrawal once the service has been fully performed.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            If you do not wish to waive this right, do not access the platform or generate any reports during the 14-day period.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Subsequent Renewals</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Subscription renewals are non-refundable. If you wish to cancel, please do so before your next renewal date. You retain access to the platform until the end of your paid period. To cancel, visit your account settings or contact hello@evalent.io.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">How to Request a Refund</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Email <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a> with your account email address and order reference (found in your Paddle receipt). We will respond within 2 business days.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            For billing queries, contact <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a> or use the customer portal link in your Paddle receipt.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
