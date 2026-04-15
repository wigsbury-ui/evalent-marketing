import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Team & Access Management — Evalent Features',
  description: 'Give every team member exactly the access they need. Four role groups, six permissions, and full control — without complexity.',
}

export default function Page() {
  const features = [
    { label: 'Four role groups',      desc: 'Admissions Team, Senior Leadership, Board Chair, Board Members — each with tailored presets' },
    { label: 'Six permissions',       desc: 'Register students, send assessments, dashboard, reports, strategy, executive reports' },
    { label: 'Three access levels',   desc: 'Edit, View, or No access — precise control over every feature for every person' },
    { label: 'Individual overrides',  desc: 'Adjust any person beyond their role preset, with clear visual indicators for modified settings' },
  ]

  const groups = [
    {
      name: 'Admissions Team',
      color: '#1a2b6b',
      bg: '#f0f4ff',
      border: '#c7d2fe',
      desc: 'Full operational access. They register students, send assessments, and work the pipeline day to day.',
    },
    {
      name: 'Senior Leadership',
      color: '#7c3aed',
      bg: '#faf5ff',
      border: '#ddd6fe',
      desc: 'Strategic visibility without operational controls. They see the dashboard, student reports, and strategy — but do not operate the system.',
    },
    {
      name: 'Board Chair',
      color: '#b45309',
      bg: '#fffbeb',
      border: '#fde68a',
      desc: 'Executive layer. Strategy, enrolment position, and the ability to generate board-level reports.',
    },
    {
      name: 'Board Members',
      color: '#0369a1',
      bg: '#f0f9ff',
      border: '#bae6fd',
      desc: 'Read-only strategy overview. The big picture — enrolment position and trends — with no access to individual student data.',
    },
  ]

  const faqs = [
    ['Can I adjust individual permissions beyond the role preset?', 'Yes. Any permission can be overridden at the individual level. Modified permissions are shown with an amber indicator so your admissions head can see at a glance who has a custom setup.'],
    ['Do board members see individual student data?', 'No. Board Member and Board Chair roles do not have access to student-level reports by default. They see enrolment position and strategy — the big picture only.'],
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
            Your whole admissions operation — governed clearly, from one page.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* VIDEO PLACEHOLDER — replace with Vimeo ID when available */}
      <section className="px-6 pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative shadow-xl bg-gray-100 flex items-center justify-center" style={{ paddingTop: '56.25%' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-3">👥</div>
              <p className="text-sm text-gray-400 font-medium">Video walkthrough coming soon</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 mb-0">90-second walkthrough</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">ACCESS & GOVERNANCE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">The right people see the right things — automatically</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              As your admissions operation grows, so does the question of who should see what. Should your board
              see individual student reports? Should an assessor be able to register new students? Evalent&apos;s
              team management page answers these questions with precision — not with a long settings menu, but with
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

      {/* ROLE GROUPS */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">ROLE GROUPS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Built for how schools are actually organised</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Each group reflects a real layer of your organisation — with permissions that match what that layer genuinely needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {groups.map((g) => (
              <div key={g.name} className="rounded-xl border p-5" style={{ backgroundColor: g.bg, borderColor: g.border }}>
                <div className="text-sm font-bold mb-2" style={{ color: g.color }}>{g.name}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
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
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-navy tracking-tight mb-6">Common questions</h2>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm font-bold text-navy mb-1.5">{q}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/strategy" className="text-gray-400 hover:text-brand text-sm">← Strategy & Enrolment</Link>
          <Link href="/features" className="text-brand font-semibold hover:underline text-sm">All features overview →</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
