#!/usr/bin/env python3
"""
Complete pricing page fix. Applies all 7 patches against the current
file state (original plans array + broken patch-7 syntax from prior run).
Uses string concatenation throughout — no f-strings with } to avoid escaping issues.
"""

import re, sys

FILE = "src/app/pricing/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── PATCH 1: Replace plans array ─────────────────────────────────────────────

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
    print("❌ PATCH 1 (plans array) not found — already patched or changed")
else:
    content = content.replace(OLD_PLANS, NEW_PLANS, 1)
    print("✅ PATCH 1 — plans array updated (4 plans)")

# ── PATCH 2: Widen grid ───────────────────────────────────────────────────────

OLD_GRID = '<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">'
NEW_GRID = '<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">'

if OLD_GRID in content:
    content = content.replace(OLD_GRID, NEW_GRID, 1)
    print("✅ PATCH 2 — grid widened to 4 columns")
else:
    print("⚠️  PATCH 2 grid already patched or not found — skipping")

# ── PATCH 3: Card padding p-8 → p-6 ──────────────────────────────────────────

OLD_PAD = 'className={`bg-white rounded-2xl p-8 flex flex-col h-full ${'
NEW_PAD = 'className={`bg-white rounded-2xl p-6 flex flex-col h-full ${'

if OLD_PAD in content:
    content = content.replace(OLD_PAD, NEW_PAD, 1)
    print("✅ PATCH 3 — card padding p-8 → p-6")
else:
    print("⚠️  PATCH 3 already patched — skipping")

# ── PATCH 4: Billing subtext conditional ─────────────────────────────────────

OLD_SUB = '<p className="text-sm text-gray-400 mb-3">Billed annually · USD only</p>'
NEW_SUB = '{!plan.isTrial && <p className="text-sm text-gray-400 mb-3">Billed annually · USD only</p>}'

if OLD_SUB in content:
    content = content.replace(OLD_SUB, NEW_SUB, 1)
    print("✅ PATCH 4 — billing subtext conditional")
else:
    print("⚠️  PATCH 4 already patched — skipping")

# ── PATCH 5: Per-assessment badge conditional ─────────────────────────────────
# Match the badge regardless of indentation

badge_pattern = re.compile(
    r'(\s+)<span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">\s*'
    r'≈ \{plan\.perAssessment\} per assessment\s*'
    r'</span>'
)

m5 = badge_pattern.search(content)
if m5:
    indent5 = re.match(r'(\s+)', m5.group(0)).group(1)
    sp = indent5.lstrip('\n')  # spaces only
    new_badge = (
        '\n' + sp + '{plan.perAssessment && (\n' +
        sp + '  <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">\n' +
        sp + '    \u2248 {plan.perAssessment} per assessment\n' +
        sp + '  </span>\n' +
        sp + ')}'
    )
    content = badge_pattern.sub(new_badge, content, count=1)
    print("✅ PATCH 5 — per-assessment badge conditional")
else:
    print("⚠️  PATCH 5 badge already patched — skipping")

# ── PATCH 6: Assessments label conditional ────────────────────────────────────

assess_pattern = re.compile(
    r'(\s+)<p className="font-bold text-navy mb-3 text-sm">\s*'
    r'Up to \{plan\.assessments\} assessments/year\s*'
    r'</p>'
)

m6 = assess_pattern.search(content)
if m6:
    indent6 = re.match(r'(\s+)', m6.group(0)).group(1)
    sp6 = indent6.lstrip('\n')
    new_assess = (
        '\n' + sp6 + '<p className="font-bold text-navy mb-3 text-sm">\n' +
        sp6 + "  {plan.isTrial ? `${plan.assessments} free assessment reports` : `Up to ${plan.assessments} assessments/year`}\n" +
        sp6 + '</p>'
    )
    content = assess_pattern.sub(new_assess, content, count=1)
    print("✅ PATCH 6 — assessments label conditional")
else:
    print("⚠️  PATCH 6 already patched — skipping")

# ── PATCH 7: Replace entire <ul> block with correct JSX ──────────────────────
# This fixes the broken )) syntax AND adds school reports feature correctly.
# Uses string concatenation only — no f-strings with } to avoid escaping.

ul_pattern = re.compile(
    r'(\s+)<ul className="space-y-2 mb-6 flex-1">.*?</ul>',
    re.DOTALL
)

m7 = ul_pattern.search(content)
if not m7:
    print("❌ PATCH 7 — cannot find <ul> block")
    sys.exit(1)

# Detect indentation from the <ul> opening
ul_indent_full = m7.group(1)   # e.g. '\n            '
sp0 = ul_indent_full.lstrip('\n')  # e.g. '            ' — ul level
sp1 = sp0 + '  '               # items level
sp2 = sp1 + '  '               # li content level
sp3 = sp2 + '  '               # svg content level

correct_ul = (
    '\n' + sp0 + '<ul className="space-y-2 mb-6 flex-1">\n' +
    sp1 + '{FEATURES.map((f) => (\n' +
    sp2 + '<li key={f} className="flex items-center gap-2 text-sm text-gray-700">\n' +
    sp3 + '<svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 20 20">\n' +
    sp3 + '  <path d="M5 10l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
    sp3 + '</svg>\n' +
    sp3 + '{f}\n' +
    sp2 + '</li>\n' +
    sp1 + '))}\n' +
    sp1 + '{plan.hasSchoolReports ? (\n' +
    sp2 + '<li className="flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2 py-1.5 -mx-2 mt-1">\n' +
    sp3 + '<svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">\n' +
    sp3 + '  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>\n' +
    sp3 + '</svg>\n' +
    sp3 + 'Previous school reports\n' +
    sp2 + '</li>\n' +
    sp1 + ') : (\n' +
    sp2 + '<li className="flex items-center gap-2 text-sm text-gray-300">\n' +
    sp3 + '<svg className="w-4 h-4 text-gray-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">\n' +
    sp3 + '  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/>\n' +
    sp3 + '</svg>\n' +
    sp3 + 'Previous school reports\n' +
    sp2 + '</li>\n' +
    sp1 + ')}\n' +
    sp1 + '{plan.isEnterprise && (\n' +
    sp2 + '<li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">\n' +
    sp3 + 'Custom quote \u00b7 Volume discounts available\n' +
    sp2 + '</li>\n' +
    sp1 + ')}\n' +
    sp0 + '</ul>'
)

content = ul_pattern.sub(correct_ul, content, count=1)
print("✅ PATCH 7 — <ul> block replaced with correct JSX (no broken ))")

# ── Write ─────────────────────────────────────────────────────────────────────

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# ── Verify ────────────────────────────────────────────────────────────────────

with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

checks = {
    "Free Trial plan":             "Free Trial" in verify,
    "4-column grid":               "lg:grid-cols-4" in verify,
    "Trial assessments label":     "free assessment reports" in verify,
    "School reports indigo":       "text-indigo-700" in verify,
    "Greyed dash on Essentials":   "text-gray-300" in verify,
    "No broken ))":                "))" not in verify.split("FEATURES")[1].split("</ul>")[0],
    "Correct )} closing":          ")}" in verify,
    "hasSchoolReports ternary":    "plan.hasSchoolReports ? (" in verify,
}

print("\n── Verification ─────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ All patches complete" if all_ok else "\n⚠️  Some checks failed — review before pushing")
