# Evalent Marketing Site

Next.js 14 marketing site for evalent.io.

## Development

```bash
npm install
npm run dev
```

## Deployment

Push to GitHub → Vercel auto-deploys.
Connect custom domain evalent.io in Vercel project settings.

## Structure

- `src/app/page.tsx` — homepage (hero, trial flow, approval pipeline, social proof)
- `src/app/pricing/page.tsx` — pricing page
- `src/components/Nav.tsx` — sticky navigation
- `src/components/Footer.tsx` — footer
- `src/components/TrialSection.tsx` — interactive 4-step trial signup
