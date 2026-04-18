const teamFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What role groups does Evalent Team Management offer?", "acceptedAnswer": {"@type": "Answer", "text": "Evalent offers four role groups: Admissions Team for day-to-day operations, Senior Leadership for full operational and strategic access, Board Chair for governance with executive report generation, and Board Members for strategic overview without individual student data access."}},
    {"@type": "Question", "name": "Can board members see enrolment data without seeing individual student records?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Board Members role group provides access to enrolment KPIs, strategic signals, and executive reports but has no access to individual student data, assessment reports, or admission decisions."}},
    {"@type": "Question", "name": "Is there a limit on team members in Evalent?", "acceptedAnswer": {"@type": "Answer", "text": "No. There is no limit on the number of team members per school. Each person is assigned to a role group and can have individual permission overrides."}},
    {"@type": "Question", "name": "Is Team Management included in the free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Team Management with all four role groups and permission controls is fully available during the 10-report free trial."}}
  ]
}

import HeroTrialButton from '@/components/HeroTrialButton'
import TeamDemo from '@/components/features/TeamDemo'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Team & Access Management | Evalent Features',
  description: 'Give every team member exactly the access they need. Four role groups, six permissions, and full control, without complexity.',
}

export default function Page() {
  const features = [
    { label: 'Four role groups',      desc: 'Admissions Team, Senior Leadership, Board Chair, Board Members, each with tailored presets' },
    { label: 'Six permissions',       desc: 'Register students, send assessments, dashboard, reports, strategy, executive reports' },
    { label: 'Three access levels',   desc: 'Edit, View, or No access, precise control over every feature for every person' },
    { label: 'Individual overrides',  desc: 'Adjust any person beyond their role preset, with clear visual indicators for modified settings' },
  ]

  const FAQ = [
  { q: 'Can I adjust individual permissions beyond the role preset?', a: 'Yes. Any permission can be overridden at the individual level. Modified permissions are highlighted with an amber indicator so your admissions head can see at a glance who has a custom setup.' },
  { q: 'Can board members see individual student data?', a: 'No. Board Member and Board Chair roles do not have access to student-level reports by default. They see enrolment KPIs, strategic signals, and executive reports only.' },
  { q: 'How do I invite a new team member?', a: 'From the Team page, click Add Team Member, enter their name and email, assign their role group, and send the invitation. They receive a secure welcome email with login instructions.' },
  { q: 'Is there an audit trail for permission changes?', a: 'Yes. All permission changes are logged with timestamp and attribution, giving you a complete record for governance and compliance purposes.' },
  { q: 'Is there a limit on the number of team members?', a: 'No. There is no limit on team members per school. Each person is assigned to a role group and can have individual permission overrides as needed.' },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <FaqAccordion faqs={FAQ} />

      {/* PREV / NEXT */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/strategy" className="text-gray-400 hover:text-brand text-sm">← Strategy & Enrolment</Link>
          <Link href="/features" className="text-brand font-semibold hover:underline text-sm">All features overview →</Link>
        </div>
      </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamFaqSchema) }} />
      <Footer />
    </div>
  )
}
