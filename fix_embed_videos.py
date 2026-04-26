#!/usr/bin/env python3
"""
Adds Vimeo video sections directly after the hero on four pages,
matching the exact pattern used on features/reports/page.tsx.
Uses string concatenation — no .format() to avoid JSX brace conflicts.
"""

import sys

HERO_ANCHOR = "<HeroTrialButton />\n        </div>\n      </section>"

pages = [
    {
        "file":     "src/app/features/report-card-evaluation/page.tsx",
        "video_id": "1186679278",
        "title":    "Evalent | Report Card Evaluation",
    },
    {
        "file":     "src/app/features/question-sets/page.tsx",
        "video_id": "1186679378",
        "title":    "Evalent | Crafted Question Sets",
    },
    {
        "file":     "src/app/why/fit-and-motivation/page.tsx",
        "video_id": "1186679475",
        "title":    "Evalent | Motivation and School Fit",
    },
    {
        "file":     "src/app/why/operational-benefits/page.tsx",
        "video_id": "1186679534",
        "title":    "Evalent | Operational Benefits",
    },
]

all_ok = True

for p in pages:
    with open(p["file"], "r", encoding="utf-8") as f:
        content = f.read()

    if HERO_ANCHOR not in content:
        print("ERROR: " + p["file"] + " -- hero anchor not found")
        all_ok = False
        continue

    if p["video_id"] in content:
        print("SKIP: " + p["file"] + " -- video already present")
        continue

    video_section = (
        "\n\n      {/* VIDEO */}\n"
        + "      <section className=\"px-6 pt-10 pb-0 bg-white\">\n"
        + "        <div className=\"max-w-5xl mx-auto\">\n"
        + "          <div className=\"rounded-2xl overflow-hidden relative shadow-xl\" style={{ paddingTop: '56.25%' }}>\n"
        + "            <iframe\n"
        + "              src=\"https://player.vimeo.com/video/" + p["video_id"] + "?badge=0&autopause=0&player_id=0&app_id=58479\"\n"
        + "              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}\n"
        + "              frameBorder=\"0\"\n"
        + "              allow=\"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media\"\n"
        + "              title=\"" + p["title"] + "\"\n"
        + "            />\n"
        + "          </div>\n"
        + "          <p className=\"text-center text-xs text-gray-400 mt-3 mb-0\">Watch this 90-second walkthrough</p>\n"
        + "        </div>\n"
        + "      </section>"
    )

    new_content = content.replace(HERO_ANCHOR, HERO_ANCHOR + video_section, 1)

    with open(p["file"], "w", encoding="utf-8") as f:
        f.write(new_content)

    print("OK: " + p["file"] + " -- video " + p["video_id"] + " added")

if not all_ok:
    sys.exit(1)

print("\n-- Verification --")
for p in pages:
    with open(p["file"], "r", encoding="utf-8") as f:
        found = p["video_id"] in f.read()
    status = "PASS" if found else "FAIL"
    print(status + ": " + p["file"].split("/")[-2] + " -- " + p["video_id"])

print("\nAll done")
