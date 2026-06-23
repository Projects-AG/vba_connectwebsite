import { motion } from 'framer-motion'

export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <section className="pt-32 pb-24 bg-mist-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-royal-500">
            {eyebrow}
          </span>
          <h1 className="font-display text-[34px] sm:text-[42px] font-semibold text-ink-900 tracking-tight mt-2">
            {title}
          </h1>
          <p className="text-[13.5px] text-ink-700/50 mt-2">Last updated: {updated}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-soft border border-ink-900/[0.05] p-7 sm:p-11"
        >
          <div className="prose-legal">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}

export function LegalSection({ number, title, children }) {
  return (
    <div className="mb-9 last:mb-0">
      <h2 className="flex items-baseline gap-3 font-display text-[20px] font-semibold text-ink-900 mb-3">
        <span className="font-mono text-[13px] text-royal-400">{number}</span>
        {title}
      </h2>
      <div className="text-[15px] text-ink-700/75 leading-[1.75] space-y-3">{children}</div>
    </div>
  )
}

export function PlaceholderNote({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[13.5px] font-medium">
      {children}
    </span>
  )
}
