import { motion } from 'framer-motion'
import { KeyRound, ShieldCheck, UserCog, EyeOff } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const POINTS = [
  { title: 'Secure Authentication', desc: 'Multi-factor verification protects every account.', Icon: KeyRound },
  { title: 'Data Protection', desc: 'Information is encrypted in transit and at rest.', Icon: ShieldCheck },
  { title: 'Role-Based Access', desc: 'People see only what their role permits.', Icon: UserCog },
  { title: 'Privacy Focused', desc: 'Personal data is never sold or shared without consent.', Icon: EyeOff },
]

export default function Security() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <SecurityMesh />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle
            eyebrow="Security & Trust"
            title="Built With Security & Transparency"
            subtitle="Every layer of our digital platforms is designed around protecting member data and keeping communication accountable."
            align="left"
            light
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0">
                  <point.Icon size={16} className="text-royal-400" />
                </div>
                <div>
                  <p className="text-[14.5px] font-semibold text-white">{point.title}</p>
                  <p className="text-[13px] text-mist-100/55 mt-0.5 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <ShieldIllustration />
        </div>
      </div>
    </section>
  )
}

function ShieldIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]"
    >
      <div className="absolute inset-0 rounded-full bg-royal-500/10 animate-pulse-slow" />
      <div className="absolute inset-8 rounded-full border border-royal-400/20" />
      <div className="absolute inset-16 rounded-full border border-royal-400/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-32 sm:w-32 sm:h-36 relative">
          <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-2xl">
            <path
              d="M50 4L92 20V56C92 84 72 104 50 116C28 104 8 84 8 56V20L50 4Z"
              fill="url(#shieldGrad)"
            />
            <path
              d="M32 60L44 72L70 44"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="shieldGrad" x1="8" y1="4" x2="92" y2="116" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B5EDB" />
                <stop offset="1" stopColor="#162C68" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* orbiting nodes */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={deg}
          className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-verified"
          style={{
            transform: `rotate(${deg}deg) translateX(140px)`,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </motion.div>
  )
}

function SecurityMesh() {
  return (
    <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  )
}
