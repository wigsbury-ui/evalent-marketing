import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Curricula — Evalent',
  description: 'Evalent assessments are fully calibrated for IB, British and American curricula. Same platform, same rigour — right language for every programme.',
}

const CURRICULA = [
  {
    slug: 'ib',
    name: 'International Baccalaureate',
    short: 'IB',
    grades: 'Grades 3–10',
    programmes: 'PYP (G3–5)  ·  MYP (G6–10)',
    tagline: 'Inquiry-based. Learner Profile-aligned. Global contexts.',
    colour: 'border-blue-300 bg-blue-50',
    tc: 'text-blue-700',
    dot: 'bg-blue-500',
    where: 'Dubai, Singapore, Hong Kong, Doha, Kuala Lumpur',
    items: ['Learner Profile attributes in commentary', 'PYP transdisciplinary framing G3–5', 'MYP ATL skills and global contexts G6–10', 'Criterion-referenced evaluation language'],
  },
  {
    slug: 'british',
    name: 'British National Curriculum',
    short: 'British',
    grades: 'Years 4–11',
    programmes: 'KS2 (Y4–6)  ·  KS3 (Y7–9)  ·  KS4 (Y10–11)',
    tagline: 'Attainment targets. Formal register. Evidence-based reasoning.',
    colour: 'border-red-200 bg-red-50',
    tc: 'text-red-700',
    dot: 'bg-red-500',
    where: 'UK, UAE, Malaysia, East Africa, Europe',
    items: ['KS2/KS3/KS4 attainment language', 'Point-Evidence-Explanation writing framing', 'Formal register expectations', 'British spelling throughout'],
  },
  {
    slug: 'american',
    name: 'American Curriculum',
    short: 'American',
    grades: 'Grades 3–10',
    programmes: 'Elementary (G3–5)  ·  Middle (G6–8)  ·  High (G9–10)',
    tagline: 'Common Core-aligned. Thesis-driven. AP-pathway ready.',
    colour: 'border-indigo-200 bg-indigo-50',
    tc: 'text-indigo-700',
    dot: 'bg-indigo-500',
    where: 'USA, Middle East, Asia-Pacific, Latin America',
    items: ['Common Core ELA and Math standards', 'Thesis-body-conclusion essay framing', 'College and career readiness language', 'AP/honours pathway indicators at G9–10'],
  },
]

export default function CurriculaPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Built for the curriculum<br/>
            <span className="text-blue-300">your school actually uses.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed">
            Same rigorous assessment. Same automated pipeline. But the evaluation language, writing expectations, and report framing match what your students are actually taught.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 text-base leading-relaxed">
              Most assessment platforms apply a single rubric to every student. Evalent does not. A Grade 7 IB student is evaluated with MYP vocabulary and ATL skill framing. A Year 8 British student is assessed against KS3 attainment targets. An American Grade 9 student is evaluated for AP-pathway readiness. The difference matters — for report accuracy, and for the confidence your assessors can place in it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CURRICULA.map((c) => (
              <Link key={c.slug} href={`/curricula/${c.slug}`}
                className={`border-2 rounded-2xl p-6 hover:shadow-md transition-all group ${c.colour}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  <span className={`text-xs font-bold tracking-widest ${c.tc}`}>{c.short}</span>
                </div>
                <h2 className="text-base font-black text-navy mb-1">{c.name}</h2>
                <div className="text-xs text-gray-500 mb-0.5">{c.grades}</div>
                <div className="text-xs text-gray-400 mb-3">{c.programmes}</div>
                <p className="text-xs text-gray-600 leading-relaxed italic mb-4">{c.tagline}</p>
                <div className="space-y-1 mb-4">
                  {c.items.map(item => (
                    <div key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className={`flex-shrink-0 font-bold ${c.tc}`}>✓</span>{item}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-400 border-t border-white/60 pt-3 mb-3">Common in: {c.where}</div>
                <div className={`text-xs font-bold ${c.tc} group-hover:underline`}>View full details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full">WHAT STAYS THE SAME</div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              ['4 domains', 'English, Maths, Reasoning and Mindset on every assessment, every curriculum'],
              ['Report format', 'Same professional PDF, branded to your school, same structure every time'],
              ['Decision workflow', 'Same one-click email, same dashboard, same audit trail'],
              ['Pricing', 'No curriculum surcharge. All three included in every plan'],
            ].map(([label, desc]) => (
              <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-xs font-bold text-navy mb-1.5">{label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-white tracking-tight mb-3">Not sure which applies to your school?</h2>
          <p className="text-blue-300 text-sm mb-6 leading-relaxed">You select your curriculum once when setting up. If your school runs two programmes, contact us — multi-curriculum accounts are supported.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Start free trial →</a>
            <a href="mailto:hello@evalent.io" className="bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">Talk to us</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
