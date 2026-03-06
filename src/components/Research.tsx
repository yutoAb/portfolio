import { useInView } from './useInView'

type Publication = {
  title: string
  venue: string
  year: string
  role: string
}

const publications: Publication[] = [
  {
    title: 'LLM-jp-Moshi-v1: A Japanese Full-Duplex Spoken Dialogue Model',
    venue: 'IWSDS 2026 (International Workshop on Spoken Dialogue Systems)',
    year: '2026',
    role: 'First Author',
  },
  {
    title: '日本語全二重音声対話モデルに関する発表',
    venue: 'ASJ Spring Meeting 2026 (日本音響学会 春季研究発表会)',
    year: '2026',
    role: 'First Author',
  },
]

const researchTopics = [
  'Full-duplex spoken dialogue systems',
  'Speech tokens x LLM architectures',
  'Turn-taking evaluation & speech tokenization',
  'MLOps pipelines for speech models',
]

export default function Research() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-slate-800 text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Research</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Publications</h3>
            <div className="space-y-6">
              {publications.map((pub, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold mb-1">{pub.title}</p>
                  <p className="text-sm text-white/70">{pub.venue}</p>
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200">
                      {pub.role}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                      {pub.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Research Interests</h3>
            <ul className="space-y-3">
              {researchTopics.map((topic, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white/80">{topic}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold mb-2">Master's Thesis</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Infrastructure-centric MLOps pipeline for continuously evaluating and improving
                full-duplex spoken dialogue models' natural chat ability
              </p>
              <p className="text-xs text-white/50 mt-2">
                Adviser: Prof. Tetsunori Kobayashi & Prof. Tetsuji Ogawa — Waseda University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
