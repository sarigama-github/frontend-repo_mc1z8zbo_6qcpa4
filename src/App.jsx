import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      {/* Glassy navbar */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/50 bg-white/40 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-sky-600/10 ring-1 ring-sky-700/20" />
            <span className="font-semibold text-sky-900">Ibiza Concierge AI</span>
          </div>
          <nav className="hidden gap-6 text-sm text-sky-900/80 sm:flex">
            <a href="#features" className="hover:text-sky-900">Features</a>
            <a href="#demo" className="hover:text-sky-900">Demo</a>
            <a href="#get-started" className="hover:text-sky-900">Get access</a>
          </nav>
          <a href="#get-started" className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-sky-700/30 transition hover:-translate-y-0.5 hover:bg-sky-800">Join waitlist</a>
        </div>
      </header>

      <main className="">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <Showcase />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-sky-900/10 bg-white/60 py-10 text-center text-sky-900/70 backdrop-blur">
        <p>© {new Date().getFullYear()} Ibiza Concierge AI. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
