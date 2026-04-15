'use client'
import { useState } from 'react'

interface KpiData {
  fillRate: number; fillSeats: number; fillTarget: number; fillTrend: string; fillTrendColor: string
  retention: number; retConfirmed: number; retStaying: number; retUndecided: number; retLeaving: number; retTrend: string; retTrendColor: string
  newEntrants: number; newPct: number; newInProcess: number; newRejected: number; newTrend: string; newTrendColor: string
  gap: number; gapHistory: boolean; gapDelta: number | null; gapTrend: string; gapTrendColor: string; gapSparkline: string
  leaverPct: number; leaverOf: number; leaverTotal: number; leaverNet: number; leaverIn: number; leaverOut: number; leaverTrend: string; leaverTrendColor: string
  velocity: number; velocityPct: number; velocityTrend: string; velocityTrendColor: string; velocityBars: number
}

const DATA: Record<string, KpiData> = {
  all: {
    fillRate: 62, fillSeats: 210, fillTarget: 337, fillTrend: '→ In progress', fillTrendColor: '#f59e0b',
    retention: 59, retConfirmed: 188, retStaying: 188, retUndecided: 71, retLeaving: 58, retTrend: '→ Moderate', retTrendColor: '#f59e0b',
    newEntrants: 22, newPct: 7, newInProcess: 23, newRejected: 13, newTrend: '↑ Building', newTrendColor: '#15803d',
    gap: 127, gapHistory: false, gapDelta: null, gapTrend: '→ No history', gapTrendColor: '#6b7280', gapSparkline: '',
    leaverPct: 18, leaverOf: 58, leaverTotal: 317, leaverNet: -36, leaverIn: 22, leaverOut: 58, leaverTrend: '↑ Low', leaverTrendColor: '#15803d',
    velocity: 23, velocityPct: 7, velocityTrend: '↑ Active', velocityTrendColor: '#15803d', velocityBars: 3,
  },
  g3: {
    fillRate: 52, fillSeats: 13, fillTarget: 25, fillTrend: '↓ Needs action', fillTrendColor: '#dc2626',
    retention: 60, retConfirmed: 9, retStaying: 9, retUndecided: 3, retLeaving: 4, retTrend: '→ Moderate', retTrendColor: '#f59e0b',
    newEntrants: 2, newPct: 8, newInProcess: 0, newRejected: 1, newTrend: '→ Early stage', newTrendColor: '#f59e0b',
    gap: 14, gapHistory: true, gapDelta: -3, gapTrend: '↑ Closing', gapTrendColor: '#15803d', gapSparkline: 'M0,20 C10,18 20,16 30,14 C40,12 50,10 60,9',
    leaverPct: 25, leaverOf: 4, leaverTotal: 16, leaverNet: -2, leaverIn: 2, leaverOut: 4, leaverTrend: '→ Moderate', leaverTrendColor: '#f59e0b',
    velocity: 0, velocityPct: 0, velocityTrend: '↓ Stalled', velocityTrendColor: '#dc2626', velocityBars: 1,
  },
  g4: {
    fillRate: 56, fillSeats: 14, fillTarget: 25, fillTrend: '→ In progress', fillTrendColor: '#f59e0b',
    retention: 55, retConfirmed: 11, retStaying: 11, retUndecided: 3, retLeaving: 6, retTrend: '→ Moderate', retTrendColor: '#f59e0b',
    newEntrants: 3, newPct: 12, newInProcess: 0, newRejected: 3, newTrend: '↑ Building', newTrendColor: '#15803d',
    gap: 11, gapHistory: true, gapDelta: -5, gapTrend: '↑ Closing', gapTrendColor: '#15803d', gapSparkline: 'M0,22 C10,20 20,17 30,15 C40,13 50,11 60,9',
    leaverPct: 30, leaverOf: 6, leaverTotal: 20, leaverNet: -3, leaverIn: 3, leaverOut: 6, leaverTrend: '→ Moderate', leaverTrendColor: '#f59e0b',
    velocity: 0, velocityPct: 0, velocityTrend: '↓ Thin', velocityTrendColor: '#dc2626', velocityBars: 1,
  },
  g5: {
    fillRate: 72, fillSeats: 18, fillTarget: 25, fillTrend: '→ In progress', fillTrendColor: '#f59e0b',
    retention: 78, retConfirmed: 14, retStaying: 14, retUndecided: 2, retLeaving: 2, retTrend: '↑ Strong', retTrendColor: '#15803d',
    newEntrants: 5, newPct: 20, newInProcess: 1, newRejected: 1, newTrend: '↑ Building', newTrendColor: '#15803d',
    gap: 5, gapHistory: true, gapDelta: -8, gapTrend: '↑ Closing fast', gapTrendColor: '#15803d', gapSparkline: 'M0,24 C10,21 20,18 30,14 C40,10 50,7 60,5',
    leaverPct: 11, leaverOf: 2, leaverTotal: 18, leaverNet: 3, leaverIn: 5, leaverOut: 2, leaverTrend: '↑ Low', leaverTrendColor: '#15803d',
    velocity: 1, velocityPct: 4, velocityTrend: '→ Moderate', velocityTrendColor: '#f59e0b', velocityBars: 2,
  },
  g9: {
    fillRate: 84, fillSeats: 21, fillTarget: 25, fillTrend: '↑ On track', fillTrendColor: '#15803d',
    retention: 86, retConfirmed: 18, retStaying: 18, retUndecided: 1, retLeaving: 2, retTrend: '↑ Strong', retTrendColor: '#15803d',
    newEntrants: 4, newPct: 16, newInProcess: 2, newRejected: 0, newTrend: '↑ Building', newTrendColor: '#15803d',
    gap: 2, gapHistory: true, gapDelta: -6, gapTrend: '↑ Almost there', gapTrendColor: '#15803d', gapSparkline: 'M0,20 C10,16 20,12 30,9 C40,6 50,4 60,2',
    leaverPct: 9, leaverOf: 2, leaverTotal: 21, leaverNet: 2, leaverIn: 4, leaverOut: 2, leaverTrend: '↑ Low', leaverTrendColor: '#15803d',
    velocity: 2, velocityPct: 8, velocityTrend: '↑ Active', velocityTrendColor: '#15803d', velocityBars: 4,
  },
}

const PILLS = [
  { key: 'all', label: 'Whole school' },
  { key: 'g3',  label: 'G3' },
  { key: 'g4',  label: 'G4' },
  { key: 'g5',  label: 'G5' },
  { key: 'g9',  label: 'G9' },
]

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2 mb-1">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: color }} />
    </div>
  )
}

function TriBar({ staying, undecided, leaving, total }: { staying: number; undecided: number; leaving: number; total: number }) {
  const s = Math.round((staying / total) * 100)
  const u = Math.round((undecided / total) * 100)
  const l = Math.round((leaving / total) * 100)
  return (
    <div className="flex w-full h-1.5 rounded-full overflow-hidden mt-2 mb-1 transition-all duration-500">
      <div style={{ width: `${s}%`, backgroundColor: '#15803d' }} />
      <div style={{ width: `${u}%`, backgroundColor: '#f59e0b' }} />
      <div style={{ width: `${l}%`, backgroundColor: '#fca5a5' }} />
    </div>
  )
}

function SignalBars({ count }: { count: number }) {
  return (
    <div className="flex items-end gap-0.5 h-5">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="w-1.5 rounded-sm transition-all duration-500"
          style={{
            height: `${40 + i * 12}%`,
            backgroundColor: i <= count ? '#1a2b6b' : '#e5e7eb',
          }} />
      ))}
    </div>
  )
}

export default function StrategyDemo() {
  const [active, setActive] = useState('all')
  const d = DATA[active]
  const fillColor = d.fillRate >= 80 ? '#15803d' : d.fillRate >= 50 ? '#f59e0b' : '#dc2626'
  const leaverColor = d.leaverPct < 25 ? '#15803d' : d.leaverPct < 50 ? '#f59e0b' : '#dc2626'
  const retTotal = d.retStaying + d.retUndecided + d.retLeaving

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Live preview — Strategy page</span>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="p-5">
        {/* Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {PILLS.map(p => (
            <button key={p.key} onClick={() => setActive(p.key)}
              className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200"
              style={active === p.key
                ? { backgroundColor: '#1a2b6b', color: 'white', borderColor: '#1a2b6b' }
                : { backgroundColor: 'transparent', color: '#6b7280', borderColor: '#e5e7eb' }}>
              {p.label}
            </button>
          ))}
          <span className="px-3 py-1 rounded-full text-xs text-gray-300 border border-dashed border-gray-200">G1</span>
          <span className="px-3 py-1 rounded-full text-xs text-gray-300 border border-dashed border-gray-200">G2</span>
          <span className="px-3 py-1 rounded-full text-xs text-gray-300 border border-dashed border-gray-200">G6</span>
        </div>

        {/* KPI Grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-3 gap-3">

          {/* Fill Rate */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">Fill Rate</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.fillTrendColor }}>{d.fillTrend}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black transition-all duration-300" style={{ color: '#1a2b6b' }}>{d.fillRate}%</span>
              <span className="text-xs text-gray-400">{d.fillSeats} / {d.fillTarget} seats</span>
            </div>
            <Bar pct={d.fillRate} color={fillColor} />
            <p className="text-xs text-gray-500"><strong>{d.fillTarget - d.fillSeats} seats</strong> still needed</p>
          </div>

          {/* Retention */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">Retention</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.retTrendColor }}>{d.retTrend}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black transition-all duration-300" style={{ color: '#1a2b6b' }}>{d.retention}%</span>
              <span className="text-xs text-gray-400">{d.retConfirmed} confirmed</span>
            </div>
            <TriBar staying={d.retStaying} undecided={d.retUndecided} leaving={d.retLeaving} total={retTotal} />
            <p className="text-xs">
              <span className="font-semibold text-green-700">{d.retStaying} staying</span>
              <span className="text-gray-400"> · </span>
              <span className="font-semibold text-amber-600">{d.retUndecided} undecided</span>
              <span className="text-gray-400"> · </span>
              <span className="font-semibold text-red-500">{d.retLeaving} leaving</span>
            </p>
          </div>

          {/* New Entrants */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">New Entrants</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.newTrendColor }}>{d.newTrend}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black transition-all duration-300" style={{ color: '#1a2b6b' }}>{d.newEntrants}</span>
              <span className="text-xs text-gray-400">{d.newPct}% of target</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2 mb-1">
              <div className="h-full flex transition-all duration-500">
                <div style={{ width: `${d.newPct}%`, backgroundColor: '#22c55e' }} />
                <div style={{ width: `${Math.round((d.newInProcess / (d.fillTarget || 1)) * 100)}%`, backgroundColor: '#93c5fd' }} />
              </div>
            </div>
            <p className="text-xs text-gray-500">{d.newInProcess} more in process · {d.newRejected} rejected</p>
          </div>

          {/* Gap to Target */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">Gap to Target</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.gapTrendColor }}>{d.gapTrend}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black transition-all duration-300" style={{ color: d.gap > 5 ? '#dc2626' : d.gap > 0 ? '#f59e0b' : '#15803d' }}>
                +{d.gap}
              </span>
              <span className="text-xs text-gray-400">seats needed</span>
            </div>
            {d.gapHistory && d.gapSparkline ? (
              <div className="mt-2 mb-1">
                <svg viewBox="0 0 60 28" className="w-full h-7" fill="none">
                  <path d={d.gapSparkline} stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
                <p className="text-xs text-gray-500">8-week change: <strong style={{ color: '#15803d' }}>{d.gapDelta} seats</strong></p>
              </div>
            ) : (
              <p className="text-xs text-gray-400 mt-2">Save plan to start tracking trend</p>
            )}
          </div>

          {/* Leaver Risk */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">Leaver Risk</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.leaverTrendColor }}>{d.leaverTrend}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black transition-all duration-300" style={{ color: leaverColor }}>{d.leaverPct}%</span>
              <span className="text-xs text-gray-400">{d.leaverOf} of {d.leaverTotal}</span>
            </div>
            <Bar pct={d.leaverPct} color={leaverColor} />
            <p className="text-xs text-gray-500">Net movement: <strong style={{ color: d.leaverNet >= 0 ? '#15803d' : '#dc2626' }}>{d.leaverNet > 0 ? '+' : ''}{d.leaverNet}</strong> ({d.leaverIn} in – {d.leaverOut} out)</p>
          </div>

          {/* Pipeline Velocity */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-medium">Pipeline Velocity</span>
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: d.velocityTrendColor }}>{d.velocityTrend}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black transition-all duration-300" style={{ color: '#1a2b6b' }}>{d.velocity}</span>
                <span className="text-xs text-gray-400">in pipeline</span>
              </div>
              <SignalBars count={d.velocityBars} />
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2 mb-1">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(d.velocityPct * 3, 100)}%`, backgroundColor: '#1a2b6b' }} />
            </div>
            <p className="text-xs text-gray-500"><strong>{d.velocityPct}%</strong> of target in active consideration</p>
          </div>

        </div>

        <p className="text-center text-[10px] text-gray-300 mt-4">Live data from your school, updated automatically · Click any grade pill to change the view</p>
      </div>
    </div>
  )
}
