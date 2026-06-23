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
        <rect width="34" height="34" rx="9" fill="#1E3A8A" />
        <path
          d="M9 17.5L14 22.5L25 11"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="11" r="1.6" fill="#0FA968" className="group-hover:fill-white transition-colors" />
      </svg>
      <span className={`font-display text-[19px] font-semibold tracking-tight ${textColor}`}>
        VBA <span className="text-royal-400">Connect</span>
      </span>
    </Link>
  )
}
