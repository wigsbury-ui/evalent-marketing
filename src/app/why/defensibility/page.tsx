import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Defensibility — Why Evalent',
  description: 'Structured, reproducible assessments with documented evidence — the kind of record accreditation bodies and governing boards expect to see.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Decisions you can stand behind.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">Structured, reproducible assessments with documented evidence — the kind of record accreditation bodies and governing boards expect to see.</p>
          <HeroTrialButton />
        </div>
      </section>
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175948384?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — Defensibility"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">Why every admissions decision needs to be evidenced</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Families challenge decisions. Governors ask questions. Accreditation reviewers expect documentation. Evalent gives your school a structured, reproducible assessment record that stands up to scrutiny — because every score, every report, and every decision is documented against criteria your school defines and owns.</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            <div className="border border-purple-100 border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Criterion-referenced, not norm-referenced</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Evalent scores students against your school's own entry thresholds — not a national average or a percentile rank. Every score is expressed as a percentage against a criterion your school has defined and owns.</p>
            </div>
            <div className="border border-purple-100 border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Reproducible methodology</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The same assessment structure, the same rubrics, the same scoring methodology — applied consistently across every intake. If a decision is ever questioned, the evidence is structured, documented, and explainable.</p>
            </div>
            <div className="border border-purple-100 border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Accreditation-ready records</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Independent school accreditation bodies increasingly expect documented, consistent admissions practices. An Evalent report provides exactly the kind of structured, reproducible record that satisfies that expectation.</p>
            </div>
            <div className="border border-purple-100 border-purple-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Board-level confidence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Governors and trustees can see that admissions decisions are based on consistent, structured evidence — not informal impressions. This reduces governance risk and supports board confidence in the admissions process.</p>
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
