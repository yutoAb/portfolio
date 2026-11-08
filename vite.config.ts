import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pageMetas } from './src/content/pageMeta'

const SITE = 'https://yutoabe.com'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Write dist/<path>.html for each sub-page: the same SPA shell with its own
// title/OGP tags. GitHub Pages serves /foo from foo.html with HTTP 200, so
// link previews and crawlers get the right card instead of the 404 redirect.
function pageMetaHtml(): Plugin {
  let outDir = 'dist'
  return {
    name: 'page-meta-html',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir
    },
    closeBundle() {
      const shell = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const m of pageMetas) {
        const url = `${SITE}${m.path}`
        const image = `${SITE}/${m.image}`
        const title = `${m.title} | 阿部 雄斗（Yuto Abe）`
        const set = (html: string, re: RegExp, value: string) => {
          if (!re.test(html)) throw new Error(`page-meta-html: no match for ${re}`)
          return html.replace(re, `$1${esc(value)}$2`)
        }
        let html = shell
        html = set(html, /(<title>)[^<]*(<\/title>)/, title)
        html = set(html, /(<meta name="description" content=")[^"]*(")/, m.description)
        html = set(html, /(<link rel="canonical" href=")[^"]*(")/, url)
        html = set(html, /(<meta property="og:type" content=")[^"]*(")/, 'article')
        html = set(html, /(<meta property="og:title" content=")[^"]*(")/, title)
        html = set(html, /(<meta property="og:description" content=")[^"]*(")/, m.description)
        html = set(html, /(<meta property="og:url" content=")[^"]*(")/, url)
        html = set(html, /(<meta property="og:image" content=")[^"]*(")/, image)
        html = set(html, /(<meta property="og:image:width" content=")[^"]*(")/, '1200')
        html = set(html, /(<meta property="og:image:height" content=")[^"]*(")/, '630')
        html = set(html, /(<meta name="twitter:image" content=")[^"]*(")/, image)
        html = set(html, /(<meta name="twitter:title" content=")[^"]*(")/, title)
        html = set(html, /(<meta name="twitter:description" content=")[^"]*(")/, m.description)
        const file = join(outDir, `${m.path.slice(1)}.html`)
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pageMetaHtml()],
  base: '/',
})
