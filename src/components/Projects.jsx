import { motion } from 'framer-motion'

export default function Projects({ projects = [] }) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="text-blue-200/80 mt-2">Selected work and experiments</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={`${p.title}-${idx}`}
              href={p.url || '#'}
              target={p.url ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/70 transition-colors"
            >
              {p.image && (
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                {p.description && <p className="mt-2 text-blue-200/80 text-sm line-clamp-3">{p.description}</p>}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
