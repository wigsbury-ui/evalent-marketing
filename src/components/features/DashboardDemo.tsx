'use client'
import { useState } from 'react'

const STUDENTS = [
  { name:'Aisha Al-Rashid', grade:'G7', curric:'IB',       status:'complete',    eng:76, maths:68, reason:91, rec:'Ready to admit' },
  { name:'James Thornton',  grade:'G5', curric:'British',  status:'in_progress', eng:0,  maths:0,  reason:0,  rec:'—' },
  { name:'Mei-Lin Zhang',   grade:'G9', curric:'IB',       status:'link_sent',   eng:0,  maths:0,  reason:0,  rec:'—' },
  { name:'Omar Hassan',     grade:'G6', curric:'American', status:'complete',    eng:85, maths:79, reason:88, rec:'Ready to admit' },
  { name:'Priya Nair',      grade:'G7', curric:'IB',       status:'complete',    eng:52, maths:48, reason:61, rec:'Admit with support' },
  { name:'Tom Kessler',     grade:'G5', curric:'British',  status:'not_started', eng:0,  maths:0,  reason:0,  rec:'—' },
]
const ST: Record<string,{label:string;cls:string;dot:string}> = {
  complete:    { label:'Complete',    cls:'bg-green-100 text-green-700',  dot:'bg-green-500' },
  in_progress: { label:'In progress', cls:'bg-blue-100 text-blue-700',    dot:'bg-blue-500 animate-pulse' },
  link_sent:   { label:'Link sent',   cls:'bg-yellow-100 text-yellow-700',dot:'bg-yellow-500' },
  not_started: { label:'Not started', cls:'bg-gray-100 text-gray-500',    dot:'bg-gray-300' },
}
const RC: Record<string,string> = {
  'Ready to admit':'text-green-700 font-semibold',
  'Admit with support':'text-blue-700 font-semibold',
  '—':'text-gray-400',
}

export default function DashboardDemo() {
  const [sel, setSel] = useState<number|null>(null)
  const complete = STUDENTS.filter(s=>s.status==='complete').length
  const inProg   = STUDENTS.filter(s=>s.status==='in_progress').length
  const pending  = STUDENTS.filter(s=>['link_sent','not_started'].includes(s.status)).length

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-navy px-5 py-3 flex items-center gap-3">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
          <span className="text-xs text-blue-300 font-mono">app.evalent.io / school / students</span>
          <div className="ml-auto flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"/><span className="text-[10px] text-blue-400">Live</span></div>
        </div>
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div><h2 className="text-base font-bold text-navy">Assessment Overview</h2><p className="text-xs text-gray-400 mt-0.5">Dubai International Academy · Grade 5–9 intake 2026</p></div>
          <button className="bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-lg">+ Add student</button>
        </div>
        <div className="grid grid-cols-4 border-b border-gray-100">
          {[['Total',STUDENTS.length,'text-navy'],['Complete',complete,'text-green-600'],['In progress',inProg,'text-blue-600'],['Pending',pending,'text-yellow-600']].map(([l,v,c])=>(
            <div key={l as string} className="px-5 py-3 border-r border-gray-100 last:border-0"><div className="text-xs text-gray-400">{l as string}</div><div className={`text-xl font-black mt-0.5 ${c as string}`}>{v as number}</div></div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead><tr className="border-b border-gray-100 bg-gray-50">
              {['STUDENT','GRADE','STATUS','ENGLISH','MATHS','REASONING','RECOMMENDATION'].map(h=>(
                <th key={h} className="px-4 py-2.5 text-left text-[10px] font-bold text-gray-400 tracking-widest">{h}</th>
              ))}
            </tr></thead>
            <tbody className="divide-y divide-gray-50">
              {STUDENTS.map((s,i)=>{
                const st = ST[s.status]
                return (
                  <tr key={i} onClick={()=>setSel(sel===i?null:i)} className={`cursor-pointer transition-colors ${sel===i?'bg-blue-50':'hover:bg-gray-50'}`}>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-brand flex-shrink-0">{s.name.split(' ').map((n:string)=>n[0]).join('').slice(0,2)}</div><span className="font-semibold text-navy text-xs whitespace-nowrap">{s.name}</span></div></td>
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{s.grade} · {s.curric}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${st.cls}`}><span className={`w-1.5 h-1.5 rounded-full ${st.dot}`}/>{st.label}</span></td>
                    {[s.eng,s.maths,s.reason].map((v,j)=>(
                      <td key={j} className="px-4 py-3">{v?<div className="flex items-center gap-1.5"><div className="w-10 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${j===2?'bg-purple-500':'bg-brand'}`} style={{width:`${v}%`}}/></div><span className="text-xs font-bold text-navy">{v}%</span></div>:<span className="text-xs text-gray-300">—</span>}</td>
                    ))}
                    <td className={`px-4 py-3 text-xs whitespace-nowrap ${RC[s.rec]}`}>{s.rec}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"/>Updates automatically · Click any row to view full report
        </div>
      </div>
    </div>
  )
}
