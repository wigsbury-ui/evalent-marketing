import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Standing with GCC Schools',
  description: 'Evalent is a GCC-founded company. We are offering all GCC schools a free year of Essentials as a gesture of solidarity.',
}

export default function GccSupportPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px 120px' }}>

        {/* Flag row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, fontSize: 28 }}>
          🇦🇪 🇸🇦 🇶🇦 🇰🇼 🇧🇭 🇴🇲
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800,
          color: '#07112e', lineHeight: 1.15, marginBottom: 20,
        }}>
          Standing with GCC Schools
        </h1>

        <p style={{ fontSize: 18, color: '#475569', lineHeight: 1.8, marginBottom: 32 }}>
          Evalent was founded in the Gulf. Our team, our early customers, and our understanding
          of what great international schooling looks like — all of it was shaped here.
        </p>

        <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
          We know that schools across the GCC are navigating an unusually difficult period.
          Admissions teams are under pressure. Families are making decisions in uncertain
          circumstances. The last thing you need is more friction in your processes.
        </p>

        <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 48 }}>
          So we wanted to do something tangible. Every school in the GCC can use Evalent
          for free for a full year — no charge, no credit card required upfront, and no
          commitment beyond trying it. If it helps, we would love to continue working with you.
        </p>

        {/* Offer card */}
        <div style={{
          background: '#f8fafc', border: '2px solid #002ec1',
          borderRadius: 16, padding: '36px 40px', marginBottom: 48,
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            The offer
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#07112e', marginBottom: 8 }}>
            1 free year of Essentials
          </h2>
          <p style={{ fontSize: 15, color: '#64748b', marginBottom: 24, lineHeight: 1.7 }}>
            Full access to Evalent Essentials — unlimited assessments, AI-generated reports,
            the full admissions workflow — for 12 months at no cost.
          </p>
          <div style={{
            background: 'white', border: '1px solid #e2e8f0',
            borderRadius: 10, padding: '16px 24px', marginBottom: 24,
            display: 'inline-block',
          }}>
            <p style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
              Your coupon code
            </p>
            <p style={{ fontSize: 28, fontWeight: 800, color: '#002ec1', letterSpacing: '0.08em', fontFamily: 'monospace' }}>
              GCC2026
            </p>
          </div>
          <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 0 }}>
            Valid until 30 May 2026. Available to all schools based in the GCC.
          </p>
        </div>

        {/* How to redeem */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#07112e', marginBottom: 20 }}>
          How to redeem
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {[
            ['Sign up for a free trial', 'Create your school account at evalent.io — it takes under two minutes.'],
            ['Complete your school setup', 'Configure your curriculum, grades, and assessor details in the onboarding flow.'],
            ['Go to Billing and enter your code', 'In your dashboard, navigate to Billing → enter GCC2026 → apply the code before proceeding to checkout.'],
            ['Check out at $0', 'The Essentials plan will show as free for Year 1. Your card is saved for renewal after 12 months — cancel any time before then.'],
          ].map(([title, desc], i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: '#002ec1',
                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700, flexShrink: 0, marginTop: 2,
              }}>
                {i + 1}
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#07112e', marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/?signup=1" style={{
            display: 'inline-block', background: '#002ec1', color: 'white',
            padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16,
            textDecoration: 'none',
          }}>
            Start your free trial →
          </Link>
          <Link href="/pricing" style={{
            display: 'inline-block', color: '#002ec1',
            padding: '14px 16px', fontSize: 15, textDecoration: 'none', fontWeight: 500,
          }}>
            View Essentials features
          </Link>
        </div>

        <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 24, lineHeight: 1.6 }}>
          Questions? Email us at{' '}
          <a href="mailto:team@evalent.io" style={{ color: '#002ec1' }}>team@evalent.io</a>
          {' '}— we will respond personally.
        </p>

      </main>
      <Footer />
    </>
  )
}
