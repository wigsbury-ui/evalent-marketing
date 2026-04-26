#!/usr/bin/env python3
"""
All pricing page tweaks in one script:
1. Shorten Free Trial tagline
2. Change school reports highlight from indigo to green
3. Rename feature: "Previous school reports" → "Previous school report evaluation"
4. Remove h-full from trial card so it sits at natural height
"""

import sys

FILE = "src/app/pricing/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── 1. Shorten Free Trial tagline ────────────────────────────────────────────

OLD_1 = "tagline: 'Try the full platform with 10 real assessment reports. No card required.',"
NEW_1 = "tagline: '10 free reports. Full platform access. No card needed.',"

if OLD_1 in content:
    content = content.replace(OLD_1, NEW_1, 1)
    print("✅ 1. Trial tagline shortened")
else:
    print("⚠️  1. Tagline not found — may already be updated")

# ── 2. Change highlight colour: indigo → green ───────────────────────────────

OLD_2a = 'className="flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2 py-1.5 -mx-2 mt-1"'
NEW_2a = 'className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 rounded-lg px-2 py-1.5 -mx-2 mt-1"'

if OLD_2a in content:
    content = content.replace(OLD_2a, NEW_2a, 1)
    print("✅ 2a. Highlight colour: indigo → green")
else:
    print("⚠️  2a. Indigo li colour not found — may already be updated")

OLD_2b = 'className="w-4 h-4 text-indigo-500 flex-shrink-0"'
NEW_2b = 'className="w-4 h-4 text-green-500 flex-shrink-0"'

if OLD_2b in content:
    content = content.replace(OLD_2b, NEW_2b, 1)
    print("✅ 2b. SVG icon colour: indigo → green")
else:
    print("⚠️  2b. Indigo SVG colour not found — may already be updated")

# ── 3. Rename feature text ────────────────────────────────────────────────────

count_3 = content.count('Previous school reports')
if count_3 > 0:
    content = content.replace('Previous school reports', 'Previous school report evaluation')
    print(f"✅ 3. Feature renamed ({count_3} instances)")
else:
    print("⚠️  3. Feature text not found — may already be updated")

# ── 4. Shorten Enterprise tagline ────────────────────────────────────────────

OLD_ENT = "tagline: 'For larger schools, multi-campus groups, and networks with high volumes or complex requirements.',"
NEW_ENT = "tagline: 'For larger and multi-campus schools.',"

if OLD_ENT in content:
    content = content.replace(OLD_ENT, NEW_ENT, 1)
    print("✅ 4. Enterprise tagline shortened")
else:
    print("⚠️  4. Enterprise tagline not found — may already be updated")

# ── 5. Remove h-full from trial card ─────────────────────────────────────────

OLD_5 = "className={`bg-white rounded-2xl p-6 flex flex-col h-full ${"
NEW_5 = "className={`bg-white rounded-2xl p-6 flex flex-col ${plan.isTrial ? '' : 'h-full'} ${"

if OLD_5 in content:
    content = content.replace(OLD_5, NEW_5, 1)
    print("✅ 5. Trial card h-full removed")
else:
    print("⚠️  5. h-full pattern not found — may already be updated")

# ── Write ─────────────────────────────────────────────────────────────────────

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# ── Verify ────────────────────────────────────────────────────────────────────

with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

checks = {
    "Shortened trial tagline":      "10 free reports. Full platform access." in verify,
    "Shortened enterprise tagline": "For larger and multi-campus schools." in verify,
    "Green highlight":              "text-green-700 bg-green-50" in verify,
    "Green SVG":                    "text-green-500 flex-shrink-0" in verify,
    "Feature renamed":              "Previous school report evaluation" in verify,
    "No old indigo":                "text-indigo-700" not in verify,
    "Trial card height fix":        "plan.isTrial ? '' : 'h-full'" in verify,
}

print("\n── Verification ─────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ All tweaks applied" if all_ok else "\n⚠️  Some checks failed")
