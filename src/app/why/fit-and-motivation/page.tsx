import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import HeroTrialButton from '@/components/HeroTrialButton'
import CtaTrialButton from '@/components/CtaTrialButton'

export const metadata = {
  title: 'Fit & Motivation | Why Evalent',
  description: 'Every Evalent assessment asks students why they want to join your school. Evalent evaluates authenticity, school knowledge, and genuine motivation — intelligence your admissions panel can actually use.',
  openGraph: {
    title: 'Fit & Motivation | Why Evalent',
    description: 'Evalent surfaces genuine motivation, coached responses, and school-fit signals from every applicant — automatically.',
    url: 'https://www.evalent.io/why/fit-and-motivation',
  },
}

export default function Page() {
  const signals = [
    {
      label: 'Specificity',
      desc: 'Did the student name specific programmes, values, or aspects of your school? Generic responses and school-specific ones look very different.',
      icon: '🎯',
    },
    {
      label: 'Authentic voice',
      desc: 'Is this the student writing, or a parent? Evalent identifies coached language, vocabulary above grade level, and formulaic structure that masks the real applicant.',
      icon: '✍️',
    },
    {
      label: 'Self-awareness',
      desc: 'Does the student connect their own strengths and goals to what your school offers? Genuine reflection reads differently from generic aspiration.',
      icon: '🪞',
    },
    {
      label: 'Writing consistency',
      desc: "When a student's motivation statement is far more sophisticated than their structured writing task, that discrepancy is flagged. It matters for admissions integrity.",
      icon: '📊',
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            WHY EVALENT
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The question every assessor<br />
            <span className="text-blue-300">actually wants answered.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Every Evalent assessment ends with one open question: Why do you want to come to our school?
            Evalent evaluates the response automatically — and what it surfaces is often more revealing than the academic scores.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* THE INSIGHT */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
              WHAT EVALENT ANALYSES
            </div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">
              Two students with identical scores can have entirely different motivations.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Academic scores tell you whether a student can do the work. They do not tell you
              whether they actually want to be at your school, or whether their application
              reflects their own voice and thinking.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              The Evalent Motivation & School Fit lens evaluates every personal statement
              automatically. It looks at specificity, authenticity, self-awareness, and
              consistency with the rest of the assessment. The result is a short narrative
              and band score that appears in the report alongside the Mindset lens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              It is not a gatekeeper. It is context — the kind of context that turns a borderline
              decision from a coin toss into a considered judgement.
            </p>
          </div>
          <div className="space-y-3">
            {signals.map(({ label, desc, icon }) => (
              <div key={label} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
                <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-sm font-bold text-navy mb-1">{label}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">
              IN THE REPORT
            </div>
            <h2 className="text-2xl font-black text-navy tracking-tight">
              What the admissions panel sees
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              The Motivation & School Fit lens appears on its own page in every Evalent report,
              directly before the Mindset lens. It shows the band, score, AI narrative, and
              the student's original response verbatim.
            </p>
          </div>

          {/* Mock report card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden max-w-2xl mx-auto">
            <div className="bg-navy px-6 py-4 text-center">
              <div className="text-white font-black text-lg tracking-wide uppercase">Motivation &amp; School Fit</div>
              <div className="text-blue-300 text-xs mt-1 italic">"Why do you want to come to our school?"</div>
            </div>
            <div className="px-6 py-5">
              <div className="text-center mb-4">
                <span className="inline-block bg-green-600 text-white text-sm font-bold px-5 py-1.5 rounded-full">
                  Good — 3.0 / 4
                </span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed mb-4">
                The student demonstrates genuine awareness of the school's IB programme and articulates a
                clear connection between their interest in inquiry-based learning and the school's approach.
                The response is appropriately expressed for Grade 7 and reads as the student's own voice.
                A specific reference to the school's Model UN programme suggests prior research and authentic
                interest rather than a generic statement of ambition.
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 italic">
                <span className="font-bold not-italic text-navy">Student's Response: </span>
                I want to join your school because I have always been interested in global issues and I heard
                your Model UN programme is one of the best in the region. I think the IB way of learning,
                where you have to ask questions and make connections, suits how I like to think about problems.
              </div>
              <p className="text-xs text-gray-400 italic text-center mt-4">
                The Motivation lens is qualitative context for the admissions panel. It does not contribute to the overall academic score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE COACHING PROBLEM */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
            THE COACHING PROBLEM
          </div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-4">
            When the personal statement does not sound like the student.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl mx-auto">
            A nine-year-old who writes about their "placid prefrontal cortex" and the school's
            "university admissions support infrastructure" is not writing for themselves.
            Evalent recognises the gap between coached language and authentic expression,
            and surfaces it clearly in the report narrative.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            This is not about penalising families who seek guidance. It is about giving your
            admissions panel accurate intelligence — so a borderline decision is made on
            what you actually know about the student, not on a polished statement that may
            not be theirs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-navy text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">
            See it in a real report.
          </h2>
          <p className="text-blue-300 mb-3">
            Start a free trial and run your next real applicant through Evalent.
            The Motivation &amp; School Fit lens is included in every report, at every tier.
          </p>
          <p className="text-blue-400 text-sm mb-7">10 free reports. No credit card. Set up in 5 minutes.</p>
          <CtaTrialButton variant="light" />
        </div>
      </section>

      {/* PREV / NEXT */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center flex-wrap gap-3">
          <Link href="/why/decision-making" className="text-gray-400 hover:text-brand text-sm">
            ← Informed Decision Making
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
