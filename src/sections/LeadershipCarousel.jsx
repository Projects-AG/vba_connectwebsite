import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { LEADERSHIP } from '../data/content'

const AUTOPLAY_MS = 5500

export default function LeadershipCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (next === 0 && index === LEADERSHIP.length - 1) ? 1 : -1)
      setIndex(((next % LEADERSHIP.length) + LEADERSHIP.length) % LEADERSHIP.length)
    },
    [index]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % LEADERSHIP.length)
    }, AUTOPLAY_MS)
    return () => clearTimeout(timerRef.current)
  }, [index, paused])

  const leader = LEADERSHIP[index]

  return (
    <section className="relative py-24 sm:py-28 bg-ink-800 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 -z-0 opacity-[0.5]">
        <TricolorGlow />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Our Leadership"
          title="The People Carrying the Movement Forward"
          subtitle="Leaders from across the organisation, drawn from the communities VBA represents."
          light
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl px-6 sm:px-14 py-10 sm:py-14 overflow-hidden">
            {/* top tricolor rule — strong-party signal, used as a thin structural accent, not a wash */}
            <div className="absolute top-0 inset-x-0 h-[3px] flex">
              <div className="flex-1 bg-accent-500" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-leaf-500" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={leader.name}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-[auto_1fr] gap-7 sm:gap-9 items-center"
              >
                <div className="flex justify-center sm:justify-start">
                  <PortraitPlaceholder leader={leader} />
                </div>

                <div className="text-center sm:text-left">
                  <Quote size={24} className="text-accent-400/70 mb-4 mx-auto sm:mx-0" />
                  <p className="font-display text-[19px] sm:text-[21px] text-white leading-[1.5] font-medium">
                    {leader.bio}
                  </p>
                  <div className="mt-6">
                    <p className="text-[16px] font-semibold text-white">{leader.name}</p>
                    <p className="text-[13.5px] text-mist-100/55 mt-0.5">{leader.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow controls */}
          <button
            onClick={prev}
            aria-label="Previous leader"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-5 w-11 h-11 rounded-full bg-white/[0.08] border border-white/15 items-center justify-center text-white hover:bg-accent-600 hover:border-accent-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next leader"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-5 w-11 h-11 rounded-full bg-white/[0.08] border border-white/15 items-center justify-center text-white hover:bg-accent-600 hover:border-accent-600 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {LEADERSHIP.map((item, i) => (
              <button
                key={item.name}
                onClick={() => goTo(i)}
                aria-label={`Go to ${item.name}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-accent-500' : 'w-2 bg-white/25 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe-style arrows below */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous leader"
              className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next leader"
              className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Placeholder portrait. Swap in a real photo by setting `leader.photo` to an
 * image path/import — when present, an <img> renders instead of the
 * initials avatar. Real photographs of named individuals should be supplied
 * by the organization rather than sourced generically.
 */
function PortraitPlaceholder({ leader }) {
  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 ring-2 ring-white/10">
      {leader.photo ? (
        <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center">
          <span className="font-display text-[34px] sm:text-[42px] font-semibold text-white/90">
            {leader.initials}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 inset-x-0 h-1.5 flex">
        <div className="flex-1 bg-accent-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-leaf-500" />
      </div>
    </div>
  )
}

function TricolorGlow() {
  return (
    <>
      <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] bg-accent-600/[0.10] rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[380px] h-[380px] bg-royal-500/[0.12] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[340px] h-[340px] bg-leaf-500/[0.08] rounded-full blur-3xl" />
    </>
  )
}
