#!/bin/bash
set -e

echo "→ Applying patch to marketing repo..."
python3 fix_school_reports_marketing.py

echo "→ Staging..."
git add src/app/api/chat/route.ts

echo "→ Committing..."
git commit -m "feat: add previous school reports to chatbot knowledge"

echo "→ Pushing..."
git push

echo "✅ Done — Vercel will deploy in ~45s"
