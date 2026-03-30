"use client"
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  label: string
  duration?: number
}

function AnimatedCounter({ value, label, duration = 2000 }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || value === 0) return
    const start = Date.now()
    const startVal = Math.max(0, value - Math.floor(value * 0.15))
    const raf = (cb: () => void) => requestAnimationFrame(cb)
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(startVal + (value - startVal) * eased)
      setDisplay(current)
      if (progress < 1) raf(tick)
    }
    raf(tick)
  }, [started, value, duration])

  const formatted = display.toLocaleString()

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-2xl sm:text-3xl font-bold tabular-nums tracking-tight text-white">
        {started ? formatted : value.toLocaleString()}
      </span>
      <span className="text-xs sm:text-sm text-blue-200 mt-0.5 font-medium">{label}</span>
    </div>
  )
}

interface SiteStats {
  [key: string]: { value: string; label: string }
}

export default function AssessmentCounter() {
  const [stats, setStats] = useState<SiteStats | null>(null)

  useEffect(() => {
    fetch('https://app.evalent.io/api/site-stats')
      .then(r => r.json())
      .then(setStats)
      .catch(() => {
        // Fallback if API unavailable
        setStats({
          assessments_delivered: { value: '150000', label: 'Assessments delivered' }
        })
      })
  }, [])

  if (!stats) return null

  const entries = Object.entries(stats)
  if (entries.length === 0) return null

  return (
    <div className="w-full mb-4">
      <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
        {entries.map(([key, stat]) => (
          <AnimatedCounter
            key={key}
            value={parseInt(stat.value.replace(/,/g, ''), 10) || 0}
            label={stat.label}
            duration={2200}
          />
        ))}
      </div>
    </div>
  )
}
