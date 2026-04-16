'use client'

// Vimeo ID for the assessment walkthrough video
// Update this constant when the recording is ready
const WALKTHROUGH_VIMEO_ID = ''

export default function AssessmentDemo() {
  if (!WALKTHROUGH_VIMEO_ID) {
    // Placeholder shown until the video is uploaded
    return (
      <div className="w-full rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-gray-500 mb-1">Walkthrough video coming soon</p>
        <p className="text-xs text-gray-400">A screen recording of a real Grade 8 assessment from start to finish</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        style={{ paddingTop: '56.25%' }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${WALKTHROUGH_VIMEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title="Evalent | Assessment walkthrough"
        />
      </div>
      <p className="text-center text-xs text-gray-400 mt-3">
        A real Grade 8 assessment from start to finish, the same experience every applicant has
      </p>
    </div>
  )
}
