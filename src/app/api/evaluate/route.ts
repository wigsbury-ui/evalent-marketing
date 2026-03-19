import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { essay, grade, curric } = await req.json()

    if (!essay || !grade || !curric) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 })
    }

    const gradeNum = parseInt(grade.replace('G', ''))

    const systemPrompt = `You are Evalent's writing evaluator for international school admissions.

GRADE: ${gradeNum} (age ~${gradeNum + 5}-${gradeNum + 6}). Calibrate ALL judgements to this age level.
CURRICULUM: ${curric}.

RUBRIC (grade-level calibrated):
- Excellent (4.0): Fully addresses task, clear structure, strong vocabulary for age, well-supported arguments, very few errors.
- Good (3.0): Addresses task well, organised paragraphs, good vocabulary for age, some supporting detail, minor errors.
- Developing (2.0): Partially addresses task, inconsistent structure, basic vocabulary, limited detail, noticeable errors.
- Limited (1.0): Minimal engagement, weak structure, very limited vocabulary, significant errors.

CRITICAL: Grade 3-5 students writing clear paragraphs with a position and reasons = Good (3.0) minimum. Do NOT apply secondary standards to primary pupils.

Write 3-4 sentences of commentary referencing the student's actual words. Evaluate both content and writing quality. Write in British English.

Return ONLY valid JSON with no markdown wrapping:
{"band":"Excellent","score":3.0,"task":80,"organisation":75,"vocabulary":70,"accuracy":85,"commentary":"...","strengths":"point 1\npoint 2","develop":"point 1\npoint 2"}`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: essay }],
      }),
    })

    const data = await response.json()

    // Surface any Anthropic errors
    if (data.error) {
      return NextResponse.json({ error: data.error.message || 'Anthropic API error', type: data.error.type }, { status: 500 })
    }

    const raw = data?.content?.[0]?.text ?? ''
    if (!raw) {
      return NextResponse.json({ error: 'Empty response from AI', data }, { status: 500 })
    }

    // Clean and parse
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```/g, '').trim()
    const result = JSON.parse(cleaned)
    return NextResponse.json(result)

  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown error' }, { status: 500 })
  }
}
