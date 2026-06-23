import { Link } from 'react-router-dom'
import { AtSign, MessageCircle, Camera, Video, MapPin, Mail } from 'lucide-react'
import PartyMasthead from './PartyMasthead'
import { NAV_LINKS, ORG } from '../data/content'

const SOCIALS = [
  { Icon: AtSign, label: 'Facebook', href: ORG.socials.facebook },
  { Icon: MessageCircle, label: 'Twitter', href: ORG.socials.twitter },
  { Icon: Camera, label: 'Instagram', href: '#' },
  { Icon: Video, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12">
          <div>
            <PartyMasthead dark />
            <p className="mt-5 text-[14.5px] text-mist-100/60 leading-relaxed max-w-sm">
              A Phule–Ambedkarite movement for fair representation, social
              justice, and a Parliament that truly reflects the people it
              serves.
            </p>
            <div className="mt-5 space-y-2">
              <p className="flex items-start gap-2 text-[13.5px] text-mist-100/55">
                <MapPin size={15} className="mt-0.5 shrink-0 text-royal-400" />
                {ORG.office}
              </p>
              <p className="flex items-center gap-2 text-[13.5px] text-mist-100/55">
                <Mail size={15} className="shrink-0 text-royal-400" />
                {ORG.email}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[12px] tracking-[0.16em] uppercase text-mist-100/50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[14.5px] text-mist-100/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] tracking-[0.16em] uppercase text-mist-100/50 mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-royal-500 hover:border-royal-500 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href={ORG.membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-[13.5px] font-semibold text-accent-400 hover:text-accent-50 transition-colors"
            >
              Join VBA →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-mist-100/45">
            © {new Date().getFullYear()} Vanchit Bahujan Aaghadi. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-[13px] text-mist-100/55 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[13px] text-mist-100/55 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
