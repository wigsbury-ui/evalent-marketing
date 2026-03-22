'use client'

// 15 fictional independent school logos — SVG wordmarks, monochrome
const LOGOS = [
  // 1 — Harrington College
  { id: 1, name: 'Harrington College', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="8" width="3" height="24" fill="currentColor"/><rect x="0" y="18" width="18" height="3" fill="currentColor"/><rect x="15" y="8" width="3" height="24" fill="currentColor"/><text x="26" y="28" font-family="Georgia,serif" font-size="17" font-weight="700" fill="currentColor" letter-spacing="0.5">HARRINGTON</text><text x="26" y="38" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="3">COLLEGE</text></svg>` },
  // 2 — St Aldwyn's School
  { id: 2, name: "St Aldwyn's School", svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><polygon points="10,4 18,4 18,12 22,12 22,4 30,4 30,36 22,36 22,20 18,20 18,36 10,36" fill="currentColor"/><text x="38" y="24" font-family="Times New Roman,serif" font-size="15" font-weight="700" fill="currentColor" letter-spacing="1">ST ALDWYN'S</text><text x="38" y="36" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text></svg>` },
  // 3 — Westfield Academy
  { id: 3, name: 'Westfield Academy', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="18" y="25" font-family="Georgia,serif" font-size="13" font-weight="700" fill="currentColor" text-anchor="middle">W</text><text x="42" y="25" font-family="Georgia,serif" font-size="16" font-weight="700" fill="currentColor" letter-spacing="0.5">WESTFIELD</text><text x="42" y="36" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="3">ACADEMY</text></svg>` },
  // 4 — Dunmore International School
  { id: 4, name: 'Dunmore International', svg: `<svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="26" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><text x="15" y="26" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="currentColor" text-anchor="middle">D</text><text x="38" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="currentColor" letter-spacing="1">DUNMORE</text><text x="38" y="35" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="2">INTERNATIONAL</text></svg>` },
  // 5 — Cavendish Prep
  { id: 5, name: 'Cavendish Prep', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 L6 20 L20 34 L34 20 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="42" y="24" font-family="Palatino,Georgia,serif" font-size="16" font-weight="700" fill="currentColor" letter-spacing="0.5">CAVENDISH</text><text x="42" y="35" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" letter-spacing="3">PREPARATORY</text></svg>` },
  // 6 — Meridian Academy
  { id: 6, name: 'Meridian Academy', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="20" x2="30" y2="20" stroke="currentColor" stroke-width="2.5"/><line x1="18" y1="6" x2="18" y2="34" stroke="currentColor" stroke-width="2.5"/><circle cx="18" cy="20" r="4" fill="currentColor"/><text x="40" y="24" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="currentColor" letter-spacing="1">MERIDIAN</text><text x="40" y="35" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="3">ACADEMY</text></svg>` },
  // 7 — Thornbury School
  { id: 7, name: 'Thornbury School', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><path d="M18 4 L4 14 L4 36 L32 36 L32 14 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="18" y="26" font-family="Georgia,serif" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">TS</text><text x="42" y="22" font-family="Georgia,serif" font-size="14" font-weight="700" fill="currentColor">THORNBURY</text><text x="42" y="34" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text></svg>` },
  // 8 — Pemberton College
  { id: 8, name: 'Pemberton College', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="28" height="32" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="18" y="25" font-family="Times New Roman,serif" font-size="14" font-weight="700" fill="currentColor" text-anchor="middle">P</text><text x="42" y="22" font-family="Times New Roman,serif" font-size="15" font-weight="700" fill="currentColor">PEMBERTON</text><text x="42" y="34" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="3">COLLEGE</text></svg>` },
  // 9 — Ashdown Academy
  { id: 9, name: 'Ashdown Academy', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><path d="M18 4 L32 36 L4 36 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="40" y="24" font-family="Arial,sans-serif" font-size="15" font-weight="800" fill="currentColor" letter-spacing="0.5">ASHDOWN</text><text x="40" y="35" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="3">ACADEMY</text></svg>` },
  // 10 — Marlowe Independent School
  { id: 10, name: 'Marlowe School', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="28" height="32" fill="none" stroke="currentColor" stroke-width="2"/><rect x="8" y="8" width="20" height="24" fill="currentColor" opacity="0.15"/><text x="18" y="25" font-family="Georgia,serif" font-size="12" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="42" y="22" font-family="Georgia,serif" font-size="15" font-weight="700" fill="currentColor">MARLOWE</text><text x="42" y="34" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text></svg>` },
  // 11 — Clifton House School
  { id: 11, name: 'Clifton House', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><path d="M4 36 L4 14 L18 4 L32 14 L32 36" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="4" y1="36" x2="32" y2="36" stroke="currentColor" stroke-width="2.5"/><text x="42" y="22" font-family="Times New Roman,serif" font-size="14" font-weight="700" fill="currentColor">CLIFTON HOUSE</text><text x="42" y="34" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="3">SCHOOL</text></svg>` },
  // 12 — Foxgrove Academy
  { id: 12, name: 'Foxgrove Academy', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><path d="M6 20 Q18 4 30 20 Q18 36 6 20 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="18" cy="20" r="3" fill="currentColor"/><text x="42" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="currentColor" letter-spacing="1">FOXGROVE</text><text x="42" y="34" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="3">ACADEMY</text></svg>` },
  // 13 — Aldgate International
  { id: 13, name: 'Aldgate International', svg: `<svg viewBox="0 0 190 40" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="36" x2="32" y2="4" stroke="currentColor" stroke-width="2.5"/><line x1="4" y1="4" x2="32" y2="36" stroke="currentColor" stroke-width="2.5"/><rect x="12" y="14" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="42" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="800" fill="currentColor" letter-spacing="1">ALDGATE</text><text x="42" y="34" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="2">INTERNATIONAL</text></svg>` },
  // 14 — Beaumont College
  { id: 14, name: 'Beaumont College', svg: `<svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg"><path d="M4 8 L28 8 Q36 8 36 18 Q36 24 28 26 Q36 28 36 36 L4 36 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="46" y="22" font-family="Palatino,Georgia,serif" font-size="15" font-weight="700" fill="currentColor">BEAUMONT</text><text x="46" y="34" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" letter-spacing="3">COLLEGE</text></svg>` },
  // 15 — Kestrel Academy
  { id: 15, name: 'Kestrel Academy', svg: `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><path d="M4 20 L18 4 L22 16 L36 8 L24 22 L36 32 L22 26 L18 36 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="46" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="800" fill="currentColor" letter-spacing="1">KESTREL</text><text x="46" y="34" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="3">ACADEMY</text></svg>` },
]

export default function LogoSlider() {
  // Duplicate for seamless loop
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className="bg-[#050e24] border-t border-white/10 py-6 overflow-hidden relative">
      <style>{`
        @keyframes slide-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-track {
          display: flex;
          align-items: center;
          gap: 0;
          animation: slide-logos 60s linear infinite;
          width: max-content;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #050e24, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #050e24, transparent)' }} />
      <div className="logo-track">
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-10"
            style={{ color: 'rgba(148,163,184,0.4)', height: '40px', minWidth: '180px' }}
            title={logo.name}
            dangerouslySetInnerHTML={{ __html: logo.svg }}
          />
        ))}
      </div>
    </div>
  )
}
