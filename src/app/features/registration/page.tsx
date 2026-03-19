import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RegistrationDemo from '@/components/features/RegistrationDemo'

export const metadata = {
  title: 'Student Registration — Evalent Features',
  description: 'Register students, configure grade thresholds, and send assessment links in seconds.',
}

export default function RegistrationPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 1 OF 5</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Student Registration</h1>
          <p className="text-blue-300 text-lg leading-relaxed">Add a student, select their grade, and send their assessment link — all in under 60 seconds.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <RegistrationDemo />
      </section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { num: '60s', label: 'From add to link sent' },
            { num: 'G3–G10', label: 'All grade levels' },
            { num: '3', label: 'Curricula supported' },
          ].map(({ num, label }) => (
            <div key={label}><div className="text-3xl font-black text-navy tracking-tight">{num}</div><div className="text-sm text-gray-500 mt-1">{label}</div></div>
          ))}
        </div>
      </section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-sm">
          <span className="text-gray-400">Feature 1 of 5</span>
          <a href="/features/dashboard" className="text-brand font-semibold hover:underline">Next: Assessment Dashboard →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
