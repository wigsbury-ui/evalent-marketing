#!/bin/bash
set -e

echo "→ Applying patches..."
python3 fix_report_card_nav.py

echo "→ Staging..."
git add src/app/features/report-card-evaluation/page.tsx
git add src/components/Nav.tsx
git add src/app/features/reports/page.tsx
git add src/app/features/decisions/page.tsx
git add src/app/features/registration/page.tsx
git add src/app/features/dashboard/page.tsx
git add src/app/features/assessment/page.tsx
git add src/app/features/question-sets/page.tsx
git add src/app/features/strategy/page.tsx
git add src/app/features/team/page.tsx

echo "→ Committing..."
git commit -m "feat: add Report Card Evaluation feature page, update nav + feature numbering to 9"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
