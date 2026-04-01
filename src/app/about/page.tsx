import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Who We Are | Evalent',
  description: 'Evalent was built by educators and technologists who believe admissions decisions should be based on structured evidence, not gut feeling. Learn who we are and why we built this.',
  openGraph: {
    title: 'About Evalent — Built by Educators, for Schools',
    description: 'Evalent was built by educators and technologists who believe admissions decisions should be based on structured evidence.',
    url: 'https://www.evalent.io/about',
  },
}

const values = [
  {
    title: 'Evidence over impression',
    desc: 'Every admissions decision should rest on structured, documented evidence — not a feeling formed in a 20-minute campus visit.',
    icon: '📋',
  },
  {
    title: 'Fair to every applicant',
    desc: 'The same rubric, the same standard, the same evaluation model — whether a student applies from Dubai, Singapore or London.',
    icon: '⚖️',
  },
  {
    title: 'Schools run on trust',
    desc: 'Schools share sensitive data with us. We take that seriously. Student data is never used to train AI models. Ever.',
    icon: '🔒',
  },
  {
    title: 'Admin should be invisible',
    desc: 'Admissions teams are stretched. Our job is to make the process disappear — so they can focus on the students, not the paperwork.',
    icon: '⚡',
  },
]

const team = [
  {
    name: 'Neil Tomalin',
    role: 'Founder & CEO',
    bio: 'Former educator with over a decade in international school leadership. Built Evalent after experiencing firsthand how inconsistent and time-consuming admissions processes were across the sector.',
    initials: 'NT',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            ABOUT EVALENT
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5">
            Built by educators.<br />
            <span className="text-blue-300">For the schools that shape futures.</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Evalent was founded on a simple belief: that every admissions decision deserves to be based on structured, 
            consistent evidence — not on who writes the best parent letter.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">OUR MISSION</div>
            <h2 className="text-3xl font-black text-navy tracking-tight mb-4">
              Make structured admissions accessible to every school
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Large schools have always had the resources to build rigorous assessment processes. Smaller schools, 
              newer international schools, and resource-stretched admissions teams often haven't.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Evalent changes that. For the cost of a part-time administrator, a school can run professional, 
              AI-evaluated assessments for every applicant — with reports that stand up to scrutiny and decisions 
              that can be explained to any parent.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              We work with international and independent schools across the Middle East, South-East Asia, 
              the UK, and beyond.
            </p>
          </div>
          <div className="space-y-4">
            {[
              ['Schools using Evalent', 'Growing network across 3 continents'],
              ['Assessments delivered', '140,000+ and counting'],
              ['Time to first report', 'Under 5 minutes from submission'],
              ['Manual scoring steps', 'Zero — fully automated'],
            ].map(([label, val]) => (
              <div key={label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-sm font-bold text-navy mb-0.5">{label}</div>
                <div className="text-xs text-gray-500">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">OUR VALUES</div>
            <h2 className="text-3xl font-black text-navy tracking-tight">What we believe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-base font-black text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE TEAM</div>
            <h2 className="text-3xl font-black text-navy tracking-tight">The people behind Evalent</h2>
          </div>
          <div className="flex justify-center">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="max-w-md bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full bg-brand text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                  {initials}
                </div>
                <div className="text-lg font-black text-navy mb-0.5">{name}</div>
                <div className="text-xs text-brand font-bold tracking-widest mb-4">{role}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security trust signal */}
      <section className="py-14 px-6 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black tracking-tight mb-3">Trusted with student data</h2>
          <p className="text-blue-300 text-sm leading-relaxed mb-6">
            We handle sensitive information about children. We treat that with the seriousness it deserves — 
            GDPR compliance, ISO 27001-compliant infrastructure, and a strict no-training-on-student-data policy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/why/data-security" className="text-sm text-blue-300 hover:text-white transition-colors underline underline-offset-2">
              Read our data security policy →
            </Link>
            <Link href="https://app.evalent.io/signup" className="inline-block bg-white text-brand font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
