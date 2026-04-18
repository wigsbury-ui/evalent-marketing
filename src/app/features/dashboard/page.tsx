import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DashboardDemo from '@/components/features/DashboardDemo'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Assessment Dashboard | Evalent Features',
  description: 'Track every applicant in real time. See who has completed, who is in progress, and who needs a nudge, all from one screen.',
}

export default function Page() {
  const features = [
    { label: 'Live updates', desc: 'Status changes instantly on completion' },
    { label: 'Score breakdown', desc: 'English, Maths, Reasoning per student' },
    { label: 'Recommendation', desc: 'Ready to admit, support, waitlist' },
    { label: 'Full report', desc: 'One click from dashboard to PDF' },
  ]

  const statuses = [
    { status: 'Registered',    cls: 'bg-gray-100 text-gray-600',    dot: 'bg-gray-400',     desc: 'Student added to the system. Assessment link not yet sent.' },
    { status: 'Link sent',     cls: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-500',   desc: 'The secure link has been emailed. Evalent monitors for completion and sends reminders.' },
    { status: 'In progress',   cls: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500',     desc: 'The student has opened the link and begun the assessment. The timer is running.' },
    { status: 'Complete',      cls: 'bg-green-100 text-green-700',  dot: 'bg-green-500',    desc: 'Assessment submitted. Scores calculated. Report generated and sent to the assessor.' },
    { status: 'Expired',       cls: 'bg-red-100 text-red-600',      dot: 'bg-red-400',      desc: 'The 72-hour link has expired without completion. You are notified and can extend or proceed.' },
    { status: 'Decision made', cls: 'bg-purple-100 text-purple-700',dot: 'bg-purple-500',   desc: 'The assessor has recorded their decision. The record is final and audit-logged.' },
  ]

  const dashboardFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly does the dashboard update after a student completes?', acceptedAnswer: { '@type': 'Answer', text: 'Instantly. Scores and the Evalent recommendation appear within seconds of the student submitting.' } },
    { '@type': 'Question', name: 'Can I filter applicants by grade, curriculum, or status?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The dashboard can be filtered by grade, curriculum, and pipeline status.' } },
    { '@type': 'Question', name: 'Can multiple team members access the dashboard?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All authorised users have dashboard access, governed by their role group and permission settings.' } },
    { '@type': 'Question', name: 'Can I export applicant data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CSV export is available covering all registered applicants with their status, scores, and decisions.' } },
    { '@type': 'Question', name: 'What happens when an assessment link expires without completion?', acceptedAnswer: { '@type': 'Answer', text: 'The status updates to Expired and you are notified. You can send a new link from the admin panel at any time.' } },
  ],
}

const FAQ = [
  { q: 'How quickly does the dashboard update after a student completes?', a: 'Instantly. Domain scores, the writing band, and the Evalent recommendation appear on the dashboard within seconds of the student submitting.' },
  { q: 'Can I filter applicants by grade, status, or curriculum?', a: 'Yes. The dashboard can be filtered by grade, curriculum, and pipeline status — useful for schools running assessments across multiple entry grades simultaneously.' },
  { q: 'Can multiple team members access the dashboard?', a: 'Yes. All authorised users on your school account have dashboard access, governed by their assigned role group and permission settings.' },
  { q: 'Can I export applicant data from the dashboard?', a: 'Yes. CSV export is available covering all registered applicants with their current status, domain scores, and decisions.' },
  { q: 'What happens when an assessment link expires without completion?', a: "The student's status updates to Expired and you are notified. You can send a new link from the admin panel at any time." },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <FaqAccordion faqs={FAQ} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/registration" className="text-gray-400 hover:text-brand text-sm">← Student Registration</Link>
          <Link href="/features/assessment" className="text-brand font-semibold hover:underline text-sm">Next: The Assessment →</Link>
        </div>
      </div>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardFaqSchema) }} />
      <Footer />
    </div>
  )
}
