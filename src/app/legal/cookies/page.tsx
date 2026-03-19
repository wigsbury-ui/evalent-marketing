import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Cookie Policy — Evalent',
  description: 'How Evalent uses cookies and similar technologies on its marketing website and platform.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-black text-navy mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: 19 March 2026</p>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            This policy explains how Evalent Ltd uses cookies and similar tracking technologies on this website (evalent.io) and the Evalent platform (app.evalent.io).
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">What are cookies?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and actions over time.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Cookies we use</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-2 text-left font-bold">Cookie</th>
                  <th className="px-4 py-2 text-left font-bold">Type</th>
                  <th className="px-4 py-2 text-left font-bold">Purpose</th>
                  <th className="px-4 py-2 text-left font-bold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr><td className="px-4 py-2 font-medium">__session</td><td className="px-4 py-2">Essential</td><td className="px-4 py-2">Maintains your login session on app.evalent.io</td><td className="px-4 py-2">Session</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">evalent_ref</td><td className="px-4 py-2">Functional</td><td className="px-4 py-2">Tracks referral attribution for trial signups</td><td className="px-4 py-2">30 days</td></tr>
                <tr><td className="px-4 py-2 font-medium">paddle_*</td><td className="px-4 py-2">Essential</td><td className="px-4 py-2">Set by Paddle for payment processing and fraud prevention</td><td className="px-4 py-2">Session / 1 year</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">_vercel_*</td><td className="px-4 py-2">Essential</td><td className="px-4 py-2">Set by Vercel infrastructure for routing and performance</td><td className="px-4 py-2">Session</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            We do not currently use advertising or analytics cookies (such as Google Analytics). If this changes, we will update this policy and seek your consent where required.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Essential cookies</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Essential cookies are necessary for the platform to function. They cannot be disabled without breaking core functionality such as login and payment processing. We do not require consent for essential cookies under UK GDPR.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Managing cookies</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            You can control cookies through your browser settings. Disabling cookies may affect your ability to use certain features of the platform. For more information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">allaboutcookies.org</a>.
          </p>

          <h2 className="text-lg font-black text-navy mt-8 mb-3">Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Questions about our use of cookies: <a href="mailto:hello@evalent.io" className="text-brand hover:underline">hello@evalent.io</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
