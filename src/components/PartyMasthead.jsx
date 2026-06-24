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
      <img
        src="/Logo.png"
        alt="Vanchit Bahujan Aaghadi logo"
        className="h-10 w-10 shrink-0 object-contain"
      />
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
