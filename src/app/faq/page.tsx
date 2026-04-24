import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import HeroTrialButton from '@/components/HeroTrialButton'

export const metadata = {
  title: 'Frequently Asked Questions | Evalent',
  description: 'Common questions about Evalent admissions assessments, reports, pricing, data security, curricula, and the free trial. Quick answers with links to full detail.',
  alternates: { canonical: 'https://www.evalent.io/faq' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Evalent?", "acceptedAnswer": { "@type": "Answer", "text": "Evalent is an admissions intelligence platform for international and independent schools. It provides structured assessments for applicants at Grades 3-10, generates professional reports in under 5 minutes, and gives leadership teams live enrolment intelligence across every grade." } },
    { "@type": "Question", "name": "How long does the free trial last?", "acceptedAnswer": { "@type": "Answer", "text": "The free trial gives you 10 complete assessment reports with no time limit and no credit card required. You are not charged until you explicitly select and confirm a paid plan." } },
    { "@type": "Question", "name": "How long does the assessment take?", "acceptedAnswer": { "@type": "Answer", "text": "Approximately 45 minutes for most grades. Younger grades (3-4) take slightly less time. The assessment covers English, Mathematics, Reasoning, and Mindset and runs in a browser on a school device." } },
    { "@type": "Question", "name": "How quickly is the report delivered?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 90 seconds to 4 minutes after the student submits. The report is emailed directly to the assessor as a professional PDF with one-click decision buttons." } },
    { "@type": "Question", "name": "Which curricula does Evalent support?", "acceptedAnswer": { "@type": "Answer", "text": "Evalent supports IB (PYP and MYP), British National Curriculum, American Common Core, Australian ACARA, and New Zealand NZC. Reports use the language and framing of the curriculum you select." } },
    { "@type": "Question", "name": "How much does Evalent cost?", "acceptedAnswer": { "@type": "Answer", "text": "Essentials is $2,900 per year (100 assessments). Professional is $5,500 per year (250 assessments). Enterprise is $9,500 per year (500+ assessments). All plans include the Strategy page and Team Management." } },
    { "@type": "Question", "name": "Do students need to create an account?", "acceptedAnswer": { "@type": "Answer", "text": "No. Students access the assessment via a secure link sent by the school. No account, no password, no app, no software installation required." } },
    { "@type": "Question", "name": "Can board members access enrolment data without seeing student records?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Board Members role group gives access to enrolment KPIs, strategic signals, and executive reports with no access to individual student data or assessment reports." } },
    { "@type": "Question", "name": "Is student data secure?", "acceptedAnswer": { "@type": "Answer", "text": "Student data is hosted on AWS EU (Ireland), encrypted at rest with AES-256 and in transit with TLS 1.2+. Evalent operates as Data Processor. Schools act as Data Controllers. Data is never used to train language models." } },
    { "@type": "Question", "name": "Can we get a refund?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Evalent offers a 14-day full refund on the first paid payment. Email hello@evalent.io with your account email and Paddle order reference." } },
  ]
}

const sections = [
  {
    heading: "Getting started",
    questions: [
      {
        q: "What is Evalent?",
        a: "Evalent is an admissions intelligence platform for international and independent schools. It provides structured assessments for applicants at Grades 3-10, generates professional reports in under 5 minutes, and gives leadership teams live enrolment intelligence across every grade.",
        link: null,
      },
      {
        q: "How do I get started?",
        a: "Create a free account at app.evalent.io/signup. Your first 10 assessment reports are free with no credit card required. Setup takes around 5 minutes.",
        link: { href: "https://app.evalent.io/signup", label: "Start free trial" },
      },
      {
        q: "How long does the free trial last?",
        a: "The free trial gives you 10 complete assessment reports with no time limit and no credit card required. You are not charged until you explicitly select and confirm a paid plan.",
        link: null,
      },
      {
        q: "Can we use Evalent for real applicants during the trial?",
        a: "Yes. Your 10 free reports work on real applicants with full functionality, including professional reports, decision workflow, and access to the Strategy page and Team Management.",
        link: null,
      },
    ],
  },
  {
    heading: "The assessment",
    questions: [
      {
        q: "How long does the assessment take?",
        a: "Approximately 45 minutes for most grades. Younger grades (3-4) take slightly less. The assessment covers English, Mathematics, Reasoning, and Mindset and runs in a browser on a school device.",
        link: { href: "/features/assessment", label: "See the assessment" },
      },
      {
        q: "Do students need to create an account or download anything?",
        a: "No. Students access the assessment via a secure link sent by the school. No account, no password, no app, no software installation required.",
        link: null,
      },
      {
        q: "Does the assessment need to be completed in school?",
        a: "Yes. Evalent assessments are completed in school on supervised devices configured by the admissions team. This ensures writing responses are authentic and the environment is controlled.",
        link: null,
      },
      {
        q: "What if the student is still at another school and cannot visit our campus?",
        a: "Use the Share with School feature. After registering the student, click Share with School on the success page and enter a contact at their current school. They receive an email with the assessment link, a step-by-step guide, and device setup instructions so they can run the supervised session on your behalf.",
        link: null,
      },
      {
        q: "What if a student loses connection mid-assessment?",
        a: "Progress is auto-saved. The student can re-open the link and continue from where they left off, as long as the link has not expired.",
        link: null,
      },
      {
        q: "Which curricula does Evalent support?",
        a: "IB (PYP and MYP, Grades 3-10), British National Curriculum (Years 4-11), American Common Core (Grades 3-10), Australian ACARA (Years 4-10), and New Zealand NZC (Years 4-10). Reports use the language and framing of the curriculum you select.",
        link: { href: "/curricula", label: "See all curricula" },
      },
    ],
  },
  {
    heading: "Reports and decisions",
    questions: [
      {
        q: "How quickly is the report delivered?",
        a: "Typically 90 seconds to 4 minutes after the student submits. The report is emailed directly to the assessor as a professional PDF with one-click decision buttons.",
        link: { href: "/features/reports", label: "See a sample report" },
      },
      {
        q: "Does the assessor need to log in to record a decision?",
        a: "No. The assessor clicks Admit, Admit with Support, Waitlist, or Do Not Admit directly from the email. No portal login required. The decision is recorded instantly in the dashboard.",
        link: null,
      },
      {
        q: "Can multiple assessors review the same report?",
        a: "Yes. The report link can be forwarded to any number of reviewers. Only the decision recorded in the dashboard counts as the official decision.",
        link: null,
      },
      {
        q: "Can different grades have different pass thresholds and assessors?",
        a: "Yes. Schools configure separate thresholds and assessors per grade independently. Threshold changes do not retroactively affect existing reports.",
        link: null,
      },
    ],
  },
  {
    heading: "Strategy and team",
    questions: [
      {
        q: "What is the Strategy page?",
        a: "The Strategy page gives principals and senior leadership a live view of every grade's enrolment position, with six KPI cards, Evalent-generated signals, an enrolment planning table, and a one-click executive report generator ready for board packs.",
        link: { href: "/features/strategy", label: "See the Strategy page" },
      },
      {
        q: "Can board members see enrolment data without accessing individual student records?",
        a: "Yes. The Board Members role gives access to enrolment KPIs, strategic signals, and executive reports with no access to individual student data or pipeline operations.",
        link: { href: "/features/team", label: "See Team Management" },
      },
      {
        q: "Is there a limit on team members?",
        a: "No. There is no limit on the number of team members per school. Each person is assigned to a role group and can have individual permission overrides.",
        link: null,
      },
    ],
  },
  {
    heading: "Pricing and billing",
    questions: [
      {
        q: "How much does Evalent cost?",
        a: "Essentials is $2,900 per year (100 assessments). Professional is $5,500 per year (250 assessments). Enterprise is $9,500 per year (500+ assessments). All plans include the Strategy page and Team Management.",
        link: { href: "/pricing", label: "See full pricing" },
      },
      {
        q: "Can we get a refund?",
        a: "Yes. Evalent offers a 14-day full refund on the first paid payment. Email hello@evalent.io with your account email and Paddle order reference. Renewals are non-refundable.",
        link: null,
      },
      {
        q: "Do unused assessments roll over?",
        a: "No. Assessments are allocated per annual plan period and do not roll over to the following year.",
        link: null,
      },
    ],
  },
  {
    heading: "Data and security",
    questions: [
      {
        q: "Where is student data stored?",
        a: "Student data is hosted on AWS EU (Ireland), encrypted at rest with AES-256 and in transit with TLS 1.2+. Evalent operates as Data Processor. Schools act as Data Controllers.",
        link: { href: "/security", label: "Full security details" },
      },
      {
        q: "What data protection laws does Evalent comply with?",
        a: "Evalent LLC TZE is registered in RAKEZ, UAE, and complies with UAE Federal Data Protection Law (Federal Decree-Law No. 45 of 2021). For EU and UK data subjects, Evalent adheres to GDPR principles. Student data is never used to train language models.",
        link: null,
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FAQ</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Common questions about Evalent</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">Quick answers to what schools ask most. Links to the full detail where it matters.</p>
          <HeroTrialButton />
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-5 border-b border-gray-100 pb-3">{section.heading}</h2>
              <div className="space-y-5">
                {section.questions.map(({ q, a, link }) => (
                  <div key={q} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-navy mb-2">{q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">{a}</p>
                    {link && (
                      <Link
                        href={link.href}
                        className="text-xs font-semibold text-brand hover:underline"
                      >
                        {link.label} &rarr;
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-navy font-bold text-lg mb-2">Still have a question?</p>
          <p className="text-gray-600 text-sm mb-5">Email <a href="mailto:hello@evalent.io" className="text-brand font-semibold">hello@evalent.io</a> and we respond personally. Or start a free trial and explore the platform yourself.</p>
          <a href="https://app.evalent.io/signup" className="inline-block bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
            Start free trial &rarr;
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Footer />
    </div>
  )
}
