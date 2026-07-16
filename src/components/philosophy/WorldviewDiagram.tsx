import { useT } from '../../i18n/useT'

export default function WorldviewDiagram() {
  const t = useT()
  return (
    <svg
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={t('philosophy', 'worldviewImageAlt')}
      className="w-full block"
      style={{ fontFamily: 'ui-sans-serif, -apple-system, system-ui, sans-serif' }}
    >
      <rect x="60" y="470" width="680" height="50" rx="10" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.4)" strokeWidth="1.5" />
      <text x="400" y="502" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="17" fontWeight="500">
        {t('philosophy', 'worldviewDiagramPhysical')}
      </text>

      <ellipse cx="400" cy="350" rx="310" ry="90" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.7)" strokeWidth="2" />
      <text x="400" y="405" textAnchor="middle" fill="#6ee7b7" fontSize="24" fontWeight="700">BIZ</text>
      <text x="400" y="428" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">
        {t('philosophy', 'worldviewDiagramBIZSub')}
      </text>

      <circle cx="290" cy="180" r="140" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.85)" strokeWidth="2" />
      <text x="185" y="155" textAnchor="middle" fill="#7dd3fc" fontSize="24" fontWeight="700">SWE</text>
      <text x="185" y="178" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="11">
        {t('philosophy', 'worldviewDiagramSWESub')}
      </text>

      <circle cx="510" cy="180" r="140" fill="rgba(192,132,252,0.18)" stroke="rgba(192,132,252,0.85)" strokeWidth="2" />
      <text x="615" y="155" textAnchor="middle" fill="#c4b5fd" fontSize="24" fontWeight="700">DS</text>
      <text x="615" y="178" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="11">
        {t('philosophy', 'worldviewDiagramDSSub')}
      </text>

      <text x="400" y="188" textAnchor="middle" fill="#fde68a" fontSize="16" fontWeight="700">MLOps</text>
    </svg>
  )
}
