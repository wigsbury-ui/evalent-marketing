const strategyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is the Evalent Strategy page?", "acceptedAnswer": {"@type": "Answer", "text": "The Strategy page gives principals and senior leadership a live picture of every grade's enrolment position, with six KPI cards, Evalent-generated signals, an enrolment planning table, and a one-click executive report generator ready for board packs."}},
    {"@type": "Question", "name": "Is the Strategy page included in the free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The full Strategy page including all six KPI cards, signals, and the executive report generator is available during the 10-report free trial with no credit card required."}},
    {"@type": "Question", "name": "What are the six KPI cards on the Strategy page?", "acceptedAnswer": {"@type": "Answer", "text": "The six KPI cards are: Fill Rate, Retention, New Entrants, Gap to Target, Leaver Risk, and Pipeline Velocity. Each updates automatically as admissions data changes."}},
    {"@type": "Question", "name": "What does the executive report contain?", "acceptedAnswer": {"@type": "Answer", "text": "The executive report covers pipeline activity, enrolment position by grade, trends, and three strategic recommendations. Generated in one click, available as PDF or Word, ready for a board pack."}}
  ]
}

import HeroTrialButton from '@/components/HeroTrialButton'
import StrategyDemo from '@/components/features/StrategyDemo'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Strategy & Enrolment Planning | Evalent Features',
  description: 'See your school\'s complete enrolment picture in real time. Six live KPI metrics, Evalent-generated grade signals, and board-ready executive reports.',
}

export default function Page() {
  const features = [
    { label: 'Six live KPIs',           desc: 'Fill rate, retention, new entrants, gap to target, leaver risk, pipeline velocity' },
    { label: 'Evalent strategic signals',    desc: 'Grade-level intelligence organised into capacity, retention, and pipeline sections' },
    { label: 'Enrolment planning',      desc: 'All grades in one editable view, with 8-week trend tracking per grade' },
    { label: 'Executive report',        desc: 'Evalent-generated board summary, available as PDF or Word in one click' },
  ]

  const FAQ = [
  { q: 'Does the Strategy page cover all grades including Early Years?', a: 'Yes. The enrolment planning table covers every grade from Pre-K to Grade 12. Grades assessed via Evalent have their Accepted and In Process figures auto-populated. All other data is entered manually.' },
  { q: 'Where does the enrolment data come from?', a: 'Your admissions team enters current enrolment, targets, leavers, and returning students directly into the planning table. Evalent auto-populates pipeline data for assessed grades.' },
  { q: 'How do the Evalent strategic signals work?', a: 'Evalent analyses your grade data and generates 3 to 5 signals classified into Enrolment and Capacity, Retention, and Pipeline. Each recommends a concrete next action and regenerates each time you click Generate.' },
  { q: 'Can I filter the view by grade group?', a: 'Yes. Filter pills let you switch between Whole School, Early Years and Primary, Senior School, or any individual grade. All KPI cards, signals, and the chart update instantly.' },
  { q: 'Is the Strategy page included in the free trial?', a: 'Yes. The full Strategy page including all six KPI cards, Evalent signals, and the executive report generator is available during the 10-report free trial with no credit card required.' },
]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <FaqAccordion faqs={FAQ} />

      {/* PREV / NEXT */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/decisions" className="text-gray-400 hover:text-brand text-sm">← Decision Workflow</Link>
          <Link href="/features/team" className="text-brand font-semibold hover:underline text-sm">Next: Team Management →</Link>
        </div>
      </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(strategyFaqSchema) }} />
      <Footer />
    </div>
  )
}
