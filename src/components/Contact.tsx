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

        <div className="flex flex-col md:flex-row gap-12 items-start">
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

          <img
            src={icon}
            alt="icon"
            className="hidden md:block w-64 object-contain"
          />
        </div>
      </div>
    </section>
  )
}
