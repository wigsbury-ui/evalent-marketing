'use client'

const LOGOS = [
  { id: 1, name: 'Harrington College', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M34 4 L54 4 L60 10 L60 46 L54 52 L34 52 L28 46 L28 10 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M34 4 L44 4 L44 52 L34 52 Z" fill="currentColor" opacity="0.08"/>
    <path d="M36 20 L52 20 L52 36 L36 36 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="44" y="31" font-family="Georgia,serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">HC</text>
    <text x="44" y="62" font-family="Georgia,serif" font-size="7" fill="currentColor" text-anchor="middle" letter-spacing="1.5">HARRINGTON</text>
    <text x="80" y="22" font-family="Georgia,serif" font-size="13" font-weight="700" fill="currentColor">HARRINGTON</text>
    <text x="80" y="36" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2">COLLEGE</text>
    <line x1="80" y1="40" x2="118" y2="40" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="80" y="49" font-family="Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">EST. MDCCCXLII</text>
  </svg>` },
  { id: 2, name: "St Aldwyn's School", svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M22 8 L38 2 L54 8 L54 34 Q54 48 38 54 Q22 48 22 34 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M30 24 L38 16 L46 24 L46 38 L38 44 L30 38 Z" fill="currentColor" opacity="0.1"/>
    <line x1="38" y1="2" x2="38" y2="54" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <line x1="22" y1="28" x2="54" y2="28" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <text x="64" y="22" font-family="Times New Roman,serif" font-size="13" font-weight="700" fill="currentColor">ST ALDWYN'S</text>
    <text x="64" y="35" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="2">SCHOOL</text>
    <line x1="64" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="64" y="48" font-family="Times New Roman,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">SCIENTIA ET VIRTUS</text>
  </svg>` },
  { id: 3, name: 'Westfield Academy', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <circle cx="32" cy="28" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="32" cy="28" r="16" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M22 18 L32 8 L42 18 L42 38 L32 48 L22 38 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="32" y="33" font-family="Georgia,serif" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">W</text>
    <text x="64" y="22" font-family="Georgia,serif" font-size="13" font-weight="700" fill="currentColor">WESTFIELD</text>
    <text x="64" y="35" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2">ACADEMY</text>
    <line x1="64" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="64" y="48" font-family="Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">LUX ET VERITAS</text>
  </svg>` },
  { id: 4, name: 'Dunmore International', svg: `<svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg" height="56" width="130">
    <path d="M14 6 L50 6 L50 50 L14 50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M14 6 L32 6 L32 50 L14 50 Z" fill="currentColor" opacity="0.08"/>
    <path d="M32 6 L50 28 L32 50" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <circle cx="32" cy="28" r="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="32" y="32" font-family="Arial,sans-serif" font-size="8" font-weight="900" fill="currentColor" text-anchor="middle">DI</text>
    <text x="62" y="20" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="currentColor" letter-spacing="0.5">DUNMORE</text>
    <text x="62" y="32" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="1.5">INTERNATIONAL</text>
    <line x1="62" y1="37" x2="128" y2="37" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="46" font-family="Arial,sans-serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">EST. MCMXII</text>
  </svg>` },
  { id: 5, name: 'Cavendish Prep', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M32 4 L52 14 L52 38 Q52 50 32 54 Q12 50 12 38 L12 14 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M22 22 L32 14 L42 22 L42 40 L32 46 L22 40 Z" fill="currentColor" opacity="0.08"/>
    <path d="M22 22 L42 22" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M32 14 L32 46" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <circle cx="32" cy="32" r="5" fill="currentColor" opacity="0.3"/>
    <text x="62" y="22" font-family="Palatino,Georgia,serif" font-size="14" font-weight="700" fill="currentColor">CAVENDISH</text>
    <text x="62" y="35" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2">PREPARATORY</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Palatino,Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">FORTES FORTUNA JUVAT</text>
  </svg>` },
  { id: 6, name: 'Meridian Academy', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M20 6 L44 6 L52 28 L44 50 L20 50 L12 28 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M20 6 L44 6 L44 50 L20 50 Z" fill="none" stroke="currentColor" stroke-width="0" opacity="0"/>
    <path d="M26 18 L38 18 L42 28 L38 38 L26 38 L22 28 Z" fill="currentColor" opacity="0.1"/>
    <text x="32" y="33" font-family="Georgia,serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">MA</text>
    <text x="62" y="22" font-family="Georgia,serif" font-size="13" font-weight="700" fill="currentColor">MERIDIAN</text>
    <text x="62" y="35" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2">ACADEMY</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">SEMPER SURSUM</text>
  </svg>` },
  { id: 7, name: 'Thornbury School', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M14 8 L50 8 L50 40 Q50 52 32 54 Q14 52 14 40 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M14 8 L50 8 L50 28 L14 28 Z" fill="currentColor" opacity="0.06"/>
    <path d="M20 16 L44 16" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M20 24 L44 24" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <circle cx="32" cy="42" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="32" y="46" font-family="Georgia,serif" font-size="7" fill="currentColor" text-anchor="middle" font-weight="700">TS</text>
    <text x="62" y="22" font-family="Times New Roman,serif" font-size="14" font-weight="700" fill="currentColor">THORNBURY</text>
    <text x="62" y="35" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Times New Roman,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">VERITAS VOS LIBERABIT</text>
  </svg>` },
  { id: 8, name: 'Pemberton College', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M16 6 L48 6 Q56 6 56 18 Q56 28 44 30 Q56 32 56 44 Q56 52 48 52 L16 52 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M16 6 L36 6 L36 52 L16 52 Z" fill="currentColor" opacity="0.06"/>
    <path d="M16 28 L52 28" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <text x="26" y="23" font-family="Times New Roman,serif" font-size="9" fill="currentColor" text-anchor="middle" opacity="0.7">P</text>
    <text x="26" y="44" font-family="Times New Roman,serif" font-size="9" fill="currentColor" text-anchor="middle" opacity="0.7">C</text>
    <text x="64" y="22" font-family="Times New Roman,serif" font-size="14" font-weight="700" fill="currentColor">PEMBERTON</text>
    <text x="64" y="35" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="2.5">COLLEGE</text>
    <line x1="64" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="64" y="48" font-family="Times New Roman,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">HONOR ET LABOR</text>
  </svg>` },
  { id: 9, name: 'Ashdown Academy', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M32 4 L54 50 L10 50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M32 4 L54 50 L32 50 Z" fill="currentColor" opacity="0.07"/>
    <path d="M22 34 L42 34" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
    <circle cx="32" cy="34" r="4" fill="currentColor" opacity="0.2"/>
    <text x="62" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="800" fill="currentColor" letter-spacing="0.5">ASHDOWN</text>
    <text x="62" y="35" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="2.5">ACADEMY</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Arial,sans-serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">EXCELSIOR</text>
  </svg>` },
  { id: 10, name: 'Marlowe School', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M14 6 L50 6 L50 50 L14 50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M14 6 L32 6 L32 50 L14 50 Z" fill="currentColor" opacity="0.06"/>
    <path d="M32 6 L50 6 L32 28 L50 50" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <path d="M20 20 L26 20 L26 36 L20 36 Z" fill="currentColor" opacity="0.2"/>
    <text x="62" y="22" font-family="Georgia,serif" font-size="14" font-weight="700" fill="currentColor">MARLOWE</text>
    <text x="62" y="35" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">SAPERE AUDE</text>
  </svg>` },
  { id: 11, name: 'Clifton House School', svg: `<svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg" height="56" width="130">
    <path d="M14 50 L14 22 L32 6 L50 22 L50 50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M14 50 L50 50 L50 22 L32 6 Z" fill="currentColor" opacity="0.05"/>
    <rect x="22" y="30" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <line x1="32" y1="6" x2="32" y2="50" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    <path d="M26 30 L32 24 L38 30" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="62" y="20" font-family="Times New Roman,serif" font-size="13" font-weight="700" fill="currentColor">CLIFTON HOUSE</text>
    <text x="62" y="33" font-family="Times New Roman,serif" font-size="8" fill="currentColor" letter-spacing="2.5">SCHOOL</text>
    <line x1="62" y1="37" x2="128" y2="37" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="46" font-family="Times New Roman,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">LUCE MAGISTRA</text>
  </svg>` },
  { id: 12, name: 'Foxgrove Academy', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M12 28 Q12 6 32 6 Q52 6 52 28 Q52 50 32 50 Q12 50 12 28 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M18 28 Q18 12 32 12 Q46 12 46 28 Q46 44 32 44 Q18 44 18 28 Z" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M26 20 L38 20 L38 36 L26 36 Z" fill="currentColor" opacity="0.1"/>
    <text x="32" y="33" font-family="Georgia,serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">F</text>
    <text x="62" y="22" font-family="Georgia,serif" font-size="13" font-weight="700" fill="currentColor">FOXGROVE</text>
    <text x="62" y="35" font-family="Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2.5">ACADEMY</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">PER ARDUA</text>
  </svg>` },
  { id: 13, name: 'Aldgate International', svg: `<svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg" height="56" width="130">
    <path d="M32 4 L52 50 L12 50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M22 34 L42 34" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <path d="M32 4 L52 50 L32 50 Z" fill="currentColor" opacity="0.06"/>
    <circle cx="32" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="64" y="20" font-family="Arial,sans-serif" font-size="13" font-weight="800" fill="currentColor" letter-spacing="0.5">ALDGATE</text>
    <text x="64" y="32" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="1.5">INTERNATIONAL</text>
    <line x1="64" y1="36" x2="128" y2="36" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="64" y="45" font-family="Arial,sans-serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">UNITY · KNOWLEDGE · SERVICE</text>
  </svg>` },
  { id: 14, name: 'Beaumont College', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M14 8 L36 8 Q50 8 50 22 Q50 30 40 32 Q52 34 52 46 Q52 52 36 52 L14 52 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <line x1="14" y1="30" x2="50" y2="30" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <path d="M14 8 L28 8 L28 52 L14 52 Z" fill="currentColor" opacity="0.07"/>
    <text x="20" y="24" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" text-anchor="middle" opacity="0.6">B</text>
    <text x="20" y="45" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" text-anchor="middle" opacity="0.6">C</text>
    <text x="62" y="22" font-family="Palatino,Georgia,serif" font-size="14" font-weight="700" fill="currentColor">BEAUMONT</text>
    <text x="62" y="35" font-family="Palatino,Georgia,serif" font-size="8" fill="currentColor" letter-spacing="2.5">COLLEGE</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Palatino,Georgia,serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">PULCHRUM ET VERUM</text>
  </svg>` },
  { id: 15, name: 'Kestrel Academy', svg: `<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" height="56" width="120">
    <path d="M20 6 L44 6 L52 16 L52 40 L44 50 L20 50 L12 40 L12 16 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M20 6 L44 6 L44 50 L20 50 Z" fill="currentColor" opacity="0.05"/>
    <path d="M20 28 L44 28" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <path d="M26 16 L38 16 L38 28 L26 28 Z" fill="currentColor" opacity="0.1"/>
    <path d="M26 28 L38 40 M38 28 L26 40" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <text x="62" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="800" fill="currentColor" letter-spacing="0.5">KESTREL</text>
    <text x="62" y="35" font-family="Arial,sans-serif" font-size="8" fill="currentColor" letter-spacing="2.5">ACADEMY</text>
    <line x1="62" y1="39" x2="118" y2="39" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <text x="62" y="48" font-family="Arial,sans-serif" font-size="6" fill="currentColor" letter-spacing="1" opacity="0.7">AD ASTRA PER ASPERA</text>
  </svg>` },
]

export default function LogoSlider() {
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className="bg-[#050e24] border-t border-white/10 py-5 overflow-hidden relative">
      <style>{`
        @keyframes slide-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-track {
          display: flex;
          align-items: center;
          animation: slide-logos 120s linear infinite;
          width: max-content;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #050e24, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #050e24, transparent)' }} />
      <div className="logo-track">
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-8"
            style={{ color: 'rgba(148,163,184,0.55)', height: '56px' }}
            title={logo.name}
            dangerouslySetInnerHTML={{ __html: logo.svg }}
          />
        ))}
      </div>
    </div>
  )
}
