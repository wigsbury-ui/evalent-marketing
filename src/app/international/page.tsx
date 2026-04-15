import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'

export const metadata = {
  title: 'Evalent for International Schools',
  description: 'Admissions assessments for international schools running IB, British, American, Australian and other curricula. Consistent, evidence-based reports for globally mobile students. 10 free reports to start.',
}

export default function Page() {
  const challenges = [
    {
      title: 'Students arrive from every schooling tradition',
      desc: 'An applicant to your Grade 6 may have studied in the US Common Core system, a British prep school, a French lycée, or a local national curriculum. Comparing their school reports meaningfully is almost impossible. What you need is a structured assessment that gives every candidate the same fair opportunity, regardless of where they have been educated.',
    },
    {
      title: 'International families expect a rigorous, professional process',
      desc: 'Families relocating internationally are often sophisticated consumers of education. They have seen multiple school systems and multiple admissions processes. An informal or paper-based assessment does not signal the academic standards they are looking for. A professional digital assessment with a written report communicates rigour before the child has started.',
    },
    {
      title: 'Admissions teams are stretched across multiple campuses and time zones',
      desc: 'International schools often have small admissions teams managing high volumes across different intakes, with families based in multiple countries. A process that sends a link, runs the assessment, and delivers a report automatically is not just convenient — for many schools, it is the only viable way to operate at scale.',
    },
    {
      title: 'Multi-curriculum schools need a single consistent system',
      desc: 'Some international schools run more than one curriculum stream — IB alongside British, or American alongside local national. A single assessment platform that adapts its language and framing to the relevant curriculum keeps your process consistent without requiring separate tools.',
    },
  ]

  const benefits = [
    ['Works across every major curriculum', 'Evalent supports IB (PYP & MYP), British National Curriculum, American Common Core, Australian ACARA, New Zealand NZC, and more. Every report automatically uses the language of the curriculum your school teaches.'],
    ['Grade naming adapts to your school', 'Whether your school uses Year groups, Grades, or custom labels, the platform and every report reflect your naming convention. Assessors never see labels that do not match their context.'],
    ['Fair for students from any background', 'The assessment is structured and curriculum-aligned, but written to be accessible to able students from diverse educational backgrounds. It measures how students think and reason — not what they have memorised in a particular system.'],
    ['Supervised on campus', 'The assessment is designed to be sat under supervision at your school. It runs in a browser, requires no printing, and takes around 45 minutes. A short video guide introduces each section, settling students who may be unfamiliar with the format.'],
    ['Reports in under five minutes', 'From the moment a student submits, Evalent evaluates every response automatically and delivers a professional report to your assessor — with domain scores, written commentary, and a clear recommendation. No waiting, no manual scoring.'],
    ['Board-ready enrolment intelligence', 'For principals and leadership teams, the Strategy page provides a live view of every grade\'s enrolment position across the whole school. Six KPI cards, grade-level signals, and executive reports your board can act on in one click.'],
  ]

  const faqs = [
    ['Does Evalent work for schools running multiple curricula?', 'Yes. Each student is assessed against the curriculum you specify at registration. A school running both IB and British streams can use Evalent for both — reports will use the appropriate language for each stream automatically.'],
    ['What if our students speak English as a second language?', 'Evalent assessments are written in clear, accessible academic English and are designed for students who are capable of studying in English-medium schools. The writing evaluation takes language background into account as context, not as a penalty.'],
    ['Can we use Evalent for mid-year admissions?', 'Yes. Most international schools have rolling admissions throughout the year. Evalent works for individual assessments as well as cohort entry points — you can send a link to one student or fifty, and the process is identical.'],
    ['How do we handle students in different time zones?', 'The assessment link is sent by email and can be completed at any time before the expiry date you set. Students complete it under supervision when they visit campus, or at a scheduled time your team arranges.'],
    ['We are an IB World School. Is this suitable?', 'Yes. Evalent has a dedicated IB mode covering PYP (Grades 3–5) and MYP (Grades 6–10). Reports use IB ATL framing and describe student performance in the language of the IB learner profile.'],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">INTERNATIONAL SCHOOLS</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            One assessment platform.<br/>
            <span className="text-blue-300">Every curriculum. Every campus.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed mb-8">
            Evalent gives international schools a structured, consistent way to assess every applicant — regardless of where they have been educated, which curriculum they are joining, or where in the world they are applying from.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl bg-gray-100" style={{ paddingTop: '56.25%' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-3">🌐</div>
              <p className="text-sm text-gray-400 font-medium">Video walkthrough coming soon</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">90-second walkthrough</p>
        </div>
      </section>

      {/* CURRICULUM STRIP */}
      <section className="py-8 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-4">Curriculum programmes supported</p>
          <div className="flex flex-wrap gap-3">
            {[
              'IB PYP · Grades 3–5',
              'IB MYP · Grades 6–10',
              'British National Curriculum · Years 4–11',
              'Common Core · Grades 3–10',
              'ACARA · Years 4–10',
              'New Zealand NZC · Years 4–10',
            ].map(c => (
              <span key={c} className="text-xs font-semibold text-brand bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE CHALLENGE</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-8 max-w-2xl">
            International admissions is structurally harder than most schools acknowledge.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {challenges.map(({ title, desc }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">HOW EVALENT HELPS</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-8 max-w-2xl">
            Built for the realities of international school admissions.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map(([title, desc]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-black mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-12 px-6 bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-black text-white leading-snug mb-3">
            &ldquo;Every applicant deserves the same fair assessment — regardless of where they learned.&rdquo;
          </p>
          <p className="text-blue-300 text-sm">The Evalent principle for international admissions</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">COMMON QUESTIONS</div>
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">What international schools ask us</h2>
          <div className="space-y-3">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-navy mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">
            Try Evalent free with your next 10 applicants.
          </h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://app.evalent.io/signup"
              className="bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
              Start free trial →
            </a>
            <Link href="/curricula"
              className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              View curricula →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
