'use client'
import { useState, useEffect } from 'react'

const SECTIONS = ['Welcome','English — Reading','English — Writing','Mathematics','Reasoning','Mindset']
const OPTIONS = [
  'Blue whales are too large to catch fish',
  "The whale's enormous size contrasts with the tiny size of its food",
  'Krill are only found in polar waters',
  'Blue whales prefer to feed alone',
]

export default function AssessmentDemo() {
  const [section, setSection] = useState(0)
  const [selected, setSelected] = useState<number|null>(null)
  const [answered, setAnswered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(44*60+23)

  useEffect(() => {
    const iv = setInterval(()=>setTimeLeft(t=>Math.max(0,t-1)),1000)
    return ()=>clearInterval(iv)
  },[])

  const mins = Math.floor(timeLeft/60)
  const secs = timeLeft%60
  const progress = ((44*60+23-timeLeft)/(44*60+23))*100

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-black text-white">EVAL<span className="text-brand italic">ENT</span></span>
            <div className="h-4 w-px bg-white/20"/>
            <span className="text-xs text-blue-300">Grade 7 Admissions Assessment · IB</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className={`text-sm font-bold font-mono ${timeLeft<300?'text-red-400':'text-white'}`}>{String(mins).padStart(2,'0')}:{String(secs).padStart(2,'0')}</span>
          </div>
        </div>
        <div className="h-1 bg-gray-100"><div className="h-full bg-brand transition-all duration-1000" style={{width:`${progress}%`}}/></div>
        <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
          {SECTIONS.map((s,i)=>(
            <button key={i} onClick={()=>setSection(i)}
              className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap flex-shrink-0 border-b-2 transition-all ${section===i?'border-brand text-brand bg-white':'border-transparent text-gray-400 hover:text-gray-600'}`}>
              {i===0?s:`${i}. ${s}`}
            </button>
          ))}
        </div>
        <div className="p-6">
          {section===0&&(
            <div className="text-center py-8 max-w-lg mx-auto">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              </div>
              <h3 className="text-lg font-black text-navy mb-2">Welcome, Sara</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">You have <strong>45 minutes</strong> to complete this assessment covering English, Mathematics, Reasoning, and a short Mindset section. The timer has already started.</p>
              <div className="grid grid-cols-2 gap-3 text-left mb-5">
                {[['English','Reading + writing'],['Mathematics','Core + applied'],['Reasoning','Logical deduction'],['Mindset','Values inventory']].map(([l,d])=>(
                  <div key={l} className="bg-gray-50 border border-gray-100 rounded-xl p-3"><div className="text-xs font-bold text-navy">{l}</div><div className="text-xs text-gray-400 mt-0.5">{d}</div></div>
                ))}
              </div>
              <button onClick={()=>setSection(1)} className="bg-brand text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-800">Begin assessment →</button>
            </div>
          )}
          {section===1&&(
            <div>
              <div className="text-xs font-bold text-gray-400 tracking-widest mb-3">SECTION 1 · ENGLISH READING · QUESTION 3 OF 8</div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 text-sm text-gray-700 leading-relaxed">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-2">PASSAGE</div>
                The blue whale is the largest animal ever known to have lived on Earth. Despite its enormous size — reaching up to 30 metres in length and weighing as much as 200 tonnes — it feeds almost exclusively on tiny shrimp-like creatures called krill. During summer feeding seasons in polar waters, a single blue whale can consume up to 40 million krill per day.
              </div>
              <div className="text-sm font-semibold text-navy mb-3">According to the passage, which of the following best explains why the blue whale’s diet is surprising?</div>
              <div className="space-y-2 mb-5">
                {OPTIONS.map((opt,i)=>(
                  <button key={i} onClick={()=>{ if(!answered) setSelected(i) }}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all ${answered?(i===1?'border-green-400 bg-green-50 text-green-800 font-semibold':i===selected&&i!==1?'border-red-300 bg-red-50 text-red-700':'border-gray-100 text-gray-400'):selected===i?'border-brand bg-blue-50 text-brand font-semibold':'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                    <span className="font-bold mr-2">{String.fromCharCode(65+i)}.</span>{opt}
                  </button>
                ))}
              </div>
              {!answered
                ?<button onClick={()=>{if(selected!==null)setAnswered(true)}} disabled={selected===null} className={`px-5 py-2 rounded-lg text-sm font-bold ${selected!==null?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>Confirm answer</button>
                :<button onClick={()=>{setAnswered(false);setSelected(null)}} className="px-5 py-2 rounded-lg text-sm font-bold bg-navy text-white hover:bg-blue-900">Next question →</button>
              }
              {answered&&<div className={`mt-3 px-4 py-2.5 rounded-xl text-xs font-semibold ${selected===1?'bg-green-50 text-green-700 border border-green-200':'bg-red-50 text-red-700 border border-red-200'}`}>{selected===1?'✓ Correct — well done.':'✗ The correct answer is B — the whale’s size contrasts with the tiny size of its food.'}</div>}
            </div>
          )}
          {section===2&&(
            <div>
              <div className="text-xs font-bold text-gray-400 tracking-widest mb-3">SECTION 1 · ENGLISH — EXTENDED WRITING</div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5">WRITING PROMPT</div>
                <p className="text-sm text-navy leading-relaxed italic">&ldquo;Some people believe that cities are better places to live than the countryside. Others disagree. Write a response explaining your view, using at least two specific examples.&rdquo;</p>
              </div>
              <textarea className="w-full border border-gray-200 rounded-xl p-3 text-sm min-h-36 resize-none outline-none focus:border-brand font-sans" placeholder="Write your response here..."/>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">0 words</span>
                <button className="px-5 py-2 rounded-lg text-sm font-bold bg-brand text-white hover:bg-blue-800">Save &amp; continue →</button>
              </div>
            </div>
          )}
          {[3,4,5].includes(section)&&(
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-brand">{['M','R','V'][section-3]}</span>
              </div>
              <div className="text-sm font-bold text-navy mb-1">{SECTIONS[section]}</div>
              <div className="text-xs text-gray-400 mb-4">Use the section tabs above to explore each part of the assessment</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
