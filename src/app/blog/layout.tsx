import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Admissions Strategy & AI Assessment Insights | Evalent',
  description: 'Expert insights on school admissions strategy, AI-powered assessment, student wellbeing, and school leadership. From the Evalent team.',
  openGraph: {
    title: 'The Evalent Blog — Admissions Strategy & AI Assessment Insights',
    description: 'Expert insights on school admissions strategy, AI-powered assessment, and school leadership.',
    url: 'https://www.evalent.io/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Evalent Blog — Admissions Strategy & AI Assessment Insights',
    description: 'Expert insights on school admissions, AI assessment, and school leadership.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
