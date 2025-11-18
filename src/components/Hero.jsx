import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ name, role, socials }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-900" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(59,130,246,0.35)]"
        >
          {name || 'Your Name'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg sm:text-2xl text-blue-200/90"
        >
          {role || 'Developer • Designer • Creator'}
        </motion.p>

        {/* Socials */}
        {socials && socials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-blue-500/30 bg-slate-800/40 px-4 py-2 text-blue-100 hover:text-white hover:border-blue-400/60 hover:bg-slate-800/70 transition-colors"
              >
                {s.platform}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
