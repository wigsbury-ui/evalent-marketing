import { NextRequest, NextResponse } from 'next/server'

const APP_API = 'https://app.evalent.io/api/blog'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const params = searchParams.toString()
  const url = params ? `${APP_API}?${params}` : APP_API

  try {
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
