#!/usr/bin/env python3
import re, sys

FILE = "src/app/features/reports/page.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

if "VimeoEmbed" in content:
    print("Already uses VimeoEmbed — nothing to do")
    sys.exit(0)

if "1175800177" not in content:
    print("ERROR: Video ID not found in file")
    sys.exit(1)

# Match from the VIDEO comment through to the closing </section>
pattern = re.compile(
    r'\{/\*[^*]*VIDEO[^*]*\*/\}\s*\n'
    r'\s*<section[^>]*pt-10[^>]*>.*?</section>',
    re.DOTALL
)

m = pattern.search(content)
if not m:
    print("ERROR: Could not locate video section")
    idx = content.find("1175800177")
    print("Context:")
    print(repr(content[idx-300:idx+200]))
    sys.exit(1)

old = m.group(0)
new = "      <VimeoEmbed videoId=\"1175800177\" title=\"Evalent | Report Generation\" />"

content = content.replace(old, new, 1)

# Add import after last existing import
lines = content.split("\n")
last_import_idx = 0
for i, line in enumerate(lines):
    if line.startswith("import "):
        last_import_idx = i
lines.insert(last_import_idx + 1, "import VimeoEmbed from '@/components/VimeoEmbed'")
content = "\n".join(lines)

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

with open(FILE, "r", encoding="utf-8") as f:
    final = f.read()

ok1 = "import VimeoEmbed" in final
ok2 = 'VimeoEmbed videoId="1175800177"' in final
ok3 = "player.vimeo.com/video/1175800177" not in final

print("Import added:    " + ("OK" if ok1 else "FAIL"))
print("Component used:  " + ("OK" if ok2 else "FAIL"))
print("Iframe removed:  " + ("OK" if ok3 else "FAIL"))

if ok1 and ok2 and ok3:
    print("\nAll checks passed")
else:
    sys.exit(1)
