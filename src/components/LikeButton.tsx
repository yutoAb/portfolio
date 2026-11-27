import { useLang } from '../i18n/LangContext'
import { useLike } from '../lib/likes'

function Heart({ filled, className }: { filled: boolean; className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5s-7.5-4.4-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.7-7.5 10.1-7.5 10.1Z" />
    </svg>
  )
}

/** Count only, for lists where the whole row is already a link. Hidden until there is at least one like. */
export function LikeCount({ id }: { id: string }) {
  const { count, liked } = useLike(id)
  if (!count) return null
  return (
    <span className={`inline-flex items-center gap-1 text-xs tabular-nums ${liked ? 'text-pink-300' : 'text-white/50'}`}>
      <Heart filled={liked} className="w-3.5 h-3.5" />
      {count}
    </span>
  )
}

/** The button at the end of a post. */
export default function LikeButton({ id }: { id: string }) {
  const { lang } = useLang()
  const { count, liked, toggle } = useLike(id)
  const label = lang === 'ja' ? (liked ? 'いいねを取り消す' : 'いいね') : liked ? 'Remove like' : 'Like'

  return (
    <div className="flex justify-center pt-4">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={liked}
        aria-label={label}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors cursor-pointer ${
          liked
            ? 'border-pink-300/60 bg-pink-400/15 text-pink-200'
            : 'border-white/20 text-white/80 hover:border-pink-300/60 hover:text-pink-200'
        }`}
      >
        <Heart filled={liked} className="w-5 h-5" />
        <span className="text-sm font-medium">{lang === 'ja' ? 'いいね' : 'Like'}</span>
        <span className="text-sm tabular-nums min-w-[1ch]">{count ?? ''}</span>
      </button>
    </div>
  )
}
