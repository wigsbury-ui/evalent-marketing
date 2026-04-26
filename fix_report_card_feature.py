#!/usr/bin/env python3
"""
Comprehensive patch for report card evaluation feature:
1. Copy new page into src/app/features/report-card-evaluation/page.tsx
2. Update Nav.tsx — add FileSearch import + new FEATURE_LINKS entry
3. Update all feature page badges from "X OF 7/8" to correct "X OF 9"
4. Update prev/next navigation links in reports + decisions pages
"""

import os, re, sys, shutil

# ── 1. Create new page ────────────────────────────────────────────────────────

NEW_PAGE_SRC = "page.tsx"  # copied here alongside this script
NEW_PAGE_DIR = "src/app/features/report-card-evaluation"
NEW_PAGE_DST = os.path.join(NEW_PAGE_DIR, "page.tsx")

os.makedirs(NEW_PAGE_DIR, exist_ok=True)
shutil.copy(NEW_PAGE_SRC, NEW_PAGE_DST)
print(f"✅ 1. Created {NEW_PAGE_DST}")

# ── 2. Update Nav.tsx ─────────────────────────────────────────────────────────

NAV = "src/components/Nav.tsx"
with open(NAV, "r", encoding="utf-8") as f:
    nav = f.read()

# 2a. Add FileSearch to lucide-react imports
OLD_IMPORT = "  BookOpen,\n  type LucideIcon,"
NEW_IMPORT = "  BookOpen,\n  FileSearch,\n  type LucideIcon,"

if OLD_IMPORT in nav:
    nav = nav.replace(OLD_IMPORT, NEW_IMPORT, 1)
    print("✅ 2a. Added FileSearch to Nav imports")
elif "FileSearch" in nav:
    print("⚠️  2a. FileSearch already in Nav imports")
else:
    print("❌ 2a. Could not find import insertion point in Nav.tsx")
    sys.exit(1)

# 2b. Add new entry to FEATURE_LINKS after reports entry
OLD_REPORTS_LINK = "  { href: '/features/reports', label: 'Report Generation', desc: 'From submission to PDF in minutes', icon: FileText },"
NEW_REPORTS_LINK = (
    "  { href: '/features/reports', label: 'Report Generation', desc: 'From submission to PDF in minutes', icon: FileText },\n"
    "  { href: '/features/report-card-evaluation', label: 'Report Card Evaluation', desc: 'Previous school reports — any language, never stored', icon: FileSearch },"
)

if OLD_REPORTS_LINK in nav:
    nav = nav.replace(OLD_REPORTS_LINK, NEW_REPORTS_LINK, 1)
    print("✅ 2b. Added Report Card Evaluation to FEATURE_LINKS")
elif "/features/report-card-evaluation" in nav:
    print("⚠️  2b. Report Card Evaluation already in FEATURE_LINKS")
else:
    print("❌ 2b. Could not find reports entry in FEATURE_LINKS")
    sys.exit(1)

with open(NAV, "w", encoding="utf-8") as f:
    f.write(nav)
print("✅ 2. Nav.tsx updated")

# ── 3. Update feature number badges + prev/next links ────────────────────────

# Map: file path → (correct feature number, correct "OF N", prev link, next link)
# prev/next: (text, href) or None to leave unchanged
FEATURE_PAGES = {
    "src/app/features/registration/page.tsx":          (1,  "PREV=None",                              "NEXT=None"),
    "src/app/features/dashboard/page.tsx":             (2,  "PREV=None",                              "NEXT=None"),
    "src/app/features/assessment/page.tsx":            (3,  "PREV=None",                              "NEXT=None"),
    "src/app/features/question-sets/page.tsx":         (4,  "PREV=None",                              "NEXT=None"),
    "src/app/features/reports/page.tsx":               (5,  "PREV=None",                              "NEXT=/features/report-card-evaluation|Report Card Evaluation"),
    "src/app/features/decisions/page.tsx":             (7,  "PREV=/features/report-card-evaluation|Report Card Evaluation", "NEXT=None"),
    "src/app/features/strategy/page.tsx":              (8,  "PREV=None",                              "NEXT=None"),
    "src/app/features/team/page.tsx":                  (9,  "PREV=None",                              "NEXT=None"),
}

for filepath, (num, prev_spec, next_spec) in FEATURE_PAGES.items():
    if not os.path.exists(filepath):
        print(f"⚠️  Skipping {filepath} — file not found")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        page = f.read()

    changed = False

    # Update badge: replace any FEATURE X OF Y with FEATURE num OF 9
    new_badge = f"FEATURE {num} OF 9"
    page, n = re.subn(r'FEATURE \d+ OF \d+', new_badge, page)
    if n > 0:
        print(f"  ✅ {os.path.basename(os.path.dirname(filepath))}: badge → {new_badge}")
        changed = True
    else:
        print(f"  ⚠️  {os.path.basename(os.path.dirname(filepath))}: no badge found")

    # Update next link if specified
    if next_spec != "NEXT=None":
        next_href, next_label = next_spec.replace("NEXT=", "").split("|")
        # Find and replace any existing "Next: X →" link pattern
        page, n2 = re.subn(
            r'href="/features/[^"]*"(\s+)className="text-brand font-semibold hover:underline text-sm"[^>]*>\s*Next:[^<]+→\s*</Link>',
            f'href="{next_href}"\\1className="text-brand font-semibold hover:underline text-sm">Next: {next_label} →</Link>',
            page
        )
        if n2 > 0:
            print(f"  ✅ {os.path.basename(os.path.dirname(filepath))}: next link → {next_label}")
            changed = True
        else:
            print(f"  ⚠️  {os.path.basename(os.path.dirname(filepath))}: next link not updated (pattern not found)")

    # Update prev link if specified
    if prev_spec != "PREV=None":
        prev_href, prev_label = prev_spec.replace("PREV=", "").split("|")
        page, n3 = re.subn(
            r'href="/features/[^"]*"(\s+)className="text-gray-400 hover:text-brand text-sm"[^>]*>←[^<]+</Link>',
            f'href="{prev_href}"\\1className="text-gray-400 hover:text-brand text-sm">← {prev_label}</Link>',
            page
        )
        if n3 > 0:
            print(f"  ✅ {os.path.basename(os.path.dirname(filepath))}: prev link → {prev_label}")
            changed = True
        else:
            print(f"  ⚠️  {os.path.basename(os.path.dirname(filepath))}: prev link not updated (pattern not found)")

    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(page)

print("\n✅ All feature pages updated")

# ── Verify ────────────────────────────────────────────────────────────────────

checks = {
    "New page exists":             os.path.exists(NEW_PAGE_DST),
    "FileSearch in Nav":           "FileSearch" in open(NAV).read(),
    "New nav entry exists":        "/features/report-card-evaluation" in open(NAV).read(),
    "Reports badge = 5 OF 9":      "FEATURE 5 OF 9" in open("src/app/features/reports/page.tsx").read(),
    "New page badge = 6 OF 9":     "FEATURE 6 OF 9" in open(NEW_PAGE_DST).read(),
}

print("\n── Verification ─────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ Complete" if all_ok else "\n⚠️  Some checks failed")
