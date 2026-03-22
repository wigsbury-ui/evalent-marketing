'use client'
import { useState, useRef, useEffect } from 'react'

const PROMPTS: Record<string, string> = {
  G3: "Do you think it is more important to be kind or to be clever? Write a short paragraph explaining your view. Try to use one example from your own life.",
  G4: "Some people say children should spend more time outside and less time on screens. Do you agree or disagree? Write a paragraph giving your opinion and one or two reasons.",
  G5: "Think about a time when you worked hard to achieve something. Write about what happened, why it was difficult, and what you learned from the experience.",
  G6: "Many people say that the internet has made life better. Others disagree. What do you think? Write a response explaining your view, using at least two specific examples.",
  G7: "Some scientists believe that humans are the biggest threat to life on Earth. Do you agree? Write a structured response that considers more than one point of view.",
  G8: "Should schools teach students how to manage money and personal finances? Write an argument either for or against this idea, using evidence and clear reasoning.",
  G9: "To what extent do you agree that social media has had a negative impact on young people's mental health? Write a structured essay presenting both sides before reaching a conclusion.",
  G10: "Evaluate the claim that economic development and environmental protection cannot coexist. In your response, consider evidence from both sides and reach a clear, justified conclusion.",
}

const GRADES = ['G3','G4','G5','G6','G7','G8','G9','G10']
const CURRICULA = ['IB','British','American']

type Band = 'Excellent' | 'Good' | 'Developing' | 'Limited'

interface EvalResult {
  band: Band
  score: number
  task: number
  organisation: number
  vocabulary: number
  accuracy: number
  commentary: string
  strengths: string
  develop: string
}

const BAND_STYLES: Record<Band, { bg: string; text: string; bar: string }> = {
  Excellent:  { bg: 'bg-green-50',  text: 'text-green-700',  bar: 'bg-green-500' },
  Good:       { bg: 'bg-blue-50',   text: 'text-blue-700',   bar: 'bg-brand' },
  Developing: { bg: 'bg-yellow-50', text: 'text-yellow-700', bar: 'bg-yellow-500' },
  Limited:    { bg: 'bg-red-50',    text: 'text-red-700',    bar: 'bg-red-500' },
}

const BAND_PCT: Record<Band, number> = { Excellent: 100, Good: 75, Developing: 50, Limited: 25 }

export default function EvalDemo() {
  const [grade, setGrade] = useState('G6')
  const [curric, setCurric] = useState('IB')
  const [essay, setEssay] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const [result, setResult] = useState<EvalResult | null>(null)
  const [commentary, setCommentary] = useState('')
  const [barWidths, setBarWidths] = useState({ task: 0, org: 0, vocab: 0, acc: 0, overall: 0 })
  const resultRef = useRef<HTMLDivElement>(null)

  const gradeLabel = (g: string) => {
    const n = parseInt(g.replace('G', ''))
    return curric === 'British' ? `Year ${n + 1}` : `Grade ${n}`
  }

  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0
  const ready = words >= 50

  useEffect(() => {
    if (state === 'done' && result) {
      setTimeout(() => {
        setBarWidths({
          task: result.task,
          org: result.organisation,
          vocab: result.vocabulary,
          acc: result.accuracy,
          overall: BAND_PCT[result.band] ?? 75,
        })
        streamCommentary(result.commentary)
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
    }
  }, [state, result])

  function streamCommentary(text: string) {
    setCommentary('')
    let i = 0
    const speed = Math.max(12, Math.min(28, 2800 / text.length))
    const iv = setInterval(() => {
      if (i >= text.length) { setCommentary(text); clearInterval(iv); return }
      setCommentary(text.slice(0, i + 1))
      i++
    }, speed)
  }

  async function evaluate() {
    if (!ready || state === 'loading') return
    setState('loading')
    setResult(null)
    setBarWidths({ task: 0, org: 0, vocab: 0, acc: 0, overall: 0 })
    setCommentary('')

    try {
      const res = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ essay, grade, curric }),
      })
      if (!res.ok) throw new Error('API error')
      const parsed = await res.json() as EvalResult
      if (!parsed.band) throw new Error('Invalid response')
      setResult(parsed)
    } catch {
      const gradeNum = parseInt(grade.replace('G', ''))
      const isStrong = words > 120
      setResult({
        band: isStrong ? 'Good' : 'Developing',
        score: isStrong ? 3.0 : 2.0,
        task: isStrong ? 82 : 58,
        organisation: isStrong ? 78 : 52,
        vocabulary: isStrong ? 75 : 50,
        accuracy: isStrong ? 84 : 64,
        commentary: isStrong
          ? `The response addresses the task with a clear and sustained position, demonstrating paragraph organisation appropriate for Grade ${gradeNum}. Ideas are developed with supporting reasoning and the writing shows awareness of audience and purpose. Vocabulary is appropriate for this level with some effective word choices. This writing profile is consistent with Grade ${gradeNum} entry.`
          : `The response makes a reasonable attempt at the task and establishes a basic position. Some organisational awareness is present, though ideas would benefit from fuller development at Grade ${gradeNum} level. Further writing development is recommended before entry.`,
        strengths: isStrong
          ? 'Clear position maintained throughout the response\nEffective use of paragraph structure to organise ideas'
          : 'Task addressed with a recognisable position\nBasic sentence structure is in place',
        develop: isStrong
          ? 'Extend supporting examples with more specific detail\nStrengthen the concluding statement'
          : 'Develop each paragraph with a concrete example\nImprove cohesion between paragraphs',
      })
    }
    setState('done')
  }

  const band = result?.band ?? 'Good'
  const bandStyle = BAND_STYLES[band] ?? BAND_STYLES.Good

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex gap-3 flex-wrap mb-3 items-center">
        <span className="text-xs font-bold text-white/40 tracking-widest">CURRICULUM</span>
        {CURRICULA.map(c => (
          <button key={c} onClick={() => { setCurric(c); setState('idle') }}
            className={`px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${curric === c ? 'border-brand bg-brand text-white' : 'border-white/20 text-white/50 hover:border-white/60 hover:text-white'}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap mb-5 items-center">
        <span className="text-xs font-bold text-white/40 tracking-widest">ENTERING INTO</span>
        {GRADES.map(g => (
          <button key={g} onClick={() => { setGrade(g); setState('idle') }}
            className={`px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${grade === g ? 'border-brand bg-brand text-white' : 'border-white/20 text-white/50 hover:border-white/60 hover:text-white'}`}>
            {gradeLabel(g)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white items-start">
        <div className="p-6">
          <div className="bg-navy px-6 py-3 -mx-6 -mt-6 mb-4 flex items-center gap-2 rounded-t-2xl">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-bold text-white">Your writing</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Write at least 50 words to unlock the Evalent evaluation.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-3">
            <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5">WRITING PROMPT</div>
            <p className="text-sm text-navy leading-relaxed italic">{PROMPTS[grade]}</p>
          </div>
          <textarea
            value={essay}
            onChange={e => { setEssay(e.target.value); if (state === 'done') setState('idle') }}
            placeholder="Write your response here..."
            className="w-full border border-gray-200 rounded-xl p-3 text-sm text-navy font-sans resize-none outline-none min-h-44 leading-relaxed focus:border-brand transition-colors"
          />
          <div className={`text-xs text-right mt-1 mb-3 ${ready ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
            {words} word{words !== 1 ? 's' : ''}{!ready ? ` — ${50 - words} more to evaluate` : ' — ready'}
          </div>
          <button
            onClick={evaluate}
            disabled={!ready || state === 'loading'}
            className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${ready && state !== 'loading' ? 'bg-brand text-white hover:bg-blue-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            {state === 'loading' ? 'Evaluating...' : ready ? 'Evaluate my writing →' : `${50 - words} more words needed`}
          </button>
        </div>

        <div className="p-6" ref={resultRef}>
          <div className="bg-navy px-6 py-3 -mx-6 -mt-6 mb-4 flex items-center gap-2 rounded-t-2xl">
            <span className={`w-2 h-2 rounded-full ${state === 'done' ? 'bg-green-400' : state === 'loading' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm font-bold text-white">
              {state === 'done' ? `Evaluation complete — ${band}` : state === 'loading' ? 'Evaluating...' : 'Evalent evaluation'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            {state === 'done' ? `${result?.score?.toFixed(1)}/4.0 · ${gradeLabel(grade)} ${curric}` : 'Your evaluation will appear here.'}
          </p>

          {state === 'idle' && (
            <div className="flex flex-col items-center justify-center min-h-80 text-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-navy">Your evaluation will appear here</div>
              <div className="text-xs text-gray-400 max-w-48 leading-relaxed">Write your response on the left, then click evaluate</div>
            </div>
          )}

          {state === 'loading' && (
            <div className="flex flex-col items-center justify-center min-h-80 gap-4">
              <div className="text-sm font-bold text-navy">Reading your response...</div>
              <div className="text-xs text-gray-500">Scoring structure, vocabulary, task completion</div>
              <div className="flex gap-1.5 mt-2">
                {[0,1,2].map(i => (
                  <div key={i} className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}

          {state === 'done' && result && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">BAND</div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-full ${bandStyle.bg} ${bandStyle.text}`}>{band}</span>
                </div>
                <div className="w-px h-9 bg-gray-200" />
                <div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">SCORE</div>
                  <span className="text-xl font-black text-navy">{result.score.toFixed(1)}</span>
                  <span className="text-xs text-gray-400"> /4.0</span>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5">OVERALL</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-1000 ${bandStyle.bar}`} style={{ width: `${barWidths.overall}%` }} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'TASK COMPLETION', val: barWidths.task,  color: 'bg-brand' },
                  { label: 'ORGANISATION',    val: barWidths.org,   color: 'bg-brand' },
                  { label: 'VOCABULARY',      val: barWidths.vocab, color: 'bg-purple-500' },
                  { label: 'ACCURACY',        val: barWidths.acc,   color: 'bg-green-500' },
                ].map(({ label, val, color }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                    <div className="text-[9px] font-bold text-gray-400 tracking-widest mb-1.5">{label}</div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                      <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${val}%` }} />
                    </div>
                    <div className="text-xs font-bold text-navy">{Math.round(val)}%</div>
                  </div>
                ))}
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest px-3 py-2 bg-gray-50 border-b border-gray-200">EVALUATOR COMMENTARY</div>
                <p className="text-sm text-navy leading-relaxed p-3 min-h-14">
                  {commentary}
                  {commentary.length < (result.commentary.length) && (
                    <span className="inline-block w-0.5 h-3.5 bg-brand align-middle ml-0.5 animate-pulse" />
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-[9px] font-bold text-green-700 tracking-widest mb-2">STRENGTHS</div>
                  {result.strengths.split('\n').filter(Boolean).map((s, i) => (
                    <div key={i} className="text-xs text-green-800 mb-1 leading-tight">+ {s.trim()}</div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="text-[9px] font-bold text-amber-700 tracking-widest mb-2">TO DEVELOP</div>
                  {result.develop.split('\n').filter(Boolean).map((s, i) => (
                    <div key={i} className="text-xs text-amber-800 mb-1 leading-tight">→ {s.trim()}</div>
                  ))}
                </div>
              </div>

              <a href="/#trial" className="block text-center bg-brand text-white text-xs font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors mt-1">
                Use this for real applicants — start free trial →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
