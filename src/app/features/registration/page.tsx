import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RegistrationDemo from '@/components/features/RegistrationDemo'

export const metadata = {
  title: 'Student Registration — Evalent Features',
}

export default function Page() {
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
      <section className="py-12 px-4 bg-gray-50"><RegistrationDemo /></section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div key="From add to link sent"><div className="text-3xl font-black text-navy tracking-tight">60s</div><div className="text-sm text-gray-500 mt-1">From add to link sent</div></div>
          <div key="All grade levels"><div className="text-3xl font-black text-navy tracking-tight">G3–G10</div><div className="text-sm text-gray-500 mt-1">All grade levels</div></div>
          <div key="Curricula supported"><div className="text-3xl font-black text-navy tracking-tight">3</div><div className="text-sm text-gray-500 mt-1">Curricula supported</div></div>
        </div>
      </section>
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span/>
          <a href="/features/dashboard" className="text-brand font-semibold hover:underline text-sm">Next: Assessment Dashboard →</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
