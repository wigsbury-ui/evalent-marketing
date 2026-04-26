#!/usr/bin/env python3
"""
Final targeted patch for PATCH 7 — adds school reports feature item.
Dynamically detects the indentation used in the isEnterprise block
rather than assuming fixed whitespace.
"""

import sys, re

FILE = "src/app/pricing/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Find the exact isEnterprise block by detecting its indentation dynamically
match = re.search(
    r'(\s+)\{plan\.isEnterprise && \(\n(\s+)<li className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100">\n(\s+)Custom quote · Volume discounts available\n(\s+)</li>\n(\s+)\)\}\n(\s+)</ul>',
    content
)

if not match:
    print("❌ Could not find isEnterprise block with regex")
    print("Searching for raw string...")
    idx = content.find('Custom quote · Volume discounts available')
    print(repr(content[idx-200:idx+100]))
    sys.exit(1)

# Extract the exact indentation levels used
outer_indent = match.group(1)   # indent of {plan.isEnterprise && (
li_indent    = match.group(2)   # indent of <li
text_indent  = match.group(3)   # indent of text content
close_li     = match.group(4)   # indent of </li>
close_expr   = match.group(5)   # indent of )}
ul_indent    = match.group(6)   # indent of </ul>

print(f"Detected indentation — outer: {len(outer_indent)}sp, li: {len(li_indent)}sp, text: {len(text_indent)}sp")

OLD = match.group(0)

NEW = (
    f"{outer_indent}{{plan.hasSchoolReports ? (\n"
    f"{li_indent}<li className=\"flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2 py-1.5 -mx-2 mt-1\">\n"
    f"{text_indent}<svg className=\"w-4 h-4 text-indigo-500 flex-shrink-0\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"2\">\n"
    f"{text_indent}  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"/>\n"
    f"{text_indent}</svg>\n"
    f"{text_indent}Previous school reports\n"
    f"{close_li}</li>\n"
    f"{close_expr}) : (\n"
    f"{li_indent}<li className=\"flex items-center gap-2 text-sm text-gray-300\">\n"
    f"{text_indent}<svg className=\"w-4 h-4 text-gray-200 flex-shrink-0\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"2\">\n"
    f"{text_indent}  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M18 12H6\"/>\n"
    f"{text_indent}</svg>\n"
    f"{text_indent}Previous school reports\n"
    f"{close_li}</li>\n"
    f"{close_expr}))\n"
    f"{outer_indent}{{plan.isEnterprise && (\n"
    f"{li_indent}<li className=\"text-xs text-gray-400 mt-2 pt-2 border-t border-gray-100\">\n"
    f"{text_indent}Custom quote · Volume discounts available\n"
    f"{close_li}</li>\n"
    f"{close_expr}))\n"
    f"{ul_indent}</ul>"
)

content = content.replace(OLD, NEW, 1)

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# Verify
with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

checks = {
    "School reports indigo highlight": "text-indigo-700" in verify,
    "Greyed dash on Essentials":       "text-gray-300" in verify,
    "hasSchoolReports ternary":        "plan.hasSchoolReports ? (" in verify,
    "isEnterprise block still present":"plan.isEnterprise" in verify,
}

print("\n── Verification ──────────────────────────────────────────")
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ Patch 7 complete" if all_ok else "\n⚠️  Some checks failed")
