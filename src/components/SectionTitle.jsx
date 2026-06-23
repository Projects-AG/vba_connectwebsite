import { motion } from 'framer-motion'

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClass} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <span
          className={`font-mono text-[12px] tracking-[0.18em] uppercase mb-3 ${
            light ? 'text-mist-200' : 'text-royal-500'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] font-semibold tracking-tight ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[16px] md:text-[17px] leading-relaxed ${
            light ? 'text-mist-100/85' : 'text-ink-700/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
