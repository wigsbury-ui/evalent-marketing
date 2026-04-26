#!/bin/bash
set -e

echo "→ Applying pricing page patch..."
python3 fix_pricing_trial_column.py

echo "→ Staging..."
git add src/app/pricing/page.tsx

echo "→ Committing..."
git commit -m "feat: add Free Trial column to pricing page with school reports highlight"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
