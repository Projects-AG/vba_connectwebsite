import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { NEWS } from '../data/content'

export default function News() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24 bg-mist-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-royal-500">
              Press Room
            </span>
            <h1 className="font-display text-[34px] sm:text-[44px] font-semibold text-ink-900 tracking-tight mt-2">
              News & Press Releases
            </h1>
            <p className="text-[16px] text-ink-700/65 mt-3">
              Statements, campaign updates, and organisational announcements
              from Vanchit Bahujan Aaghadi.
            </p>
          </motion.div>

          <div className="space-y-5">
            {NEWS.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-ink-900/[0.06] shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-royal-50 flex items-center justify-center">
                    <Newspaper size={15} className="text-royal-600" />
                  </div>
                  <span className="font-mono text-[12.5px] text-ink-700/50 tracking-wide">
                    {item.date}
                  </span>
                </div>
                <h2 className="font-display text-[20px] font-semibold text-ink-900 leading-snug mb-3">
                  {item.title}
                </h2>
                <p className="text-[15px] text-ink-700/70 leading-relaxed">
                  {item.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
