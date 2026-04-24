import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AssessmentDemo from '@/components/features/AssessmentDemo'
import ReportSlider from '@/components/features/ReportSlider'
import Link from 'next/link'
import FaqAccordion from '@/components/features/FaqAccordion'

export const metadata = {
  title: 'The Assessment | Evalent Features',
  description: 'A structured 45-minute online assessment covering English, Mathematics, Reasoning and Mindset. Professional, timed, browser-based.',
}

export default function Page() {
  const domains = [
    { label: 'English', desc: 'Reading comprehension (MCQ) + extended writing task' },
    { label: 'Mathematics', desc: 'Core knowledge (MCQ) + applied problem-solving' },
    { label: 'Reasoning', desc: 'Non-verbal and verbal pattern recognition (MCQ)' },
    { label: 'Mindset', desc: 'Growth mindset and values inventory (short response)' },
    { label: 'School Fit', desc: 'Personal statement: why this school? Evaluated for authenticity and motivation' },
  ]

  const domainCards = [
    {
      domain: 'English', weight: '35%', color: 'border-brand bg-blue-50', tc: 'text-brand',
      parts: ['Reading comprehension: 8 calibrated passages and questions', 'Extended writing: one open-ended prompt (20 minutes)', 'Scored on: task completion, organisation, vocabulary, accuracy'],
      why: 'English is the primary indicator of readiness. The writing task gives Evalent and your assessors a real, unmediated sample of the student’s ability.',
    },
    {
      domain: 'Mathematics', weight: '35%', color: 'border-purple-300 bg-purple-50', tc: 'text-purple-700',
      parts: ['Core knowledge MCQ: number, algebra, geometry, data', 'Applied problem-solving: multi-step word problems', 'Written explanation task, show your reasoning'],
      why: 'The written maths task reveals whether a student can explain their thinking, a critical skill in IB and inquiry-based curricula.',
    },
    {
      domain: 'Reasoning', weight: '30%', color: 'border-green-300 bg-green-50', tc: 'text-green-700',
      parts: ['Pattern recognition: sequences, matrices, analogies', 'Verbal reasoning: logic, inference, classification', 'MCQ only, no written component'],
      why: 'Reasoning scores are the least susceptible to tutoring. A strong reasoning score alongside weaker English often signals a student who will thrive once settled.',
    },
    {
      domain: 'Mindset', weight: 'Contextual', color: 'border-amber-300 bg-amber-50', tc: 'text-amber-700',
      parts: ['Growth mindset inventory: 10 short items', 'Values alignment: how the student approaches challenge', 'Scored 0–4: strong / developing / needs support'],
      why: 'Mindset data is contextual, not a gatekeeper. Strong growth orientation with borderline academic scores can still support an offer.',
    },
    {
      domain: 'School Fit',
      weight: 'Contextual',
      color: 'border-pink-200 bg-pink-50',
      tc: 'text-pink-700',
      parts: [
        'Open personal statement: why this school?',
        'Evaluated for authenticity, specificity, and school knowledge',
        'Scored 0–4 with full AI narrative in the report',
      ],
      why: 'Evalent identifies coached responses, authentic motivation, and consistency with the rest of the assessment. Context your panel can actually use.',
    },
  ]

  const faqs: [string, string][] = [
    ['How long does the Evalent assessment take?', 'Approximately 45 minutes covering five sections: English reading comprehension, an extended writing task, Mathematics, Reasoning, Mindset, and a personal School Fit statement.'],
    ['Does the student need to install anything?', 'No. The assessment runs in any modern web browser on a laptop, tablet, or desktop. No app, no account, no software installation required.'],
    ['What happens if the student loses their internet connection?', 'Progress is automatically saved. Students can return to their link and continue from where they stopped, provided the link has not expired.'],
    ['How is the assessment delivered?', 'In school, on a device configured by the admissions team. Schools schedule a supervised assessment session and send the student their unique link. No software or account is required.'],
    ['Are Evalent assessments curriculum-aligned?', 'Yes. Every assessment is calibrated to the entry grade and curriculum. IB, British, American, Australian, and New Zealand curricula are all supported across Grades 3 to 10.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 3 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            A professional assessment.<br/>
            <span className="text-blue-300">In school. In 45 minutes.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            The applicant clicks their secure link, completes five structured sections, and submits. No software to install. No invigilator required. Automatically scored the moment it ends.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO — directly under hero */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175799185?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | The Assessment"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE APPLICANT EXPERIENCE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Designed to reveal ability, not test familiarity with test formats</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Evalent assessments are built around the curriculum your school uses, whether IB, British, or American. Questions are calibrated to the entry grade, so a Grade 4 applicant is not faced with secondary-level language or concepts.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The extended writing tasks give your assessors something a multiple-choice score never can: a real sample of how the student thinks and constructs an argument under time pressure.
            </p>
          </div>
          <div className="space-y-2">
            {domains.map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3 border border-brand/20 bg-blue-50 rounded-xl px-4 py-3">
                <span className="text-xs font-black text-brand w-24 flex-shrink-0 pt-0.5">{label}</span>
                <span className="text-xs text-gray-600 leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <ReportSlider />

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT WE ASSESS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Five components. One complete picture.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {domainCards.map((d) => (
              <div key={d.domain} className={`border-2 rounded-2xl p-5 ${d.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`text-base font-black ${d.tc}`}>{d.domain}</div>
                  <div className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/60 ${d.tc}`}>{d.weight} of overall score</div>
                </div>
                <ul className="space-y-1 mb-3">
                  {d.parts.map(p => <li key={p} className="text-xs text-gray-700 flex items-start gap-1.5"><span className={`${d.tc} flex-shrink-0 mt-0.5`}>•</span>{p}</li>)}
                </ul>
                <div className="border-t border-white/60 pt-3">
                  <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">WHY IT MATTERS</div>
                  <div className="text-xs text-gray-600 leading-relaxed italic">{d.why}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">45 min</div><div className="text-sm text-blue-300 mt-1">Total assessment time</div></div>
          <div><div className="text-3xl font-black text-white">5</div><div className="text-sm text-blue-300 mt-1">Assessment sections</div></div>
          <div><div className="text-3xl font-black text-white">Any device</div><div className="text-sm text-blue-300 mt-1">No software needed</div></div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/dashboard" className="text-gray-400 hover:text-brand text-sm">← Assessment Dashboard</Link>
          <Link href="/features/reports" className="text-brand font-semibold hover:underline text-sm">Next: Report Generation →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
