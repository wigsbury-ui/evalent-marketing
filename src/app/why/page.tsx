import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Why Evalent — Benefits',
  description: 'Intelligent evaluation, student wellbeing, transparency, defensibility, and faster conversion. Why schools choose Evalent.',
}

const BENEFITS = [
  { href: '/why/evaluation', title: 'Intelligent Evaluation', desc: 'AI-powered, rubric-based scoring that measures how students think, write, and reason — not just recall.', icon: '🧠' },
  { href: '/why/wellbeing', title: 'Student Wellbeing', desc: 'Video guides and a calm, structured format that reduces anxiety and helps every student perform at their best.', icon: '💚' },
  { href: '/why/transparency', title: 'Transparency', desc: 'A complete audit trail from registration to decision — timestamped, attributed, and permanently stored.', icon: '🔍' },
  { href: '/why/defensibility', title: 'Defensibility', desc: 'Structured, reproducible assessments with documented evidence that satisfies accreditation and governance expectations.', icon: '🛡️' },
  { href: '/why/conversion', title: 'Conversion & Speed', desc: 'From assessment link to admissions decision in under five minutes, with automated reminders that keep applications moving.', icon: '⚡' },
]

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Built for how independent schools actually work.</h1>
          <p className="text-blue-300 text-base leading-relaxed">Five reasons schools choose Evalent over the alternatives.</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto grid gap-4">
          {BENEFITS.map(({ href, title, desc, icon }) => (
            <Link key={href} href={href} className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 hover:border-brand hover:bg-blue-50 transition-all group">
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <div className="text-sm font-bold text-navy mb-1 group-hover:text-brand transition-colors">{title} →</div>
                <div className="text-sm text-gray-500 leading-relaxed">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
