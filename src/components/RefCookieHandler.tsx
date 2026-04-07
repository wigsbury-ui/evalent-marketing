'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function RefCookieHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref && ref.length > 0 && ref.length < 100) {
      // Set evalent_ref cookie — 30 day expiry, same-site lax so it persists across navigation
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()
      document.cookie = `evalent_ref=${encodeURIComponent(ref)}; expires=${expires}; path=/; SameSite=Lax`
    }
  }, [searchParams])

  return null
}
