import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Who We Are | Evalent',
  description: 'Evalent was built by educators and technologists who believe admissions decisions should be based on structured evidence, not gut feeling. Learn who we are and why we built this.',
  openGraph: {
    title: 'About Evalent: Built by Educators, for Schools',
    description: 'Evalent was built by educators and technologists who believe admissions decisions should be based on structured evidence.',
    url: 'https://www.evalent.io/about',
  },
}

const values = [
  {
    title: 'Evidence over impression',
    desc: 'Every admissions decision should rest on structured, documented evidence, not a feeling formed in a 20-minute campus visit.',
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Fair to every applicant',
    desc: 'The same rubric, the same standard, the same evaluation model, whether a student applies from Dubai, Singapore or London.',
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: 'Schools run on trust',
    desc: 'Schools share sensitive data with us. We take that seriously. Student data is never used to train language models. Ever.',
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Admin should be invisible',
    desc: 'Admissions teams are stretched. Our job is to make the process disappear, so they can focus on the students, not the paperwork.',
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
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
            Evalent was founded on a simple belief: that every admissions decision deserves to be based on structured, consistent evidence.
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
              Evalent-evaluated assessments for every applicant, with reports that stand up to scrutiny and decisions
              that can be explained to any parent.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              We work with international and independent schools across the Middle East, South-East Asia,
              the UK, and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '140,000+', label: 'Assessments delivered', sub: 'and counting' },
              { num: '<5 min', label: 'Assessment to report', sub: 'fully automated' },
              { num: '0', label: 'Manual scoring steps', sub: 'zero admin overhead' },
              { num: '3', label: 'Continents', sub: 'growing global network' },
            ].map(({ num, label, sub }) => (
              <div key={label} className="bg-navy rounded-2xl p-6 flex flex-col justify-between min-h-[130px]">
                <div className="text-3xl font-black text-white tracking-tight leading-none mb-3">{num}</div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">{label}</div>
                  <div className="text-xs text-blue-300 mt-0.5">{sub}</div>
                </div>
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
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-base font-black text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            STUDENT DATA PROTECTION
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-4">
            Trusted with the data that matters most
          </h2>
          <p className="text-blue-300 text-base leading-relaxed mb-3">
            GDPR compliant. ISO 27001-compliant infrastructure. Student data is never used to train language models. Ever.
          </p>
          <Link href="/why/data-security" className="text-sm text-blue-400 hover:text-white transition-colors underline underline-offset-2 block">
            Read our full data security policy →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
