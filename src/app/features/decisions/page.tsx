import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DecisionsDemo from '@/components/features/DecisionsDemo'

export const metadata = {
  title: 'Decision Workflow — Evalent Features',
  description: 'One-click Admit, Reject, Waitlist decisions directly from your inbox. No portal login. No manual data entry. Fully automated.',
}

export default function DecisionsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 5 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Decision Workflow</h1>
          <p className="text-blue-300 text-lg leading-relaxed">The report arrives in the assessor's inbox. One click records the decision. Nothing else required.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><DecisionsDemo /></section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm">
          <a href="/features/reports" className="text-gray-400 hover:text-brand">← Report Generation</a>
          <a href="/#trial" className="text-brand font-semibold hover:underline">Start your free trial →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
