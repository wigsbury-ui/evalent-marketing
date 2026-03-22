import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EvalDemo from '@/components/EvalDemo'

export const metadata = {
  title: 'See Evalent Evaluate Your Writing — Evalent',
  description: 'See Evalent evaluate real student writing in seconds. Choose a grade, write a response, and watch a professional evaluation appear instantly.',
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
            <span className="text-blue-300">your writing — right now</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed">
            This is exactly what Evalent does for every applicant. Choose a grade, write a response to the prompt, and watch a professional evaluation appear in seconds.
          </p>
        </div>
      </section>
      <section className="px-6 bg-white pt-10 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175949806?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — Intelligent Evaluation"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">Assessment that measures how students think, not just what they recall</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Evalent goes beyond multiple choice. Extended writing tasks evaluated by AI give your assessors a real sample of how each student reasons and communicates — the same standard applied to every candidate, every time.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-black text-navy tracking-tight mb-2">Now try it yourself</h2>
          <p className="text-gray-500 text-sm">Choose a grade, write a response, and watch Evalent evaluate it in seconds.</p>
        </div>
        <EvalDemo />
      </section>
      <section className="py-16 px-6 bg-navy text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">Ready to use Evalent for real applicants?</h2>
          <p className="text-blue-300 mb-7">Get 10 free trial reports — no credit card needed.</p>
          <a href="/#trial" className="inline-block bg-white text-brand font-bold text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Start your free trial →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
