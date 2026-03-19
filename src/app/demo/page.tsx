import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EvalDemo from '@/components/EvalDemo'

export const metadata = {
  title: 'Try the AI Evaluator — Evalent',
  description: 'See Evalent\'s AI evaluate real student writing in seconds. Choose a grade, write a response, and watch a professional evaluation appear instantly.',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-navy text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            LIVE AI EVALUATION
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            See the AI evaluate<br/>
            <span className="text-blue-300">your writing — right now</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed">
            This is exactly what Evalent does for every applicant. Choose a grade, write a response to the prompt, and watch a real AI evaluation appear in seconds.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <EvalDemo />
      </section>
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { num: '<5s', label: 'To evaluate any response' },
            { num: '4', label: 'Criteria scored independently' },
            { num: 'G3–G10', label: 'All grade levels covered' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-3xl font-black text-navy tracking-tight">{num}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 bg-navy text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">Ready to use this for real applicants?</h2>
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
