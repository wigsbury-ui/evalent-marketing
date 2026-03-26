import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { EvalentChat } from '@/components/EvalentChat'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })

export const metadata: Metadata = {
  title: 'Evalent — Admissions Intelligence Platform',
  description: 'AI-powered admissions assessments for international schools. Structured reports in minutes, not days.',
  openGraph: {
    title: 'Evalent — Admissions Intelligence Platform',
    description: '10 free trial reports. No credit card. Set up in 5 minutes.',
    url: 'https://evalent.io',
    siteName: 'Evalent',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans antialiased overflow-x-hidden">{children}<div className="hidden md:block"><EvalentChat /></div></body>
    </html>
  )
}
