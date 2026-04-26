#!/bin/bash
set -e

echo "→ Embedding videos..."
python3 fix_embed_videos.py

echo "→ Staging..."
git add src/app/features/report-card-evaluation/page.tsx
git add src/app/features/question-sets/page.tsx
git add src/app/why/fit-and-motivation/page.tsx
git add src/app/why/operational-benefits/page.tsx

echo "→ Committing..."
git commit -m "feat: embed Vimeo videos on report card evaluation, question sets, motivation, operational benefits"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
