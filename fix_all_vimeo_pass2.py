#!/usr/bin/env python3
"""
Second pass — fixes remaining Vimeo iframes that have different
indentation/wrapper patterns. Skips VideoModal.tsx and AssessmentDemo.tsx
intentionally (they are interactive components, not page embeds).
"""
import re, os, sys

# Files to intentionally skip
SKIP = {
    'src/components/VideoModal.tsx',       # modal player — must stay eager
    'src/components/features/AssessmentDemo.tsx',  # demo widget — must stay eager
    'src/components/VimeoEmbed.tsx',       # the component itself
}

# More flexible pattern — just find the <section>/<div> block containing
# a Vimeo iframe, regardless of indentation or exact class names
LOOSE_PATTERN = re.compile(
    r'(?:\{/\*[^*]*VIDEO[^*]*\*/\}\s*)?\n?'   # optional VIDEO comment
    r'[ \t]*<(?:section|div)[^\n>]*>\s*\n'     # opening section or div
    r'[ \t]*<div[^\n>]*56\.25%[^\n>]*>\s*\n'  # 56.25% aspect ratio div
    r'(?:[ \t]*<div[^\n>]*>\s*\n)?'            # optional inner div
    r'[ \t]*<iframe\b'                          # iframe start
    r'(?:[^>]|\n)*?'                            # any attributes
    r'player\.vimeo\.com/video/(\d+)'          # video ID
    r'(?:[^>]|\n)*?'                            # more attributes
    r'title="([^"]+)"'                         # title
    r'(?:[^>]|\n)*?/>'                         # self-closing
    r'(?:[^<]|\n)*?</div>\s*\n'               # close aspect div
    r'(?:[ \t]*<p[^>]*>Watch[^<]*</p>\s*\n)?' # optional caption
    r'(?:[ \t]*</div>\s*\n)?'                  # optional close inner div
    r'[ \t]*</(?:section|div)>',               # close section or div
    re.DOTALL
)

fixed = []
skipped = []
remaining = []

for root, dirs, files in os.walk("src"):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.vercel']]
    for fname in files:
        if not fname.endswith(('.tsx', '.jsx')):
            continue
        filepath = os.path.join(root, fname)

        # Normalise path separators
        norm = filepath.replace('\\', '/')

        if norm in SKIP:
            if 'player.vimeo.com' in open(filepath).read():
                skipped.append(filepath)
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'player.vimeo.com' not in content:
            continue
        if 'VimeoEmbed' in content:
            continue  # already done

        original = content
        matches = list(LOOSE_PATTERN.finditer(content))

        if not matches:
            remaining.append(filepath)
            idx = content.find('player.vimeo.com')
            print(f"  STILL NO MATCH: {filepath}")
            print(f"  Context: {repr(content[max(0,idx-200):idx+150])}\n")
            continue

        for m in reversed(matches):
            video_id = m.group(1)
            title = m.group(2)
            # Preserve the leading newline/indent
            replacement = f'\n      <VimeoEmbed videoId="{video_id}" title="{title}" />'
            content = content[:m.start()] + replacement + content[m.end():]

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

        fixed.append(filepath)
        print(f"  FIXED: {filepath} — {[m.group(1) for m in matches]}")

print(f"\n✅ Fixed this pass: {len(fixed)}")
print(f"⏭️  Intentionally skipped: {len(skipped)} ({', '.join(os.path.basename(f) for f in skipped)})")

if remaining:
    print(f"\n⚠️  Still unmatched: {len(remaining)}")
    for f in remaining:
        print(f"  {f}")
    sys.exit(1)
else:
    # Final verification
    unresolved = []
    for root, dirs, files in os.walk("src"):
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.vercel']]
        for fname in files:
            if not fname.endswith(('.tsx', '.jsx')):
                continue
            fp = os.path.join(root, fname).replace('\\', '/')
            if fp in SKIP:
                continue
            with open(os.path.join(root, fname), 'r') as f:
                c = f.read()
            if 'player.vimeo.com' in c and 'VimeoEmbed' not in c:
                unresolved.append(fp)

    if unresolved:
        print(f"\n⚠️  Still has raw iframes:")
        for f in unresolved:
            print(f"  {f}")
    else:
        print("\n✅ All page iframes now use VimeoEmbed")
