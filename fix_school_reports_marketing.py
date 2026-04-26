#!/usr/bin/env python3
"""
Patches marketing chatbot (evalent-marketing):
src/app/api/chat/route.ts
— Add Previous School Reports to report description + Q&A
"""

import sys

FILE = "src/app/api/chat/route.ts"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── PATCH 1: Add feature note to the == THE REPORT == section ──
# Insert after "Reports are professional enough to share with parents when explaining decisions."

OLD_1 = "Reports are professional enough to share with parents when explaining decisions."

NEW_1 = """Reports are professional enough to share with parents when explaining decisions.

PREVIOUS SCHOOL REPORTS APPENDIX (Professional and Enterprise plans):
Schools can upload up to 3 previous school report PDFs when registering a student. Evalent analyses them using AI and adds a two-page appendix to the report. Reports in any language are supported (Arabic, French, Mandarin, Spanish, etc.) — analysis is always returned in English. Files are never stored. The appendix covers: holistic academic summary and trajectory, subject-by-subject breakdown (English, Mathematics, Other Subjects), teacher observations, and a contextual note for the admissions panel. The cover page executive summary also cross-references the school reports with the Evalent assessment score, noting consistency or discrepancy."""

if OLD_1 not in content:
    print(f"❌ PATCH 1 pattern not found in {FILE}")
    sys.exit(1)

content = content.replace(OLD_1, NEW_1, 1)
print("✅ PATCH 1 applied — Previous School Reports added to report description")

# ── PATCH 2: Add Q&A before GUIDELINES ──

OLD_2 = "Q: What if we need more than 500 assessments?\nA: Contact hello@evalent.io for custom Enterprise pricing."

NEW_2 = """Q: What if we need more than 500 assessments?
A: Contact hello@evalent.io for custom Enterprise pricing.

Q: Can Evalent incorporate previous school reports into the assessment report?
A: Yes. On Professional and Enterprise plans, you can upload up to 3 previous school report PDFs when registering a student. Evalent analyses them and adds a dedicated two-page appendix to the report, covering academic trajectory, subject performance, teacher observations, and a contextual note for the admissions panel. Reports in any language are supported — Arabic, French, Mandarin, Spanish, and all others — with the analysis returned in English. Files are never stored.

Q: Are school reports from other countries or in other languages supported?
A: Yes. Evalent can read and analyse school reports in any language. The AI reads the documents in their original language and returns the full analysis in English. The language(s) detected are noted in the report appendix. This works for Arabic transcripts, French school reports, Mandarin report cards, and any other language."""

if OLD_2 not in content:
    print(f"❌ PATCH 2 pattern not found — trying alternate...")
    # Try with different spacing
    OLD_2b = "Q: What if we need more than 500 assessments? A: Contact hello@evalent.io for custom Enterprise pricing."
    if OLD_2b in content:
        NEW_2b = OLD_2b + "\n\nQ: Can Evalent incorporate previous school reports into the assessment report?\nA: Yes. On Professional and Enterprise plans, you can upload up to 3 previous school report PDFs when registering a student. Evalent analyses them and adds a dedicated two-page appendix to the report, covering academic trajectory, subject performance, teacher observations, and a contextual note for the admissions panel. Reports in any language are supported — Arabic, French, Mandarin, Spanish, and all others — with the analysis returned in English. Files are never stored.\n\nQ: Are school reports from other countries or in other languages supported?\nA: Yes. Evalent can read and analyse school reports in any language. The AI reads the documents in their original language and returns the full analysis in English. The language(s) detected are noted in the report appendix. This works for Arabic transcripts, French school reports, Mandarin report cards, and any other language."
        content = content.replace(OLD_2b, NEW_2b, 1)
        print("✅ PATCH 2 applied (alternate)")
    else:
        print(f"❌ PATCH 2 alternate also not found")
        sys.exit(1)
else:
    content = content.replace(OLD_2, NEW_2, 1)
    print("✅ PATCH 2 applied — Q&As added to marketing chatbot")

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

# Verify
with open(FILE, "r", encoding="utf-8") as f:
    verify = f.read()

if "PREVIOUS SCHOOL REPORTS" in verify and "any language" in verify:
    print("✅ Verification passed — marketing chatbot updated")
else:
    print("⚠️  Verify manually")

print("\n✅ Marketing chatbot patch complete")
