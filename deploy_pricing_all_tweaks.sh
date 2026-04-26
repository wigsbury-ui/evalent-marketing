#!/bin/bash
set -e

echo "→ Applying all pricing tweaks..."
python3 fix_pricing_all_tweaks.py

echo "→ Staging..."
git add src/app/pricing/page.tsx

echo "→ Committing..."
git commit -m "fix: trial tagline, green school reports highlight, rename feature, trial card height"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
