import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 items-start">

          {/* Brand column — logo sits above, text starts where other headers start */}
          <div>
            <img src="/evalent-logo-white.png" alt="Evalent" className="h-12 w-auto mb-6" />
            <p className="text-blue-300 text-sm leading-relaxed">
              AI-powered admissions assessments for international and independent schools. Structured reports, automated scoring, and one-click decisions — in under 5 minutes per candidate.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Product</div>
            <div className="space-y-2 text-sm text-blue-200">
              <Link href="/features" className="block hover:text-white transition-colors">Features</Link>
              <Link href="/curricula" className="block hover:text-white transition-colors">Curricula</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <Link href="/demo" className="block hover:text-white transition-colors">See Evalent in action</Link>
            </div>
          </div>

          {/* Schools by country */}
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Schools by country</div>
            <div className="space-y-2 text-sm text-blue-200">
              <Link href="/uk" className="block hover:text-white transition-colors">UK Independent Schools</Link>
              <Link href="/usa" className="block hover:text-white transition-colors">US Independent Schools</Link>
              <Link href="/australia" className="block hover:text-white transition-colors">Australian Independent Schools</Link>
              <Link href="/new-zealand" className="block hover:text-white transition-colors">New Zealand Schools</Link>
            </div>
          </div>

          {/* Company + Platform */}
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Company</div>
            <div className="space-y-2 text-sm text-blue-200 mb-6">
              <a href="mailto:hello@evalent.io" className="block hover:text-white transition-colors">Contact</a>
              <a href="mailto:partners@evalent.io" className="block hover:text-white transition-colors">Partners</a>
            </div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Platform</div>
            <div className="space-y-2 text-sm text-blue-200">
              <a href="https://app.evalent.io/login" className="block hover:text-white transition-colors">Sign in</a>
              <a href="https://app.evalent.io/signup" className="block hover:text-white transition-colors">Start free trial</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-xs text-blue-400">&copy; 2026 Evalent Ltd. All rights reserved.</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/legal/terms" className="text-xs text-blue-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/privacy" className="text-xs text-blue-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/refunds" className="text-xs text-blue-400 hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/legal/cookies" className="text-xs text-blue-400 hover:text-white transition-colors">Cookie Policy</Link>
              <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-white transition-colors">Paddle Buyer Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
