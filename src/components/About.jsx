import { motion } from 'framer-motion'

export default function About({ about = '', skills = [] }) {
  if (!about && (!skills || skills.length === 0)) return null

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-blue-100/90 leading-relaxed">{about}</p>
        </div>

        <div>
          {skills && skills.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s, idx) => (
                  <motion.span
                    key={`${s}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                    className="rounded-full border border-blue-500/30 bg-slate-800/40 px-3 py-1 text-sm text-blue-100"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
