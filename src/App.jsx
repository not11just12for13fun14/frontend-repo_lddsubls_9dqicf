import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/portfolio`)
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-bold tracking-tight text-white">Portfolio</a>
          <nav className="text-sm text-blue-200/80 flex items-center gap-6">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {loading && (
        <div className="py-40 text-center text-blue-200/80">Loading portfolio...</div>
      )}

      {error && (
        <div className="py-40 text-center text-red-300">{error}</div>
      )}

      {data && (
        <>
          <Hero name={data.name} role={data.role} socials={data.socials} />

          <div id="projects">
            <Projects projects={data.projects} />
          </div>

          <div id="about">
            <About about={data.about} skills={data.skills} />
          </div>

          <footer className="py-10 border-t border-white/10 text-center text-blue-200/60">
            <div className="container mx-auto px-6">
              <p>Source: <a className="underline hover:text-white" href={data.source} target="_blank" rel="noreferrer">{data.source}</a></p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
