import { motion } from 'framer-motion'
import { ArrowRight, Users, ShieldCheck, Bell, Calendar, BadgeCheck } from 'lucide-react'
import Button from '../components/Button'

const FLOATING_STATS = [
  { label: 'Connected People', value: '50L+', Icon: Users, pos: 'top-[6%] -left-4 sm:-left-10' },
  { label: 'Verified Members', value: '12L+', Icon: BadgeCheck, pos: 'top-[38%] -right-6 sm:-right-14' },
  { label: 'Live Updates', value: 'Daily', Icon: Bell, pos: 'bottom-[16%] -left-2 sm:-left-12' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background network + glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grad-radial-soft" />
        <NetworkLines />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-royal-400/[0.07] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-50 border border-royal-400/15 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse" />
            <span className="font-mono text-[12px] tracking-wide text-royal-600 font-medium">
              Verified Digital Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[40px] sm:text-[52px] lg:text-[58px] font-semibold leading-[1.06] tracking-tight text-ink-900"
          >
            Connecting People.
            <br />
            <span className="text-royal-600">Strengthening Democracy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[16.5px] sm:text-[18px] text-ink-700/70 leading-relaxed"
          >
            A secure digital platform empowering members, volunteers, and citizens
            through verified communication, transparent participation, and
            organised digital engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" icon={ArrowRight} className="!px-7 !py-3.5 !text-[15px]">
            <a href="http://qrto.org/bDIRnb">  Download App</a>
            </Button>
            <Button variant="ghost" className="!px-7 !py-3.5 !text-[15px]">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-ink-700/55"
          >
            <div className="flex items-center gap-2 text-[13.5px]">
              <ShieldCheck size={16} className="text-verified" />
              Role-based secure access
            </div>
          </motion.div>
        </div>

        {/* Right: phone mockup + ledger line + floating cards */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-[270px] sm:w-[300px]">
            <PhoneMockup />

            {FLOATING_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${stat.pos} animate-float`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-glass border border-white/60">
                  <div className="w-9 h-9 rounded-full bg-royal-50 flex items-center justify-center shrink-0">
                    <stat.Icon size={17} className="text-royal-600" />
                  </div>
                  <div>
                    <p className="font-display text-[17px] font-semibold text-ink-900 leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-ink-700/55 mt-0.5 whitespace-nowrap">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto"
    >
      <div className="relative w-full aspect-[9/18.5] rounded-[2.2rem] bg-ink-900 p-2.5 shadow-2xl">
        <div className="w-full h-full rounded-[1.8rem] bg-gradient-to-b from-royal-50 to-white overflow-hidden relative">
          {/* notch */}
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
            <div className="w-20 h-4 bg-ink-900 rounded-b-xl" />
          </div>

          <div className="pt-9 px-4 pb-4 flex flex-col gap-3 h-full">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-ink-700/50 font-medium">Welcome back</p>
                <p className="font-display text-[14px] font-semibold text-ink-900">Member Dashboard</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-royal-600 flex items-center justify-center">
                <BadgeCheck size={13} className="text-white" />
              </div>
            </div>

            <div className="bg-royal-600 rounded-xl p-3 text-white">
              <p className="text-[8.5px] text-white/70 font-mono tracking-wide">DIGITAL ID</p>
              <p className="text-[12px] font-semibold mt-1">VBA-0024681</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-1 h-1 rounded-full bg-verified" />
                <p className="text-[8px] text-white/70">Verified Member</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 shadow-sm border border-ink-900/[0.04] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
                <Bell size={13} className="text-royal-600" />
              </div>
              <div className="flex-1">
                <p className="text-[9.5px] font-semibold text-ink-900">New Announcement</p>
                <p className="text-[8px] text-ink-700/50">Updated 2 hours ago</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 shadow-sm border border-ink-900/[0.04] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
                <Calendar size={13} className="text-royal-600" />
              </div>
              <div className="flex-1">
                <p className="text-[9.5px] font-semibold text-ink-900">Upcoming Event</p>
                <p className="text-[8px] text-ink-700/50">Community meet · Sat</p>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl p-3 shadow-sm border border-ink-900/[0.04]">
              <p className="text-[9.5px] font-semibold text-ink-900 mb-2">Activity Feed</p>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1.5 bg-mist-100 rounded-full overflow-hidden">
                    <div className="h-full bg-royal-400/30 rounded-full" style={{ width: `${90 - i * 18}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.35]"
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
        <line x1="600" y1="120" x2="750" y2="40" />
      </g>
      <g fill="#F0782F">
        {[
          [100, 100], [350, 220], [600, 120], [880, 260],
          [420, 450], [1050, 180], [700, 520], [950, 430], [750, 40],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" opacity="0.4" />
        ))}
      </g>
    </svg>
  )
}
