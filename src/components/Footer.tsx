import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-lg font-black mb-3">EVAL<span className="text-brand-mid italic">ENT</span></div>
            <p className="text-blue-300 text-sm leading-relaxed">Admissions Intelligence for international schools.</p>
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Product</div>
            <div className="space-y-2 text-sm text-blue-200">
              <Link href="/features" className="block hover:text-white transition-colors">Features</Link>
              <Link href="/curricula" className="block hover:text-white transition-colors">Curricula</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Company</div>
            <div className="space-y-2 text-sm text-blue-200">
              <a href="mailto:hello@evalent.io" className="block hover:text-white transition-colors">Contact</a>
              <a href="mailto:partners@evalent.io" className="block hover:text-white transition-colors">Partners</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Platform</div>
            <div className="space-y-2 text-sm text-blue-200">
              <a href="https://app.evalent.io/login" className="block hover:text-white transition-colors">Sign in</a>
              <a href="#trial" className="block hover:text-white transition-colors">Start free trial</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-400">
          <span>© 2026 Evalent. All rights reserved.</span>
          <span>Proprietary — Evalent</span>
        </div>
      </div>
    </footer>
  )
}
