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
import FaqAccordion from '@/components/features/FaqAccordion'

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

  const faqs = [
    ['Can I adjust individual permissions beyond the role preset?', 'Yes. Any permission can be overridden at the individual level. Modified permissions are shown with an amber indicator so your admissions head can see at a glance who has a custom setup.'],
    ['Do board members see individual student data?', 'No. Board Member and Board Chair roles do not have access to student-level reports by default. They see enrolment position and strategy, the big picture only.'],
    ['How do I invite a new team member?', 'From the Team page, click Add Team Member, enter their name and email, assign their role group, and send the invitation. They receive a secure welcome email with login instructions.'],
    ['Is there an audit trail for permission changes?', 'Yes. All permission changes are logged with timestamp and actor, giving you a complete record for governance and compliance purposes.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 7 OF 7</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Every team member.<br/>
            <span className="text-blue-300">The right access.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Four role groups. Six permissions. Individual overrides.
            Your whole admissions operation, governed clearly, from one page.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO PLACEHOLDER — replace with Vimeo ID when available */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1183289724?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Team Management"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">Watch this 90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">ACCESS & GOVERNANCE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">The right people see the right things, automatically</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              As your admissions operation grows, so does the question of who should see what. Should your board
              see individual student reports? Should an assessor be able to register new students? Evalent&apos;s
              team management page answers these questions with precision, not with a long settings menu, but with
              a clear, visual permission grid.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Four role groups come with sensible presets built in. Individual permissions can be adjusted in a
              single click. Any deviation from the preset is flagged clearly so your admissions head always knows
              exactly who has access to what.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.label} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                <div className="text-xs font-bold text-navy mb-0.5">{f.label}</div>
                <div className="text-xs text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM DEMO */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE PREVIEW</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">See it in action</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Every group is collapsible. Click any header to expand or collapse. This is the real interface your admissions head will use.</p>
          </div>
          <TeamDemo />
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">4</div><div className="text-sm text-blue-300 mt-1">Role groups</div></div>
          <div><div className="text-3xl font-black text-white">6</div><div className="text-sm text-blue-300 mt-1">Permission types</div></div>
          <div><div className="text-3xl font-black text-white">3</div><div className="text-sm text-blue-300 mt-1">Access levels</div></div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={faqs} />

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
