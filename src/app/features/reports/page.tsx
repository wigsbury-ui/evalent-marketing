import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportsDemo from '@/components/features/ReportsDemo'

export const metadata = { title: 'Report Generation — Evalent Features' }

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 4 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Report Generation</h1>
          <p className="text-blue-300 text-lg leading-relaxed">A professional admissions report generated automatically — ready in minutes, not days.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><ReportsDemo /></section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-navy tracking-tight">&lt;5 min</div><div className="text-sm text-gray-500 mt-1">Submission to report</div></div>
          <div><div className="text-3xl font-black text-navy tracking-tight">100%</div><div className="text-sm text-gray-500 mt-1">Automatic</div></div>
          <div><div className="text-3xl font-black text-navy tracking-tight">Branded</div><div className="text-sm text-gray-500 mt-1">Every report</div></div>
        </div>
      </section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/features/assessment" className="text-gray-400 hover:text-brand text-sm">← The Assessment</a>
          <a href="/features/decisions" className="text-brand font-semibold hover:underline text-sm">Next: Decision Workflow →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
