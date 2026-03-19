import { NextResponse } from 'next/server'

export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY ?? ''
  return NextResponse.json({
    keyLength: key.length,
    keyPrefix: key.slice(0, 14),
    keySuffix: key.slice(-4),
    hasKey: key.length > 0,
  })
}
