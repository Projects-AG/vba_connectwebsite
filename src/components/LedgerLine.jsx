import { motion } from 'framer-motion'

/**
 * Signature motif: a vertical "ledger" line with tick-mark nodes,
 * evoking a verified audit trail. Used behind hero stats and as
 * subtle section dividers instead of generic gradient blobs.
 */
export default function LedgerLine({ nodes = 4, className = '', light = false }) {
  const dotColor = light ? '#3B5EDB' : '#1E3A8A'
  const lineColor = light ? 'rgba(255,255,255,0.18)' : 'rgba(11,30,61,0.1)'

  return (
    <div className={`relative flex flex-col items-center ${className}`} aria-hidden="true">
      <div
        className="w-px flex-1"
        style={{ background: `linear-gradient(to bottom, transparent, ${lineColor} 15%, ${lineColor} 85%, transparent)` }}
      />
      <div className="absolute inset-0 flex flex-col justify-between py-2">
        {Array.from({ length: nodes }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="w-2 h-2 rounded-full ml-[-3.5px]"
            style={{ background: dotColor }}
          />
        ))}
      </div>
    </div>
  )
}
