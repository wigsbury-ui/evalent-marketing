import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportsDemo from '@/components/features/ReportsDemo'

export const metadata = {
  title: 'Report Generation — Evalent Features',
  description: 'From assessment submission to a professional PDF report in under 5 minutes. Fully automatic — scores, AI narrative, and recommendation included.',
}

export default function ReportsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 4 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Report Generation</h1>
          <p className="text-blue-300 text-lg leading-relaxed">A professional, school-branded admissions report generated automatically — ready in minutes, not days.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><ReportsDemo /></section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm">
          <a href="/features/assessment" className="text-gray-400 hover:text-brand">← The Assessment</a>
          <a href="/features/decisions" className="text-brand font-semibold hover:underline">Next: Decision Workflow →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
