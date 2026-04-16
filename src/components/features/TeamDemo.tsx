'use client'
import { useState } from 'react'

const PERMS = ['Register students', 'Send assessments', 'Dashboard', 'Student reports', 'Strategy & enrolment', 'Executive reports']

type Level = 'edit' | 'view' | 'none'

interface Member { name: string; email: string; avatar: string; pending?: boolean; perms: Level[] }
interface Group { name: string; color: string; bg: string; border: string; dot: string; desc: string; defaults: Level[]; members: Member[] }

const GROUPS: Group[] = [
  {
    name: 'Admissions Team', color: '#1a2b6b', bg: '#f0f4ff', border: '#c7d2fe', dot: '#1a2b6b',
    desc: 'Day-to-day admissions: register students, send assessments, monitor pipeline.',
    defaults: ['edit','edit','view','view','none','none'],
    members: [
      { name: 'Ahmed George',  email: 'ahmed@stfrancis.edu',  avatar: 'AG', perms: ['edit','edit','view','view','none','none'] },
      { name: 'Jane Simmons',  email: 'jane@stfrancis.edu',   avatar: 'JS', pending: true, perms: ['edit','edit','view','view','none','none'] },
    ],
  },
  {
    name: 'Senior Leadership', color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe', dot: '#7c3aed',
    desc: 'Full operational and strategic oversight: dashboard, pipeline, strategy, and Evalent reports.',
    defaults: ['edit','edit','view','view','view','none'],
    members: [
      { name: 'Paul Johnson',  email: 'paul@stfrancis.edu',   avatar: 'PJ', perms: ['edit','edit','view','view','view','none'] },
    ],
  },
  {
    name: 'Board Chair', color: '#b45309', bg: '#fffbeb', border: '#fde68a', dot: '#b45309',
    desc: 'All board access plus ability to generate executive reports and review strategic signals.',
    defaults: ['none','none','view','none','view','view'],
    members: [],
  },
  {
    name: 'Board Members', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd', dot: '#0369a1',
    desc: 'Strategic overview: enrolment trends, KPIs, executive reports. No individual student data.',
    defaults: ['none','none','view','none','view','none'],
    members: [],
  },
]

function PermIcon({ level, modified }: { level: Level; modified?: boolean }) {
  const base = "w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200 " + (modified ? "ring-2 ring-amber-400" : "")
  if (level === 'edit') return (
    <div className={base + " bg-green-50 border border-green-200"}>
      <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </div>
  )
  if (level === 'view') return (
    <div className={base + " bg-blue-50 border border-blue-200"}>
      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </div>
  )
  return (
    <div className={base + " bg-gray-50 border border-gray-200"}>
      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    </div>
  )
}

function DefaultDot({ level }: { level: Level }) {
  if (level === 'edit')  return <div className="w-2.5 h-2.5 rounded-full bg-green-500 mx-auto" />
  if (level === 'view')  return <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mx-auto" />
  return <div className="w-2.5 h-2.5 rounded-full bg-gray-200 mx-auto" />
}

export default function TeamDemo() {
  const [open, setOpen] = useState<Record<string,boolean>>({ 'Admissions Team': true, 'Senior Leadership': true, 'Board Chair': true, 'Board Members': true })

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Live preview: Team page</span>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="p-5 space-y-3">
        {/* Permission legend */}
        <div className="flex flex-wrap items-center gap-4 px-1 mb-4">
          <div className="flex items-center gap-1.5"><PermIcon level="edit" /><span className="text-xs text-gray-500">Edit access</span></div>
          <div className="flex items-center gap-1.5"><PermIcon level="view" /><span className="text-xs text-gray-500">View only</span></div>
          <div className="flex items-center gap-1.5"><PermIcon level="none" /><span className="text-xs text-gray-500">No access</span></div>
          <div className="flex items-center gap-1.5"><PermIcon level="view" modified /><span className="text-xs text-gray-500">Modified from group default</span></div>
        </div>

        {GROUPS.map((g) => (
          <div key={g.name} className="rounded-xl border overflow-hidden" style={{ borderColor: g.border }}>
            {/* Group header */}
            <button
              onClick={() => setOpen(o => ({ ...o, [g.name]: !o[g.name] }))}
              className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:opacity-90"
              style={{ backgroundColor: g.bg }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: g.dot }} />
                <span className="text-sm font-bold" style={{ color: g.color }}>{g.name}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'white', color: g.color, border: `1px solid ${g.border}` }}>
                  {g.members.length} {g.members.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <svg className={`w-4 h-4 transition-transform duration-200 ${open[g.name] ? 'rotate-180' : ''}`} style={{ color: g.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open[g.name] && (
              <div className="bg-white">
                <p className="text-xs text-gray-400 px-4 py-2 border-b border-gray-50">{g.desc}</p>

                {/* Permission table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-50">
                        <th className="text-left px-4 py-2 font-medium text-gray-400 w-48">Member</th>
                        {PERMS.map(p => (
                          <th key={p} className="px-2 py-2 font-medium text-gray-400 text-center whitespace-nowrap">{p}</th>
                        ))}
                        <th className="px-4 py-2 font-medium text-gray-400 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Group default row */}
                      <tr className="border-b border-gray-50">
                        <td className="px-4 py-2 text-gray-400 italic">Group default</td>
                        {g.defaults.map((level, i) => (
                          <td key={i} className="px-2 py-2 text-center"><DefaultDot level={level} /></td>
                        ))}
                        <td />
                      </tr>
                      {/* Members */}
                      {g.members.map((m) => (
                        <tr key={m.name} className="border-b border-gray-50 last:border-0">
                          <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ backgroundColor: g.color }}>
                                {m.avatar}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800 leading-tight">{m.name}</p>
                                <p className="text-gray-400 leading-tight">{m.email}</p>
                                {m.pending && <span className="text-[9px] font-semibold text-amber-600">● Pending</span>}
                              </div>
                            </div>
                          </td>
                          {m.perms.map((level, i) => (
                            <td key={i} className="px-2 py-2 text-center">
                              <div className="flex justify-center"><PermIcon level={level} /></div>
                            </td>
                          ))}
                          <td className="px-4 py-2 text-right">
                            <button className="text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 flex items-center gap-1 ml-auto">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                              Manage
                            </button>
                          </td>
                        </tr>
                      ))}
                      {/* Add member row */}
                      <tr>
                        <td colSpan={PERMS.length + 2} className="px-4 py-2">
                          <button className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 border transition-colors hover:opacity-80" style={{ color: g.color, borderColor: g.border, backgroundColor: g.bg }}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Add {g.name.toLowerCase()} member
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}

        <p className="text-center text-[10px] text-gray-300 pt-1">Click any group header to expand or collapse · Permissions are set per role group with individual overrides</p>
      </div>
    </div>
  )
}
