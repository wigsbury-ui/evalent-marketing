import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Intelligent Evaluation — Why Evalent',
  description: 'AI-powered, rubric-based scoring that goes beyond multiple choice — evaluating how students think, write, and reason.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Assessment that actually measures what matters.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">AI-powered, rubric-based scoring that goes beyond multiple choice — evaluating how students think, write, and reason.</p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            <div className="border border-blue-100 border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Beyond the tick box</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Most admissions assessments measure recall. Evalent measures capability. Every assessment includes extended writing tasks that require students to construct arguments, deploy evidence, and demonstrate subject-specific reasoning — evaluated by AI against curriculum-aligned rubrics.</p>
            </div>
            <div className="border border-blue-100 border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Consistent across every candidate</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Human marking introduces variability. Evalent applies the same rubric to every response, every time. A student assessed in September and a student assessed in March are measured against an identical standard.</p>
            </div>
            <div className="border border-blue-100 border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Calibrated to your curriculum</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Questions and rubrics are mapped to the curriculum your school teaches — IB, British National Curriculum, or American Common Core. The language in the report reflects the professional vocabulary your team uses.</p>
            </div>
            <div className="border border-blue-100 border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Constructed by experts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Assessment items are developed by experienced educators and validated across grade levels. Each question is calibrated to the specific entry point — a Grade 4 assessment reads differently from a Grade 9 one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-white">4</div>
            <div className="text-sm text-blue-300 mt-1">Domains assessed</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">AI</div>
            <div className="text-sm text-blue-300 mt-1">Writing evaluation</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">G3–10</div>
            <div className="text-sm text-blue-300 mt-1">All entry grades</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/signup" className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">Start free trial →</a>
            <Link href="/why" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">All benefits →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
