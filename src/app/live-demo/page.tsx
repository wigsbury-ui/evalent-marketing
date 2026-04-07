import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EvalDemo from '@/components/EvalDemo'

export const metadata: Metadata = {
  title: 'Live Demo — See Evalent Evaluate',
  description: 'Write any response and watch Evalent score it across four criteria in seconds. Calibrated to grade and curriculum.',
}

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <EvalDemo />
      <Footer />
    </div>
  )
}
