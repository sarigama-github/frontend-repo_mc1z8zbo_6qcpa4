import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />

      {/* Sun */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-yellow-200/60 blur-3xl" />

      {/* Ocean wave */}
      <svg className="pointer-events-none absolute bottom-0 left-0 right-0" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#ocean)" d="M0 120L48 116.7C96 113 192 107 288 110.7C384 114 480 127 576 126.7C672 127 768 114 864 114.7C960 115 1056 129 1152 135.3C1248 141 1344 139 1392 138.7L1440 138.7L1440 200L1392 200C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200L0 200Z"/>
        <defs>
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#38BDF8"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-3 py-1 text-sm font-medium text-sky-900 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Ibiza Concierge AI is live
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-5xl font-extrabold leading-tight text-sky-950 sm:text-6xl">
            Your private concierge for the White Isle
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg leading-relaxed text-sky-900/80">
            Book beach clubs, villas, tables, and bespoke experiences—powered by an AI that knows Ibiza like a local. 24/7 planning, zero stress.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#get-started" className="group inline-flex items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-white shadow-lg shadow-sky-700/30 transition hover:-translate-y-0.5 hover:bg-sky-800">
              Start planning
              <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 7.414V17a1 1 0 11-2 0V7.414L5.707 9.707A1 1 0 114.293 8.293l5-5z"/></svg>
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-sky-900/20 bg-white/50 px-6 py-3 text-sky-900 backdrop-blur transition hover:bg-white/70">
              Watch demo
            </a>
          </motion.div>

          {/* Glass stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['20k+', 'Bookings'],
              ['300+', 'Partners'],
              ['<2min', 'Average reply'],
              ['24/7', 'Support']
            ].map(([stat, label]) => (
              <div key={label} className="rounded-2xl border border-white/40 bg-white/30 p-4 text-center backdrop-blur">
                <div className="text-2xl font-bold text-sky-950">{stat}</div>
                <div className="text-sm text-sky-900/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
