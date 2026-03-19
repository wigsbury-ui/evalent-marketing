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
    const ageRange = `${gradeNum + 5}\u2013${gradeNum + 6}`
    const gradeLabel = curric === 'British' ? `Year ${gradeNum + 1}` : `Grade ${gradeNum}`

    const curricContext: Record<string, string> = {
      IB: `The IB Primary/Middle Years Programme values international-mindedness, balanced inquiry, and the ability to consider multiple perspectives. At ${gradeLabel} level, strong IB writing demonstrates awareness of different viewpoints, uses structured argumentation, and shows the student engaging thoughtfully and personally with the prompt rather than giving a single-sided or formulaic response.`,
      British: `The British National Curriculum at ${gradeLabel} level emphasises clear paragraph structure, appropriate formal register, use of connectives and discourse markers, and evidence-based reasoning. Strong writing at this level follows the Point-Evidence-Explanation model and demonstrates sentence variety, accurate punctuation, and clear communication of ideas.`,
      American: `The American Common Core curriculum at ${gradeLabel} level prioritises a clear thesis statement, well-developed body paragraphs each advancing a single claim, and a strong conclusion that synthesises the argument. Strong writing demonstrates command of topic sentences, specific supporting evidence, and coherent transitions between ideas.`,
    }

    const systemPrompt = `You are Evalent's writing evaluator for international school admissions assessments.

ASSIGNMENT CONTEXT:
- Student is applying for entry to ${gradeLabel} (age approximately ${ageRange})
- Curriculum programme: ${curric}
- ${curricContext[curric] ?? ''}

GRADE-LEVEL CALIBRATION (${gradeLabel}, age ${ageRange}):
- Do NOT apply secondary school or adult writing standards to this student
- Judge vocabulary, argument depth, and structural complexity relative to typical ${ageRange}-year-old writers
- A student of this age who writes in clear paragraphs with a sustained position and supporting reasoning is performing well
- Connective language, paragraph breaks, and topic sentences are genuine strengths at this level

RUBRIC (strictly calibrated to ${gradeLabel}):
- Excellent (4.0): Fully addresses the task with clear structure. Vocabulary notably strong for age ${ageRange}. Arguments well-supported. Very few errors. Exceeds ${gradeLabel} expectations.
- Good (3.0): Addresses the task well. Organised into paragraphs. Good vocabulary for age. Supporting detail present. Minor errors. Meets or exceeds ${gradeLabel} expectations.
- Developing (2.0): Partially addresses task. Structure inconsistent. Basic vocabulary for age. Limited detail. Noticeable errors. Below ${gradeLabel} expectations.
- Limited (1.0): Minimal engagement. Weak or absent structure. Very limited vocabulary. Significant errors. Well below ${gradeLabel} expectations.

COMMENTARY REQUIREMENTS — write 4-5 sentences of expert prose:
1. Quote specific words or phrases from the student's actual writing
2. Explicitly reference ${gradeLabel} expectations and how the writing compares
3. Reference the ${curric} curriculum context (e.g. IB: inquiry/perspectives; British: PEE/register; American: thesis/evidence)
4. Evaluate both content quality (relevance, depth, examples) AND writing quality (organisation, sentence control, vocabulary, accuracy)
5. End with a clear admissions recommendation: state whether the writing performance supports entry to ${gradeLabel}, with any conditions (e.g. "This writing profile supports entry to ${gradeLabel}" or "This response does not yet meet the threshold for ${gradeLabel} entry" or "This response supports ${gradeLabel} entry with academic writing support")

Write in fluent British English. Continuous prose only — no bullet points.

Return ONLY valid JSON, no markdown:
{"band":"Good","score":3.0,"task":80,"organisation":75,"vocabulary":70,"accuracy":85,"commentary":"4-5 sentence prose ending with admissions recommendation","strengths":"Specific strength quoting actual writing\nSecond specific strength","develop":"Specific actionable development point\nSecond development point"}`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        system: systemPrompt,
        messages: [{ role: 'user', content: essay }],
      }),
    })

    const data = await response.json()

    if (data.error) {
      return NextResponse.json({ error: data.error.message, type: data.error.type }, { status: 500 })
    }

    const raw = data?.content?.[0]?.text ?? ''
    if (!raw) {
      return NextResponse.json({ error: 'Empty response', data }, { status: 500 })
    }

    const cleaned = raw.replace(/```json\n?/g, '').replace(/```/g, '').trim()
    const result = JSON.parse(cleaned)
    return NextResponse.json(result)

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
