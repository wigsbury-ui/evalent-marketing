'use client'
import { useState } from 'react'

const GRADES = ['Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10']
const CURRICULA = ['IB','British','American']

const EXISTING = [
  { name: 'Aisha Al-Rashid', grade: 'Grade 7', curric: 'IB',       status: 'complete',    score: '78%' },
  { name: 'James Thornton',  grade: 'Grade 5', curric: 'British',  status: 'in_progress', score: '—' },
  { name: 'Mei-Lin Zhang',   grade: 'Grade 9', curric: 'IB',       status: 'link_sent',   score: '—' },
  { name: 'Omar Hassan',     grade: 'Grade 6', curric: 'American', status: 'complete',    score: '85%' },
]

const STATUS: Record<string,{label:string;cls:string}> = {
  complete:    { label:'Complete',    cls:'bg-green-100 text-green-700' },
  in_progress: { label:'In progress', cls:'bg-blue-100 text-blue-700' },
  link_sent:   { label:'Link sent',   cls:'bg-yellow-100 text-yellow-700' },
  registered:  { label:'Registered', cls:'bg-gray-100 text-gray-500' },
}

export default function RegistrationDemo() {
  const [form, setForm] = useState({ first:'', last:'', email:'', grade:'Grade 7', curric:'IB' })
  const [step, setStep] = useState<'form'|'sending'|'done'>('form')
  const [students, setStudents] = useState(EXISTING)
  const [newId, setNewId] = useState<string|null>(null)

  function submit() {
    if (!form.first||!form.last||!form.email) return
    setStep('sending')
    setTimeout(() => {
      const name = `${form.first} ${form.last}`
      setStudents(s => [{ name, grade:form.grade, curric:form.curric, status:'link_sent', score:'—' }, ...s])
      setNewId(name)
      setStep('done')
    }, 1800)
  }

  function reset() { setForm({ first:'', last:'', email:'', grade:'Grade 7', curric:'IB' }); setStep('form'); setNewId(null) }

  const inp = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-3 flex items-center gap-2">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
          <span className="text-xs text-blue-300 font-mono ml-1">app.evalent.io / students / new</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div><h3 className="text-sm font-bold text-navy">Register new student</h3><p className="text-xs text-gray-400 mt-0.5">Assessment link sent automatically on save</p></div>
            <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"/>AUTO-SEND</div>
          </div>
          {step==='done' ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              </div>
              <div className="text-sm font-bold text-navy mb-1">Student registered</div>
              <div className="text-xs text-gray-500 mb-1">Assessment link sent to <span className="font-semibold">{form.email}</span></div>
              <div className="text-xs text-gray-400 mb-4">Link expires in 72 hours · auto-submits on timer</div>
              <button onClick={reset} className="text-xs text-brand font-semibold hover:underline">Register another student</button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div><label className="text-[10px] font-bold text-gray-400 tracking-widest block mb-1">FIRST NAME</label><input value={form.first} onChange={e=>setForm(f=>({...f,first:e.target.value}))} placeholder="e.g. Sara" className={inp}/></div>
                <div><label className="text-[10px] font-bold text-gray-400 tracking-widest block mb-1">LAST NAME</label><input value={form.last} onChange={e=>setForm(f=>({...f,last:e.target.value}))} placeholder="e.g. Ahmed" className={inp}/></div>
              </div>
              <div className="mb-2"><label className="text-[10px] font-bold text-gray-400 tracking-widest block mb-1">EMAIL</label><input value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="sara.ahmed@email.com" className={inp}/></div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div><label className="text-[10px] font-bold text-gray-400 tracking-widest block mb-1">GRADE</label>
                  <select value={form.grade} onChange={e=>setForm(f=>({...f,grade:e.target.value}))} className={inp}>{GRADES.map(g=><option key={g}>{g}</option>)}</select></div>
                <div><label className="text-[10px] font-bold text-gray-400 tracking-widest block mb-1">CURRICULUM</label>
                  <select value={form.curric} onChange={e=>setForm(f=>({...f,curric:e.target.value}))} className={inp}>{CURRICULA.map(c=><option key={c}>{c}</option>)}</select></div>
              </div>
              <button onClick={submit} disabled={!form.first||!form.last||!form.email||step==='sending'}
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${form.first&&form.last&&form.email?'bg-brand text-white hover:bg-blue-800':'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                {step==='sending'?<span className="flex items-center justify-center gap-2"><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Sending assessment link...</span>:'Register & send assessment link →'}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2"><div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div><span className="text-xs text-blue-300 font-mono ml-1">Students</span></div>
          <span className="text-xs text-blue-400">{students.length} registered</span>
        </div>
        <div className="divide-y divide-gray-50">
          {students.map((s,i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 transition-all ${s.name===newId?'bg-green-50 border-l-2 border-green-400':''}`}>
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-brand flex-shrink-0">{s.name.split(' ').map((n:string)=>n[0]).join('').slice(0,2)}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-navy flex items-center gap-1.5">{s.name}{s.name===newId&&<span className="text-[9px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">NEW</span>}</div>
                <div className="text-xs text-gray-400">{s.grade} · {s.curric}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {s.score!=='—'&&<span className="text-xs font-bold text-navy">{s.score}</span>}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${STATUS[s.status].cls}`}>{STATUS[s.status].label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
