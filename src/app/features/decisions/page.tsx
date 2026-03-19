import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DecisionsDemo from '@/components/features/DecisionsDemo'

export const metadata = {
  title: 'Decision Workflow — Evalent Features',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 5 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Decision Workflow</h1>
          <p className="text-blue-300 text-lg leading-relaxed">The report arrives in the assessor’s inbox. One click records the decision. Nothing else required.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><DecisionsDemo /></section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div key="To record decision"><div className="text-3xl font-black text-navy tracking-tight">1 click</div><div className="text-sm text-gray-500 mt-1">To record decision</div></div>
          <div key="Portal logins needed"><div className="text-3xl font-black text-navy tracking-tight">0</div><div className="text-sm text-gray-500 mt-1">Portal logins needed</div></div>
          <div key="Audit trail"><div className="text-3xl font-black text-navy tracking-tight">100%</div><div className="text-sm text-gray-500 mt-1">Audit trail</div></div>
        </div>
      </section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/features/reports" className="text-gray-400 hover:text-brand text-sm">← Report Generation</a>
          <a href="/#trial" className="text-brand font-semibold hover:underline text-sm">Start your free trial →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
