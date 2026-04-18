import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportsDemo from '@/components/features/ReportsDemo'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Report Generation | Evalent Features',
  description: 'From assessment submission to a professional, school-branded PDF report in under 5 minutes. Scores, narrative, and recommendation included.',
}

export default function Page() {
  const reportItems = [
    'Domain scores: English, Mathematics, Reasoning (% vs your threshold)',
    'Writing band: Excellent / Good / Developing / Limited with commentary',
    'Evalent recommendation: Ready to admit, Admit with support, Borderline, Not yet ready',
    "Student's actual written responses, verbatim",
    'Mindset and values lens summary',
    'School-branded cover page with student reference',
  ]

  const bands = [
    { band: 'Ready to admit',               cls: 'border-green-300 bg-green-50',   tc: 'text-green-700', icon: '✓', desc: 'All core domains meet your school’s entrance threshold and mindset score is strong. No significant concerns identified.' },
    { band: 'Ready to admit with support',   cls: 'border-blue-200 bg-blue-50',    tc: 'text-blue-700',  icon: '≈', desc: 'Core domains meet threshold but one area suggests the student will benefit from structured academic support in their first term.' },
    { band: 'Borderline: further review',cls: 'border-yellow-200 bg-yellow-50',tc: 'text-yellow-700',icon: '?',     desc: 'One or more domains are below threshold. The report flags which and by how much. An interview or further assessment is recommended.' },
    { band: 'Not yet ready',                  cls: 'border-red-200 bg-red-50',      tc: 'text-red-700',   icon: '✕', desc: 'Multiple domains are significantly below threshold. The report supports a clear, defensible decision with enough detail to explain to families.' },
  ]

  const reportsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long does it take to receive the Evalent report?', acceptedAnswer: { '@type': 'Answer', text: 'The report is generated automatically within five minutes of submission. Your assessor receives it by email immediately, with no manual steps required.' } },
    { '@type': 'Question', name: 'What does an Evalent admissions report include?', acceptedAnswer: { '@type': 'Answer', text: 'Every report includes domain scores for English, Mathematics, and Reasoning; writing evaluation with band and commentary; Mindset lens; Motivation and School Fit lens; an executive summary; and the student\'s written responses verbatim.' } },
    { '@type': 'Question', name: 'What are the Evalent recommendation bands?', acceptedAnswer: { '@type': 'Answer', text: 'Evalent uses four bands: Ready to Admit, Admit with Support, Borderline, and Not Yet Ready, each calculated against your school\'s own entrance thresholds.' } },
    { '@type': 'Question', name: 'Can thresholds be set differently for each grade?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. English, Mathematics, and Reasoning thresholds are configured independently per grade.' } },
    { '@type': 'Question', name: 'Can Evalent reports be shared with parents?', acceptedAnswer: { '@type': 'Answer', text: 'Reports can be shared via a secure time-limited link. They are written in accessible language suitable for parent communication.' } },
  ],
}

const FAQ = [
  { q: 'How long does it take to receive the report after a student submits?', a: 'The report is generated automatically within five minutes of submission. Your designated assessor receives it by email immediately, with no manual steps required.' },
  { q: 'What does an Evalent admissions report include?', a: 'Every report includes: domain scores for English, Mathematics, and Reasoning versus your thresholds; writing evaluation with band and commentary; Mindset lens; Motivation and School Fit lens; an AI executive summary; and the student\'s written responses verbatim.' },
  { q: 'What are the Evalent recommendation bands?', a: 'Evalent uses four bands: Ready to Admit, Admit with Support, Borderline, and Not Yet Ready. Each is calculated against your school\'s own entrance thresholds, not national norms.' },
  { q: 'Can entrance thresholds be set differently for each grade?', a: 'Yes. English, Mathematics, and Reasoning thresholds are configured independently per grade. A Grade 3 entry uses different thresholds from a Grade 10 entry.' },
  { q: 'Can reports be shared with parents?', a: 'Reports can be shared via a secure time-limited link. They are written in accessible language. Schools should apply their own judgement on what to share with families and when.' },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <FaqAccordion faqs={FAQ} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/assessment" className="text-gray-400 hover:text-brand text-sm">← The Assessment</Link>
          <Link href="/features/decisions" className="text-brand font-semibold hover:underline text-sm">Next: Decision Workflow →</Link>
        </div>
      </div>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportsFaqSchema) }} />
      <Footer />
    </div>
  )
}
