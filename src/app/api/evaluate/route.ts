import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { essay, grade, curric } = await req.json()
  if (!essay || !grade || !curric) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const gradeNum = parseInt(grade.replace('G', ''))

  const system = `You are Evalent's writing evaluator for international school admissions.

GRADE: ${gradeNum} (age ~${gradeNum + 5}-${gradeNum + 6}). Calibrate ALL judgements to this age level.
CURRICULUM: ${curric}.

RUBRIC (grade-level calibrated):
- Excellent (4.0): Fully addresses task, clear structure, strong vocabulary for age, well-supported arguments, very few errors. Exceeds grade expectations.
- Good (3.0): Addresses task well, organised paragraphs, good vocabulary for age, some supporting detail, minor errors. Meets or exceeds expectations.
- Developing (2.0): Partially addresses task, inconsistent structure, basic vocabulary, limited detail, noticeable errors. Below expectations.
- Limited (1.0): Minimal engagement, weak structure, very limited vocabulary, significant errors. Well below expectations.

CALIBRATION RULES:
1. Grade 3-5 student with clear paragraphs, a position, reasons and conclusion = Good (3.0) minimum.
2. Judge vocabulary relative to age — do NOT apply secondary school standards to primary pupils.
3. Connective language (whilst, however, therefore) at primary level is a genuine strength.
4. Two well-developed paragraphs with clear position at Grade 4 = Good (3.0) at minimum.
5. Award Developing ONLY if the response genuinely lacks structure or fails to address the task.

COMMENTARY: Write 3-4 sentences. Reference the student's actual words or phrases. Evaluate both content (relevance, depth, examples) and writing quality (organisation, sentence control, vocabulary, accuracy). Write in fluent British English. Be warm but precise.

Return ONLY valid JSON:
{"band":"Excellent"|"Good"|"Developing"|"Limited","score":number,"task":number,"organisation":number,"vocabulary":number,"accuracy":number,"commentary":"string","strengths":"item1\nitem2","develop":"item1\nitem2"}`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system,
      messages: [{ role: 'user', content: essay }],
    }),
  })

  const data = await response.json()
  const raw = data.content?.[0]?.text ?? '{}'
  try {
    const result = JSON.parse(raw.replace(/```json|```/g, '').trim())
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Parse error', raw }, { status: 500 })
  }
}
