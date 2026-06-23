import { Link } from 'react-router-dom'

/**
 * The main site identity for Vanchit Bahujan Aaghadi (the party itself).
 * Distinct from <Logo />, which represents the VBA Connect member app —
 * a sub-brand kept for the digital membership platform.
 */
export default function PartyMasthead({ dark = false }) {
  const textColor = dark ? 'text-white' : 'text-ink-900'
  const subColor = dark ? 'text-mist-100/60' : 'text-ink-700/55'

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Vanchit Bahujan Aaghadi home">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="shrink-0">
        <circle cx="20" cy="20" r="19" fill="#1E3A8A" stroke="#C2742A" strokeWidth="1.2" />
        <path
          d="M20 9L29 14.5V25.5L20 31L11 25.5V14.5L20 9Z"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
          opacity="0.55"
        />
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontWeight="600"
          fontSize="14"
          fill="white"
        >
          VBA
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[17px] sm:text-[18px] font-semibold tracking-tight ${textColor}`}>
          Vanchit Bahujan Aaghadi
        </span>
        <span className={`font-mono text-[10px] tracking-[0.12em] uppercase mt-0.5 ${subColor}`}>
          Phule–Ambedkarite Movement
        </span>
      </span>
    </Link>
  )
}
