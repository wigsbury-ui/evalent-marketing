import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Conversion & Speed | Why Evalent',
  description: 'From assessment link to admissions decision in under five minutes, with automated reminders that keep every application moving.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Faster decisions. Higher yield.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">From assessment link to admissions decision in under five minutes, with automated reminders that keep every application moving.</p>
          <HeroTrialButton />
        </div>
      </section>
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175950476?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Conversion"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">The school that responds first often wins</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Families applying to multiple schools make decisions quickly. Evalent compresses the admissions timeline at every stage, from five-minute report generation to one-click decisions from the assessor's inbox. Faster cycles mean higher yield, without your team working any harder.</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            <div className="border border-orange-100 border-orange-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Under five minutes from submission to report</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The moment a student submits their assessment, the scoring pipeline runs automatically. Within five minutes, the assessor receives a complete professional report by email. No manual scoring. No waiting.</p>
            </div>
            <div className="border border-orange-100 border-orange-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">One click to record a decision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The assessor receives the report summary and five decision buttons in a single email. One click records the decision instantly, no portal login, no navigation, no delay. Assessors who are busy teachers respond faster when friction is removed.</p>
            </div>
            <div className="border border-orange-100 border-orange-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Automated reminders keep applications moving</h3>
              <p className="text-sm text-gray-600 leading-relaxed">If a student has not started their assessment, Evalent sends an automatic reminder. If an assessor has not responded within 48 hours, a follow-up is sent. Nothing stalls without someone noticing.</p>
            </div>
            <div className="border border-orange-100 border-orange-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Faster cycles improve conversion</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Families making school choices respond to speed. A school that delivers a decision in 48 hours converts at a higher rate than one that takes two weeks. Evalent gives your admissions team the tools to respond faster without working harder.</p>
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
