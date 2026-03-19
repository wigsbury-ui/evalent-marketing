'use client'
import { useState, useEffect } from 'react'

const GRADES = ['Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10']
const CURRICULA = ['IB','British','American']

export default function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep]       = useState(1)
  const [grades, setGrades]   = useState<string[]>(['Grade 5','Grade 7'])
  const [curric, setCurric]   = useState('IB')
  const [form, setForm]       = useState({ school:'', name:'', role:'Head of Admissions', email:'' })

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) { setStep(1); setForm({ school:'', name:'', role:'Head of Admissions', email:'' }) }
  }, [open])

  const toggleGrade = (g: string) =>
    setGrades(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])

  function advance(n: number) {
    setStep(n)
    if (n === 3) setTimeout(() => {
      document.querySelectorAll('.modal-bar-fill').forEach((el, i) => {
        ;(el as HTMLElement).style.width = ['76%','68%','91%','80%'][i]
      })
    }, 100)
  }

  if (!open) return null
  const prog = ((step - 1) / 3) * 100

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">

        <div className="bg-white px-6 py-5 rounded-t-2xl flex items-center justify-between border-b border-gray-100">
          <div className="flex-1 text-center">
            <div className="text-xl font-black text-navy mb-0.5">Start your free trial</div>
            <div className="text-sm text-gray-400">10 free reports &middot; No credit card &middot; 5 minute setup</div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-navy transition-colors ml-4 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6 pt-5">
          <div className="flex flex-wrap gap-2 mb-5">
            {['10 free reports','No credit card','Set up in 5 min','Cancel any time'].map(t => (
              <span key={t} className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                <span>✓</span>{t}
              </span>
            ))}
          </div>

          <div className="relative flex mb-6">
            <div className="absolute top-5 left-6 right-6 h-0.5"
              style={{ background: `linear-gradient(90deg, #002ec1 ${prog}%, #dbeafe ${prog}%)` }} />
            {['Your school','Setup','Preview','Live'].map((label, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 z-10 transition-all ${
                  i+1 < step ? 'bg-green-500 border-green-500 text-white'
                  : i+1 === step ? 'bg-brand border-brand text-white'
                  : 'bg-white border-gray-200 text-gray-400'}`}>
                  {i+1 < step ? '✓' : i+1}
                </div>
                <div className={`text-xs font-semibold mt-2 ${i+1===step?'text-brand':i+1<step?'text-green-600':'text-gray-400'}`}>{label}</div>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-base font-bold text-navy mb-1">Tell us about your school</h3>
              <p className="text-xs text-gray-500 mb-4">We&apos;ll configure everything for your curriculum and grades.</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">School name</label>
                  <input value={form.school} onChange={e=>setForm(f=>({...f,school:e.target.value}))}
                    placeholder="e.g. Evalent Academy"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Your name</label>
                  <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                    placeholder="e.g. Sarah Ahmed"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Role</label>
                  <select value={form.role} onChange={e=>setForm(f=>({...f,role:e.target.value}))}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand">
                    <option>Head of Admissions</option>
                    <option>Deputy Principal</option>
                    <option>Head of School</option>
                    <option>Registrar</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Work email</label>
                  <input value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                    placeholder="sarah@school.ae"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"/>
                </div>
              </div>
              <button onClick={()=>advance(2)} className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors">
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-base font-bold text-navy mb-1">Grades and curriculum</h3>
              <p className="text-xs text-gray-500 mb-4">Select what you&apos;d like to assess. You can change this any time.</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {GRADES.map(g => (
                  <button key={g} onClick={()=>toggleGrade(g)}
                    className={`py-2 rounded-lg border-2 text-xs font-bold transition-all ${
                      grades.includes(g)?'border-brand bg-blue-50 text-brand':'border-gray-200 text-gray-400 hover:border-brand'}`}>
                    {g}
                  </button>
                ))}
              </div>
              <div className="text-xs font-semibold text-gray-500 mb-2">Curriculum</div>
              <div className="flex gap-2 mb-4">
                {CURRICULA.map(c => (
                  <button key={c} onClick={()=>setCurric(c)}
                    className={`flex-1 py-2 rounded-lg border-2 text-sm font-bold transition-all ${
                      curric===c?'border-brand bg-blue-50 text-brand':'border-gray-200 text-gray-400 hover:border-brand'}`}>
                    {c}
                  </button>
                ))}
              </div>
              <button onClick={()=>advance(3)} className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors">
                Continue →
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-base font-bold text-navy mb-1">Here&apos;s your report</h3>
              <p className="text-xs text-gray-500 mb-4">What your assessors receive — with one-click decision buttons.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
                <div className="bg-navy px-4 py-3">
                  <div className="text-sm font-bold text-white">{form.school||'Your school'} — Admissions Report</div>
                  <div className="text-xs text-blue-300 mt-0.5">Alex Chen &middot; {grades[0]||'Grade 7'} &middot; {curric} &middot; Generated in 3m 08s</div>
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">✓ Ready to admit</div>
                  {[['English','76','#002ec1'],['Mathematics','68','#002ec1'],['Reasoning','91','#002ec1'],['Mindset','80','#8b5cf6']].map(([label,pct,color])=>(
                    <div key={label} className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-gray-400 w-20">{label}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="modal-bar-fill h-full rounded-full transition-all duration-700" style={{width:'0%',background:color}}/>
                      </div>
                      <span className="text-xs font-bold text-navy w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-3 flex gap-2">
                  <div className="flex-1 py-1.5 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 text-xs font-bold text-center">✓ Admit</div>
                  <div className="flex-1 py-1.5 rounded-lg border-2 border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold text-center">≈ With support</div>
                  <div className="flex-1 py-1.5 rounded-lg border-2 border-red-200 bg-red-50 text-red-700 text-xs font-bold text-center">✕ Do not admit</div>
                </div>
              </div>
              <button onClick={()=>advance(4)} className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors">
                This looks great — activate my trial →
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-green-600">✓</div>
              <h3 className="text-xl font-black text-navy mb-2">You&apos;re live{form.name ? `, ${form.name.split(' ')[0]}` : ''}!</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">Your first assessment link has been sent. The report arrives automatically when your applicant completes it.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left text-xs mb-5">
                <div className="font-bold text-navy text-sm mb-2">Next steps</div>
                <div className="space-y-1.5 text-gray-500">
                  <div>→ Complete account setup at app.evalent.io</div>
                  <div>→ Register your first real student</div>
                  <div>→ Report arrives automatically on submission</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <a href="https://app.evalent.io/signup" className="bg-brand text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
                  Complete setup →
                </a>
                <button onClick={onClose} className="border border-gray-200 text-gray-500 text-sm font-semibold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
