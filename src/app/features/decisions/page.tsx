import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DecisionsDemo from '@/components/features/DecisionsDemo'
import Link from 'next/link'

export const metadata = {
  title: 'Decision Workflow — Evalent Features',
  description: 'One-click decisions directly from your inbox. No portal login. No manual data entry. Every decision timestamped and audit-logged automatically.',
}

export default function Page() {
  const featureGrid = [
    { label: 'No portal login',        desc: 'Works from any inbox, any device' },
    { label: 'Full report in email',   desc: 'Scores, band, and commentary included' },
    { label: 'Instant dashboard update', desc: 'Reflected in real time on completion' },
    { label: 'Permanent audit log',    desc: 'Timestamped and attributed to assessor' },
  ]

  const decisions = [
    { label: 'Admit',                       cls: 'border-green-300 bg-green-50',   tc: 'text-green-800',  desc: 'The student meets entrance criteria across all domains. The offer process can begin immediately.' },
    { label: 'Admit with academic support',  cls: 'border-blue-200 bg-blue-50',    tc: 'text-blue-800',   desc: 'Suitable for admission but will benefit from targeted support. This flag travels with the applicant record through to enrolment.' },
    { label: 'Waitlist',                     cls: 'border-yellow-200 bg-yellow-50', tc: 'text-yellow-800', desc: 'A potential candidate but a place is not currently available. Can be moved to Admit at any time.' },
    { label: 'Do not admit',                 cls: 'border-red-200 bg-red-50',       tc: 'text-red-800',    desc: 'The assessment profile does not meet entrance criteria. The report provides evidence to explain the decision to families if required.' },
  ]

  const auditLog = [
    { time: '09:14:22', event: 'Report generated',      detail: 'Sara Ahmed · Grade 7 · IB',           status: 'auto' },
    { time: '09:14:28', event: 'Report email sent',     detail: 'To: sarah.principal@diacademy.ae',    status: 'auto' },
    { time: '10:31:07', event: 'Email opened',          detail: 'By: sarah.principal@diacademy.ae',    status: 'tracked' },
    { time: '10:31:44', event: 'Decision recorded: Admit', detail: 'By: sarah.principal@diacademy.ae', status: 'decision' },
    { time: '10:31:44', event: 'Dashboard updated',     detail: 'Status: Decision made · Admit',          status: 'auto' },
  ]

  const faqs = [
    ['What if the assessor never clicks a button?', 'A follow-up reminder is sent after 48 hours. The dashboard flags unactioned reports. You can reassign the decision to another assessor if needed.'],
    ['Can a decision be changed after clicking?', 'Yes — decisions can be amended by a school admin user from the dashboard. The audit log records both the original and the amendment with timestamps.'],
    ['Can we add notes to the decision?', 'Free-text notes can be added to any applicant record from the dashboard and are stored alongside the decision in the audit log.'],
    ["What happens to the applicant's data after a decision?", 'Data is retained according to your school’s configured retention period. Evalent supports GDPR-compliant deletion requests at any time.'],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">FEATURE 5 OF 5</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            One click.<br/>
            <span className="text-blue-300">Decision recorded. Done.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            When the report is ready, your assessor receives an email with the full summary and four decision buttons. One click, no login, and the decision is permanently recorded.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY IT MATTERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">The lowest-friction decision process in admissions</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Most admissions workflows require an assessor to log into a portal, find the student, read the report, navigate to a decision screen, and record the outcome. That&apos;s five steps — and most assessors are busy teachers who find every additional click a reason to delay.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Evalent reduces this to one step. The report summary is in the email. The decision buttons are in the email. The assessor never leaves their inbox. The decision is recorded the moment they click.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {featureGrid.map(f => (
                <div key={f.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                  <div className="text-xs font-bold text-navy mb-0.5">✓ {f.label}</div>
                  <div className="text-xs text-gray-500">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
                      <div className="mt-10 rounded-2xl overflow-hidden relative shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175803459?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent — Decision Workflow"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second walkthrough</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">LIVE DEMO</div>
          <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Click a decision button below</h2>
          <p className="text-gray-500 text-sm">This is what your assessor receives. Try clicking any of the four decision buttons.</p>
        </div>
        <DecisionsDemo />
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">DECISION OPTIONS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight">Four outcomes. All covered.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {decisions.map(d => (
              <div key={d.label} className={`border-2 rounded-2xl p-5 ${d.cls}`}>
                <div className={`text-sm font-black mb-2 ${d.tc}`}>{d.label}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">GOVERNANCE &amp; COMPLIANCE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Every decision is defensible</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              International schools increasingly face scrutiny over admissions decisions — from parents, boards, and in some cases regulatory bodies. Evalent creates a complete, tamper-proof record of every assessment and decision.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The audit log records who assessed, which report they received, which button they clicked, and when. This is exportable and can be retained as long as your school requires.
            </p>
          </div>
          <div className="space-y-3">
            {auditLog.map((entry, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-[10px] font-mono text-gray-400 w-16 flex-shrink-0 pt-0.5">{entry.time}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-navy">{entry.event}</div>
                  <div className="text-xs text-gray-400">{entry.detail}</div>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${entry.status === 'decision' ? 'bg-green-100 text-green-700' : entry.status === 'tracked' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                  {entry.status === 'auto' ? 'AUTO' : entry.status === 'tracked' ? 'TRACKED' : 'RECORDED'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">1 click</div><div className="text-sm text-blue-300 mt-1">To record any decision</div></div>
          <div><div className="text-3xl font-black text-white">0</div><div className="text-sm text-blue-300 mt-1">Portal logins needed</div></div>
          <div><div className="text-3xl font-black text-white">100%</div><div className="text-sm text-blue-300 mt-1">Audit-logged</div></div>
        </div>
      </section>

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

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">You&apos;ve seen all five features.</h2>
          <p className="text-blue-300 mb-7">10 free reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Start your free trial →</a>
            <Link href="/demo" className="bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">See Evalent evaluate</Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/reports" className="text-gray-400 hover:text-brand text-sm">← Report Generation</Link>
          <Link href="/features" className="text-brand font-semibold hover:underline text-sm">All features overview →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
