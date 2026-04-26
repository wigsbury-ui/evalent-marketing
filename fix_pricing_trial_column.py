#!/usr/bin/env python3
"""
Patches src/app/pricing/page.tsx in evalent-marketing:
1. Adds Free Trial as first plan column
2. Adds hasSchoolReports flag — highlighted on Trial/Professional/Enterprise, greyed on Essentials
3. Widens grid to 4 columns
4. Reduces card padding from p-8 to p-6 to fit 4 columns comfortably
5. Handles Free Trial card specifics (no per-assessment badge, no billing text)
"""

import sys

FILE = "src/app/pricing/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── PATCH 1: Replace plans array ──────────────────────────────────────────────

OLD_PLANS = """const plans = [
  {
    name: 'Essentials',
    usd: '$2,950',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$39',
    assessments: 75,
    tagline: 'For schools assessing up to 75 candidates per year, typically a single entry point or smaller school.',
    popular: false,
    cta: 'Start free trial',
    isEnterprise: false,
  },
  {
    name: 'Professional',
    usd: '$5,450',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$36',
    assessments: 150,
    tagline: 'Most popular for mid-size international schools with multiple entry grades.',
    popular: true,
    cta: 'Start free trial',
    isEnterprise: false,
  },
  {
    name: 'Enterprise',
    usd: '$9,450',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$18',
    assessments: 500,
    tagline: 'For larger schools, multi-campus groups, and networks with high volumes or complex requirements.',
    popular: false,
    cta: 'Talk to us',
    isEnterprise: true,
  },
]"""

NEW_PLANS = """const plans = [
  {
    name: 'Free Trial',
    usd: '$0',
    period: '',
    subtext: 'No credit card required',
    perAssessment: null,
    assessments: 10,
    tagline: 'Try the full platform with 10 real assessment reports. No card required.',
    popular: false,
    cta: 'Start free trial',
    isEnterprise: false,
    isTrial: true,
    hasSchoolReports: true,
  },
  {
    name: 'Essentials',
    usd: '$2,950',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$39',
    assessments: 75,
    tagline: 'For schools assessing up to 75 candidates per year, typically a single entry point or smaller school.',
    popular: false,
    cta: 'Start free trial',
    isEnterprise: false,
    isTrial: false,
    hasSchoolReports: false,
  },
  {
    name: 'Professional',
    usd: '$5,450',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$36',
    assessments: 150,
    tagline: 'Most popular for mid-size international schools with multiple entry grades.',
    popular: true,
    cta: 'Start free trial',
    isEnterprise: false,
    isTrial: false,
    hasSchoolReports: true,
  },
  {
    name: 'Enterprise',
    usd: '$9,450',
    period: '/yr',
    subtext: 'Billed annually',
    perAssessment: '$18',
    assessments: 500,
    tagline: 'For larger schools, multi-campus groups, and networks with high volumes or complex requirements.',
    popular: false,
    cta: 'Talk to us',
    isEnterprise: true,
    isTrial: false,
    hasSchoolReports: true,
  },
]"""

if OLD_PLANS not in content:
    print("❌ PATCH 1 (plans array) not found")
    sys.exit(1)
content = content.replace(OLD_PLANS, NEW_PLANS, 1)
print("✅ PATCH 1 — plans array updated")

# ── PATCH 2: Widen grid container ─────────────────────────────────────────────

OLD_GRID = '<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">'
NEW_GRID = '<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">'

if OLD_GRID not in content:
    print("❌ PATCH 2 (grid container) not found")
    sys.exit(1)
content = content.replace(OLD_GRID, NEW_GRID, 1)
print("✅ PATCH 2 — grid widened to 4 columns")

# ── PATCH 3: Reduce card padding p-8 → p-6 ───────────────────────────────────

OLD_CARD = """        className={`bg-white rounded-2xl p-8 flex flex-col h-full ${"""
NEW_CARD = """        className={`bg-white rounded-2xl p-6 flex flex-col h-full ${"""

if OLD_CARD not in content:
    print("❌ PATCH 3 (card padding) not found")
    sys.exit(1)
content = content.replace(OLD_CARD, NEW_CARD, 1)
print("✅ PATCH 3 — card padding reduced to p-6")

# ── PATCH 4: Make price subtext conditional (no "Billed annually" for trial) ──

OLD_SUBTEXT = '          <p className="text-sm text-gray-400 mb-3">Billed annually · USD only</p>'
NEW_SUBTEXT = '          {!plan.isTrial && <p className="text-sm text-gray-400 mb-3">Billed annually · USD only</p>}'

if OLD_SUBTEXT not in content:
    print("❌ PATCH 4 (subtext) not found")
    sys.exit(1)
content = content.replace(OLD_SUBTEXT, NEW_SUBTEXT, 1)
print("✅ PATCH 4 — billing subtext made conditional")

# ── PATCH 5: Make per-assessment badge conditional (hide for trial) ────────────

OLD_BADGE = """          <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
            ≈ {plan.perAssessment} per assessment
          </span>"""
NEW_BADGE = """          {plan.perAssessment && (
            <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
              ≈ {plan.perAssessment} per assessment
            </span>
          )}"""

if OLD_BADGE not in content:
    print("❌ PATCH 5 (per-assessment badge) not found")
    sys.exit(1)
content = content.replace(OLD_BADGE, NEW_BADGE, 1)
print("✅ PATCH 5 — per-assessment badge conditional")

# ── PATCH 6: Make assessments label different for trial ───────────────────────

OLD_ASSESS = '          <p className="font-bold text-navy mb-3 text-sm">\n            Up to {plan.assessments} assessments/year\n          </p>'
NEW_ASSESS = """          <p className="font-bold text-navy mb-3 text-sm">
            {plan.isTrial ? `${plan.assessments} free assessment reports` : `Up to ${plan.assessments} assessments/year`}
          </p>"""

if OLD_ASSESS not in content:
    print("❌ PATCH 6 (assessments label) not found — trying alternate spacing...")
    OLD_ASSESS2 = "          <p className=\"font-bold text-navy mb-3 text-sm\">\n            Up to {plan.assessments} assessments/year\n          </p>"
    if OLD_ASSESS2 in content:
        content = content.replace(OLD_ASSESS2, NEW_ASSESS, 1)
        print("✅ PATCH 6 — assessments label conditional (alt)")
    else:
        print("❌ PATCH 6 alternate also not found — skipping (non-critical)")
else:
    content = content.replace(OLD_ASSESS, NEW_ASSESS, 1)
    print("✅ PATCH 6 — assessments label conditional")

# ── PATCH 7: Add school reports highlighted feature to feature list ────────────

OLD_FEATURES_LIST = """          <ul className="space-y-2 mb-6 flex-1">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d="M5 10l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f}
              </li>
            ))}
            {plan.isEnterprise && (
              <li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">
                Custom quote · Volume discounts available
              </li>
            )}
          </ul>"""

NEW_FEATURES_LIST = """          <ul className="space-y-2 mb-6 flex-1">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d="M5 10l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f}
              </li>
            ))}
            {plan.hasSchoolReports ? (
              <li className="flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2 py-1.5 -mx-2 mt-1">
                <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Previous school reports
              </li>
            ) : (
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-gray-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/>
                </svg>
                Previous school reports
              </li>
            )}
            {plan.isEnterprise && (
              <li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">
                Custom quote · Volume discounts available
              </li>
            )}
          </ul>"""

if OLD_FEATURES_LIST not in content:
    print("❌ PATCH 7 (features list) not found")
    sys.exit(1)
content = content.replace(OLD_FEATURES_LIST, NEW_FEATURES_LIST, 1)
print("✅ PATCH 7 — school reports highlighted feature added")

# ── Write file ────────────────────────────────────────────────────────────────

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# ── Verify ────────────────────────────────────────────────────────────────────

with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

checks = {
    "Free Trial plan present": "Free Trial" in verify,
    "hasSchoolReports field present": "hasSchoolReports" in verify,
    "4-column grid": "lg:grid-cols-4" in verify,
    "School reports indigo highlight": "text-indigo-700" in verify,
    "Greyed out on Essentials": "text-gray-300" in verify,
    "Per-assessment conditional": "plan.perAssessment &&" in verify,
    "Trial assessments label": "free assessment reports" in verify,
}

print("\n── Verification ──────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result:
        all_ok = False
    print(f"  {icon} {label}")

if all_ok:
    print("\n✅ All patches applied and verified")
else:
    print("\n⚠️  Some checks failed — review file manually")
