import { useState } from 'react'
import { useInView } from './useInView'
import icon from '../assets/icon.png'
import { useT } from '../i18n/useT'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const t = useT()

  const update = (field: string, value: string) => setForm({ ...form, [field]: value })

  const handleSubmit = () => {
    const { name, email, subject, message } = form
    const user = 'yuto27abe'
    const domain = 'gmail.com'
    const to = `${user}@${domain}`
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `${t('contact', 'mailtoName')}：${name}\n${t('contact', 'mailtoEmail')}：${email}\n\n${t('contact', 'mailtoMessage')}：\n${message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section className="min-h-screen bg-purple text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('contact', 'sectionTitle')}</h2>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full max-w-lg space-y-4">
            {[
              { label: t('contact', 'name'), field: 'name', type: 'text' },
              { label: t('contact', 'email'), field: 'email', type: 'email' },
              { label: t('contact', 'subject'), field: 'subject', type: 'text' },
            ].map(({ label, field, type }) => (
              <div key={field}>
                <label className="block text-sm mb-1 text-white/80">{label}</label>
                <input
                  type={type}
                  value={form[field as keyof typeof form]}
                  onChange={(e) => update(field, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm mb-1 text-white/80">{t('contact', 'message')}</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-white text-purple font-semibold rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
            >
              {t('contact', 'submit')}
            </button>
          </div>

          <div className="flex relative w-56 md:w-72 shrink-0 items-center justify-center py-6 md:py-10 group">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-80 w-80 md:h-[28rem] md:w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(240,171,252,0.55)_0%,rgba(167,139,250,0.42)_28%,rgba(94,66,166,0.20)_55%,transparent_78%)] blur-3xl animate-[glow-pulse_5s_ease-in-out_infinite] motion-reduce:animate-none"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-48 w-48 md:h-64 md:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,230,255,0.9)_0%,rgba(216,180,254,0.55)_38%,transparent_70%)] blur-2xl animate-[glow-pulse-inner_3.5s_ease-in-out_infinite] motion-reduce:animate-none"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-[shimmer-orbit_18s_linear_infinite] motion-reduce:animate-none"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_16px_6px_rgba(240,171,252,0.7)]" />
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-64 w-64 md:h-80 md:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-[shimmer-orbit_26s_linear_infinite] [animation-direction:reverse] motion-reduce:animate-none"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-200 shadow-[0_0_12px_4px_rgba(196,181,253,0.7)]" />
            </div>
            <img
              src={icon}
              alt="icon"
              className="relative w-44 md:w-64 object-contain animate-[gentle-float_5s_ease-in-out_infinite] motion-reduce:animate-none transition-transform duration-500 group-hover:scale-[1.10] group-hover:rotate-[2deg] drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
