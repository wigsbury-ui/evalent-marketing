export default function BlogCTA() {
  return (
    <div className="my-10 bg-navy rounded-2xl p-7 text-center not-prose">
      <p className="text-blue-300 text-xs font-bold tracking-widest mb-2">SEE THIS IN ACTION</p>
      <h3 className="text-xl font-black text-white tracking-tight mb-2">See how Evalent automates this</h3>
      <p className="text-blue-200 text-sm mb-5 leading-relaxed">
        10 free trial reports. No credit card. Use with your next real applicants.
      </p>
      <a
        href="https://app.evalent.io/signup"
        className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
      >
        Start your free trial →
      </a>
    </div>
  )
}
