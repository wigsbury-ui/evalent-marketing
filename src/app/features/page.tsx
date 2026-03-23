import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Features — Evalent',
  description: 'Structured assessments, AI-evaluated writing, automatic reports, one-click decisions and automated reminders. Everything your admissions team needs.',
}

const features = [
  {
    category: 'Assessment',
    icon: '◎',
    color: 'bg-blue-50 text-brand',
    items: [
      { title: 'Grades 3–10', desc: 'Fully calibrated assessments for every entry grade. Each is tailored to the relevant curriculum level.' },
      { title: 'IB, British & American', desc: 'Curriculum-aware questions and writing prompts. No configuration needed — select your curriculum once.' },
      { title: '45-minute timed format', desc: 'Browser-based. Works on any device. Auto-submits on timer expiry. No software to install.' },
      { title: 'Four domains', desc: 'English (MCQ + writing), Mathematics (core + applied), Reasoning, and Mindset & Values.' },
    ],
  },
  {
    category: 'Evalent Writing Evaluation',
    icon: '★',
    color: 'bg-purple-50 text-purple-700',
    items: [
      { title: 'Live writing evaluation', desc: 'Extended writing is evaluated by Evalent against four criteria: task completion, organisation, vocabulary, and accuracy.' },
      { title: 'Expert commentary', desc: 'The AI writes evaluative commentary referencing the student\'s actual words — not a template.' },
      { title: 'Honest bands', desc: 'Excellent / Good / Developing / Beginning — calibrated to your grade level and curriculum.' },
      { title: 'Strengths & development', desc: 'Every evaluation identifies specific strengths and two concrete areas to develop.' },
    ],
  },
  {
    category: 'Reports & Decisions',
    icon: '◈',
    color: 'bg-green-50 text-green-700',
    items: [
      { title: 'Report in under 5 minutes', desc: 'From assessment submission to branded PDF report in your assessor\'s inbox — fully automatic.' },
      { title: 'School-branded reports', desc: 'Professional PDF with your school name. Ready to share with parents if needed.' },
      { title: 'Benchmarked to your thresholds', desc: 'Scores are measured against your school\'s own entrance thresholds — not national norms.' },
      { title: 'One-click decisions', desc: 'Admit / Admit with support / Waitlist / Do not admit — recorded from the email, no portal login required.' },
    ],
  },
  {
    category: 'Automation & Admin',
    icon: '⟳',
    color: 'bg-amber-50 text-amber-700',
    items: [
      { title: 'Zero manual steps', desc: 'From assessment link sent to decision logged — every step is automatic. You only act when it matters.' },
      { title: 'Automated reminders', desc: 'If a student hasn\'t completed, Evalent sends reminders on day 2 and day 3 automatically.' },
      { title: 'Non-completion alerts', desc: 'You\'re notified the moment a link expires so you can decide whether to extend.' },
      { title: 'Full audit trail', desc: 'Every decision is timestamped and attributed. Defensible to parents and boards.' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Everything you need.<br/>Nothing you don&apos;t.</h1>
          <p className="text-blue-300 text-base leading-relaxed">Built for busy admissions teams. Every feature is designed to reduce time, not add it.</p>
        </div>
      </section>

      {/* AI EVAL CALLOUT */}
      <section className="py-12 px-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-brand text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              NEW — LIVE EVALENT EVALUATION
            </div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">See Evalent evaluate writing in action</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Don&apos;t take our word for it. Write something — anything — and watch Evalent evaluate it in real time. Choose your grade and curriculum first.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors">
              See Evalent evaluate →
            </Link>
          </div>
          <div className="md:w-72 bg-white border border-blue-200 rounded-xl p-4 text-sm">
            {['Grade 3–10 prompts included','IB, British, American','4 criteria scored','Expert commentary','Strengths & development','Under 5 seconds'].map(item => (
              <div key={item} className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0 text-xs text-gray-700">
                <span className="text-green-500 font-bold">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {features.map(group => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${group.color}`}>{group.icon}</div>
                <h2 className="text-xl font-black text-navy tracking-tight">{group.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {group.items.map(item => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-navy mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">Ready to try it?</h2>
          <p className="text-blue-300 mb-7">10 free reports. No credit card. Set up in 5 minutes.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#trial" className="bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Start free trial →</a>
            <Link href="/demo" className="bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">Try the AI evaluator</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
