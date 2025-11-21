const CTA = () => {
  return (
    <section id="get-started" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-200/60 to-sky-100/60" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-bold text-sky-950">Plan your perfect Ibiza in minutes</h3>
          <p className="mt-2 text-sky-900/70">Answer a few questions and your AI concierge builds the itinerary.</p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" placeholder="Your email" className="h-12 w-full rounded-xl border border-sky-900/10 bg-white/60 px-4 text-sky-900 placeholder:text-sky-900/50 focus:outline-none focus:ring-2 focus:ring-sky-400/60" />
            <button className="h-12 rounded-xl bg-sky-700 px-6 font-medium text-white shadow-lg shadow-sky-700/30 transition hover:-translate-y-0.5 hover:bg-sky-800">Get early access</button>
          </form>
          <p className="mt-3 text-xs text-sky-900/60">No spam. We’ll reach out with your personal link.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
