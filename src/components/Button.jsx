import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-royal-600 text-white shadow-lift hover:bg-royal-700 active:scale-[0.98]',
  ghost:
    'bg-white/70 backdrop-blur text-ink-900 border border-ink-900/10 hover:bg-white hover:border-royal-400/40',
  outline:
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
  dark:
    'bg-ink-900 text-white hover:bg-ink-800',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  as = 'button',
  href,
  to,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[14.5px] transition-all duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon size={17} strokeWidth={2.2} />}
      {children}
    </>
  )

  const MotionTag = motion[as === 'a' ? 'a' : 'button']

  if (to) {
    return (
      <motion.a
        href={to}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <MotionTag
      href={href}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {content}
    </MotionTag>
  )
}
