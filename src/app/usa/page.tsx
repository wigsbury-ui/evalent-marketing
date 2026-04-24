import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import FaqList from '@/components/features/FaqList'
import CtaTrialButton from '@/components/CtaTrialButton'

export const metadata = {
  title: 'Evalent for US Independent Schools',
  description: 'Admissions assessment software built for US independent and private schools. Common Core-aligned reports. Structured evidence for every admissions decision.',
}

export default function Page() {
  const challenges = [
    { title: 'Standardised tests are not designed for K–12 admissions', desc: 'SSAT and ISEE are widely used but expensive, time-consuming, and not available on demand. For many independent schools, especially at lower school entry, they are disproportionate tools for the decision at hand.' },
    { title: 'Admissions officers are evaluating writing without writing samples', desc: 'Most applications include a short personal statement from a parent, not the student. Evalent gives every applicant a timed, structured writing task evaluated against grade-level expectations before the applicant ever sets foot on campus.' },
    { title: 'AP and honors tracking starts with entry decisions', desc: 'At grades 9–10, the question is not just whether to admit, it is where to place the student. Evalent’s report includes explicit AP and honors readiness indicators that inform both decisions simultaneously.' },
    { title: 'Documentation for accreditation and governance', desc: 'Independent school accreditation bodies increasingly expect documented, consistent admissions practices. A structured, reproducible assessment with an audit trail is a more defensible record than interview notes.' },
  ]

  const differences = [
    ['Common Core ELA and Math alignment', 'Every question and rubric is mapped to CCSS grade-level expectations. Your admissions team and faculty will recognise the language and the standards.'],
    ['Thesis-driven writing evaluation', 'American schools teach a clear thesis, supporting evidence, and a synthesising conclusion. Evalent evaluates extended writing against this structure explicitly.'],
    ['Elementary / Middle / High school framing', 'Reports distinguish between school levels automatically. A Grade 5 elementary report reads differently from a Grade 9 high school one.'],
    ['AP and honors readiness at Grade 9–10', 'At upper school entry, the report includes a section on analytical writing quality with a clear statement on advanced track readiness.'],
    ['Text-based evidence assessment', 'Close reading and evidence-based argument are central to American ELA. Evalent evaluates whether students ground their writing in specific, cited examples.'],
    ['College and career readiness language', 'Reports use the language American educators use, not British Key Stage or IB Learner Profile terminology.'],
  ]

  const faqs = [
    ['Is this a replacement for the SSAT or ISEE?', 'Evalent serves a different purpose. SSAT and ISEE are norm-referenced third-party tests for selective secondary entry. Evalent is a school-administered, criterion-referenced assessment for any entry point from Grade 3 upward. Many schools use both: Evalent for initial screening, SSAT for final selection.'],
    ['Does Evalent meet NAIS admission standards?', 'Evalent supports best practice in independent school admissions as described by NAIS: structured, evidence-based, documented, and respectful of the whole child. It produces the kind of documented record that accreditation reviewers look for.'],
    ['Can we use Evalent for both lower school and upper school entry?', 'Yes. Grades 3–10 are all covered. Each grade has its own calibrated assessment.'],
    ['What about students with IEPs or 504 plans?', 'Extended time and other accommodations can be configured per student before the link is sent.'],
    ['How does the writing evaluation work?', 'Students complete an extended writing task responding to an age-appropriate prompt. Evalent evaluates the response against four criteria: task completion, organisation, vocabulary, and accuracy. The assessor receives both a band rating and written commentary.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Admissions assessment<br/>
            <span className="text-blue-300">built for US independent schools.</span>
          </h1>
          <p className="text-blue-300 text-base leading-relaxed max-w-xl mx-auto mb-2">
            Common Core-aligned reports from Grade 3 to Grade 10. Structured evidence for every admissions decision, including AP-track placement at Grade 9–10.
          </p>

          <div className="mt-6">
            <HeroTrialButton />
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto mb-10">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175601815?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | How it works"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second overview</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE US INDEPENDENT SCHOOL CONTEXT</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">US independent schools are data-literate. Their admissions process often is not.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              American independent schools invest heavily in academic programmes, faculty development, and student outcomes measurement. But the evidence gathered during admissions, the point at which the school’s entire future cohort is selected, is often thinner than the data collected in a single semester of student performance.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A parent statement, a school transcript, and a campus visit tell you something. They do not tell you how the student writes under time pressure, how they approach an unfamiliar reasoning problem, or how their academic profile compares to your school’s entrance expectations. Evalent fills that gap.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every candidate gets the same structured assessment. Every assessor gets the same structured report. Decisions become more consistent, more defensible, and faster.
            </p>
          </div>
          <div className="space-y-3">
            {challenges.map((c) => (
              <div key={c.title} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0 mt-1.5"/>
                <div>
                  <div className="text-xs font-bold text-navy mb-1">{c.title}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">BUILT FOR AMERICAN SCHOOLS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What makes Evalent right for US independent schools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {differences.map((d) => (
              <div key={d[0]} className="border border-indigo-100 bg-indigo-50 rounded-xl p-4">
                <div className="text-xs font-bold text-indigo-700 mb-1.5">{d[0]}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{d[1]}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/curricula/american" className="text-brand text-sm font-semibold hover:underline">
              Full details: how Evalent handles the American curriculum →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">G3–10</div><div className="text-sm text-blue-300 mt-1">All entry grades</div></div>
          <div><div className="text-3xl font-black text-white">AP ready</div><div className="text-sm text-blue-300 mt-1">Indicated at Grade 9–10</div></div>
          <div><div className="text-3xl font-black text-white">&lt;5 min</div><div className="text-sm text-blue-300 mt-1">From submission to report</div></div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions from US independent schools</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-indigo-50 py-12 px-6 border-t border-indigo-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <CtaTrialButton />
            <a href="mailto:hello@evalent.io" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">Talk to us</a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/uk" className="text-gray-400 hover:text-brand text-sm">← UK</Link>
          <Link href="/australia" className="text-brand font-semibold hover:underline text-sm">Australia →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
