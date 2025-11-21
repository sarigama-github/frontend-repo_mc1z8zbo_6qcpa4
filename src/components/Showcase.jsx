const cards = [
  {
    title: 'Beach clubs',
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Sail the sunset',
    img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Clubs & tables',
    img: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Luxury villas',
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1400&auto=format&fit=crop',
  },
]

const Showcase = () => {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.2),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-sky-950">Everything Ibiza, on tap</h2>
          <p className="mt-2 text-sky-900/70">Tell us your mood. We handle the rest—seamlessly.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-lg bg-white/40 px-3 py-1 text-sm font-medium text-sky-900 backdrop-blur">
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
