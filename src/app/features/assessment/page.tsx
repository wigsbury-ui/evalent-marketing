import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AssessmentDemo from '@/components/features/AssessmentDemo'
import ReportSlider from '@/components/features/ReportSlider'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

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

  const assessmentFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long does the Evalent assessment take?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 45 minutes, covering five sections: English reading and writing, Mathematics, Reasoning, Mindset, and a personal School Fit statement.' } },
    { '@type': 'Question', name: 'Does the student need to install anything?', acceptedAnswer: { '@type': 'Answer', text: 'No. The assessment runs in any modern web browser on a laptop, tablet, or desktop. No app, no account, no software installation required.' } },
    { '@type': 'Question', name: 'What happens if the student loses their internet connection?', acceptedAnswer: { '@type': 'Answer', text: 'Progress is automatically saved. Students can return to their link and continue from where they stopped, provided the link has not expired.' } },
    { '@type': 'Question', name: 'Can the assessment be supervised or taken at home?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Many schools use Evalent as a remote pre-visit assessment. Others run it on a supervised school device. The platform supports either approach.' } },
    { '@type': 'Question', name: 'Are Evalent assessments curriculum-aligned?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every assessment is calibrated to the entry grade and curriculum — IB, British, American, Australian, and New Zealand, Grades 3 to 10.' } },
  ],
}

const FAQ = [
  { q: 'How long does the Evalent assessment take?', a: 'Approximately 45 minutes, covering five sections: English reading comprehension, an extended writing task, Mathematics, Reasoning, Mindset, and a personal School Fit statement.' },
  { q: 'Does the student need to install anything?', a: 'No. The assessment runs in any modern web browser on a laptop, tablet, or desktop. No app, no account, no software installation required.' },
  { q: 'What happens if the student loses their internet connection?', a: 'Progress is automatically saved. Students can return to their assessment link and continue from where they stopped, provided the link has not yet expired.' },
  { q: 'Can the assessment be supervised or taken at home?', a: 'Both. Many schools use Evalent as a remote pre-visit assessment. Others run it on a supervised school device on campus. The platform supports either approach.' },
  { q: 'Are Evalent assessments curriculum-aligned?', a: 'Yes. Every assessment is calibrated to the entry grade and your school's curriculum. IB, British, American, Australian, and New Zealand curricula are all supported across Grades 3 to 10.' },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <FaqAccordion faqs={FAQ} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/dashboard" className="text-gray-400 hover:text-brand text-sm">← Assessment Dashboard</Link>
          <Link href="/features/reports" className="text-brand font-semibold hover:underline text-sm">Next: Report Generation →</Link>
        </div>
      </div>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentFaqSchema) }} />
      <Footer />
    </div>
  )
}
