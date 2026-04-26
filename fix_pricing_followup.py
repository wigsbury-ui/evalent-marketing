#!/usr/bin/env python3
"""
Follow-up patch for pricing page — applies remaining patches 5, 6, 7
that failed due to indentation mismatch. Patches 1-4 already applied locally.
"""

import sys

FILE = "src/app/pricing/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── PATCH 5: Make per-assessment badge conditional ────────────────────────────

OLD_BADGE = """              <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
                ≈ {plan.perAssessment} per assessment
              </span>"""

NEW_BADGE = """              {plan.perAssessment && (
                <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ≈ {plan.perAssessment} per assessment
                </span>
              )}"""

if OLD_BADGE not in content:
    print("❌ PATCH 5 not found — printing context around 'per assessment':")
    idx = content.find('per assessment')
    print(repr(content[idx-200:idx+50]))
    sys.exit(1)
content = content.replace(OLD_BADGE, NEW_BADGE, 1)
print("✅ PATCH 5 — per-assessment badge conditional")

# ── PATCH 6: Make assessments label different for trial ───────────────────────

OLD_ASSESS = """              <p className="font-bold text-navy mb-3 text-sm">
                Up to {plan.assessments} assessments/year
              </p>"""

NEW_ASSESS = """              <p className="font-bold text-navy mb-3 text-sm">
                {plan.isTrial ? `${plan.assessments} free assessment reports` : `Up to ${plan.assessments} assessments/year`}
              </p>"""

if OLD_ASSESS not in content:
    print("❌ PATCH 6 not found — printing context:")
    idx = content.find('assessments/year')
    print(repr(content[idx-100:idx+50]))
    sys.exit(1)
content = content.replace(OLD_ASSESS, NEW_ASSESS, 1)
print("✅ PATCH 6 — assessments label conditional")

# ── PATCH 7: Add school reports highlighted feature ───────────────────────────

OLD_FEATURES = """            {plan.isEnterprise && (
              <li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">
                Custom quote · Volume discounts available
              </li>
            )}
          </ul>"""

NEW_FEATURES = """            {plan.hasSchoolReports ? (
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

if OLD_FEATURES not in content:
    print("❌ PATCH 7 not found — printing context:")
    idx = content.find('Custom quote')
    print(repr(content[idx-100:idx+100]))
    sys.exit(1)
content = content.replace(OLD_FEATURES, NEW_FEATURES, 1)
print("✅ PATCH 7 — school reports highlighted feature added")

# ── Write ─────────────────────────────────────────────────────────────────────

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# ── Verify ────────────────────────────────────────────────────────────────────

with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

checks = {
    "Free Trial plan present":        "Free Trial" in verify,
    "4-column grid":                  "lg:grid-cols-4" in verify,
    "Per-assessment conditional":     "plan.perAssessment &&" in verify,
    "Trial assessments label":        "free assessment reports" in verify,
    "School reports indigo highlight":"text-indigo-700" in verify,
    "Greyed dash on Essentials":      "text-gray-300" in verify,
}

print("\n── Verification ──────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ All patches complete" if all_ok else "\n⚠️  Some checks failed")
