import { motion } from 'framer-motion'
import { Apple, PlayCircle } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grad-brand" />
      <div className="absolute inset-0 opacity-[0.08]">
        <NetworkDots />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-[12px] tracking-[0.18em] uppercase text-white/70 mb-4"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-[34px] sm:text-[46px] font-semibold text-white leading-[1.1] tracking-tight"
        >
          Be Part Of The Digital Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[16px] text-white/75 max-w-lg mx-auto"
        >
          Join thousands of members and volunteers already connected, verified,
          and participating through VBA Connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="flex items-center gap-2.5 bg-white text-ink-900 rounded-xl px-5 py-3 shadow-lift hover:scale-[1.03] transition-transform"
          >
            <PlayCircle size={26} className="text-royal-600" />
            <div className="text-left">
              <p className="text-[10px] text-ink-700/60 leading-none">GET IT ON</p>
              <p className="text-[15px] font-semibold leading-tight">Google Play</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2.5 bg-white text-ink-900 rounded-xl px-5 py-3 shadow-lift hover:scale-[1.03] transition-transform"
          >
            <Apple size={26} />
            <div className="text-left">
              <p className="text-[10px] text-ink-700/60 leading-none">DOWNLOAD ON THE</p>
              <p className="text-[15px] font-semibold leading-tight">App Store</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function NetworkDots() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="white" strokeWidth="1">
        <line x1="100" y1="80" x2="320" y2="180" />
        <line x1="320" y1="180" x2="560" y2="60" />
        <line x1="560" y1="60" x2="800" y2="200" />
        <line x1="800" y1="200" x2="1050" y2="100" />
        <line x1="320" y1="180" x2="450" y2="340" />
        <line x1="800" y1="200" x2="950" y2="330" />
      </g>
      <g fill="white">
        {[[100, 80], [320, 180], [560, 60], [800, 200], [1050, 100], [450, 340], [950, 330]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" />
        ))}
      </g>
    </svg>
  )
}
