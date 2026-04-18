import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RegistrationDemo from '@/components/features/RegistrationDemo'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Student Registration | Evalent Features',
  description: 'Register students in seconds. Evalent automatically sends assessment links, tracks completion, and notifies you the moment results are ready.',
}


const registrationFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does the student need to create an account?', acceptedAnswer: { '@type': 'Answer', text: 'No. Students access their assessment via a secure personal link sent to their email. No account, password, or app download is required.' } },
    { '@type': 'Question', name: 'How is the assessment link delivered?', acceptedAnswer: { '@type': 'Answer', text: 'The moment you register a student, Evalent automatically generates a personalised link and emails it directly with full instructions.' } },
    { '@type': 'Question', name: 'What if the student has not completed after the first day?', acceptedAnswer: { '@type': 'Answer', text: 'Evalent sends an automatic reminder if the student has not started. You can also resend manually at any time from the admin panel.' } },
    { '@type': 'Question', name: 'Can I register multiple students at once?', acceptedAnswer: { '@type': 'Answer', text: 'Individual registration takes under 60 seconds per student. Bulk import is on the development roadmap.' } },
    { '@type': 'Question', name: 'How is student data protected?', acceptedAnswer: { '@type': 'Answer', text: 'All data is stored in secure, encrypted infrastructure. Student data is never used to train language models and is governed under UAE Federal Data Protection Law with GDPR alignment.' } },
  ],
}

const FAQ = [
  { q: 'Does the student need to create an account?', a: 'No. Students access their assessment via a secure personal link sent to their email. No account, password, or app download is required.' },
  { q: 'How is the assessment link delivered to the student?', a: 'The moment you register a student, Evalent automatically generates a personalised link and emails it directly with instructions. No manual steps required.' },
  { q: 'What if the student has not completed after the first day?', a: 'Evalent sends an automatic reminder if the student has not started. The dashboard flags outstanding links and you can resend manually at any time from the admin panel.' },
  { q: 'Can I register multiple students at once?', a: 'Individual registration takes under 60 seconds per student. Bulk import is on the development roadmap for future releases.' },
  { q: 'How is student data protected?', a: 'All data is stored in secure, encrypted infrastructure. Student data is never used to train language models and is governed under UAE Federal Data Protection Law with GDPR alignment.' },
]

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 1 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Register a student.<br/>
            <span className="text-blue-300">Everything else is automatic.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Add a student’s name, email, grade, and curriculum. Evalent sends the assessment link instantly, tracks whether it has been opened, and notifies you the moment the report is ready.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO — directly under hero */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175794469?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Student Registration"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">HOW IT WORKS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Register a student in 60 seconds. Evalent handles the rest.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Most admissions teams spend significant time on the administrative side of assessments, preparing links, sending individual emails, chasing reminders, and collecting results. Evalent eliminates every one of those steps.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you register a student, Evalent automatically generates a personalised, secure assessment link calibrated to their grade level and your school's chosen curriculum. The link is emailed immediately.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { n: '1', text: "Enter the student's name, email, grade and curriculum", cls: 'border-brand/20 bg-blue-50', tc: 'text-brand' },
              { n: '2', text: 'Evalent sends the secure assessment link automatically', cls: 'border-green-200 bg-green-50', tc: \'text-green-700' },
              { n: '3', text: 'You receive the completed report. Nothing else to do', cls: 'border-purple-200 bg-purple-50', tc: \'text-purple-700' },
            ].map(({ n, text, cls, tc }) => (
              <div key={n} className={`flex items-start gap-3 border rounded-xl p-4 ${cls}`}>
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-black flex-shrink-0 ${tc} border-current`}>{n}</span>
                <span className="text-sm text-gray-700 leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE DEMO</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Try it yourself</h2>
          <p className="text-gray-500 text-sm">Fill in the form below to see exactly what happens when you register a student. This is the real interface.</p>
        </div>
        <RegistrationDemo />
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">AFTER REGISTRATION</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">What happens the moment you click Register</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '0s',    title: 'Link generated',       desc: 'A unique, secure, time-limited assessment link is created for this student.',          color: 'border-blue-200 bg-blue-50',   tc: 'text-brand' },
              { step: '~5s',   title: 'Email dispatched',     desc: 'The applicant receives a personalised email with their link and instructions.',         color: 'border-green-200 bg-green-50', tc: 'text-green-700' },
              { step: 'Day 2', title: 'Reminder sent',        desc: 'If the student hasn’t started, Evalent sends a friendly reminder automatically.',  color: 'border-yellow-200 bg-yellow-50',tc: 'text-yellow-700' },
              { step: 'Done',  title: 'Report delivered',     desc: 'On completion, the report and one-click decision email are sent to your assessor.',     color: 'border-purple-200 bg-purple-50',tc: 'text-purple-700' },
            ].map(({ step, title, desc, color, tc }) => (
              <div key={step} className={`border rounded-2xl p-5 ${color}`}>
                <div className={`text-lg font-black mb-1 ${tc}`}>{step}</div>
                <div className="text-sm font-bold text-navy mb-2">{title}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 bg-navy border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white tracking-tight">60s</div><div className="text-sm text-blue-300 mt-1">From add to link sent</div></div>
          <div><div className="text-3xl font-black text-white tracking-tight">G3–G10</div><div className="text-sm text-blue-300 mt-1">All grade levels</div></div>
          <div><div className="text-3xl font-black text-white tracking-tight">0</div><div className="text-sm text-blue-300 mt-1">Manual follow-up steps</div></div>
        </div>
      </section>

      
      <FaqAccordion faqs={FAQ} />

      {/* NAV FOOTER */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features" className="text-gray-400 hover:text-brand text-sm">← All features</Link>
          <Link href="/features/dashboard" className="text-brand font-semibold hover:underline text-sm">Next: Assessment Dashboard →</Link>
        </div>
      </div>

      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(registrationFaqSchema) }} />
      <Footer />
    </div>
  )
}
