import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import CtaTrialButton from '@/components/CtaTrialButton'
import VimeoEmbed from '@/components/VimeoEmbed'

export const metadata = {
  title: 'Student Wellbeing | Why Evalent',
  description: 'Video guides, clear instructions, and a structured format that reduces anxiety and helps every student perform at their best.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">A calm, supported assessment experience for every applicant.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">Video guides, clear instructions, and a structured format that reduces anxiety and helps every student perform at their best.</p>
          <HeroTrialButton />
        </div>
      </section>
      <VimeoEmbed videoId="1175948689" title="Evalent | Wellbeing" />

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            <div className="border border-green-100 border-green-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Video introductions to every section</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Before each section of the assessment begins, students watch a short video guide that explains exactly what is expected of them. This reduces uncertainty, settles nerves, and ensures every candidate starts each section with the same level of preparation.</p>
            </div>
            <div className="border border-green-100 border-green-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Consistent from the first question</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Every student experiences the assessment in the same order, with the same instructions, in the same format. There are no surprises. For students who are already anxious about the admissions process, consistency is reassuring.</p>
            </div>
            <div className="border border-green-100 border-green-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Appropriate for the grade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A Grade 3 applicant does not face secondary-level language or concepts. Every assessment is calibrated to the entry grade, the prompts, vocabulary, and task complexity are all appropriate for the student sitting in front of them.</p>
            </div>
            <div className="border border-green-100 border-green-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Accommodations built in</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Extended time and other access arrangements can be configured per student before the link is sent. Students with IEPs, 504 plans, or equivalent provisions are supported without any additional workflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-blue-50 border-t border-blue-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy tracking-tight mb-3">Try Evalent free with your next 10 applicants.</h2>
          <p className="text-gray-600 text-sm mb-6">No credit card. No contract. Set up in 5 minutes.</p>
          <CtaTrialButton />
        </div>
      </section>

      <Footer />
    </div>
  )
}
