import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AssessmentDemo from '@/components/features/AssessmentDemo'

export const metadata = {
  title: 'The Assessment — Evalent Features',
  description: 'A structured 45-minute online assessment covering English, Mathematics, Reasoning and Mindset. Browser-based, device-agnostic, timed.',
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 3 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">The Assessment</h1>
          <p className="text-blue-300 text-lg leading-relaxed">What the applicant experiences — a structured, timed assessment that feels professional and works on any device.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><AssessmentDemo /></section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm">
          <a href="/features/dashboard" className="text-gray-400 hover:text-brand">← Dashboard</a>
          <a href="/features/reports" className="text-brand font-semibold hover:underline">Next: Report Generation →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
