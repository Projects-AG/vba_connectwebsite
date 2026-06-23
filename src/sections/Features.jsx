import { Users, IdCard, Megaphone, CalendarDays, Network, FileCheck2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'

const FEATURES = [
  {
    title: 'Member Connect',
    description: 'Stay connected with organisation activities, news, and your local community.',
    Icon: Users,
  },
  {
    title: 'Digital Membership',
    description: 'Manage verified membership information securely from your phone.',
    Icon: IdCard,
  },
  {
    title: 'Announcements',
    description: 'Receive verified, trusted updates directly from the organisation.',
    Icon: Megaphone,
  },
  {
    title: 'Events & Activities',
    description: 'Discover and participate in programs happening near you.',
    Icon: CalendarDays,
  },
  {
    title: 'Volunteer Network',
    description: 'Coordinate effectively with fellow volunteers across regions.',
    Icon: Network,
  },
  {
    title: 'Transparency Tools',
    description: 'Track communication and activity with accountable, auditable records.',
    Icon: FileCheck2,
  },
]

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Platform Features"
          title="Everything you need, built into one app."
          subtitle="From verified membership to organised volunteering, VBA Connect brings every essential tool into a single, secure experience."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
