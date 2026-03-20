'use client'
import React, { useState } from 'react'
import Nav from '@/components/Nav'
import VideoModal from '@/components/VideoModal'
import Footer from '@/components/Footer'
import TrialSection from '@/components/TrialSection'
import Link from 'next/link'

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false)
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            10 FREE TRIAL REPORTS — NO CARD NEEDED
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">
            Know your applicants.<br/>
            <span className="text-blue-300">Before they arrive.</span>
          </h1>
          <p className="text-lg text-blue-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Structured assessments. AI-evaluated reports. One-click decisions. All automatic — from link sent to decision logged.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#trial" className="bg-white text-brand font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Start your free trial →
            </a>
            <button onClick={() => setVideoOpen(true)} className="bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors">
              See how it works
            </button>
          </div>
          <div className="mt-8 flex gap-5 justify-center flex-wrap">
            {['10 free reports','No credit card','Ready in 5 minutes','Zero admin overhead'].map(item => (
              <div key={item} className="flex items-center gap-1.5 text-white/50 text-xs">
                <span className="w-3.5 h-3.5 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 text-[9px]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-[#050e24] grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
        {[
          ['0', 'Manual steps to get a report'],
          ['<5min', 'Assessment to report in inbox'],
          ['1', 'Click to record a decision'],
          ['100%', 'Automatic reminder sequence'],
        ].map(([num, label]) => (
          <div key={label} className="text-center py-8 px-4 border-r border-white/10 last:border-0">
            <div className="text-3xl font-black text-white tracking-tight">{num}</div>
            <div className="text-xs text-blue-400 mt-1 leading-tight">{label}</div>
          </div>
        ))}
      </div>

      {/* TRIAL */}
      <TrialSection />

      {/* FLOW */}
      <section id="flow" className="py-16 px-6 bg-white scroll-mt-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">ZERO ADMIN OVERHEAD</div>
          <h2 className="text-4xl font-black text-navy tracking-tight mb-3">The report arrives.<br/>You click one button. Done.</h2>
          <p className="text-gray-500 text-base mb-12 max-w-lg leading-relaxed">Every step from assessment to recorded decision is automatic. You only act when it matters.</p>

          <div className="grid grid-cols-4 gap-0 mb-10 relative">
            <div className="absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-100 z-0" />
            {[
              { label: 'Link sent', sub: 'One click from dashboard', icon: '↗', auto: true, bg: 'bg-blue-50' },
              { label: 'Report built', sub: 'AI scores and writes narrative', icon: '★', auto: true, bg: 'bg-blue-50' },
              { label: 'Assessor emailed', sub: 'Report + decision buttons', icon: '✉', auto: true, bg: 'bg-green-50' },
              { label: 'Decision logged', sub: 'Admit / Reject / Waitlist', icon: '✓', auto: false, bg: 'bg-green-50' },
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 px-2">
                {node.auto && <div className="absolute -top-3 bg-green-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide">AUTO</div>}
                <div className={`w-20 h-20 ${node.bg} rounded-2xl flex items-center justify-center text-2xl mb-3 border border-gray-100`}>{node.icon}</div>
                <div className="text-sm font-bold text-navy mb-1">{node.label}</div>
                <div className="text-xs text-gray-400 leading-tight">{node.sub}</div>
              </div>
            ))}
          </div>

          {/* Email mockup */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400">Admissions report ready — Alex Chen, Grade 7 · from reports@evalent.io</div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
                <div className="text-base font-black text-navy">EVAL<span className="text-brand italic">ENT</span></div>
                <div className="bg-navy text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide">REPORT READY</div>
              </div>
              <div className="text-xs text-gray-400 mb-1">To: sarah.ahmed@diacademy.ae · Grade 7 Entry</div>
              <div className="text-xl font-black text-navy mb-3 tracking-tight">Admissions report: Alex Chen</div>
              <p className="text-sm text-gray-600 mb-5">Hi Sarah — Alex's Grade 7 assessment is complete. Use the buttons below to record your decision instantly. No login required.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-navy">Alex Chen · Grade 7 · IB</div>
                  <div className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">✓ Ready to admit</div>
                </div>
                {[['English','76'],['Mathematics','68'],['Reasoning','91'],['Mindset','80%']].map(([label, pct]) => (
                  <div key={label} className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-gray-400 w-16">{label}</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{width: pct.includes('%') ? pct : pct+'%'}} />
                    </div>
                    <span className="text-xs font-bold text-navy w-7 text-right">{pct.includes('%') ? pct : pct+'%'}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-400 tracking-widest mb-3">RECORD YOUR DECISION — ONE CLICK, NO LOGIN REQUIRED</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  ['✓ Admit','border-green-200 bg-green-50 text-green-700'],
                  ['~ With support','border-blue-200 bg-blue-50 text-blue-700'],
                  ['⏸ Waitlist','border-yellow-200 bg-yellow-50 text-yellow-700'],
                  ['✕ Do not admit','border-red-200 bg-red-50 text-red-700'],
                ].map(([label, cls]) => (
                  <div key={label} className={`border-2 ${cls} text-xs font-bold py-3 rounded-xl text-center cursor-pointer hover:opacity-80 transition-opacity`}>{label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* AI EVAL TEASER */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                EVALENT EVALUATION
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-3">
                Evalent doesn&apos;t just score.<br/>It reads.
              </h2>
              <p className="text-blue-300 text-sm leading-relaxed mb-4">
                Every extended writing response is evaluated against four criteria — task completion, organisation, vocabulary, and accuracy — with expert commentary generated in seconds.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Calibrated to each school's grade level and curriculum",
                  "Commentary references the student's actual words",
                  'Honest bands: Excellent, Good, Developing, Beginning',
                  'Strengths and development areas identified',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-blue-200">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="/demo" className="inline-flex items-center gap-2 bg-white text-brand font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                See Evalent evaluate live →
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="bg-navy/80 rounded-xl p-3 mb-3 border border-white/10">
                <div className="text-[10px] font-bold text-blue-400 tracking-widest mb-1.5">WRITING PROMPT — GRADE 7 IB</div>
                <p className="text-xs text-blue-200 leading-relaxed italic">"Some scientists believe that humans are the biggest threat to life on Earth. Do you agree?"</p>
              </div>
              <div className="space-y-2">
                {[
                  { label: 'BAND', val: 'Good', extra: '3.0 / 4.0', bg: 'bg-blue-500/20', tc: 'text-blue-300' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold text-blue-400 tracking-widest">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.bg} ${item.tc}`}>{item.val}</span>
                      <span className="text-xs text-blue-300">{item.extra}</span>
                    </div>
                  </div>
                ))}
                {[
                  { label: 'TASK COMPLETION', pct: 82, color: '#3b82f6' },
                  { label: 'ORGANISATION',    pct: 75, color: '#3b82f6' },
                  { label: 'VOCABULARY',      pct: 78, color: '#8b5cf6' },
                  { label: 'ACCURACY',        pct: 88, color: '#10b981' },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="bg-white/5 rounded-lg px-3 py-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-[9px] font-bold text-blue-400 tracking-widest">{label}</span>
                      <span className="text-[10px] font-bold text-white">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                    </div>
                  </div>
                ))}
                <div className="bg-white/5 rounded-lg px-3 py-2.5">
                  <div className="text-[9px] font-bold text-blue-400 tracking-widest mb-1.5">COMMENTARY</div>
                  <p className="text-xs text-blue-200 leading-relaxed">The response takes a clear position and develops it with relevant examples. Use of subject-specific language is appropriate for Grade 7 level...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REMINDERS */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">AUTOMATED REMINDERS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-3">We chase applicants so you don't have to</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">If an applicant hasn't finished their assessment, Evalent sends reminders automatically. You're notified of every outcome.</p>
            <div className="relative pl-7">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand to-blue-100" />
              {[
                { when: 'Day 0 — immediately', title: 'Assessment link sent', desc: 'Personalised email with secure link and instructions.', status: 'sent', color: 'bg-green-500 border-green-500' },
                { when: 'Day 2 — if not started', title: 'Friendly reminder sent', desc: '"Your assessment link expires in 24 hours."', status: 'auto', color: 'bg-white border-brand' },
                { when: 'Day 3 — if not complete', title: 'Expiry warning sent', desc: '"Your link expires today — click here to begin."', status: 'auto', color: 'bg-white border-brand' },
                { when: 'Day 3 — on expiry', title: 'School notified', desc: 'You decide whether to extend or proceed.', status: 'auto', color: 'bg-white border-brand' },
                { when: 'After decision', title: 'Record auto-updated', desc: 'Dashboard and audit trail updated instantly.', status: 'auto', color: 'bg-white border-brand' },
              ].map((item, i) => (
                <div key={i} className="relative mb-4">
                  <div className={`absolute -left-5 top-2 w-3 h-3 rounded-full border-2 ${item.color}`} />
                  <div className="bg-white border border-gray-200 rounded-xl p-3.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-brand">{item.when}</span>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${item.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-brand'}`}>{item.status === 'sent' ? '✓ SENT' : 'AUTO'}</span>
                    </div>
                    <div className="text-xs font-bold text-navy mb-0.5">{item.title}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">COMMON QUESTIONS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-3">What schools ask us</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">The honest answers.</p>
            <div className="space-y-3">
              {[
                ['What if the assessor ignores the email?', 'A second reminder goes out after 48 hours. Most assessors click within the hour — one button is a very low bar.'],
                ['What if a student does not complete in time?', 'Evalent sends two reminders before expiry. You are notified the moment a link expires so you can decide to extend.'],
                ['Do we have to log into a portal each time?', 'No. The decision email works from any inbox. The dashboard exists if you want it — it is never required.'],
                ['Can multiple assessors review the same report?', 'Yes. The report link can be forwarded. Only the recorded decision in the dashboard counts as official.'],
              ].map(([q, a]) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-xs font-bold text-gray-400 italic mb-1.5">"{q}"</div>
                  <div className="text-xs text-gray-700 leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-black text-navy tracking-tight mb-2">Trusted by admissions teams</h2>
          <p className="text-gray-500 text-sm">From the Middle East to South-East Asia</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { quote: 'We used to spend 3–4 hours on borderline applications. Now we have structured data in minutes. The one-click decision email is the thing everyone comments on.', name: 'Sarah Al-Rashid', role: 'Head of Admissions, Dubai', initials: 'SA' },
            { quote: 'The automated reminders have saved our admin team hours every cycle. Students get chased, we get notified if they do not complete. Zero involvement from us.', name: 'Michael Kwan', role: 'Deputy Principal, Singapore', initials: 'MK' },
            { quote: 'The reports are professional enough to share with parents when we need to explain a decision. That alone has reduced our appeals significantly.', name: 'Fatima Omar', role: 'Admissions Director, Doha', initials: 'FO' },
          ].map(({ quote, name, role, initials }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-brand">{initials}</div>
                <div>
                  <div className="text-sm font-bold text-navy">{name}</div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white tracking-tight mb-3">10 free reports.<br/>No credit card.</h2>
          <p className="text-blue-300 text-base mb-8">Set up in 5 minutes. Use with your next real applicants.</p>
          <a href="#trial" className="inline-block bg-white text-brand font-bold text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Start your free trial →
          </a>
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <Footer />
    </div>
  )
}
