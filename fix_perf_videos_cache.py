#!/usr/bin/env python3
"""
Performance optimisation for evalent-marketing:
1. Copies VimeoEmbed.tsx lazy-loading component to src/components/
2. Replaces inline Vimeo iframes in 5 pages with <VimeoEmbed /> component
3. Adds Cache-Control headers for public static assets to vercel.json
"""

import re, sys, shutil, json, os

# ── 1. Copy VimeoEmbed component ─────────────────────────────────────────────

shutil.copy("VimeoEmbed.tsx", "src/components/VimeoEmbed.tsx")
print("✅ 1. VimeoEmbed.tsx copied to src/components/")

# ── 2. Replace inline video sections ─────────────────────────────────────────

# Pages with the new-style video section (added by fix_embed_videos.py)
NEW_STYLE_PAGES = [
    "src/app/features/report-card-evaluation/page.tsx",
    "src/app/features/question-sets/page.tsx",
    "src/app/why/fit-and-motivation/page.tsx",
    "src/app/why/operational-benefits/page.tsx",
]

# Regex to match the new-style video section and capture videoId + title
NEW_STYLE_PATTERN = re.compile(
    r"\n\n      \{/\* VIDEO \*/\}\n"
    r"      <section className=\"px-6 pt-10 pb-0 bg-white\">\n"
    r"        <div className=\"max-w-5xl mx-auto\">\n"
    r"          <div className=\"rounded-2xl overflow-hidden relative shadow-xl\" "
    r"style=\{\{ paddingTop: '56\.25%' \}\}>\n"
    r"            <iframe\n"
    r"              src=\"https://player\.vimeo\.com/video/(\d+)\?[^\"]+\"\n"
    r"              style=\{\{ position: 'absolute'[^}]+\}\}\n"
    r"              frameBorder=\"0\"\n"
    r"              allow=\"[^\"]+\"\n"
    r"              title=\"([^\"]+)\"\n"
    r"            />\n"
    r"          </div>\n"
    r"          <p className=\"text-center text-xs text-gray-400 mt-3 mb-0\">"
    r"Watch this 90-second walkthrough</p>\n"
    r"        </div>\n"
    r"      </section>",
    re.MULTILINE
)

for filepath in NEW_STYLE_PAGES:
    if not os.path.exists(filepath):
        print(f"⚠️  {filepath} not found — skipping")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    m = NEW_STYLE_PATTERN.search(content)
    if not m:
        print(f"⚠️  {filepath} — video pattern not found (may already use component)")
        continue

    video_id = m.group(1)
    title = m.group(2)

    # Replace the inline section with component usage
    replacement = "\n\n      <VimeoEmbed videoId=\"" + video_id + "\" title=\"" + title + "\" />"
    content = NEW_STYLE_PATTERN.sub(replacement, content, count=1)

    # Add import after the last existing import line
    if "import VimeoEmbed" not in content:
        # Find the last import line
        last_import = 0
        for line in content.split("\n"):
            if line.startswith("import "):
                last_import = content.find(line) + len(line)
        insert_at = content.find("\n", last_import)
        content = content[:insert_at] + "\nimport VimeoEmbed from '@/components/VimeoEmbed'" + content[insert_at:]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    name = filepath.split("/")[-2]
    print(f"✅ 2. {name} — replaced with <VimeoEmbed videoId=\"{video_id}\" />")

# Reports page has a slightly different original format — handle separately
REPORTS = "src/app/features/reports/page.tsx"
if os.path.exists(REPORTS):
    with open(REPORTS, "r", encoding="utf-8") as f:
        reports = f.read()

    # Match the original reports page video section
    reports_pattern = re.compile(
        r"\{/\* VIDEO[^*]*\*/\}\s*\n"
        r"\s*<section className=\"px-6 pt-10 pb-0 bg-white\">\s*\n"
        r"\s*<div className=\"max-w-5xl mx-auto\">\s*\n"
        r"\s*<div className=\"rounded-2xl overflow-hidden relative shadow-xl\"[^>]*>\s*\n"
        r"\s*<iframe src=\"https://player\.vimeo\.com/video/(\d+)\?[^\"]+\"\s*\n"
        r"(?:.*\n)*?"
        r"\s*title=\"([^\"]+)\"[^/]*/>\s*\n"
        r"\s*</div>\s*\n"
        r"\s*<p[^>]*>Watch this 90-second walkthrough</p>\s*\n"
        r"\s*</div>\s*\n"
        r"\s*</section>",
        re.MULTILINE
    )

    m_r = reports_pattern.search(reports)
    if m_r and "import VimeoEmbed" not in reports:
        video_id = m_r.group(1)
        title = m_r.group(2)
        replacement = "\n      <VimeoEmbed videoId=\"" + video_id + "\" title=\"" + title + "\" />\n"
        reports = reports_pattern.sub(replacement, reports, count=1)
        # Add import
        last_import_end = 0
        for line in reports.split("\n"):
            if line.startswith("import "):
                pos = reports.find(line) + len(line)
                if pos > last_import_end:
                    last_import_end = pos
        insert_at = reports.find("\n", last_import_end)
        reports = reports[:insert_at] + "\nimport VimeoEmbed from '@/components/VimeoEmbed'" + reports[insert_at:]
        with open(REPORTS, "w", encoding="utf-8") as f:
            f.write(reports)
        print(f"✅ 2. reports — replaced with <VimeoEmbed videoId=\"{video_id}\" />")
    elif "import VimeoEmbed" in reports:
        print("⚠️  reports — already uses VimeoEmbed")
    else:
        print("⚠️  reports — pattern not matched, leaving unchanged")

# ── 3. Update vercel.json with cache headers ──────────────────────────────────

VERCEL_JSON = "vercel.json"
with open(VERCEL_JSON, "r", encoding="utf-8") as f:
    vercel = json.load(f)

vercel["headers"] = [
    {
        "source": "/(.*)\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)",
        "headers": [
            {
                "key": "Cache-Control",
                "value": "public, max-age=31536000, immutable"
            }
        ]
    }
]

with open(VERCEL_JSON, "w", encoding="utf-8") as f:
    json.dump(vercel, f, indent=2)

print("✅ 3. vercel.json — cache headers added for public static assets")

# ── Verify ────────────────────────────────────────────────────────────────────

print("\n── Verification ─────────────────────────────────────────")
checks = {
    "VimeoEmbed component exists":       os.path.exists("src/components/VimeoEmbed.tsx"),
    "vercel.json has cache headers":     "headers" in json.load(open(VERCEL_JSON)),
    "report-card-eval uses component":   "VimeoEmbed" in open("src/app/features/report-card-evaluation/page.tsx").read(),
    "question-sets uses component":      "VimeoEmbed" in open("src/app/features/question-sets/page.tsx").read(),
    "fit-and-motivation uses component": "VimeoEmbed" in open("src/app/why/fit-and-motivation/page.tsx").read(),
    "operational-benefits uses component":"VimeoEmbed" in open("src/app/why/operational-benefits/page.tsx").read(),
    "No raw iframe on question-sets":    "player.vimeo.com/video/1186679378" not in open("src/app/features/question-sets/page.tsx").read(),
}
all_ok = True
for label, result in checks.items():
    icon = "✅" if result else "❌"
    if not result: all_ok = False
    print(f"  {icon} {label}")

print("\n✅ All done" if all_ok else "\n⚠️  Some checks failed")
