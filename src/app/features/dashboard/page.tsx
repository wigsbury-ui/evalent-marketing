import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DashboardDemo from '@/components/features/DashboardDemo'

export const metadata = {
  title: 'Assessment Dashboard — Evalent Features',
  description: 'Track every applicant across every grade in real time. See who has completed, who is in progress, and who needs a reminder.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 2 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Assessment Dashboard</h1>
          <p className="text-blue-300 text-lg leading-relaxed">Every applicant, every status, in one place. Updated in real time as assessments are completed.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50"><DashboardDemo /></section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm">
          <a href="/features/registration" className="text-gray-400 hover:text-brand">← Registration</a>
          <a href="/features/assessment" className="text-brand font-semibold hover:underline">Next: The Assessment →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
