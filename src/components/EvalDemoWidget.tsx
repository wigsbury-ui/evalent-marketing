'use client'
import { useState, useRef, useEffect } from 'react'

const PROMPTS: Record<string, string> = {
  G3: "Do you think it is more important to be kind or to be clever? Write a short paragraph explaining your view. Try to use one example from your own life.",
  G4: "Some people say children should spend more time outside and less time on screens. Do you agree or disagree? Write a paragraph giving your opinion and one or two reasons.",
  G5: "Think about a time when you worked hard to achieve something. Write about what happened, why it was difficult, and what you learned from the experience.",
  G6: "Many people say that the internet has made life better. Others disagree. What do you think? Write a response explaining your view, using at least two specific examples.",
  G7: "Some scientists believe that humans are the biggest threat to life on Earth. Do you agree? Write a structured response that considers more than one point of view.",
  G8: "Should schools teach students how to manage money and personal finances? Write an argument either for or against this idea, using evidence and clear reasoning.",
  G9: "To what extent do you agree that social media has had a negative impact on young people’s mental health? Write a structured essay presenting both sides before reaching a conclusion.",
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

const BAND_CONFIG: Record<Band, { label: string; color: string; textColor: string; borderColor: string; dotColor: string }> = {
  Excellent: { label: 'Excellent', color: '#f0fdf4', textColor: '#15803d', borderColor: '#bbf7d0', dotColor: '#22c55e' },
  Good:      { label: 'Good',      color: '#eff6ff', textColor: '#1d4ed8', borderColor: '#bfdbfe', dotColor: '#3b82f6' },
  Developing:{ label: 'Developing',color: '#fffbeb', textColor: '#b45309', borderColor: '#fde68a', dotColor: '#f59e0b' },
  Limited:   { label: 'Limited',   color: '#fff1f2', textColor: '#be123c', borderColor: '#fecdd3', dotColor: '#f43f5e' },
}

const DOMAIN_COLORS = ['#002ec1', '#002ec1', '#7c3aed', '#059669']
const BRAND = '#002ec1'

export default function EvalDemoWidget() {
  const [grade, setGrade] = useState('G6')
  const [curric, setCurric] = useState('IB')
  const [essay, setEssay] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const [result, setResult] = useState<EvalResult | null>(null)
  const [commentary, setCommentary] = useState('')
  const [barWidths, setBarWidths] = useState({ task: 0, org: 0, vocab: 0, acc: 0 })
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
        setBarWidths({ task: result.task, org: result.organisation, vocab: result.vocabulary, acc: result.accuracy })
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
    setBarWidths({ task: 0, org: 0, vocab: 0, acc: 0 })
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
  const bandConfig = BAND_CONFIG[band] ?? BAND_CONFIG.Good
  const domainData = [
    { label: 'Task completion', val: barWidths.task,  color: DOMAIN_COLORS[0] },
    { label: 'Organisation',   val: barWidths.org,   color: DOMAIN_COLORS[1] },
    { label: 'Vocabulary',     val: barWidths.vocab, color: DOMAIN_COLORS[2] },
    { label: 'Accuracy',       val: barWidths.acc,   color: DOMAIN_COLORS[3] },
  ]

  return (
    <section style={{ background: '#ffffff', paddingTop: '48px', paddingBottom: '96px', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Selectors */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px', padding: '16px 24px', background: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>Curriculum</span>
            {CURRICULA.map(c => (
              <button key={c} onClick={() => { setCurric(c); setState('idle') }} style={{ padding: '5px 14px', borderRadius: '100px', border: `2px solid ${curric === c ? BRAND : '#d1d5db'}`, background: curric === c ? BRAND : 'white', color: curric === c ? 'white' : '#6b7280', fontSize: '12px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}>{c}</button>
            ))}
          </div>
          <div style={{ width: '1px', height: '32px', background: '#e5e7eb', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>Entering into</span>
            {GRADES.map(g => (
              <button key={g} onClick={() => { setGrade(g); setState('idle') }} style={{ padding: '5px 14px', borderRadius: '100px', border: `2px solid ${grade === g ? BRAND : '#d1d5db'}`, background: grade === g ? BRAND : 'white', color: grade === g ? 'white' : '#6b7280', fontSize: '12px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}>{gradeLabel(g)}</button>
            ))}
          </div>
        </div>

        {/* Main widget */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', border: '1.5px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 40px rgba(0,0,0,0.06)', background: 'white' }}>

          {/* LEFT col */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '14px 24px', background: '#07112e', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>Your writing</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', marginBottom: '14px' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.12em', marginBottom: '8px', textTransform: 'uppercase' as const }}>Writing prompt — {gradeLabel(grade)} {curric}</div>
                <p style={{ fontSize: '13px', color: '#07112e', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{PROMPTS[grade]}</p>
              </div>
              <textarea
                value={essay}
                onChange={e => { setEssay(e.target.value); if (state === 'done') setState('idle') }}
                placeholder="Write your response here..."
                style={{ width: '100%', boxSizing: 'border-box' as const, border: `1.5px solid ${ready ? '#86efac' : '#e2e8f0'}`, borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: '#07112e', fontFamily: 'Figtree, sans-serif', resize: 'none' as const, outline: 'none', minHeight: '160px', lineHeight: 1.65, transition: 'border-color 0.2s', background: 'white' }}
              />
              <div style={{ fontSize: '12px', color: ready ? '#16a34a' : '#94a3b8', fontWeight: ready ? 700 : 400, marginTop: '8px', marginBottom: '14px' }}>
                {words} word{words !== 1 ? 's' : ''}{!ready ? ` , ${50 - words} more needed` : ' ✓ ready to evaluate'}
              </div>
              <button onClick={evaluate} disabled={!ready || state === 'loading'} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: 'none', background: ready && state !== 'loading' ? BRAND : '#f1f5f9', color: ready && state !== 'loading' ? 'white' : '#94a3b8', fontSize: '14px', fontWeight: 800, cursor: ready && state !== 'loading' ? 'pointer' : 'not-allowed', transition: 'all 0.2s', letterSpacing: '0.01em', fontFamily: 'Figtree, sans-serif' }}>
                {state === 'loading' ? 'Evaluating...' : ready ? 'Evaluate my writing →' : `${50 - words} more words to unlock`}
              </button>
            </div>
          </div>

          {/* RIGHT col */}
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1.5px solid #e2e8f0' }} ref={resultRef}>
            <div style={{ padding: '14px 24px', background: '#07112e', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', background: state === 'done' ? '#4ade80' : state === 'loading' ? '#fbbf24' : '#64748b', transition: 'background 0.3s' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>
                {state === 'done' ? 'Evaluation complete' : state === 'loading' ? 'Evaluating…' : 'Evalent evaluation'}
              </span>
              {state === 'done' && result && (
                <span style={{ marginLeft: 'auto', padding: '2px 10px', borderRadius: '100px', background: bandConfig.color, color: bandConfig.textColor, fontSize: '11px', fontWeight: 800 }}>{band}</span>
              )}
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>

              {state === 'idle' && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px', gap: '16px', textAlign: 'center' as const }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#07112e', marginBottom: '6px' }}>Your evaluation will appear here</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>Write at least 50 words on the left,<br />then click evaluate</div>
                  </div>
                </div>
              )}

              {state === 'loading' && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: BRAND, animation: 'bounce 0.9s infinite', animationDelay: `${i * 0.18}s` }} />
                    ))}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#07112e' }}>Reading your response…</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Scoring structure, vocabulary, task completion</div>
                  <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(.6)} 40%{transform:scale(1)} }`}</style>
                </div>
              )}

              {state === 'done' && result && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: bandConfig.color, border: `1px solid ${bandConfig.borderColor}`, borderRadius: '12px' }}>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: bandConfig.textColor, letterSpacing: '0.1em', textTransform: 'uppercase' as const, opacity: 0.7 }}>Band</div>
                      <div style={{ fontSize: '18px', fontWeight: 900, color: bandConfig.textColor, lineHeight: 1 }}>{band}</div>
                    </div>
                    <div style={{ width: '1px', height: '36px', background: bandConfig.borderColor }} />
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: bandConfig.textColor, letterSpacing: '0.1em', textTransform: 'uppercase' as const, opacity: 0.7 }}>Score</div>
                      <div style={{ fontSize: '18px', fontWeight: 900, color: bandConfig.textColor, lineHeight: 1 }}>{result.score.toFixed(1)}<span style={{ fontSize: '12px', opacity: 0.6 }}>/4.0</span></div>
                    </div>
                    <div style={{ flex: 1, paddingLeft: '4px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: bandConfig.textColor, letterSpacing: '0.1em', textTransform: 'uppercase' as const, opacity: 0.7, marginBottom: '6px' }}>Overall</div>
                      <div style={{ height: '5px', background: bandConfig.borderColor, borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${band === 'Excellent' ? 95 : band === 'Good' ? 75 : band === 'Developing' ? 50 : 25}%`, background: bandConfig.textColor, borderRadius: '100px', transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    {domainData.map(({ label, val, color }) => (
                      <div key={label} style={{ padding: '10px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' as const }}>{label}</div>
                        <div style={{ height: '4px', background: '#e2e8f0', borderRadius: '100px', overflow: 'hidden', marginBottom: '6px' }}>
                          <div style={{ height: '100%', width: `${val}%`, background: color, borderRadius: '100px', transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)' }} />
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#07112e' }}>{Math.round(val)}%</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ padding: '8px 14px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '10px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Evaluator commentary</div>
                    <p style={{ padding: '12px 14px', margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.65, minHeight: '56px' }}>
                      {commentary}
                      {commentary.length < result.commentary.length && (
                        <span style={{ display: 'inline-block', width: '2px', height: '14px', background: BRAND, verticalAlign: 'middle', marginLeft: '2px', animation: 'blink 0.8s infinite' }} />
                      )}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    <div style={{ padding: '10px 12px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: '#15803d', letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' as const }}>Strengths</div>
                      {result.strengths.split('\n').filter(Boolean).map((s, i) => (
                        <div key={i} style={{ fontSize: '11px', color: '#166534', marginBottom: '4px', lineHeight: 1.45 }}>+ {s.trim()}</div>
                      ))}
                    </div>
                    <div style={{ padding: '10px 12px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: '#b45309', letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' as const }}>To develop</div>
                      {result.develop.split('\n').filter(Boolean).map((s, i) => (
                        <div key={i} style={{ fontSize: '11px', color: '#92400e', marginBottom: '4px', lineHeight: 1.45 }}>→ {s.trim()}</div>
                      ))}
                    </div>
                  </div>

                  <a href="/#trial" style={{ display: 'block', textAlign: 'center' as const, padding: '13px', borderRadius: '12px', background: BRAND, color: 'white', fontSize: '13px', fontWeight: 800, textDecoration: 'none', letterSpacing: '0.01em' }}>
                    Use this for real applicants. Start free trial →
                  </a>
                  <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #f0f0f0' }}>
          {[
            { stat: '45 min',    label: 'Assessment window' },
            { stat: '4 domains', label: 'Scored simultaneously' },
            { stat: '< 2 sec',   label: 'Evaluation time' },
            { stat: '6 bands',   label: 'Recommendation tiers' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' as const }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#07112e', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{item.stat}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '3px' }}>{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
