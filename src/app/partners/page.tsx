'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import VimeoEmbedInner from '@/components/VimeoEmbedInner'

export default function PartnersPage() {

  const [form, setForm] = useState({ name: '', email: '', company: '', linkedin: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/partner-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute pointer-events-none" style={{ bottom: '-300px', left: '-200px' }} aria-hidden="true">
          <img src="/mark_white.svg" alt="" style={{ width: '900px', height: '900px', opacity: 0.03, animation: 'spin-slow 240s linear infinite', transformOrigin: 'center center' }} />
        </div>
        <style>{`@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            PARTNER PROGRAMME
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5 text-white">
            Introduce schools.<br/>
            <span className="text-blue-300">Earn as they grow.</span>
          </h1>
          <p className="text-lg text-blue-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Evalent partners earn attractive commission for introducing independent and international schools to the platform. Multiple programme tiers to suit how you work.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#apply" className="bg-white text-brand font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Apply to join &rarr;
            </a>
            <a href="https://app.evalent.io/partner/login" className="bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors">
              Partner portal login
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT VIDEO */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <VimeoEmbedInner videoId="1176097774" title="Evalent | Admissions Intelligence Platform" />
          <p className="text-center text-xs text-gray-400 mt-3">Two minutes. The complete picture.</p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">WHY PARTNER WITH EVALENT</div>
              <h2 className="text-3xl font-black text-navy tracking-tight mb-4">
                A product schools need.<br/>A market ready to buy.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Independent and international schools spend significant time and money on admissions, yet most still rely on unstructured evidence. Evalent solves a problem that every admissions team feels.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                When you introduce a school to Evalent, you&apos;re offering something they can trial for free, with no credit card, and see working within 5 minutes. Conversion is straightforward because the product sells itself.
              </p>
              <div className="space-y-2">
                {[
                  'Attractive commission across multiple tiers',
                  'Dedicated partner portal to track clicks and earnings',
                  'Free trial means schools can say yes immediately',
                  'Global market, no geographic restrictions',
                  'Monthly payouts with full transparency',
                  'Dedicated account manager from day one',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                    <svg className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="text-xs font-bold text-blue-400 tracking-widest mb-4">THE MARKET</div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { stat: '10,000+', label: 'Independent schools globally' },
                    { stat: '45 min', label: 'Time saved per applicant' },
                    { stat: '3 tiers', label: 'Plans from Essentials to Enterprise' },
                    { stat: '5 min', label: 'From link sent to report ready' },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="text-2xl font-black text-white mb-1">{stat}</div>
                      <div className="text-xs text-blue-300 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <div className="text-sm font-bold text-navy mb-2">Already a partner?</div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Access your referral links, track clicks and conversions, and view your earnings in the partner portal.</p>
                <a href="https://app.evalent.io/partner/login" className="inline-block bg-brand text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Go to partner portal &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME TIERS */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">PROGRAMME TIERS</div>
            <h2 className="text-3xl font-black text-navy tracking-tight mb-3">Find the right tier for how you work</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">From occasional referrals to deep commercial partnerships. Every tier comes with portal access, tracking, and monthly payouts.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg></div>
                <div className="text-base font-black text-navy">Referral Partner</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Introduce a school and earn a fixed fee when they convert. Simple and low-commitment.</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-0.5">BEST FIT</div>
                <div className="text-xs text-gray-600">Educators, consultants, and advisors who occasionally recommend tools to schools.</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border-2 border-brand bg-white">
              <div className="inline-block bg-brand text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest mb-3">MOST POPULAR</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 text-brand"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
                <div className="text-base font-black text-navy">Reseller</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Present Evalent as part of your service offering. Earn a percentage of the school&apos;s first-year subscription.</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-0.5">BEST FIT</div>
                <div className="text-xs text-gray-600">EdTech resellers, regional distributors, and managed service providers.</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                <div className="text-base font-black text-navy">Senior Partner</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Our deepest commercial tier. Earn a recurring percentage on every payment the school makes, not just the first year.</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-0.5">BEST FIT</div>
                <div className="text-xs text-gray-600">High-volume introducers and strategic partners with strong school network access.</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 text-gray-600"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>
                <div className="text-base font-black text-navy">Influencer</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">You have an audience in the international schools space. Earn commission on conversions from your community.</p>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-0.5">BEST FIT</div>
                <div className="text-xs text-gray-600">Educators with newsletters, podcasts, LinkedIn audiences, or active school communities.</div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-5">Need something bespoke? We offer a Custom tier for unusual arrangements. <a href="#apply" className="text-brand hover:underline">Apply below and tell us more.</a></p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">HOW IT WORKS</div>
            <h2 className="text-3xl font-black text-navy tracking-tight">From application to first payout</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-black text-gray-100 mb-3">01</div>
              <div className="text-sm font-bold text-navy mb-2">Apply to join</div>
              <div className="text-xs text-gray-500 leading-relaxed">Fill in the form below with your details and a note about how you work with schools. We respond within 2 business days.</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-100 mb-3">02</div>
              <div className="text-sm font-bold text-navy mb-2">Get your referral link</div>
              <div className="text-xs text-gray-500 leading-relaxed">Once approved, we set you up with a unique referral link and access to the partner portal. Every school that clicks your link is tracked automatically for 30 days.</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-100 mb-3">03</div>
              <div className="text-sm font-bold text-navy mb-2">Introduce schools</div>
              <div className="text-xs text-gray-500 leading-relaxed">Share your link by email, LinkedIn, your website, or in conversation. Schools start a free trial and explore at their own pace.</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-100 mb-3">04</div>
              <div className="text-sm font-bold text-navy mb-2">Earn commission</div>
              <div className="text-xs text-gray-500 leading-relaxed">When a school you referred converts to a paid plan, your commission is recorded. Track everything in the portal and receive monthly payouts.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SCHOOLS BUY */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">WHAT SCHOOLS BUY</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Three annual plans</h2>
            <p className="text-gray-500 text-sm">Schools choose based on their annual assessment volume. Higher plans generate proportionally higher commission.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <div className="text-base font-black text-navy mb-1">Essentials</div>
              <div className="text-2xl font-black text-brand mb-0.5">$2,900</div>
              <div className="text-xs text-gray-400 mb-3">&pound;2,300 / annual</div>
              <div className="text-xs font-bold text-gray-500 mb-3">100 assessments</div>
              <p className="text-xs text-gray-500 leading-relaxed">Ideal for smaller schools or those running one intake cycle per year.</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-brand p-6">
              <div className="inline-block bg-brand text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest mb-3">MOST COMMON</div>
              <div className="text-base font-black text-navy mb-1">Professional</div>
              <div className="text-2xl font-black text-brand mb-0.5">$5,500</div>
              <div className="text-xs text-gray-400 mb-3">&pound;4,400 / annual</div>
              <div className="text-xs font-bold text-gray-500 mb-3">250 assessments</div>
              <p className="text-xs text-gray-500 leading-relaxed">For schools with multiple year groups or two intake cycles. The most common tier.</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <div className="text-base font-black text-navy mb-1">Enterprise</div>
              <div className="text-2xl font-black text-brand mb-0.5">$9,500</div>
              <div className="text-xs text-gray-400 mb-3">&pound;7,600 / annual</div>
              <div className="text-xs font-bold text-gray-500 mb-3">500+ assessments</div>
              <p className="text-xs text-gray-500 leading-relaxed">Large schools, school groups, or those running assessments across multiple campuses.</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Full plan details at <a href="/pricing" className="text-brand hover:underline">evalent.io/pricing</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-7">Partner programme questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">How does referral tracking work?</div>
              <div className="text-sm text-gray-600 leading-relaxed">When someone clicks your referral link, we set a 30-day tracking cookie. If they sign up and pay within that window, the conversion is attributed to you automatically. No coupon codes or manual tracking needed.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">What does the partner portal give me access to?</div>
              <div className="text-sm text-gray-600 leading-relaxed">The partner portal at app.evalent.io/partner shows your referral links, click and conversion stats, commission history, and total earnings. You can log in any time to check your pipeline.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">When do I get paid?</div>
              <div className="text-sm text-gray-600 leading-relaxed">Commissions are processed monthly. Once a referred school&apos;s payment clears, your commission is queued for the next payout cycle. Your account manager will confirm payment details when you join.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">Who is a good fit for the partner programme?</div>
              <div className="text-sm text-gray-600 leading-relaxed">Admissions consultants, school network coordinators, EdTech resellers, curriculum advisors, and anyone who regularly works with independent or international school leadership. If you speak to admissions teams, this programme is built for you.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">Can I refer schools in any country?</div>
              <div className="text-sm text-gray-600 leading-relaxed">Yes. Evalent operates globally. Schools in the UK, UAE, Singapore, Australia, New Zealand, the US, and across Africa and Asia are all in scope. There are no geographic restrictions on referrals.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">Do referred schools need to be new to Evalent?</div>
              <div className="text-sm text-gray-600 leading-relaxed">Yes, the programme applies to new customers only. Schools already using Evalent cannot be retrospectively attributed to a partner.</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="text-sm font-bold text-navy mb-1.5">I want a custom arrangement. Is that possible?</div>
              <div className="text-sm text-gray-600 leading-relaxed">Yes. We offer a Custom partner tier for arrangements that don&apos;t fit the standard tiers, for example, embedding Evalent into a larger managed admissions service. Apply below and tell us more.</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="bg-navy py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white tracking-tight mb-3">Apply to become a partner</h2>
            <p className="text-blue-300 text-sm leading-relaxed">Fill in your details and we&apos;ll be in touch within 2 business days.</p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-base font-bold text-navy mb-2">Application received</div>
              <div className="text-sm text-gray-600">We&apos;ll review your application and get back to you within 2 business days.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 tracking-wide">FULL NAME <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Sarah Ahmed"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 tracking-wide">EMAIL ADDRESS <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="sarah@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 tracking-wide">COMPANY / ORGANISATION</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  placeholder="Evalent School Consulting Ltd"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 tracking-wide">LINKEDIN PROFILE URL</label>
                <input
                  type="url"
                  value={form.linkedin}
                  onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                  placeholder="https://linkedin.com/in/yourname"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 tracking-wide">HOW DO YOU WORK WITH SCHOOLS?</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us a little about your background and how you interact with admissions teams..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy outline-none focus:border-brand transition-colors resize-none"
                />
              </div>
              {status === 'error' && (
                <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  Something went wrong. Please try again or reach out directly.
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand text-white font-bold text-sm py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Submit application →'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
