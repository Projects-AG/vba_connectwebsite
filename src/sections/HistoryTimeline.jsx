import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { HISTORY } from '../data/content'

export default function HistoryTimeline() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Our Journey"
          title="From Bhartiya Republican Paksha to VBA"
          subtitle="Four decades of organising, coalition-building, and standing for representation — a record, not a slogan."
        />

        {/* Desktop: horizontal spine */}
        <div className="hidden md:block mt-20 relative">
          <div className="absolute top-[13px] left-0 right-0 h-px bg-ink-900/10" />
          <div className="grid grid-cols-5 gap-4">
            {HISTORY.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative pt-9"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1, type: 'spring', stiffness: 300 }}
                  className="absolute top-0 left-0 w-[27px] h-[27px] rounded-full bg-royal-600 border-4 border-mist-50 flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                </motion.span>
                <p className="font-mono text-[13px] font-semibold text-royal-600 mb-1.5">
                  {item.year}
                </p>
                <h3 className="font-display text-[16px] font-semibold text-ink-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-ink-700/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical spine */}
        <div className="md:hidden mt-14 relative pl-8">
          <div className="absolute top-1 left-[7px] bottom-1 w-px bg-ink-900/10" />
          <div className="space-y-9">
            {HISTORY.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 top-0.5 w-[15px] h-[15px] rounded-full bg-royal-600 border-[3px] border-mist-50" />
                <p className="font-mono text-[12.5px] font-semibold text-royal-600 mb-1">
                  {item.year}
                </p>
                <h3 className="font-display text-[16px] font-semibold text-ink-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-ink-700/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
