import { motion } from 'framer-motion'
import { ShieldCheck, MessageSquare, Users2, Lock } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const CARDS = [
  {
    title: 'Verified Network',
    description: 'Every member is authenticated, building a trusted and accountable community.',
    Icon: ShieldCheck,
  },
  {
    title: 'Instant Communication',
    description: 'Announcements and updates reach members directly, without delay or distortion.',
    Icon: MessageSquare,
  },
  {
    title: 'Digital Participation',
    description: 'Take part in programs, events, and discussions from anywhere, anytime.',
    Icon: Users2,
  },
  {
    title: 'Secure Platform',
    description: 'Role-based access and encrypted data keep every interaction protected.',
    Icon: Lock,
  },
]

export default function About() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="About VBA Connect"
          title="One Platform. One Connected Community."
          subtitle="VBA Connect is a digital bridge between people and organisation — built for structured communication, verified membership, and transparent digital coordination."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-ink-900/[0.06] shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-royal-500 to-royal-600 flex items-center justify-center mb-5 shadow-lg shadow-royal-600/20">
                <card.Icon size={19} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-[17px] font-semibold text-ink-900 mb-2">
                {card.title}
              </h3>
              <p className="text-[14px] text-ink-700/65 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
