import type { Metadata } from 'next'

export const homeMetadata: Metadata = {
  title: 'Evalent | Student Assessment Reports in 5 Minutes',
  description: 'Replace your paper admissions test with a structured, Evalent-evaluated assessment. Professional reports for every applicant in under 5 minutes. 10 free trial reports.',
  openGraph: {
    title: 'Evalent | Intelligent Admissions Assessments for International Schools',
    description: '10 free trial reports. No credit card. Structured assessments with Evalent-evaluated reports delivered in under 5 minutes.',
    url: 'https://www.evalent.io',
    images: [{ url: 'https://www.evalent.io/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evalent | Intelligent Admissions Assessments for International Schools',
    description: '10 free trial reports. No credit card. Professional reports in under 5 minutes.',
  },
}
