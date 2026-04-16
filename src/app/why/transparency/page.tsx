import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Transparency | Why Evalent',
  description: 'A complete audit trail from registration to decision, timestamped, attributed, and permanently stored.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Every decision, fully documented.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">A complete audit trail from registration to decision, timestamped, attributed, and permanently stored.</p>
          <HeroTrialButton />
        </div>
      </section>
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175948548?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Transparency"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">Complete visibility from registration to decision</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Evalent gives every member of your admissions team a real-time view of every applicant at every stage. Every action is logged, every decision attributed, and every piece of evidence permanently stored. Nothing happens in the dark, and nothing can be quietly changed.</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            <div className="border border-indigo-100 border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Full pipeline visibility</h3>
              <p className="text-sm text-gray-600 leading-relaxed">From the moment a student is registered, every action is recorded. Link sent, email opened, assessment started, assessment submitted, report generated, report emailed, decision recorded. The admissions team can see exactly where every applicant stands at any point.</p>
            </div>
            <div className="border border-indigo-100 border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Assessor attribution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Every decision is attributed to the assessor who made it, with a timestamp. If a decision is amended, both the original and the amendment are recorded. Nothing is anonymous. Nothing can be quietly changed.</p>
            </div>
            <div className="border border-indigo-100 border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">The student's own words</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The report includes the student's written responses verbatim. Assessors see not just scores and commentary, but the actual work the student produced. There is no black box — the evidence is in the report.</p>
            </div>
            <div className="border border-indigo-100 border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Exportable records</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Admission data can be exported to CSV at any point. Schools can retain records for as long as their governance requirements demand.</p>
            </div>
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
