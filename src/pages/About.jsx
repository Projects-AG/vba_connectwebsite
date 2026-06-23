import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import Philosophy from '../sections/Philosophy'
import HistoryTimeline from '../sections/HistoryTimeline'
import Wings from '../sections/Wings'
import { LEADER, ORG } from '../data/content'

export default function About() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-ink-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-royal-500/[0.12] rounded-full blur-3xl -z-0" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[12px] tracking-[0.18em] uppercase text-accent-400"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 font-display text-[34px] sm:text-[48px] font-semibold text-white tracking-tight leading-[1.1]"
          >
            A Republican's Legacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[16.5px] text-mist-100/70 leading-relaxed"
          >
            From the Bhartiya Republican Paksha of 1984 to the Vanchit Bahujan
            Aaghadi of today — four decades of organising for representation,
            land rights, and social justice.
          </motion.p>
        </div>
      </section>

      {/* Leader block */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-[auto_1fr] gap-7 items-start bg-mist-50 rounded-3xl p-8 sm:p-10 border border-ink-900/[0.05]"
          >
            <div className="w-20 h-20 rounded-full bg-royal-600 flex items-center justify-center font-display text-[26px] font-semibold text-white shrink-0">
              PA
            </div>
            <div>
              <h2 className="font-display text-[22px] font-semibold text-ink-900">
                {LEADER.name}
              </h2>
              <p className="text-[14px] text-royal-600 font-medium mt-0.5">
                {LEADER.title}
              </p>
              <p className="mt-4 text-[15px] text-ink-700/70 leading-relaxed">
                Founded Vanchit Bahujan Aaghadi on {ORG.founded}, uniting
                nearly 100 progressive parties and social organisations under
                a single banner committed to fair representation for
                communities long excluded from Indian politics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Philosophy />
      <HistoryTimeline />
      <Wings />

      {/* Contact strip */}
      <section className="py-20 bg-mist-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <SectionTitle eyebrow="Reach Us" title="Visit or Write to VBA" />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex items-center gap-2.5 text-[14.5px] text-ink-700/75">
              <MapPin size={17} className="text-royal-600 shrink-0" />
              {ORG.office}
            </div>
            <div className="flex items-center gap-2.5 text-[14.5px] text-ink-700/75">
              <Mail size={17} className="text-royal-600 shrink-0" />
              {ORG.email}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
