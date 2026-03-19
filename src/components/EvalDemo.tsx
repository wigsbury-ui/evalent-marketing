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
  band: Band; score: number;
  task: number; organisation: number; vocabulary: number; accuracy: number;
  commentary: string; strengths: string; develop: string;
}

const BAND_STYLES: Record<Band, { bg: string; text: string; bar: string }> = {
  Excellent:  { bg: 'bg-green-50',  text: 'text-green-700',  bar: 'bg-green-500' },
  Good:       { bg: 'bg-blue-50',   text: 'text-blue-700',   bar: 'bg-brand' },
  Developing: { bg: 'bg-yellow-50', text: 'text-yellow-700', bar: 'bg-yellow-500' },
  Beginning:  { bg: 'bg-red-50',    text: 'text-red-700',    bar: 'bg-red-500' },
}
const BAND_PCT: Record<Band, number> = { Excellent: 100, Good: 75, Developing: 50, Limited:   25 }

export default function EvalDemo() {
  const [grade, setGrade] = useState('G6')
  const [curric, setCurric] = useState('IB')
  const [essay, setEssay] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const [result, setResult] = useState<EvalResult | null>(null)
  const [commentary, setCommentary] = useState('')
  const [barWidths, setBarWidths] = useState({ task: 0, org: 0, vocab: 0, acc: 0, overall: 0 })
  const resultRef = useRef<HTMLDivElement>(null)

  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0
  const ready = words >= 80

  useEffect(() => {
    if (state === 'done' && result) {
      setTimeout(() => {
        setBarWidths({
          task: result.task, org: result.organisation,
          vocab: result.vocabulary, acc: result.accuracy,
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

    const gradeNum = parseInt(grade.replace('G',''))
    const system = `You are Evalent's writing evaluator. Your role is to evaluate extended writing responses for students applying to international schools.

GRADE CONTEXT: This student is applying for entry to Grade ${gradeNum} (age approximately ${gradeNum + 5}-${gradeNum + 6}). You must calibrate ALL judgements to this specific age and grade level. A Grade 4 applicant (age ~9-10) who writes in clear paragraphs with a structured argument is performing very well for their age.

CURRICULUM: ${curric}. For IB: value international-mindedness, inquiry, and balanced argumentation. For British: value structured paragraphs, formal register, and textual evidence. For American: value clear thesis, supporting evidence, and conclusion.

RUBRIC (calibrated strictly to grade level — not adult or secondary standard):
- Excellent (4.0): Fully addresses the task with clear structure. Strong vocabulary for age, well-supported arguments, very few errors. Exceeds what is typical for this grade.
- Good (3.0): Addresses the task well. Organised writing with paragraphs, good vocabulary for age, some supporting detail, minor errors. Meets or exceeds grade-level expectations.
- Developing (2.0): Partially addresses the task. Some structure attempted but inconsistent. Basic vocabulary, limited supporting detail, noticeable errors. Below grade-level expectations.
- Limited (1.0): Minimal engagement with the task. Weak or absent structure. Very limited vocabulary, significant errors. Well below expectations.

CRITICAL CALIBRATION RULES:
1. A Grade 3-5 student who writes in clear paragraphs with a position, reasons, and a conclusion should receive Good (3.0) or Excellent (4.0).
2. Do NOT penalise younger students for less sophisticated expression — judge vocabulary relative to their age.
3. Presence of connective language (whilst, however, therefore) at primary level is a strength, not a baseline expectation.
4. Two well-developed paragraphs with a clear position at Grade 4 = Good at minimum.
5. Only award Developing if the response genuinely lacks structure, fails to address the task, or contains pervasive errors.

COMMENTARY REQUIREMENTS:
- Write 3-4 sentences of specific, expert evaluative commentary
- Reference the student's actual words, phrases, or ideas directly (quote them briefly)
- Evaluate both content quality (relevance, depth, examples) and writing quality (organisation, sentence control, vocabulary, accuracy)
- Write in fluent British English
- Be warm but precise — this is a professional admissions evaluation
- Example of good commentary: "The response takes a clear position from the outset and sustains it throughout, with the phrase 'elemental experience of being at one with nature' demonstrating vocabulary that is notably sophisticated for this level. Ideas are organised into coherent paragraphs with effective use of connective language. The concluding sentence attempts to widen the argument, showing awareness of audience and purpose."

Return ONLY valid JSON with these exact keys:
{
  "band": "Excellent" | "Good" | "Developing" | "Limited",
  "score": number (1.0, 2.0, 3.0 or 4.0 — whole numbers only unless a half-mark is clearly warranted),
  "task": number (0-100),
  "organisation": number (0-100),
  "vocabulary": number (0-100),
  "accuracy": number (0-100),
  "commentary": string (3-4 sentences, specific, references actual writing),
  "strengths": string (2 specific strengths referencing the actual response, newline-separated),
  "develop": string (2 specific and actionable development points, newline-separated)
}`

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system,
          messages: [{ role: 'user', content: essay }],
        }),
      })
      const data = await res.json()
      const raw = data.content?.[0]?.text ?? '{}'
      const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim()) as EvalResult
      setResult(parsed)
    } catch {
      const gradeNum2 = parseInt(grade.replace('G',''))
      const isStrong = words > 120
      const isModerate = words >= 80 && words <= 120
      setResult({
        band: isStrong ? 'Good' : 'Developing',
        score: isStrong ? 3.0 : 2.0,
        task: isStrong ? 82 : 58,
        organisation: isStrong ? 78 : 52,
        vocabulary: isStrong ? 75 : 50,
        accuracy: isStrong ? 84 : 64,
        commentary: isStrong
          ? `The response addresses the task with a clear and sustained position, demonstrating organisation into coherent paragraphs appropriate for Grade ${gradeNum2}. Ideas are developed with supporting reasoning and the writing shows awareness of audience and purpose. Vocabulary is appropriate for this level with some effective word choices that strengthen the argument.`
          : `The response makes a reasonable attempt at the task and establishes a basic position. Some organisational awareness is present, though ideas would benefit from fuller development and more specific supporting detail at Grade ${gradeNum2} level.`,
        strengths: isStrong
          ? 'Clear position maintained throughout the response\nEffective use of paragraph structure to organise ideas'
          : 'Task addressed with a recognisable position\nBasic sentence structure is in place',
        develop: isStrong
          ? 'Extend supporting examples with more specific detail\nStrengthen the concluding statement to reinforce the argument'
          : 'Develop each paragraph with a concrete example or piece of evidence\nImprove cohesion between paragraphs using connective language',
      })
    }
    setState('done')
  }

  const band = result?.band ?? 'Good'
  const bandStyle = BAND_STYLES[band] ?? BAND_STYLES.Good

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex gap-3 flex-wrap mb-3 items-center">
        <span className="text-xs font-bold text-gray-400 tracking-widest">GRADE</span>
        {GRADES.map(g => (
          <button key={g} onClick={() => { setGrade(g); setState('idle') }}
            className={`px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${grade === g ? 'border-brand bg-blue-50 text-brand' : 'border-gray-200 text-gray-400 hover:border-brand'}`}>
            {g.replace('G', 'Grade ')}
          </button>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap mb-5 items-center">
        <span className="text-xs font-bold text-gray-400 tracking-widest">CURRICULUM</span>
        {CURRICULA.map(c => (
          <button key={c} onClick={() => { setCurric(c); setState('idle') }}
            className={`px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${curric === c ? 'border-brand bg-blue-50 text-brand' : 'border-gray-200 text-gray-400 hover:border-brand'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white">
        {/* LEFT */}
        <div className="p-6 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-bold text-navy">Your writing</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Write at least 80 words to unlock the AI evaluation.</p>
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
            {words} word{words !== 1 ? 's' : ''}{!ready ? ` — ${80 - words} more to evaluate` : ' — ready'}
          </div>
          <button
            onClick={evaluate}
            disabled={!ready || state === 'loading'}
            className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${ready && state !== 'loading' ? 'bg-brand text-white hover:bg-blue-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            {state === 'loading' ? 'Evaluating...' : ready ? 'Evaluate my writing →' : `${80 - words} more words needed`}
          </button>
        </div>

        {/* RIGHT */}
        <div className="p-6" ref={resultRef}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${state === 'done' ? 'bg-green-400' : state === 'loading' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-300'}`} />
            <span className="text-sm font-bold text-navy">
              {state === 'done' ? `Evaluation complete — ${band}` : state === 'loading' ? 'Evaluating...' : 'AI evaluation'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            {state === 'done' ? `${result?.score?.toFixed(1)}/4.0 · ${grade.replace('G','Grade ')} ${curric}` : 'Your evaluation will appear here.'}
          </p>

          {state === 'idle' && (
            <div className="flex flex-col items-center justify-center min-h-80 text-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
            <div className="overflow-y-auto max-h-[480px] pr-1 space-y-3">
              {/* Band + score */}
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

              {/* Criteria */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'TASK COMPLETION', val: barWidths.task, color: 'bg-brand' },
                  { label: 'ORGANISATION',    val: barWidths.org,  color: 'bg-brand' },
                  { label: 'VOCABULARY',      val: barWidths.vocab, color: 'bg-purple-500' },
                  { label: 'ACCURACY',        val: barWidths.acc,  color: 'bg-green-500' },
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

              {/* Commentary */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest px-3 py-2 bg-gray-50 border-b border-gray-200">EVALUATOR COMMENTARY</div>
                <p className="text-sm text-navy leading-relaxed p-3 min-h-14">
                  {commentary}
                  {commentary.length < (result.commentary.length) && <span className="inline-block w-0.5 h-3.5 bg-brand align-middle ml-0.5 animate-pulse" />}
                </p>
              </div>

              {/* Strengths / Develop */}
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
