'use client'
import { useState } from 'react'

const FORMS = {
  g6: { id: '260801831138048', label: 'Grade 6 Demo', grade: 'Grade 6', avatar: 'Animated avatar' },
  g8: { id: '260801729522354', label: 'Grade 8 Demo', grade: 'Grade 8', avatar: 'Real person' },
}

export default function AssessmentDemo() {
  const [active, setActive] = useState<'g6' | 'g8' | null>(null)
  const [name, setName] = useState('')
  const [lang, setLang] = useState('UK')

  function getUrl(key: 'g6' | 'g8') {
    const form = FORMS[key]
    const params = new URLSearchParams()
    if (name.trim()) params.set('student_first_name', name.trim())
    params.set('meta_language_locale', lang)
    params.set('voice', lang)
    params.set('meta_programme', lang)
    params.set('demo', 'true')
    return 'https://form.jotform.com/' + form.id + '?' + params.toString()
  }

  return (
    <div className="w-full">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
          Personalise your demo (optional)
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">First name</label>
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); setActive(null) }}
              placeholder="e.g. Alex"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>
          <div className="sm:w-52">
            <label className="block text-xs font-medium text-gray-600 mb-1">Voice and language</label>
            <select
              value={lang}
              onChange={e => { setLang(e.target.value); setActive(null) }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
            >
              <option value="UK">🇬🇧 British English</option>
              <option value="US">🇺🇸 American English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-5 flex-wrap">
        {(Object.keys(FORMS) as ('g6' | 'g8')[]).map(key => (
          <button
            key={key}
            onClick={() => setActive(active === key ? null : key)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all ${
              active === key
                ? 'bg-brand text-white border-brand shadow-lg scale-105'
                : 'bg-white text-navy border-gray-200 hover:border-brand hover:text-brand'
            }`}
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${active === key ? 'bg-white' : 'bg-blue-400'}`}/>
            {FORMS[key].label}
            <span className={`text-xs font-normal ${active === key ? 'text-blue-200' : 'text-gray-400'}`}>
              {FORMS[key].avatar}
            </span>
          </button>
        ))}
        {active && (
          <button
            onClick={() => setActive(null)}
            className="px-4 py-2.5 rounded-full text-sm text-gray-400 hover:text-gray-600 border-2 border-transparent hover:border-gray-200 transition-all"
          >
            × Close
          </button>
        )}
      </div>

      {!active && (
        <div className="text-center py-12 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-2xl">
          <div className="text-base font-semibold text-gray-500 mb-1">Select a grade above to launch the real assessment</div>
          <div className="text-xs text-gray-300">The same form your applicants complete. Nothing simulated. Submitting takes you to your free trial.</div>
        </div>
      )}

      {active && (
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-navy px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              <span className="text-white text-xs font-semibold">
                {FORMS[active].grade} Assessment{name ? ' — ' + name : ''}
              </span>
            </div>
            <span className="text-blue-300 text-xs hidden sm:block">Live demo — submitting leads to free trial signup</span>
          </div>
          <iframe
            key={active + name + lang}
            src={getUrl(active)}
            width="100%"
            height="720"
            frameBorder="0"
            allow="camera; microphone; autoplay; fullscreen"
            style={{ display: 'block' }}
            title={FORMS[active].label}
          />
        </div>
      )}
    </div>
  )
}
