#!/bin/bash
set -e

echo "→ Applying performance optimisations..."
python3 fix_perf_videos_cache.py

echo "→ Staging..."
git add src/components/VimeoEmbed.tsx
git add src/app/features/reports/page.tsx
git add src/app/features/report-card-evaluation/page.tsx
git add src/app/features/question-sets/page.tsx
git add src/app/why/fit-and-motivation/page.tsx
git add src/app/why/operational-benefits/page.tsx
git add vercel.json

echo "→ Committing..."
git commit -m "perf: lazy-load Vimeo iframes via IntersectionObserver, add cache headers for public assets"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
