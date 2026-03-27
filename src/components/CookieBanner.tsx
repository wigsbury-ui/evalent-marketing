"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("evalent_cookie_consent")) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem("evalent_cookie_consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#07112e] border border-white/10 rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl pointer-events-auto">
        <p className="text-sm text-blue-200 leading-relaxed">
          We use a small number of functional cookies to keep the platform working and to attribute referrals.
          No advertising or analytics cookies are used.{" "}
          <Link href="/legal/cookies" className="underline hover:text-white transition-colors">Cookie Policy</Link>
          {" · "}
          <Link href="/legal/privacy" className="underline hover:text-white transition-colors">Privacy Policy</Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-white text-[#07112e] text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
