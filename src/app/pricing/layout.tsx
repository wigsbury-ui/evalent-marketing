import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Evalent | School Admissions Assessment Software',
  description: 'Simple, transparent pricing for international and independent schools. Start with 10 free assessments.',
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
