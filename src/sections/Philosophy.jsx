import { motion } from 'framer-motion'
import { PHILOSOPHY } from '../data/content'

export default function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[12px] tracking-[0.18em] uppercase text-accent-600"
        >
          {PHILOSOPHY.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-[30px] sm:text-[40px] font-semibold text-ink-900 leading-[1.15] tracking-tight"
        >
          {PHILOSOPHY.title}
        </motion.h2>

        <div className="mt-8 space-y-5">
          {PHILOSOPHY.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="text-[16px] sm:text-[17px] text-ink-700/70 leading-[1.75]"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
