import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Admissions Strategy & Intelligent Assessment Insights | Evalent',
  description: 'Expert insights on school admissions strategy, Evalent-powered assessment, student wellbeing, and school leadership. From the Evalent team.',
  openGraph: {
    title: 'The Evalent Blog — Admissions Strategy & Intelligent Assessment Insights',
    description: 'Expert insights on school admissions strategy, Evalent-powered assessment, and school leadership.',
    url: 'https://www.evalent.io/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Evalent Blog — Admissions Strategy & Intelligent Assessment Insights',
    description: 'Expert insights on school admissions, Evalent assessment, and school leadership.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
