#!/usr/bin/env python3
"""
Scans entire src/ directory for any Vimeo iframe patterns
and replaces all of them with <VimeoEmbed /> component.
"""
import re, os, sys

# Match any Vimeo iframe section — the surrounding <section> wrapper with pt-10
# AND bare iframes without a section wrapper
SECTION_PATTERN = re.compile(
    r'(\s*\{/\*[^*]*VIDEO[^*]*\*/\}\s*)?\n?'
    r'\s*<section\s[^>]*(?:pt-10|pt-8)[^>]*>\s*\n'
    r'\s*<div\s[^>]*max-w-[^>]*>\s*\n'
    r'\s*<div\s[^>]*(?:56\.25%|aspect)[^>]*>.*?\n'
    r'.*?player\.vimeo\.com/video/(\d+)[^"]*"'
    r'.*?title="([^"]+)"'
    r'.*?</section>',
    re.DOTALL
)

fixed_files = []

for root, dirs, files in os.walk("src"):
    # Skip node_modules and .next
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.vercel']]
    for fname in files:
        if not fname.endswith(('.tsx', '.jsx', '.ts', '.js')):
            continue
        filepath = os.path.join(root, fname)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'player.vimeo.com' not in content:
            continue

        if 'VimeoEmbed' in content:
            # Already migrated — skip
            print(f"  SKIP (already migrated): {filepath}")
            continue

        original = content

        # Find all matches
        matches = list(SECTION_PATTERN.finditer(content))
        if not matches:
            # Try to get context for debugging
            idx = content.find('player.vimeo.com')
            print(f"  WARN: {filepath} has Vimeo but pattern didn't match")
            print(f"  Context: {repr(content[max(0,idx-150):idx+150])}")
            continue

        # Replace each match
        for m in reversed(matches):  # reverse to preserve positions
            video_id = m.group(2)
            title = m.group(3)
            replacement = f'\n      <VimeoEmbed videoId="{video_id}" title="{title}" />'
            content = content[:m.start()] + replacement + content[m.end():]

        # Add import after last existing import
        if 'import VimeoEmbed' not in content:
            lines = content.split('\n')
            last_import_idx = 0
            for i, line in enumerate(lines):
                if line.startswith('import '):
                    last_import_idx = i
            lines.insert(last_import_idx + 1, "import VimeoEmbed from '@/components/VimeoEmbed'")
            content = '\n'.join(lines)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        fixed_files.append((filepath, [m.group(2) for m in matches]))
        print(f"  FIXED: {filepath} — video IDs: {[m.group(2) for m in matches]}")

print(f"\n{len(fixed_files)} files updated")

# Final check — any remaining raw Vimeo iframes?
remaining = []
for root, dirs, files in os.walk("src"):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.vercel']]
    for fname in files:
        if not fname.endswith(('.tsx', '.jsx')):
            continue
        filepath = os.path.join(root, fname)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'player.vimeo.com' in content and 'VimeoEmbed' not in content:
            remaining.append(filepath)

if remaining:
    print(f"\n⚠️  Still has raw iframes (pattern didn't match):")
    for f in remaining:
        print(f"  {f}")
    sys.exit(1)
else:
    print("✅ No remaining raw Vimeo iframes found")
