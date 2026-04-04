'use client'
import { useState, useEffect } from 'react'

const GRADES = ['Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10']
const CURRICULA = ['IB','British','American']

export default function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [grades, setGrades] = useState<string[]>(['Grade 5','Grade 7'])
  const [curric, setCurric] = useState('IB')
  const [form, setForm] = useState({ school:'', name:'', role:'Head of Admissions', email:'' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      setStep(1)
      setForm({ school:'', name:'', role:'Head of Admissions', email:'' })
      setError('')
    }
  }, [open])

  const toggleGrade = (g: string) => setGrades(prev =>
    prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
  )

  const handleSubmit = async () => {
    if (!form.school || !form.name || !form.email) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://app.evalent.io/api/public/trial-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, grades, curriculum: curric }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      // Redirect straight to dashboard
      window.location.href = 'https://app.evalent.io/school'
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }

  if (!open) return null

  const prog = ((step - 1) / 2) * 100

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="bg-white px-6 py-5 rounded-t-2xl flex items-center justify-between border-b border-gray-100">
          <div className="flex-1 text-center">
            <div className="text-xl font-black text-navy mb-0.5">Start your free trial</div>
            <div className="text-sm text-gray-400">10 free reports · No credit card · 5 minute setup</div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-navy transition-colors ml-4 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6 pt-5">

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {['10 free reports','No credit card','Set up in 5 min','Cancel any time'].map(t => (
              <span key={t} className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                <span>✓</span>{t}
              </span>
            ))}
          </div>

          {/* 2-step progress */}
          <div className="relative flex mb-6">
            <div className="absolute top-5 left-6 right-6 h-0.5" style={{ background: `linear-gradient(90deg, #002ec1 ${prog}%, #dbeafe ${prog}%)` }} />
            {['Your school','Setup'].map((label, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 z-10 transition-all ${
                  i+1 < step ? 'bg-green-500 border-green-500 text-white' :
                  i+1 === step ? 'bg-brand border-brand text-white' :
                  'bg-white border-gray-200 text-gray-400'}`}>
                  {i+1 < step ? '✓' : i+1}
                </div>
                <div className={`text-xs font-semibold mt-2 ${i+1===step?'text-brand':i+1<step?'text-green-600':'text-gray-400'}`}>{label}</div>
              </div>
            ))}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg px-3 py-2 mb-4">{error}</div>
          )}

          {/* Step 1: School details */}
          {step === 1 && (
            <div>
              <h3 className="text-base font-bold text-navy mb-1">Tell us about your school</h3>
              <p className="text-xs text-gray-500 mb-4">We'll configure everything for your curriculum and grades.</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">School name *</label>
                  <input value={form.school} onChange={e=>setForm(f=>({...f,school:e.target.value}))} placeholder="e.g. Evalent Academy"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Your name *</label>
                  <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="e.g. Sarah Ahmed"
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
                  <label className="text-xs font-semibold text-gray-500">Work email *</label>
                  <input value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="sarah@school.ae"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"/>
                </div>
              </div>
              <button onClick={() => {
                if (!form.school || !form.name || !form.email) { setError('Please fill in all required fields.'); return }
                setError('')
                setStep(2)
              }} className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors">
                Continue →
              </button>
            </div>
          )}

          {/* Step 2: Grades & curriculum + submit */}
          {step === 2 && (
            <div>
              <h3 className="text-base font-bold text-navy mb-1">Grades and curriculum</h3>
              <p className="text-xs text-gray-500 mb-4">Select what you'd like to assess. You can change this any time.</p>
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
              <div className="flex gap-2 mb-5">
                {CURRICULA.map(c => (
                  <button key={c} onClick={()=>setCurric(c)}
                    className={`flex-1 py-2 rounded-lg border-2 text-sm font-bold transition-all ${
                      curric===c?'border-brand bg-blue-50 text-brand':'border-gray-200 text-gray-400 hover:border-brand'}`}>
                    {c}
                  </button>
                ))}
              </div>
              <button onClick={handleSubmit} disabled={loading}
                className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60">
                {loading ? 'Setting up your account...' : 'Start my free trial →'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
