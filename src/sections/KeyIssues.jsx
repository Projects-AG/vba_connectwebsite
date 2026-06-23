import { motion } from 'framer-motion'
import { ScrollText, GraduationCap, Briefcase, Users } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { KEY_ISSUES } from '../data/content'

const ICONS = [ScrollText, GraduationCap, Briefcase, Users]

export default function KeyIssues() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Manifesto & Key Issues"
          title="What We Stand For"
          subtitle="The causes that define our movement — argued in public, carried into the legislature."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {KEY_ISSUES.map((issue, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 bg-mist-50 rounded-2xl p-7 border border-ink-900/[0.05]"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center shrink-0">
                  <Icon size={21} className="text-accent-600" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-ink-900 mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-[14.5px] text-ink-700/65 leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
