import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import CtaTrialButton from '@/components/CtaTrialButton'

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
      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1175948689?badge=0&autopause=0&player_id=0&app_id=58479"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Evalent | Wellbeing"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Watch this 90-second video</p>
          <h2 className="text-center text-xl font-bold text-navy mt-4">An assessment experience that reflects well on your school</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">For many applicants, Evalent is the first formal assessment they have ever sat. Video guides, grade-appropriate content, and a consistent structure ensure every student feels prepared and supported throughout. Students who feel calm perform closer to their actual ability, giving your assessors better evidence and families a better impression.</p>
        </div>
      </section>

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
          <div className="flex gap-3 justify-center flex-wrap">
            <CtaTrialButton />
            <Link href="/why" className="bg-white text-gray-600 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">All benefits →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
