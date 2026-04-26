#!/usr/bin/env python3
"""
Fixed patch — Nav import is single-line. Applies remaining steps:
2a. Add FileSearch to Nav imports (correct single-line pattern)
2b. Add Report Card Evaluation to FEATURE_LINKS
3.  Update all feature page badges to X OF 9
4.  Update prev/next nav links in reports + decisions pages
"""

import os, re, sys, shutil

# ── 2. Update Nav.tsx ─────────────────────────────────────────────────────────

NAV = "src/components/Nav.tsx"
with open(NAV, "r", encoding="utf-8") as f:
    nav = f.read()

# 2a. Add FileSearch — imports are single-line
OLD_IMPORT = "BookOpen, type LucideIcon,"
NEW_IMPORT = "BookOpen, FileSearch, type LucideIcon,"

if OLD_IMPORT in nav:
    nav = nav.replace(OLD_IMPORT, NEW_IMPORT, 1)
    print("✅ 2a. Added FileSearch to Nav imports")
elif "FileSearch" in nav:
    print("⚠️  2a. FileSearch already in Nav imports")
else:
    print("❌ 2a. Could not find import point — printing context:")
    idx = nav.find("LucideIcon")
    print(repr(nav[idx-50:idx+50]))
    sys.exit(1)

# 2b. Add new entry to FEATURE_LINKS after reports entry — use regex for spacing
import re as _re
if "/features/report-card-evaluation" in nav:
    print("⚠️  2b. Already in FEATURE_LINKS")
else:
    nav, n2b = _re.subn(
        r"(\{ href: '/features/reports',[^\}]+\}),",
        r"\1,\n  { href: '/features/report-card-evaluation', label: 'Report Card Evaluation', desc: 'Previous school reports — any language, never stored', icon: FileSearch },",
        nav,
        count=1
    )
    if n2b > 0:
        print("✅ 2b. Added Report Card Evaluation to FEATURE_LINKS")
    else:
        print("❌ 2b. Regex also failed — printing context:")
        idx = nav.find("features/reports")
        print(repr(nav[idx-5:idx+150]))
        sys.exit(1)

with open(NAV, "w", encoding="utf-8") as f:
    f.write(nav)
print("✅ 2. Nav.tsx updated")

# ── 3 & 4. Update feature page badges + prev/next links ──────────────────────

FEATURE_PAGES = {
    "src/app/features/registration/page.tsx":  (1, "PREV=None", "NEXT=None"),
    "src/app/features/dashboard/page.tsx":     (2, "PREV=None", "NEXT=None"),
    "src/app/features/assessment/page.tsx":    (3, "PREV=None", "NEXT=None"),
    "src/app/features/question-sets/page.tsx": (4, "PREV=None", "NEXT=None"),
    "src/app/features/reports/page.tsx":       (5, "PREV=None", "NEXT=/features/report-card-evaluation|Report Card Evaluation"),
    "src/app/features/decisions/page.tsx":     (7, "PREV=/features/report-card-evaluation|Report Card Evaluation", "NEXT=None"),
    "src/app/features/strategy/page.tsx":      (8, "PREV=None", "NEXT=None"),
    "src/app/features/team/page.tsx":          (9, "PREV=None", "NEXT=None"),
}

for filepath, (num, prev_spec, next_spec) in FEATURE_PAGES.items():
    if not os.path.exists(filepath):
        print(f"⚠️  Skipping {filepath} — not found")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        page = f.read()

    changed = False
    name = os.path.basename(os.path.dirname(filepath))

    # Update badge
    new_badge = f"FEATURE {num} OF 9"
    page, n = re.subn(r'FEATURE \d+ OF \d+', new_badge, page)
    if n > 0:
        print(f"  ✅ {name}: badge → {new_badge}")
        changed = True
    else:
        print(f"  ⚠️  {name}: no badge found")

    # Update next link
    if next_spec != "NEXT=None":
        next_href, next_label = next_spec.replace("NEXT=", "").split("|")
        page, n2 = re.subn(
            r'href="/features/[^"]*"(\s+)className="text-brand font-semibold hover:underline text-sm"[^>]*>\s*Next:[^<]+→\s*</Link>',
            f'href="{next_href}"\\1className="text-brand font-semibold hover:underline text-sm">Next: {next_label} →</Link>',
            page
        )
        if n2 > 0:
            print(f"  ✅ {name}: next → {next_label}")
            changed = True
        else:
            print(f"  ⚠️  {name}: next link not found")

    # Update prev link
    if prev_spec != "PREV=None":
        prev_href, prev_label = prev_spec.replace("PREV=", "").split("|")
        page, n3 = re.subn(
            r'href="/features/[^"]*"(\s+)className="text-gray-400 hover:text-brand text-sm"[^>]*>←[^<]+</Link>',
            f'href="{prev_href}"\\1className="text-gray-400 hover:text-brand text-sm">← {prev_label}</Link>',
            page
        )
        if n3 > 0:
            print(f"  ✅ {name}: prev → {prev_label}")
            changed = True
        else:
            print(f"  ⚠️  {name}: prev link not found")

    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(page)

print("\n✅ All feature pages updated")

# ── Verify ────────────────────────────────────────────────────────────────────

checks = {
    "New page exists":          os.path.exists("src/app/features/report-card-evaluation/page.tsx"),
    "FileSearch in Nav":        "FileSearch" in open(NAV).read(),
    "New nav entry exists":     "/features/report-card-evaluation" in open(NAV).read(),
    "Reports badge = 5 OF 9":   "FEATURE 5 OF 9" in open("src/app/features/reports/page.tsx").read(),
    "New page badge = 6 OF 9":  "FEATURE 6 OF 9" in open("src/app/features/report-card-evaluation/page.tsx").read(),
}

print("\n── Verification ─────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ Complete" if all_ok else "\n⚠️  Some checks failed")
