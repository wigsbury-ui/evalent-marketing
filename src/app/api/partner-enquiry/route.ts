import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, company, linkedin, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#07112e;">New Partner Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;color:#07112e;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;color:#002ec1;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Company / School</td><td style="padding:8px 0;color:#07112e;">${company || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">LinkedIn</td><td style="padding:8px 0;color:#002ec1;">${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Message</td><td style="padding:8px 0;color:#07112e;">${message || '—'}</td></tr>
      </table>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Evalent Partners <noreply@evalent.io>',
        to: ['partners@evalent.io'],
        reply_to: email,
        subject: `Partner enquiry from ${name}${company ? ` — ${company}` : ''}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Partner enquiry error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
