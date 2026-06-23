import { motion } from 'framer-motion'
import { Users2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { WINGS } from '../data/content'

export default function Wings() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Organisational Wings"
          title="One Movement, Many Fronts"
          subtitle="Dedicated wings carrying the Vanchit movement into every community, generation, and idea."
        />

        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          {WINGS.map((wing, i) => (
            <motion.div
              key={wing.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-7 border border-ink-900/[0.06] shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-royal-500 to-royal-600 flex items-center justify-center mb-5 shadow-lg shadow-royal-600/20">
                <Users2 size={18} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-[17px] font-semibold text-ink-900 mb-1">
                {wing.name}
              </h3>
              <p className="text-[12.5px] font-mono uppercase tracking-wide text-royal-500 mb-3">
                {wing.role} · {wing.lead}
              </p>
              <p className="text-[14px] text-ink-700/65 leading-relaxed">
                {wing.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
