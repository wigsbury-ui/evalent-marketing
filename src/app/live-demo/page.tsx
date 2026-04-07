import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EvalDemo from '@/components/EvalDemo'
import HeroTrialButton from '@/components/HeroTrialButton'

export const metadata: Metadata = {
  title: 'Live Demo — See Evalent Evaluate',
  description: 'Write any response and watch Evalent score it across four criteria in seconds. Calibrated to grade and curriculum.',
}

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            LIVE DEMO
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            See it evaluate.<br />
            <span className="text-blue-300">Right now.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Write any response — 50 words or more — and watch Evalent score it across four criteria in seconds. Calibrated to grade and curriculum.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* Demo */}
      <div className="bg-white">
        <EvalDemo />
      </div>

      <Footer />
    </div>
  )
}
