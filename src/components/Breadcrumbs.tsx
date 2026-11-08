import { useT } from '../i18n/useT'

type Crumb = { label: string; href?: string }

// トップ › ブログ (or 思想) › <current>. The last crumb is the current page and is not a link.
export default function Breadcrumbs({ current, parent = 'blog' }: { current?: string; parent?: 'blog' | 'philosophy' | null }) {
  const t = useT()
  const crumbs: Crumb[] = [{ label: t('nav', 'top'), href: '/' }]
  if (parent === 'blog') crumbs.push({ label: t('nav', 'blog'), href: current ? '/blog' : undefined })
  if (parent === 'philosophy') crumbs.push({ label: t('nav', 'philosophy'), href: '/#philosophy' })
  if (current) crumbs.push({ label: current })

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/50">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2 min-w-0">
            {i > 0 && <span aria-hidden="true" className="text-white/30">›</span>}
            {c.href ? (
              <a href={c.href} className="hover:text-white transition-colors">
                {c.label}
              </a>
            ) : (
              <span aria-current="page" className="text-white/70 truncate max-w-[60vw] sm:max-w-md">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
