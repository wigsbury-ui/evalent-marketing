import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AssessmentDemo from '@/components/features/AssessmentDemo'

export const metadata = {
  title: 'The Assessment — Evalent Features',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 3 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">The Assessment</h1>
          <p className="text-blue-300 text-lg leading-relaxed">What the applicant experiences — structured, timed, professional. Works on any device.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><AssessmentDemo /></section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div key="Total assessment time"><div className="text-3xl font-black text-navy tracking-tight">45 min</div><div className="text-sm text-gray-500 mt-1">Total assessment time</div></div>
          <div key="Domains assessed"><div className="text-3xl font-black text-navy tracking-tight">4</div><div className="text-sm text-gray-500 mt-1">Domains assessed</div></div>
          <div key="Browser-based"><div className="text-3xl font-black text-navy tracking-tight">Any device</div><div className="text-sm text-gray-500 mt-1">Browser-based</div></div>
        </div>
      </section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/features/dashboard" className="text-gray-400 hover:text-brand text-sm">← Dashboard</a>
          <a href="/features/reports" className="text-brand font-semibold hover:underline text-sm">Next: Report Generation →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
