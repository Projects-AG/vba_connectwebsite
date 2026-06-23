import { motion } from 'framer-motion'
import { ArrowRight, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { NEWS } from '../data/content'

export default function NewsFeed() {
  return (
    <section className="relative py-24 sm:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Latest Updates"
            title="News & Press Releases"
            align="left"
          />
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-royal-600 hover:text-royal-700 shrink-0"
          >
            View all news <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {NEWS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-2xl p-6 border border-ink-900/[0.06] shadow-soft hover:shadow-card hover:border-royal-400/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-royal-50 flex items-center justify-center">
                  <Newspaper size={15} className="text-royal-600" />
                </div>
                <span className="font-mono text-[12px] text-ink-700/50 tracking-wide">
                  {item.date}
                </span>
              </div>
              <h3 className="font-display text-[18px] font-semibold text-ink-900 leading-snug mb-2.5 group-hover:text-royal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] text-ink-700/65 leading-relaxed">
                {item.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
