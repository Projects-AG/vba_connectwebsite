import { Link } from 'react-router-dom'

export default function Logo({ dark = false }) {
  const textColor = dark ? 'text-white' : 'text-ink-900'
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="VBA Connect home">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        className="shrink-0"
      >
        <rect width="34" height="34" rx="9" fill={dark ? '#ffffff' : '#0F3B70'} />
        <path d="M8 18c4-2.5 14-2.5 18 0" stroke={dark ? '#0F3B70' : '#ffffff'} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 19v5M16 19v7M20 19v5M24 19v7" stroke="#F9C20D" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="19" cy="16" r="2" fill="#0FA968" />
      </svg>
      <span className={`font-display text-[19px] font-semibold tracking-tight ${textColor}`}>
        VBA <span className="text-royal-400">Connect</span>
      </span>
    </Link>
  )
}
