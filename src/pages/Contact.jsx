import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, AtSign, MessageCircle, Camera, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import Button from '../components/Button'

const CONTACT_INFO = [
  { Icon: Mail, label: 'Email', value: 'support@vbaconnect.in' },
  { Icon: Phone, label: 'Phone', value: 'To be added' },
  { Icon: MapPin, label: 'Registered Office', value: 'To be added' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-24 overflow-hidden bg-mist-50">
        <FloatingShapes />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <span className="font-mono text-[12px] tracking-[0.18em] uppercase text-royal-500">
              Get in Touch
            </span>
            <h1 className="font-display text-[34px] sm:text-[44px] font-semibold text-ink-900 tracking-tight mt-2">
              We'd love to hear from you
            </h1>
            <p className="text-[16px] text-ink-700/65 mt-3">
              Questions, feedback, or support requests — our team typically
              responds within one business day.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
            {/* Left: contact info card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink-900 rounded-3xl p-8 sm:p-9 text-white relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-royal-500/20 rounded-full blur-2xl" />
              <h3 className="font-display text-[22px] font-semibold mb-2">Contact Information</h3>
              <p className="text-[14px] text-mist-100/60 mb-8 leading-relaxed">
                Reach out directly, or use the form and we'll get back to you.
              </p>

              <div className="space-y-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0">
                      <item.Icon size={17} className="text-royal-400" />
                    </div>
                    <div>
                      <p className="text-[12px] text-mist-100/50 font-mono uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-[14.5px] font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-7 border-t border-white/[0.08]">
                <p className="text-[12px] text-mist-100/50 font-mono uppercase tracking-wide mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[AtSign, MessageCircle, Camera].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-royal-500 hover:border-royal-500 transition-colors"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl shadow-soft border border-ink-900/[0.05] p-8 sm:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <CheckCircle2 size={48} className="text-verified mb-4" />
                  <h3 className="font-display text-[22px] font-semibold text-ink-900">
                    Message sent
                  </h3>
                  <p className="text-[14.5px] text-ink-700/60 mt-2 max-w-xs">
                    Thank you for reaching out. Our team will respond within one
                    business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    placeholder="Enter your full name"
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    placeholder="you@example.com"
                  />
                  <Field
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    placeholder="+91 00000 00000"
                  />
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    focused={focused}
                    setFocused={setFocused}
                    placeholder="How can we help?"
                  />

                  <Button variant="primary" icon={Send} type="submit" className="w-full !py-3.5">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

function Field({ label, name, value, onChange, focused, setFocused, placeholder, type = 'text', as = 'input', rows }) {
  const isFocused = focused === name
  const Tag = as

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`block text-[13px] font-medium mb-1.5 transition-colors ${
          isFocused ? 'text-royal-600' : 'text-ink-700/70'
        }`}
      >
        {label}
      </label>
      <motion.div
        animate={{ scale: isFocused ? 1.01 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Tag
          id={name}
          name={name}
          type={as === 'input' ? type : undefined}
          rows={rows}
          required
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          placeholder={placeholder}
          className={`w-full rounded-xl border bg-mist-50 px-4 py-3 text-[14.5px] text-ink-900 placeholder:text-ink-700/35 outline-none transition-all duration-200 resize-none ${
            isFocused
              ? 'border-royal-400 ring-2 ring-royal-400/15 bg-white'
              : 'border-ink-900/10'
          }`}
        />
      </motion.div>
    </div>
  )
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-royal-400/[0.06] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-royal-500/[0.05] rounded-full blur-3xl animate-float-delay" />
    </div>
  )
}
