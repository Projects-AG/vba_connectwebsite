import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import Button from '../components/Button'
import { LEADER, ORG } from '../data/content'

export default function LeaderHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-ink-900">
      <div className="absolute inset-0 -z-10">
        <NetworkLines />
        <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-royal-500/[0.12] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-accent-600/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Left: mandate copy */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            <span className="font-mono text-[12px] tracking-wide text-mist-100/80 font-medium">
              Registered Political Party · Maharashtra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[38px] sm:text-[50px] lg:text-[56px] font-semibold leading-[1.08] tracking-tight text-white"
          >
            A Parliament That Reflects
            <br />
            <span className="text-accent-400">Every Voice It Serves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[16.5px] sm:text-[18px] text-mist-100/70 leading-relaxed"
          >
            Vanchit Bahujan Aaghadi is a Phule–Ambedkarite movement built for
            the deprived, the marginalised, and the historically excluded —
            one political home for communities who have rarely had a seat at
            the table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              icon={ArrowRight}
              href={ORG.membershipUrl}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              className="!px-7 !py-3.5 !text-[15px] !bg-accent-600 hover:!bg-accent-400"
            >
              Join the Movement
            </Button>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] bg-transparent text-white border border-white/40 hover:bg-white/10 transition-all duration-200"
            >
              Our History
            </Link>
          </motion.div>
        </div>

        {/* Right: leader quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-9">
            <Quote size={28} className="text-accent-400/70 mb-5" />
            <p className="font-display text-[19px] sm:text-[21px] text-white leading-[1.5] font-medium">
              "Nahi bhi ho sankhya bhari, phir bhi milegi hissedari."
            </p>
            <p className="mt-3 text-[14px] text-mist-100/55 leading-relaxed">
              Even where our numbers are few, our share in power will be claimed.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-royal-600 flex items-center justify-center font-display text-[15px] font-semibold text-white">
                PA
              </div>
              <div>
                <p className="text-[14.5px] font-semibold text-white">{LEADER.name}</p>
                <p className="text-[12.5px] text-mist-100/55">{LEADER.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.5]"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#D35B09" strokeWidth="1" opacity="0.15">
        <line x1="100" y1="100" x2="350" y2="220" />
        <line x1="350" y1="220" x2="600" y2="120" />
        <line x1="600" y1="120" x2="880" y2="260" />
        <line x1="350" y1="220" x2="420" y2="450" />
        <line x1="880" y1="260" x2="1050" y2="180" />
        <line x1="420" y1="450" x2="700" y2="520" />
        <line x1="700" y1="520" x2="950" y2="430" />
      </g>
      <g fill="#F0782F">
        {[[100, 100], [350, 220], [600, 120], [880, 260], [420, 450], [1050, 180]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" opacity="0.3" />
        ))}
      </g>
    </svg>
  )
}
