import HeroTrialButton from '@/components/HeroTrialButton'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FaqAccordion from '@/components/features/FaqAccordion'

export const metadata = {
  title: 'Crafted Question Sets | Evalent Features',
  description: 'Every Evalent question set is individually calibrated to grade level, curriculum programme, and a five-domain framework covering academic ability, mindset, and motivation.',
}

// Alignment matrix data
const curricula = [
  { name: 'IB PYP',    range: 'G3–5',   color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'IB MYP',    range: 'G6–10',  color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'British',   range: 'Y4–11',  color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'American',  range: 'G3–10',  color: 'bg-red-100 text-red-700 border-red-200' },
  { name: 'Australian',range: 'Y4–10',  color: 'bg-green-100 text-green-700 border-green-200' },
  { name: 'NZ',        range: 'Y4–10',  color: 'bg-teal-100 text-teal-700 border-teal-200' },
]

const domains = [
  { name: 'English',    dot: 'bg-brand',    desc: 'Reading + writing' },
  { name: 'Maths',      dot: 'bg-purple-500', desc: 'Core + applied' },
  { name: 'Reasoning',  dot: 'bg-green-500',  desc: 'Non-verbal + verbal' },
  { name: 'Mindset',    dot: 'bg-amber-500',  desc: 'Growth inventory' },
  { name: 'School Fit', dot: 'bg-pink-500',   desc: 'Motivation lens' },
]

const attributes = [
  { label: 'Academic readiness', desc: 'English, Mathematics, and Reasoning questions are calibrated to the exact grade-level standards of the selected curriculum. A Grade 3 IB PYP paper is a fundamentally different instrument from a Grade 10 British GCSE-pathway paper.', icon: '📐' },
  { label: 'Extended writing', desc: 'Every assessment includes an open-ended extended writing task with a prompt written specifically for the grade and curriculum. Prompts are designed to be accessible for all students while creating clear differentiation between levels of ability.', icon: '✍️' },
  { label: 'Applied mathematics', desc: 'Beyond core knowledge MCQs, every set includes multi-step word problems and a written reasoning task. Students who understand mathematics explain their thinking. Those who have memorised procedures cannot.', icon: '🔢' },
  { label: 'Non-verbal reasoning', desc: 'Reasoning questions use patterns, matrices, and analogies that are curriculum-neutral by design. This domain is the least susceptible to preparation or tutoring, giving assessors a reliable signal of underlying cognitive ability.', icon: '🧩' },
  { label: 'Mindset & values inventory', desc: 'A ten-item growth mindset inventory assesses how students approach challenge, setback, and learning. Scored on a four-point scale, mindset data is contextual — it informs the recommendation without overriding academic performance.', icon: '💚' },
  { label: 'Motivation & School Fit', desc: 'A personal statement prompt asks every student why they want to join your school specifically. Evalent evaluates authenticity, school knowledge, and genuine motivation — and flags where responses appear coached or generic.', icon: '⭐' },
]

const faqs: [string, string][] = [
  ['How are question sets calibrated to grade level?', 'Each grade level has its own question set with vocabulary, passage length, mathematical complexity, and reasoning difficulty matched to the curriculum standards for that entry point. A Grade 3 paper uses age-appropriate language and Year 3/4 concepts. A Grade 10 paper uses GCSE, IB MYP Year 5, or AP-level content depending on the curriculum selected.'],
  ['Does the question set change based on curriculum?', 'Yes. When a school selects a curriculum during onboarding, Evalent uses the corresponding question set for every assessment. An IB school receives IB-framed writing prompts and MYP-aligned mathematics. A British school receives NC-aligned content. The five domains remain constant but the content within each domain is calibrated to the programme.'],
  ['Are question sets updated regularly?', 'Question sets are reviewed and updated periodically to maintain alignment with curriculum standards and to prevent familiarisation at the question level. Schools are notified of any material changes.'],
  ['Can we see sample questions before signing up?', 'Yes. The live demo on our Evaluation feature page lets you see a sample assessment in action. Contact us at hello@evalent.io for a full curriculum-specific sample paper.'],
  ['Is the Mindset inventory a pass or fail component?', 'No. Mindset scores are contextual and inform the overall recommendation without acting as a hard gate. A student with strong academic scores and a developing mindset profile may still receive a Ready to Admit recommendation, with a note for the admissions team.'],
  ['How does Evalent evaluate writing quality?', 'Extended writing is evaluated by Evalent against four criteria: task completion, organisation and structure, vocabulary range, and grammatical accuracy. The evaluation produces a band (Excellent through to Insufficient), supporting commentary, and a list of specific strengths and development areas, all calibrated to the grade level and curriculum.'],
]

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">EVALENT FEATURES</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Questions built for<br/>
            <span className="text-blue-300">every grade and programme.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-xl mx-auto">
            Every Evalent question set is individually crafted for the grade level and curriculum — covering five domains from academic readiness to mindset and motivation.
          </p>
          <HeroTrialButton />
        </div>
      </section>

      {/* INTRO — 2 column */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">THE DESIGN PRINCIPLE</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-4">Not a generic test. A calibrated assessment for each child.</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Most admissions tests ask every student the same questions regardless of age, curriculum, or entry level. Evalent does not. Every question set is built from the ground up for a specific grade and curriculum programme — so the difficulty, vocabulary, context, and writing prompts are appropriate for that exact entry point.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Across all curricula and grades, every assessment covers the same five domains: English, Mathematics, Reasoning, Mindset, and School Fit. The framework is consistent. The content is calibrated.
            </p>
          </div>
          <div className="space-y-2">
            {[
              'Individually calibrated for each grade level from Grade 3 to Grade 10',
              'Programme-aware content: IB, British, American, Australian, and NZ',
              'Five domains: English, Mathematics, Reasoning, Mindset, School Fit',
              'Extended writing with grade-appropriate, curriculum-aware prompts',
              'Non-verbal reasoning: curriculum-neutral, resistant to preparation',
              'Mindset inventory: ten items, four-point growth orientation scale',
              'Motivation & School Fit lens: authenticity-evaluated personal statement',
              'Writing evaluated against four criteria at grade-level standards',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIGNMENT MATRIX GRAPHIC */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">ALIGNMENT MATRIX</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">Every combination. Individually crafted.</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Each cell represents a distinct question set calibrated to that programme and grade range. All five domains are covered across every combination.</p>
          </div>

          {/* Matrix */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header row */}
            <div className="grid border-b border-gray-100" style={{ gridTemplateColumns: '160px repeat(5, 1fr)' }}>
              <div className="px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 border-r border-gray-100">Programme</div>
              {domains.map(d => (
                <div key={d.name} className="px-3 py-3 text-center bg-gray-50 border-r border-gray-100 last:border-r-0">
                  <div className={`inline-block w-2.5 h-2.5 rounded-full ${d.dot} mb-1`} />
                  <div className="text-xs font-bold text-navy">{d.name}</div>
                  <div className="text-[10px] text-gray-400 leading-tight">{d.desc}</div>
                </div>
              ))}
            </div>
            {/* Data rows */}
            {curricula.map((cur, i) => (
              <div key={cur.name} className={`grid border-b border-gray-50 last:border-b-0 ${i % 2 === 1 ? 'bg-gray-50/40' : ''}`} style={{ gridTemplateColumns: '160px repeat(5, 1fr)' }}>
                <div className="px-4 py-4 border-r border-gray-100 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${cur.color}`}>{cur.name}</span>
                  <span className="text-xs text-gray-400">{cur.range}</span>
                </div>
                {domains.map(d => (
                  <div key={d.name} className="flex items-center justify-center py-4 border-r border-gray-50 last:border-r-0">
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-5 h-5 rounded-full ${d.dot} flex items-center justify-center shadow-sm`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-[9px] text-gray-400 font-medium">calibrated</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            {domains.map(d => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${d.dot}`} />
                <span className="text-xs text-gray-500 font-medium">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRIBUTE CARDS */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-3">FIVE DOMAINS</div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-2">What we measure — and why it matters</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Each domain is designed to surface a specific dimension of student capability that a single test score cannot capture.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {attributes.map(a => (
              <div key={a.label} className="border border-indigo-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{a.icon}</span>
                  <h3 className="text-sm font-black text-navy">{a.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-10 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl font-black text-white">8</div><div className="text-sm text-blue-300 mt-1">Grade levels</div></div>
          <div><div className="text-3xl font-black text-white">5</div><div className="text-sm text-blue-300 mt-1">Curricula supported</div></div>
          <div><div className="text-3xl font-black text-white">5</div><div className="text-sm text-blue-300 mt-1">Domains per assessment</div></div>
          <div><div className="text-3xl font-black text-white">40+</div><div className="text-sm text-blue-300 mt-1">Unique question sets</div></div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />

      <div className="bg-gray-50 py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/features/assessment" className="text-gray-400 hover:text-brand text-sm">← The Assessment</Link>
          <Link href="/features" className="text-brand font-semibold hover:underline text-sm">All features →</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
