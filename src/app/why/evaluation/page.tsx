import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EvalDemo from '@/components/EvalDemo'
import CtaTrialButton from '@/components/CtaTrialButton'
import VimeoEmbed from '@/components/VimeoEmbed'

export const metadata = {
  title: 'Try the Live Evalent Writing Evaluator | Evalent',
  description: 'See Evalent evaluate real student writing in seconds. Choose a grade, write a response, and watch a professional Evalent evaluation appear instantly, the same tool used for every applicant.',
  openGraph: {
    title: 'Try the Live Evalent Writing Evaluator | Evalent',
    description: 'Experience exactly what Evalent does for every admissions applicant. Live Evalent evaluation in seconds.',
    url: 'https://www.evalent.io/why/evaluation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Try the Live Evalent Writing Evaluator | Evalent',
    description: 'Live Evalent evaluation. Choose a grade, write a response, get a professional evaluation instantly.',
  },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            LIVE EVALENT EVALUATION
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            See Evalent evaluate<br/>
            <span className="text-blue-300">your writing, right now</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed">
            This is exactly what Evalent does for every applicant. Choose a grade, write a response to the prompt, and watch a professional evaluation appear in seconds.
          </p>
        </div>
      </section>
      <VimeoEmbed videoId="1175949806" title="Evalent | Intelligent Evaluation" />

      <section className="pt-0 pb-12 px-4 bg-white">
        <EvalDemo />

      </section>
      <section className="py-16 px-6 bg-navy text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">This is what every applicant experiences.</h2>
          <p className="text-blue-300 mb-3">The same evaluation, structured, fair, and curriculum-aligned, for every candidate at your school.</p>
          <p className="text-blue-400 text-sm mb-7">Start with 10 free reports. No credit card required.</p>
          <CtaTrialButton variant="light" />
        </div>
      </section>
      <Footer />
    </div>
  )
}
