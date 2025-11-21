import { Sparkles, CalendarCheck, Wine, Sun } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Curated experiences',
    desc: 'From sunset sailings to secluded coves—tailored to your vibe and budget.'
  },
  {
    icon: CalendarCheck,
    title: 'Instant bookings',
    desc: 'Tables, villas, drivers and beach beds—confirmed in minutes, not days.'
  },
  {
    icon: Wine,
    title: 'Insider access',
    desc: 'Priority entry and hard-to-get reservations through our local partners.'
  },
  {
    icon: Sun,
    title: '24/7 concierge',
    desc: 'Message anytime. We plan while you play—before, during and after your trip.'
  }
]

const Features = () => {
  return (
    <section className="relative z-10 -mt-20 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/40 bg-white/30 p-6 backdrop-blur shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sky-950">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-sky-900/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
