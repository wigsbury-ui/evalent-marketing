import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroTrialButton from '@/components/HeroTrialButton'
import Link from 'next/link'
import CtaTrialButton from '@/components/CtaTrialButton'
import VimeoEmbed from '@/components/VimeoEmbed'

export const metadata = {
  title: 'Operational Benefits | Why Evalent',
  description: 'Run admissions smoothly through summer holidays and beyond. Evalent automates evaluation, enables remote oversight, and removes the operational friction that slows schools down.',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">WHY EVALENT</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Admissions that run themselves. Even in August.</h1>
          <p className="text-blue-300 text-base leading-relaxed mb-6">Evalent removes the operational overhead from every stage of the admissions process — so your team can run a full pipeline without being in the building.</p>
          <HeroTrialButton />
        </div>
      </section>

      <VimeoEmbed videoId="1186679534" title="Evalent | Operational Benefits" />

      <section className="px-6 bg-white pt-10 pb-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-xl font-bold text-navy mt-4">The admissions calendar does not stop for summer</h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mt-2 max-w-2xl mx-auto">Most schools receive applications year-round, with a significant surge in late spring and summer — exactly when teachers are unavailable and leaders are off site. Evalent is built for this reality. Automated scoring, remote access, and a structured workflow mean the pipeline keeps moving without anyone needing to be in the building.</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Summer admissions without the staffing problem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Getting teachers to evaluate the academic portion of admissions tests during school holidays is one of the most persistent operational headaches in international schools. Teachers are not on site, are not contractually obligated to respond, and often simply do not. Evalent removes this dependency entirely. Academic scoring — English, Mathematics, and Reasoning — is handled automatically the moment the student submits. The only human decision required is the admissions outcome, which can be made from anywhere in seconds.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Remote oversight for principals and heads of school</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Summer is the time when leaders are least physically present — and most anxious about what is happening in the pipeline. Evalent&apos;s Strategy page gives principals and heads of school a live view of every grade&apos;s enrolment position, fill rate, pipeline velocity, and pending decisions, accessible from any device, anywhere in the world. Leaders do not need to be on campus, call admissions staff, or wait for a weekly report. The picture is always current.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Assessor decisions from email — no login required</h3>
              <p className="text-sm text-gray-600 leading-relaxed">When a report is ready, the assessor receives the full summary and five decision buttons in a single email. One click records the decision and updates the pipeline instantly. There is no portal to log in to, no VPN, no system to navigate. An assessor reviewing applications from home or abroad can process a full cohort in the time it would normally take to find their login credentials.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Automated reminders so nothing stalls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">If a student has not started their assessment, Evalent sends an automatic reminder. If an assessor has not responded within 48 hours, a follow-up goes out without anyone having to chase. During holiday periods when monitoring is difficult, this automatic follow-up layer keeps every application moving without human intervention.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">No software, no room, no invigilator</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The assessment runs in any modern browser on a configured school device. There is nothing to install, no exam room to book, and no invigilator to schedule. Where a student&apos;s current school is running the session on your behalf, the Share with School feature delivers the link, setup instructions, and full guidance directly to a contact at their school — so your team does not need to coordinate the session at all.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">Five-minute reports. Zero manual scoring.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">From the moment a student submits, the entire scoring and report generation pipeline runs automatically. Within five minutes, the assessor has a complete professional PDF — scored MCQs, Evalent-evaluated writing, a Motivation &amp; School Fit lens, and an AI-generated narrative — with no manual marking at any stage. During summer when your team is reduced, this matters more than at any other time of year.</p>
            </div>

            <div className="border border-teal-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy mb-2">One admissions platform for your whole leadership team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Evalent&apos;s Team Management feature gives each role exactly the access they need — admissions staff manage the pipeline, senior leaders have strategic visibility, and governors or board members see enrolment position without accessing individual student data. Over summer, this means different people can pick up different parts of the process without needing handover meetings, shared spreadsheets, or shared inboxes.</p>
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

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center flex-wrap gap-3">
          <Link href="/why" className="text-gray-400 hover:text-brand text-sm">← All Why Evalent pages</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
