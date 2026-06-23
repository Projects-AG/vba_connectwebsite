import { motion } from 'framer-motion'

export default function FeatureCard({ Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-7 border border-ink-900/[0.06] shadow-soft hover:shadow-card hover:border-royal-400/20 transition-shadow duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-5 group-hover:bg-royal-600 transition-colors duration-300">
        <Icon
          size={22}
          strokeWidth={2}
          className="text-royal-600 group-hover:text-white transition-colors duration-300 group-hover:rotate-6"
        />
      </div>
      <h3 className="font-display text-[19px] font-semibold text-ink-900 mb-2">
        {title}
      </h3>
      <p className="text-[14.5px] leading-relaxed text-ink-700/65">{description}</p>
    </motion.div>
  )
}
