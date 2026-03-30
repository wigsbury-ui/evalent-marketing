import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch('https://app.evalent.io/api/site-stats', { cache: 'no-store' })
  const data = await res.json()
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' }
  })
}
