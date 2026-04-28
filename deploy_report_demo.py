#!/usr/bin/env python3
"""
Deploys ReportCardDemo to the evalent-marketing repo.

Steps:
  1. Copies 4 JPEG report images → public/report-demos/
  2. Copies ReportCardDemo.tsx → src/components/features/
  3. Patches page.tsx to import and insert the component
     after the "HOW IT WORKS" section and before "IN THE EVALENT REPORT"
"""
import os, shutil, sys

MARKETING = os.path.expanduser('~/Downloads/evalent-marketing')
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# ── 1. Copy images ─────────────────────────────────────────────────────────
img_src = os.path.join(SCRIPT_DIR, 'report-demos')
img_dst = os.path.join(MARKETING, 'public', 'report-demos')
os.makedirs(img_dst, exist_ok=True)

for name in ['barcelona', 'jeddah', 'hiroshima', 'shanghai']:
    src = os.path.join(img_src, f'{name}.jpg')
    dst = os.path.join(img_dst, f'{name}.jpg')
    shutil.copy2(src, dst)
    print(f"OK: image → public/report-demos/{name}.jpg  ({os.path.getsize(dst)//1024}KB)")

# ── 2. Copy component ──────────────────────────────────────────────────────
comp_src = os.path.join(SCRIPT_DIR, 'ReportCardDemo.tsx')
comp_dst = os.path.join(MARKETING, 'src', 'components', 'features', 'ReportCardDemo.tsx')
shutil.copy2(comp_src, comp_dst)
print(f"OK: component → src/components/features/ReportCardDemo.tsx")

# ── 3. Patch page.tsx ──────────────────────────────────────────────────────
page = os.path.join(MARKETING, 'src', 'app', 'features', 'report-card-evaluation', 'page.tsx')
with open(page) as f:
    content = f.read()

# Add import after existing imports
OLD_IMPORT = "import FaqAccordion from '@/components/features/FaqAccordion'"
NEW_IMPORT = (
    "import FaqAccordion from '@/components/features/FaqAccordion'\n"
    "import ReportCardDemo from '@/components/features/ReportCardDemo'"
)
if "ReportCardDemo" in content:
    print("SKIP: import already present")
elif OLD_IMPORT not in content:
    print("ERROR: import anchor not found")
    sys.exit(1)
else:
    content = content.replace(OLD_IMPORT, NEW_IMPORT, 1)
    print("OK: import added")

# Insert component between "HOW IT WORKS" section and "IN THE EVALENT REPORT" section
# The HOW IT WORKS section ends with the closing </section> before the next section
OLD_SECTION = "      {/* What appears in the report */}"
NEW_SECTION = "      <ReportCardDemo />\n      {/* What appears in the report */}"

if "<ReportCardDemo" in content:
    print("SKIP: component already inserted")
elif OLD_SECTION not in content:
    print("ERROR: section anchor not found")
    sys.exit(1)
else:
    content = content.replace(OLD_SECTION, NEW_SECTION, 1)
    print("OK: ReportCardDemo inserted in page")

with open(page, 'w') as f:
    f.write(content)

print("\nAll done. Now run:")
print("  cd ~/Downloads/evalent-marketing && git add -A && git commit -m 'feat: add ReportCardDemo interactive module to report-card-evaluation page' && git push")
