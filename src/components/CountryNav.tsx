'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const COUNTRIES = [
  { href: '/uk',          label: 'United Kingdom' },
  { href: '/usa',         label: 'United States' },
  { href: '/australia',   label: 'Australia' },
  { href: '/new-zealand', label: 'New Zealand' },
]

export default function CountryNav() {
  const pathname = usePathname()
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-0">
          <span className="text-[10px] font-bold text-gray-400 tracking-widest whitespace-nowrap pr-3 border-r border-gray-200 mr-2">
            SCHOOLS BY COUNTRY
          </span>
          {COUNTRIES.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap text-xs font-semibold px-4 py-3.5 border-b-2 transition-all ${
                  active
                    ? 'border-brand text-brand'
                    : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
