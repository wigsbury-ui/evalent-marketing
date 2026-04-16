import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import CookieBanner from "@/components/CookieBanner"
import RefCookieHandler from "@/components/RefCookieHandler"
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { EvalentChat } from '@/components/EvalentChat'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-24.png', sizes: '24x24', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: {
    default: 'Evalent | Intelligent Admissions Assessments for International Schools',
    template: '%s | Evalent',
  },
  description: 'Replace paper tests with structured, Evalent-evaluated assessments. Professional admission reports in under 5 minutes, no manual scoring, no admin burden.',
  openGraph: {
    title: 'Evalent | Intelligent Admissions Assessments for International Schools',
    description: 'Replace paper tests with structured, Evalent-evaluated assessments. Professional admission reports in under 5 minutes.',
    url: 'https://www.evalent.io',
    siteName: 'Evalent',
    type: 'website',
    images: [{ url: 'https://www.evalent.io/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evalent | Intelligent Admissions Assessments for International Schools',
    description: 'Replace paper tests with structured, Evalent-evaluated assessments. Professional reports in under 5 minutes.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans antialiased overflow-x-hidden"><Suspense fallback={null}><RefCookieHandler /></Suspense>{children}<div className="hidden md:block"><EvalentChat /></div><CookieBanner /><Analytics /></body>
    </html>
  )
}
