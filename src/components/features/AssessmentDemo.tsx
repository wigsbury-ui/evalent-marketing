'use client'
import { useState, useEffect } from 'react'

const PAGES = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'eng1',    label: 'English \u2014 Passage 1' },
  { id: 'eng2',    label: 'English \u2014 Passage 2' },
  { id: 'eng3',    label: 'English \u2014 Data' },
  { id: 'eng4',    label: 'English \u2014 Writing' },
  { id: 'maths1',  label: 'Maths \u2014 Core' },
  { id: 'maths2',  label: 'Maths \u2014 Applied' },
  { id: 'reason',  label: 'Reasoning' },
  { id: 'mindset', label: 'Mindset' },
  { id: 'final',   label: 'Final question' },
]

const PASSAGE1 = `On Saturday morning, Amal helped her grandfather in the garden. They planted seedlings in neat rows and covered them with soil. By midday the sun was strong, so they watered the plants and moved the tools to the shade. Amal noticed tiny insects on one leaf and asked if they would harm the seedlings. Her grandfather explained that some insects eat plants, but others protect them by eating pests. Together they looked closely and decided to leave the helpful insects alone.`

const MATHS_CORE = [
  { q: 'Which number is the greatest?', opts: ['0.45', '0.5', '0.405', '0.49'], correct: 1 },
  { q: 'A rectangle is 8 cm long and 5 cm wide. What is its area?', opts: ['13 cm\u00b2', '26 cm\u00b2', '40 cm\u00b2', '80 cm\u00b2'], correct: 2 },
  { q: 'What is 3/4 of 20?', opts: ['5', '10', '15', '18'], correct: 2 },
  { q: 'Which fraction is equivalent to 0.2?', opts: ['1/2', '1/5', '2/5', '1/4'], correct: 1 },
]

const REASONING_QS = [
  { q: 'Which number comes next in the pattern: 2, 5, 8, 11, \u2026 ?', opts: ['12', '13', '14', '15'], correct: 2 },
  { q: 'Choose the best analogy: Seed is to plant as egg is to \u2026', opts: ['feather', 'bird', 'nest', 'shell'], correct: 1 },
  { q: 'Which set is ordered from smallest to largest?', opts: ['0.6, 3/4, 0.72', '3/4, 0.72, 0.6', '0.72, 0.6, 3/4', '0.6, 0.72, 3/4'], correct: 3 },
]

const MINDSET_QS = [
  { q: 'You get a question wrong and do not understand why. What is the best next step?', opts: ['Skip it and move on quickly', 'Ask for an explanation and try a similar question', 'Guess the answer again', 'Decide you are not good at this topic'], correct: 1 },
  { q: 'A task feels difficult at first. What does that usually mean?', opts: ['You should give up', 'You are learning something new and may improve with practice', 'The teacher made a mistake', 'Only adults can do it'], correct: 1 },
  { q: 'You receive feedback that your writing needs clearer paragraphs. What is the best response?', opts: ['Ignore the feedback', 'Ask for an example and practise organising paragraphs', 'Feel upset and stop writing', 'Write shorter sentences only'], correct: 1 },
]

function VimeoEmbed({ label }: { label: string }) {
  return (
    <div className="mb-5">
      <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-2">{label}</div>
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-black" style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://player.vimeo.com/video/1164569992?badge=0&autopause=0&player_id=0&app_id=58479"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Evalent Assessment Instructions"
        />
      </div>
    </div>
  )
}

function MCQButton({ opt, idx, selected, answered, correct, onSelect }: {
  opt: string, idx: number, selected: number|null, answered: boolean, correct: number, onSelect: ()=>void
}) {
  const cls = answered
    ? idx === correct ? 'border-green-400 bg-green-50 text-green-800 font-semibold'
      : idx === selected && idx !== correct ? 'border-red-300 bg-red-50 text-red-700'
      : 'border-gray-100 text-gray-400'
    : selected === idx ? 'border-brand bg-blue-50 text-brand font-semibold'
    : 'border-gray-200 text-gray-700 hover:border-gray-300'
  return (
    <button onClick={() => { if (!answered) onSelect() }}
      className={`w-full text-left px-4 py-2.5 rounded-xl border-2 text-sm transition-all mb-2 ${cls}`}>
      <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>{opt}
    </button>
  )
}

export default function AssessmentDemo() {
  const [page, setPage] = useState(0)
  const [sel, setSel] = useState<number|null>(null)
  const [answered, setAnswered] = useState(false)
  const [mathSel, setMathSel] = useState<(number|null)[]>([null,null,null,null])
  const [mathDone, setMathDone] = useState(false)
  const [reasonSel, setReasonSel] = useState<(number|null)[]>([null,null,null])
  const [reasonDone, setReasonDone] = useState(false)
  const [mindsetSel, setMindsetSel] = useState<(number|null)[]>([null,null,null])
  const [mindsetDone, setMindsetDone] = useState(false)
  const [essay, setEssay] = useState('')
  const [motivation, setMotivation] = useState('')
  const [timeLeft, setTimeLeft] = useState(44*60+23)

  useEffect(() => {
    const iv = setInterval(()=>setTimeLeft(t=>Math.max(0,t-1)),1000)
    return ()=>clearInterval(iv)
  },[])

  const mins = Math.floor(timeLeft/60)
  const secs = timeLeft%60
  const progress = ((44*60+23-timeLeft)/(44*60+23))*100

  function goNext() { setPage(p=>Math.min(p+1,PAGES.length-1)); setSel(null); setAnswered(false) }
  function goBack() { setPage(p=>Math.max(p-1,0)) }

  const wordCount = essay.trim() ? essay.trim().split(/\s+/).length : 0

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Header + timer */}
        <div className="bg-navy px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-black text-white">EVAL<span className="text-brand italic">ENT</span></span>
            <div className="h-4 w-px bg-white/20"/>
            <span className="text-xs text-blue-300">Grade 8 Admissions Assessment &middot; IB</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={`text-sm font-bold font-mono ${timeLeft<300?'text-red-400':'text-white'}`}>
              {String(mins).padStart(2,'0')}:{String(secs).padStart(2,'0')}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100"><div className="h-full bg-brand transition-all duration-1000" style={{width:`${progress}%`}}/></div>

        {/* Page tabs */}
        <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
          {PAGES.map((pg,i) => (
            <button key={i} onClick={()=>{setPage(i);setSel(null);setAnswered(false)}}
              className={`px-3 py-2.5 text-xs font-semibold whitespace-nowrap flex-shrink-0 border-b-2 transition-all ${page===i?'border-brand text-brand bg-white':'border-transparent text-gray-400 hover:text-gray-600'}`}>
              {i+1}. {pg.label}
            </button>
          ))}
        </div>

        <div className="p-6">

          {/* WELCOME */}
          {page===0 && (
            <div className="max-w-xl mx-auto">
              <h3 className="text-base font-black text-navy mb-1">Welcome to your assessment</h3>
              <p className="text-sm text-gray-500 mb-4">Please watch the video below before you begin. It explains what to expect and how to complete each section.</p>
              <VimeoEmbed label="WATCH BEFORE STARTING" />
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[['English','Reading comprehension + writing'],['Mathematics','Core knowledge + applied problems'],['Reasoning','Patterns, logic, and data'],['Mindset','Learning behaviours inventory']].map(([l,d])=>(
                  <div key={l} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <div className="text-xs font-bold text-navy">{l}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{d}</div>
                  </div>
                ))}
              </div>
              <button onClick={goNext} className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800">
                Begin assessment &rarr;
              </button>
            </div>
          )}

          {/* ENGLISH PASSAGE 1 */}
          {page===1 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE READING THE PASSAGE" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-2">PASSAGE 1</div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 text-sm text-gray-700 leading-relaxed">{PASSAGE1}</div>
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-3">QUESTION 1 OF 5</div>
              <div className="text-sm font-semibold text-navy mb-3">What is the main purpose of the passage?</div>
              {['To describe how Amal and her grandfather care for seedlings','To explain why insects always harm plants','To persuade readers to buy garden tools','To tell a funny story about a lost insect'].map((opt,i)=>(
                <MCQButton key={i} opt={opt} idx={i} selected={sel} answered={answered} correct={0} onSelect={()=>setSel(i)}/>
              ))}
              {!answered
                ? <button onClick={()=>{if(sel!==null)setAnswered(true)}} disabled={sel===null}
                    className={`mt-2 px-5 py-2 rounded-lg text-sm font-bold ${sel!==null?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Confirm answer</button>
                : <div className="flex gap-2 mt-2">
                    <div className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold border ${sel===0?'bg-green-50 text-green-700 border-green-200':'bg-red-50 text-red-700 border-red-200'}`}>
                      {sel===0?'\u2713 Correct \u2014 well done.':'\u2717 The correct answer is A.'}
                    </div>
                    <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next &rarr;</button>
                  </div>
              }
            </div>
          )}

          {/* ENGLISH PASSAGE 2 */}
          {page===2 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE READING THE PASSAGE" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-2">PASSAGE 2</div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 text-sm text-gray-700 leading-relaxed">
                A new footpath was built along the edge of the town. Some people wanted the path to be perfectly straight because it would be the quickest route. Others argued that the path should curve around the large trees so that the shade would remain and birds would still have places to nest. The town council listened to both sides and chose a design that curved gently. Although the final path was slightly longer, it kept most of the trees and made the walk more comfortable on hot days.
              </div>
              <div className="text-sm font-semibold text-navy mb-3">Why did some people want the footpath to be straight?</div>
              {['It would look more colourful','It would be the quickest route','It would attract more birds','It would use more shade'].map((opt,i)=>(
                <MCQButton key={i} opt={opt} idx={i} selected={sel} answered={answered} correct={1} onSelect={()=>setSel(i)}/>
              ))}
              <div className="flex gap-2 mt-2">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                {!answered
                  ? <button onClick={()=>{if(sel!==null)setAnswered(true)}} disabled={sel===null}
                      className={`px-5 py-2 rounded-lg text-sm font-bold ${sel!==null?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Confirm</button>
                  : <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next &rarr;</button>
                }
              </div>
            </div>
          )}

          {/* ENGLISH DATA */}
          {page===3 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE LOOKING AT THE INFOGRAPHIC" />
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-3">RECYCLING GUIDE</div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs mb-3">
                  {[['Paper','bg-blue-50 border-blue-200 text-blue-700'],['Glass','bg-green-50 border-green-200 text-green-700'],['Plastic','bg-yellow-50 border-yellow-200 text-yellow-700'],['Food','bg-red-50 border-red-200 text-red-700']].map(([l,c])=>(
                    <div key={l} className={`rounded-xl p-3 border-2 font-bold ${c}`}>{l}</div>
                  ))}
                </div>
                <div className="text-xs text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                  Note: Rinse containers before recycling
                </div>
              </div>
              <div className="text-sm font-semibold text-navy mb-3">Which item belongs in the Plastic bin?</div>
              {['Cardboard box','Notebook paper','Plastic bottle','Tea bag'].map((opt,i)=>(
                <MCQButton key={i} opt={opt} idx={i} selected={sel} answered={answered} correct={2} onSelect={()=>setSel(i)}/>
              ))}
              <div className="flex gap-2 mt-2">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                {!answered
                  ? <button onClick={()=>{if(sel!==null)setAnswered(true)}} disabled={sel===null}
                      className={`px-5 py-2 rounded-lg text-sm font-bold ${sel!==null?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Confirm</button>
                  : <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next &rarr;</button>
                }
              </div>
            </div>
          )}

          {/* ENGLISH WRITING */}
          {page===4 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE STARTING YOUR WRITING" />
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5">WRITING PROMPT</div>
                <p className="text-sm text-navy leading-relaxed italic">&ldquo;Write a well-organised response (8&ndash;12 sentences) about a time you solved a problem. Explain the problem, the steps you took, and what you learned. Use clear paragraphs and specific details.&rdquo;</p>
              </div>
              <textarea value={essay} onChange={e=>setEssay(e.target.value)}
                placeholder="Write your response here..."
                className="w-full border border-gray-200 rounded-xl p-3 text-sm min-h-40 resize-none outline-none focus:border-brand font-sans"/>
              <div className="flex items-center justify-between mt-2">
                <span className={`text-xs ${wordCount>=50?'text-green-600 font-semibold':'text-gray-400'}`}>
                  {wordCount} words {wordCount>=50?' &mdash; ready':'&mdash; aim for 50+'}
                </span>
                <div className="flex gap-2">
                  <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                  <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-brand text-white hover:bg-blue-800">Save &amp; continue &rarr;</button>
                </div>
              </div>
            </div>
          )}

          {/* MATHS CORE */}
          {page===5 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE STARTING MATHEMATICS" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-4">MATHEMATICS &mdash; CORE (10 questions total, 4 shown)</div>
              <div className="space-y-4">
                {MATHS_CORE.map((q,qi)=>(
                  <div key={qi} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-400 tracking-widest mb-2">QUESTION {qi+1}</div>
                    <div className="text-sm font-semibold text-navy mb-3">{q.q}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {q.opts.map((opt,oi)=>(
                        <button key={oi} onClick={()=>{ if(!mathDone){const a=[...mathSel];a[qi]=oi;setMathSel(a)} }}
                          className={`px-3 py-2 rounded-lg border-2 text-sm text-left transition-all ${
                            mathDone ? oi===q.correct?'border-green-400 bg-green-50 text-green-800 font-semibold':oi===mathSel[qi]&&oi!==q.correct?'border-red-300 bg-red-50 text-red-700':'border-gray-100 text-gray-400'
                            : mathSel[qi]===oi?'border-brand bg-blue-50 text-brand font-semibold':'border-gray-200 text-gray-700 hover:border-gray-300'
                          }`}>
                          <span className="font-bold mr-1.5">{String.fromCharCode(65+oi)}.</span>{opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                {!mathDone
                  ? <button onClick={()=>setMathDone(true)} disabled={mathSel.some(s=>s===null)}
                      className={`px-5 py-2 rounded-lg text-sm font-bold ${mathSel.every(s=>s!==null)?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                      Check answers
                    </button>
                  : <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next &rarr;</button>
                }
              </div>
              {mathDone && (
                <div className="mt-3 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-700 font-semibold">
                  {mathSel.filter((s,i)=>s===MATHS_CORE[i].correct).length} / {MATHS_CORE.length} correct on this page
                </div>
              )}
            </div>
          )}

          {/* MATHS APPLIED */}
          {page===6 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE STARTING APPLIED PROBLEMS" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-4">MATHEMATICS &mdash; APPLIED PROBLEMS (6 total, 2 shown)</div>
              <div className="space-y-4">
                {[
                  {q:'A recipe uses 250 g of rice for 4 people. How much rice is needed for 6 people?',opts:['300 g','375 g','400 g','500 g']},
                  {q:'A runner completes 3 km in 15 minutes. At the same pace, how long for 5 km?',opts:['20 minutes','25 minutes','30 minutes','35 minutes']},
                ].map((q,qi)=>(
                  <div key={qi} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="text-sm font-semibold text-navy mb-3">{q.q}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {q.opts.map((opt,oi)=>(
                        <button key={oi} className="px-3 py-2 rounded-lg border-2 border-gray-200 text-sm text-left hover:border-gray-300 text-gray-700">
                          <span className="font-bold mr-1.5">{String.fromCharCode(65+oi)}.</span>{opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-brand text-white hover:bg-blue-800">Next &rarr;</button>
              </div>
            </div>
          )}

          {/* REASONING */}
          {page===7 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE STARTING REASONING" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-4">REASONING (10 total, 3 shown)</div>
              <div className="space-y-4">
                {REASONING_QS.map((q,qi)=>(
                  <div key={qi} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="text-sm font-semibold text-navy mb-3">{q.q}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {q.opts.map((opt,oi)=>(
                        <button key={oi} onClick={()=>{ if(!reasonDone){const a=[...reasonSel];a[qi]=oi;setReasonSel(a)} }}
                          className={`px-3 py-2 rounded-lg border-2 text-sm text-left transition-all ${
                            reasonDone ? oi===q.correct?'border-green-400 bg-green-50 text-green-800 font-semibold':oi===reasonSel[qi]&&oi!==q.correct?'border-red-300 bg-red-50 text-red-700':'border-gray-100 text-gray-400'
                            : reasonSel[qi]===oi?'border-brand bg-blue-50 text-brand font-semibold':'border-gray-200 text-gray-700 hover:border-gray-300'
                          }`}>
                          <span className="font-bold mr-1.5">{String.fromCharCode(65+oi)}.</span>{opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                {!reasonDone
                  ? <button onClick={()=>setReasonDone(true)} disabled={reasonSel.some(s=>s===null)}
                      className={`px-5 py-2 rounded-lg text-sm font-bold ${reasonSel.every(s=>s!==null)?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Check answers</button>
                  : <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next &rarr;</button>
                }
              </div>
            </div>
          )}

          {/* MINDSET */}
          {page===8 && (
            <div>
              <VimeoEmbed label="WATCH BEFORE STARTING THIS SECTION" />
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-4">LEARNING BEHAVIOURS &amp; MINDSET (6 total, 3 shown)</div>
              <div className="space-y-4">
                {MINDSET_QS.map((q,qi)=>(
                  <div key={qi} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="text-sm font-semibold text-navy mb-3">{q.q}</div>
                    <div className="space-y-1.5">
                      {q.opts.map((opt,oi)=>(
                        <button key={oi} onClick={()=>{ if(!mindsetDone){const a=[...mindsetSel];a[qi]=oi;setMindsetSel(a)} }}
                          className={`w-full text-left px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                            mindsetDone ? oi===q.correct?'border-green-400 bg-green-50 text-green-800 font-semibold':oi===mindsetSel[qi]&&oi!==q.correct?'border-orange-300 bg-orange-50 text-orange-700':'border-gray-100 text-gray-400'
                            : mindsetSel[qi]===oi?'border-amber-500 bg-amber-100 text-amber-800 font-semibold':'border-amber-200 text-gray-700 hover:border-amber-400'
                          }`}>
                          <span className="font-bold mr-1.5">{String.fromCharCode(65+oi)}.</span>{opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                {!mindsetDone
                  ? <button onClick={()=>setMindsetDone(true)} disabled={mindsetSel.some(s=>s===null)}
                      className={`px-5 py-2 rounded-lg text-sm font-bold ${mindsetSel.every(s=>s!==null)?'bg-amber-500 text-white hover:bg-amber-600':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Continue</button>
                  : <button onClick={goNext} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Final question &rarr;</button>
                }
              </div>
            </div>
          )}

          {/* FINAL */}
          {page===9 && (
            <div>
              <VimeoEmbed label="LAST STEP" />
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5">FINAL QUESTION</div>
                <p className="text-sm text-navy leading-relaxed">Please tell us why you would like to come to our school. You can use as many words as you want.</p>
              </div>
              <textarea value={motivation} onChange={e=>setMotivation(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full border border-gray-200 rounded-xl p-3 text-sm min-h-32 resize-none outline-none focus:border-brand font-sans"/>
              <div className="flex gap-2 mt-3">
                <button onClick={goBack} className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">Back</button>
                <button className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-green-600 text-white hover:bg-green-700">
                  Submit Assessment
                </button>
              </div>
              <div className="mt-3 text-xs text-gray-400 text-center">
                Submission triggers automated scoring, report generation, and delivery to your assessor &mdash; all within 5 minutes.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
