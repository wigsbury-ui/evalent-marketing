'use client'
import { useState } from 'react'

type D = 'admit'|'support'|'waitlist'|'reject'|null
const CFG: Record<string,{label:string;short:string;btn:string;conf:string}> = {
  admit:    { label:'Admit',              short:'Ready to admit',             btn:'border-green-300 bg-green-50 text-green-800 hover:bg-green-100',    conf:'bg-green-50 border-green-200 text-green-800' },
  support:  { label:'Admit with support', short:'Admit with academic support', btn:'border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100',       conf:'bg-blue-50 border-blue-200 text-blue-800' },
  waitlist: { label:'Waitlist',           short:'Waitlisted',                  btn:'border-yellow-300 bg-yellow-50 text-yellow-800 hover:bg-yellow-100',conf:'bg-yellow-50 border-yellow-200 text-yellow-800' },
  reject:   { label:'Do not admit',       short:'Not admitted',                btn:'border-red-300 bg-red-50 text-red-800 hover:bg-red-100',            conf:'bg-red-50 border-red-200 text-red-800' },
}

export default function DecisionsDemo() {
  const [decision, setDecision] = useState<D>(null)
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400">{confirmed?'Re: Sara Ahmed: decision recorded':'Admissions report ready — Sara Ahmed, Grade 7 · from reports@evalent.io'}</div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <div className="text-base font-black text-navy">EVAL<span className="text-brand italic">ENT</span></div>
            <div className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide ${confirmed?'bg-green-100 text-green-700':'bg-navy text-white'}`}>{confirmed?'✓ DECISION RECORDED':'REPORT READY'}</div>
          </div>
          {!confirmed?(
            <>
              <div className="text-xs text-gray-400 mb-1">To: sarah.principal@diacademy.ae · Grade 7 Entry</div>
              <div className="text-lg font-black text-navy mb-3 tracking-tight">Admissions report: Sara Ahmed</div>
              <p className="text-sm text-gray-600 mb-4">Hi Sarah, Sara&apos;s Grade 7 IB assessment is complete. Use the buttons below to record your decision instantly. No login required.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-navy">Sara Ahmed · Grade 7 · IB</div>
                  <div className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">✓ Ready to admit</div>
                </div>
                {[['English','76%','bg-brand'],['Mathematics','68%','bg-brand'],['Reasoning','91%','bg-purple-500'],['Mindset','3.2 / 4','bg-indigo-400']].map(([l,v,c])=>(
                  <div key={l} className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-gray-400 w-20">{l}</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className={`h-full rounded-full ${c}`} style={{width:l==='Mindset'?'80%':v}}/></div>
                    <span className="text-xs font-bold text-navy w-12 text-right">{v}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold text-gray-400 tracking-widest mb-3">RECORD YOUR DECISION: ONE CLICK · NO LOGIN REQUIRED</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(CFG).map(([key,cfg])=>(
                  <button key={key} onClick={()=>{setDecision(key as D);setConfirmed(true)}}
                    className={`border-2 ${cfg.btn} text-xs font-bold py-3 rounded-xl text-center transition-all hover:scale-105`}>{cfg.label}</button>
                ))}
              </div>
            </>
          ):(
            <>
              <div className="text-xs text-gray-400 mb-1">To: sarah.principal@diacademy.ae</div>
              <div className="text-lg font-black text-navy mb-3 tracking-tight">Decision confirmed: Sara Ahmed</div>
              <div className={`border rounded-xl p-4 mb-4 ${CFG[decision!].conf}`}>
                <div className="text-sm font-bold mb-1">✓ {CFG[decision!].short}</div>
                <div className="text-xs opacity-80">Sara Ahmed · Grade 7 · IB · {new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</div>
                <div className="text-xs opacity-70 mt-1">Decision logged · Dashboard updated · Audit trail created</div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs mb-4">
                {[['Applicant record','Updated instantly'],['Dashboard','Reflects decision'],['Audit log','Timestamped']].map(([l,d])=>(
                  <div key={l} className="bg-gray-50 border border-gray-100 rounded-xl p-3"><div className="font-bold text-navy mb-0.5">✓ {l}</div><div className="text-gray-400">{d}</div></div>
                ))}
              </div>
              <button onClick={()=>{setDecision(null);setConfirmed(false)}} className="text-xs text-brand font-semibold hover:underline">← Try a different decision</button>
            </>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {icon:'email',title:'Works from any inbox',desc:'Decision buttons work in Gmail, Outlook, Apple Mail and any email client on any device.'},
          {icon:'link',title:'No login required',desc:'The link is secure and single-use. Assessors never need a portal password.'},
          {icon:'audit',title:'Full audit trail',desc:'Every decision is timestamped, attributed, and stored permanently in the applicant record.'},
        ].map(({title,desc})=>(
          <div key={title} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="text-sm font-bold text-navy mb-1">{title}</div>
            <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
