'use client'
import { useState } from 'react'

const STAGES = [
  'Assessment submitted',
  'MCQ answers scored',
  'Writing evaluated by Evalent',
  'Recommendation calculated',
  'PDF report generated',
  'Report sent to assessor',
]

const COMMENTARY = "Sara presents a well-structured argument with a clear and sustained position throughout. The phrase ‘elemental experience of being at one with nature’ demonstrates vocabulary that is notably sophisticated for Grade 7 IB level. Ideas are organised into coherent paragraphs with effective use of connective language, reflecting the IB expectation of balanced, considered argumentation. This writing profile supports entry to Grade 7."

export default function ReportsDemo() {
  const [running, setRunning] = useState(false)
  const [stage, setStage] = useState(0)
  const [bars, setBars] = useState({ eng: 0, maths: 0, reason: 0 })
  const [commentary, setCommentary] = useState('')
  const [done, setDone] = useState(false)

  function run() {
    if (running) return
    setRunning(true); setStage(0); setBars({ eng: 0, maths: 0, reason: 0 }); setCommentary(''); setDone(false)
    ;[0, 700, 1500, 2400, 3400, 4500].forEach((d, i) => setTimeout(() => setStage(i + 1), d))
    setTimeout(() => setBars({ eng: 76, maths: 68, reason: 91 }), 2600)
    setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        if (i >= COMMENTARY.length) { clearInterval(iv); return }
        setCommentary(COMMENTARY.slice(0, i + 1)); i++
      }, 22)
    }, 3600)
    setTimeout(() => setDone(true), 4600)
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"/>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"/>
          </div>
          <span className="text-xs text-blue-300 font-mono ml-1">Report pipeline</span>
        </div>
        <div className="p-5">
          <div className="text-sm font-bold text-navy mb-1">Sara Ahmed · Grade 7 · IB</div>
          <div className="text-xs text-gray-400 mb-5">Assessment submitted 14 seconds ago</div>
          <div className="space-y-3 mb-6">
            {STAGES.map((label, i) => {
              const isDone = i < stage
              const isActive = i === stage && running && !done
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isDone ? 'bg-green-500' : isActive ? 'bg-brand animate-pulse' : 'bg-gray-100'}`}>
                    {isDone
                      ? <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      : <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-gray-300'}`}/>
                    }
                  </div>
                  <span className={`text-xs font-semibold transition-colors ${isDone ? 'text-navy' : isActive ? 'text-brand' : 'text-gray-400'}`}>{label}</span>
                  {isDone && <span className="ml-auto text-[10px] text-green-600 font-bold">✓</span>}
                </div>
              )
            })}
          </div>
          {!running
            ? <button onClick={run} className="w-full bg-brand text-white text-sm font-bold py-2.5 rounded-xl hover:bg-blue-800">▶ Run pipeline demo</button>
            : done
            ? <div className="text-center text-xs text-green-600 font-bold py-2">✓ Complete — report delivered in 4.5 seconds</div>
            : <div className="text-center text-xs text-brand font-bold py-2 animate-pulse">Processing...</div>
          }
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"/>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"/>
            </div>
            <span className="text-xs text-blue-300 font-mono ml-1">Generated report</span>
          </div>
          {done && <span className="text-[10px] text-green-400 font-bold">✓ READY</span>}
        </div>
        <div className="p-5">
          {!running && !done && (
            <div className="flex flex-col items-center justify-center min-h-64 text-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div className="text-sm font-bold text-navy">Report preview</div>
              <div className="text-xs text-gray-400">Click the pipeline button to watch the report generate</div>
            </div>
          )}
          {running && !done && (
            <div className="flex flex-col items-center justify-center min-h-64 gap-3">
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}/>)}
              </div>
              <div className="text-xs text-gray-500">Generating report...</div>
            </div>
          )}
          {done && (
            <div className="space-y-3">
              <div className="bg-navy rounded-xl px-4 py-3">
                <div className="text-xs font-bold text-white">Sara Ahmed · Grade 7 Entry · IB</div>
                <div className="text-[10px] text-blue-300 mt-0.5">Dubai International Academy · Generated in 4.5s</div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/>
                <span className="text-xs font-bold text-green-700">RECOMMENDATION: Ready to admit</span>
              </div>
              {([['English', bars.eng, 'bg-brand'], ['Mathematics', bars.maths, 'bg-brand'], ['Reasoning', bars.reason, 'bg-purple-500']] as [string, number, string][]).map(([l, v, c]) => (
                <div key={l} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-20">{l}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${c}`} style={{ width: `${v}%` }}/>
                  </div>
                  <span className="text-xs font-bold text-navy w-8 text-right">{v}%</span>
                </div>
              ))}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest px-3 py-2 bg-gray-50 border-b border-gray-200">EVALENT COMMENTARY</div>
                <p className="text-xs text-navy leading-relaxed p-3">
                  {commentary}
                  {commentary.length < COMMENTARY.length && (
                    <span className="inline-block w-0.5 h-3 bg-brand align-middle ml-0.5 animate-pulse"/>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
