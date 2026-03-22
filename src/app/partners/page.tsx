import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Partner Programme — Evalent',
  description: 'Earn attractive commission by introducing independent and international schools to Evalent. Join the Evalent partner programme.',
}

export default function PartnersPage() {

  const howItWorks = [
    {
      step: '01',
      title: 'Apply to join',
      desc: 'Email partners@evalent.io with a short note about who you are and how you work with schools. We respond within 2 business days.',
    },
    {
      step: '02',
      title: 'Get your referral link',
      desc: 'Once approved, we set you up with a unique referral link and access to the partner portal. Every school that clicks your link is tracked automatically.',
    },
    {
      step: '03',
      title: 'Introduce schools',
      desc: 'Share your link by email, LinkedIn, your website, or in conversation. Schools click through to evalent.io, start a free trial, and explore at their own pace.',
    },
    {
      step: '04',
      title: 'Earn commission',
      desc: 'When a school you referred converts to a paid plan, your commission is recorded and paid monthly. Track everything in the partner portal.',
    },
  ]

  const partnerTypes = [
    {
      name: 'Referral Partner',
      desc: 'You introduce the school. We handle everything from trial to close. Earn a fixed fee for every school that converts.',
      fit: 'Educators, consultants, and advisors who occasionally recommend tools to schools.',
      icon: '↗',
    },
    {
      name: 'Reseller',
      desc: 'Present Evalent as part of your service offering. Earn a percentage of the school’s first-year subscription.',
      fit: 'EdTech resellers, regional distributors, and managed service providers.',
      icon: '▤',
      featured: True,
    },
    {
      name: 'Senior Partner',
      desc: 'Our deepest commercial relationship. Earn a percentage on every payment the school makes — not just the first year.',
      fit: 'High-volume introducers and strategic partners with strong school network access.',
      icon: '◆',
    },
    {
      name: 'Influencer',
      desc: 'You have an audience in the international schools space. Earn commission on first-payment conversions from your community.',
      fit: 'Educators with newsletters, podcasts, LinkedIn audiences, or active school communities.',
      icon: '○',
    },
  ]

  const faqs = [
    [
      'How does referral tracking work?',
      'When someone clicks your referral link, we set a 30-day tracking cookie. If they sign up and pay within that window, the conversion is attributed to you automatically. No coupon codes or manual tracking needed.',
    ],
    [
      'What does the partner portal give me access to?',
      'The partner portal at app.evalent.io/partner shows your referral links, click and conversion stats, commission history, and earned totals. You can log in any time to check your pipeline.',
    ],
    [
      'When do I get paid?',
      'Commissions are processed monthly. Once a referred school’s payment clears, your commission is queued for the next monthly payout. Your account manager will confirm payment details when you join.',
    ],
    [
      'What plans do schools buy?',
      'Evalent offers three annual plans: Essentials, Professional, and Enterprise. Schools on higher plans generate proportionally higher commission. Plan details are at evalent.io/pricing.',
    ],
    [
      'Who is a good fit for the partner programme?',
      'Admissions consultants, school network coordinators, EdTech resellers, curriculum advisors, and anyone who regularly works with independent or international school leadership. If you speak to admissions teams, this programme is built for you.',
    ],
    [
      'Can I refer schools in any country?',
      'Yes. Evalent operates globally. Schools in the UK, UAE, Singapore, Australia, New Zealand, the US, and across Africa and Asia are all in scope. There are no geographic restrictions on referrals.',
    ],
    [
      'Do referred schools need to be new to Evalent?',
      'Yes — the programme applies to new customers only. Schools already using Evalent cannot be retrospectively attributed to a partner.',
    ],
    [
      'I want a custom arrangement. Is that possible?',
      'Yes. We offer a Custom partner type for arrangements that don’t fit the standard tiers — for example, embedding Evalent into a larger consultancy or managed admissions service. Email partners@evalent.io to discuss.',
    ],
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute pointer-events-none" style={{ bottom: '-300px', left: '-200px' }} aria-hidden="true">
          <img src="/mark_white.svg" alt="" style={{ width: '900px', height: '900px', opacity: 0.03, animation: 'spin-slow 240s linear infinite', transformOrigin: 'center center' }} />
        </div>
        <style>{\`@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\`}</style>
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
            <a href="mailto:partners@evalent.io" className="bg-white text-brand font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Apply to join →
            </a>
            <a href="https://app.evalent.io/partner/login" className="bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors">
              Partner portal login
            </a>
          </div>
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
                Independent and international schools spend significant time and money on admissions — yet most still rely on unstructured evidence. Evalent solves a problem that every admissions team feels.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                When you introduce a school to Evalent, you’re offering something they can trial for free, with no credit card, and see working within 5 minutes. Conversion is straightforward because the product sells itself.
              </p>
              <div className="space-y-2">
                {[
                  'Attractive commission across multiple tiers',
                  'Dedicated partner portal to track clicks and earnings',
                  'Free trial means schools can say yes immediately',
                  'Global market — no geographic restrictions',
                  'Monthly payouts with full transparency',
                  'Dedicated account manager from day one',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-brand font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="text-xs font-bold text-blue-400 tracking-widest mb-3">THE MARKET</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['10,000+', 'Independent schools globally'],
                    ['45 min', 'Time saved per applicant'],
                    ['3 tiers', 'Plans from Essentials to Enterprise'],
                    ['5 min', 'From link sent to report ready'],
                  ].map(([stat, label]) => (
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
                  Go to partner portal →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">PROGRAMME TIERS</div>
            <h2 className="text-3xl font-black text-navy tracking-tight mb-3">Find the right tier for how you work</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">From occasional referrals to deep commercial partnerships. Every tier comes with portal access, tracking, and monthly payouts.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'Referral Partner',
                desc: 'Introduce a school and earn a fixed fee when they convert. Simple and low-commitment.',
                fit: 'Educators, consultants, and advisors who occasionally recommend tools to schools.',
                icon: '↗',
                featured: False,
              },
              {
                name: 'Reseller',
                desc: 'Present Evalent as part of your service offering. Earn a percentage of the school’s first-year subscription.',
                fit: 'EdTech resellers, regional distributors, and managed service providers.',
                icon: '▤',
                featured: True,
              },
              {
                name: 'Senior Partner',
                desc: 'Our deepest commercial tier. Earn a recurring percentage on every payment the school makes — not just the first year.',
                fit: 'High-volume introducers and strategic partners with strong school network access.',
                icon: '◆',
                featured: False,
              },
              {
                name: 'Influencer',
                desc: 'You have an audience in the international schools space. Earn commission on conversions from your community.',
                fit: 'Educators with newsletters, podcasts, LinkedIn audiences, or active school communities.',
                icon: '○',
                featured: False,
              },
            ].map((tier) => (
              <div key={tier['name']} className={`rounded-2xl p-6 border-2 ${tier['featured'] ? 'border-brand bg-white' : 'border-gray-200 bg-white'}`}>
                {tier['featured'] and (
                  <div className="inline-block bg-brand text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest mb-3">MOST POPULAR</div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base font-black ${tier['featured'] ? 'bg-blue-50 text-brand' : 'bg-gray-100 text-gray-600'}`}>
                    {tier['icon']}
                  </div>
                  <div className="text-base font-black text-navy">{tier['name']}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{tier['desc']}</p>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-0.5">BEST FIT</div>
                  <div className="text-xs text-gray-600">{tier['fit']}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-5">Need something bespoke? We offer a Custom tier for unusual arrangements. <a href="mailto:partners@evalent.io" className="text-brand hover:underline">Email us to discuss.</a></p>
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
            {[
              {
                step: '01',
                title: 'Apply to join',
                desc: 'Email partners@evalent.io with a short note about who you are and how you work with schools. We respond within 2 business days.',
              },
              {
                step: '02',
                title: 'Get your referral link',
                desc: 'Once approved, we set you up with a unique referral link and access to the partner portal. Every school that clicks your link is tracked automatically.',
              },
              {
                step: '03',
                title: 'Introduce schools',
                desc: 'Share your link by email, LinkedIn, your website, or in conversation. Schools start a free trial and explore at their own pace.',
              },
              {
                step: '04',
                title: 'Earn commission',
                desc: 'When a school you referred converts to a paid plan, your commission is recorded. Track everything in the portal and receive monthly payouts.',
              },
            ].map((item) => (
              <div key={item['step']} className="relative">
                <div className="text-4xl font-black text-gray-100 mb-3">{item['step']}</div>
                <div className="text-sm font-bold text-navy mb-2">{item['title']}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item['desc']}</div>
              </div>
            ))}
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
            {[
              {
                name: 'Essentials',
                cap: '100 assessments',
                price_usd: '$2,900',
                price_gbp: '£2,300',
                desc: 'Ideal for smaller schools or those running one intake cycle per year.',
              },
              {
                name: 'Professional',
                cap: '250 assessments',
                price_usd: '$5,500',
                price_gbp: '£4,400',
                desc: 'For schools with multiple year groups or two intake cycles. The most common tier.',
                featured: True,
              },
              {
                name: 'Enterprise',
                cap: '500+ assessments',
                price_usd: '$9,500',
                price_gbp: '£7,600',
                desc: 'Large schools, school groups, or those running assessments across multiple campuses.',
              },
            ].map((plan) => (
              <div key={plan['name']} className={`bg-white rounded-2xl border-2 p-6 ${plan.get('featured') ? 'border-brand' : 'border-gray-200'}`}>
                {plan.get('featured') and (
                  <div className="inline-block bg-brand text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest mb-3">MOST COMMON</div>
                )}
                <div className="text-base font-black text-navy mb-1">{plan['name']}</div>
                <div className="text-2xl font-black text-brand mb-0.5">{plan['price_usd']}</div>
                <div className="text-xs text-gray-400 mb-3">{plan['price_gbp']} / annual</div>
                <div className="text-xs font-bold text-gray-500 mb-3">{plan['cap']}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{plan['desc']}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Full plan details at <a href="/pricing" className="text-brand hover:underline">evalent.io/pricing</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-7">Partner programme questions</h2>
          <div className="space-y-4">
            {[
              [
                'How does referral tracking work?',
                'When someone clicks your referral link, we set a 30-day tracking cookie. If they sign up and pay within that window, the conversion is attributed to you automatically. No coupon codes or manual tracking needed.',
              ],
              [
                'What does the partner portal give me access to?',
                'The partner portal at app.evalent.io/partner shows your referral links, click and conversion stats, commission history, and total earnings. You can log in any time to check your pipeline.',
              ],
              [
                'When do I get paid?',
                'Commissions are processed monthly. Once a referred school’s payment clears, your commission is queued for the next payout cycle. Your account manager will confirm payment details when you join.',
              ],
              [
                'Who is a good fit for the partner programme?',
                'Admissions consultants, school network coordinators, EdTech resellers, curriculum advisors, and anyone who regularly works with independent or international school leadership. If you speak to admissions teams, this programme is built for you.',
              ],
              [
                'Can I refer schools in any country?',
                'Yes. Evalent operates globally. Schools in the UK, UAE, Singapore, Australia, New Zealand, the US, and across Africa and Asia are all in scope. There are no geographic restrictions on referrals.',
              ],
              [
                'Do referred schools need to be new to Evalent?',
                'Yes — the programme applies to new customers only. Schools already using Evalent cannot be retrospectively attributed to a partner.',
              ],
              [
                'I want a custom arrangement. Is that possible?',
                'Yes. We offer a Custom partner tier for arrangements that don’t fit the standard tiers — for example, embedding Evalent into a larger managed admissions service. Email partners@evalent.io to discuss.',
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm font-bold text-navy mb-1.5">{q}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">Ready to become a partner?</h2>
          <p className="text-blue-300 text-sm mb-8 leading-relaxed">
            Email us with a short introduction and we’ll get back to you within 2 business days.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:partners@evalent.io" className="bg-white text-brand font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Email partners@evalent.io →
            </a>
            <a href="https://app.evalent.io/partner/login" className="bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors">
              Partner portal login
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
