'use client'
import { useState, useEffect } from 'react'

const CURRICULA = ['IB', 'British', 'American', 'IGCSE', 'Australian', 'Other']

const CURRICULUM_LABELS: Record<string, string> = {
  IB: 'IB (International Baccalaureate)',
  British: 'British (National Curriculum)',
  American: 'American (Common Core)',
  IGCSE: 'IGCSE (Cambridge)',
  Australian: 'Australian (ACARA)',
  Other: 'Other / International',
}

export default function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ school: '', name: '', role: 'Head of Admissions', email: '', curriculum: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      setForm({ school: '', name: '', role: 'Head of Admissions', email: '', curriculum: '' })
      setError('')
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.school || !form.name || !form.email || !form.curriculum) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://app.evalent.io/api/public/trial-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      window.location.href = 'https://app.evalent.io/school'
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between">
          <div>
            <div className="text-xl font-black text-navy">Start your free trial</div>
            <div className="text-sm text-gray-400 mt-0.5">10 free reports · No credit card needed</div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-navy transition-colors mt-0.5 ml-4 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg px-3 py-2">{error}</div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">School name</label>
              <input
                value={form.school}
                onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
                placeholder="e.g. Evalent Academy"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Your name</label>
              <input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Sarah Ahmed"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Role</label>
              <select
                value={form.role}
                onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
              >
                <option>Head of Admissions</option>
                <option>Deputy Principal</option>
                <option>Head of School</option>
                <option>Registrar</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Work email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="sarah@school.ae"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Curriculum</label>
            <div className="grid grid-cols-3 gap-2">
              {CURRICULA.map(c => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setForm(f => ({ ...f, curriculum: c }))}
                  className={`py-2 px-2 rounded-lg border-2 text-xs font-bold transition-all text-center ${
                    form.curriculum === c
                      ? 'border-brand bg-blue-50 text-brand'
                      : 'border-gray-200 text-gray-500 hover:border-brand'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white text-sm font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 mt-1"
          >
            {loading ? 'Setting up your account...' : 'Start my free trial →'}
          </button>

          <p className="text-[11px] text-gray-400 text-center">
            No credit card required. Cancel any time.
          </p>

        </form>
      </div>
    </div>
  )
}
