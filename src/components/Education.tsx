import { useInView } from './useInView'

type TimelineEntry = {
  date: string
  title: string
  subtitle?: string
  detail?: string
}

const education: TimelineEntry[] = [
  {
    date: '2025 Apr - 2027 Mar (Expected)',
    title: 'Waseda University - Master of Engineering',
    subtitle: 'Computer Science & Communications',
    detail: 'Kobayashi-Ogawa Lab / Full-duplex spoken dialogue systems / LLM-jp Dialogue WG (NII)',
  },
  {
    date: '2021 Apr - 2025 Mar',
    title: 'Waseda University - Bachelor of Engineering',
    subtitle: 'Information & Communication Engineering',
    detail: 'GPA: 3.33 / 4.00',
  },
]

const awards = [
  { year: '2025', title: 'PKSHA Hackathon Grand Prize', project: 'Changemakers' },
  { year: '2025', title: 'PR TIMES Hackathon Individual Excellence Award', project: 'Dream Blossom' },
]

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-pink text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Education & Awards</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <div className="relative pl-6 border-l-2 border-white/30 space-y-8">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white" />
                  <p className="text-sm text-white/60">{item.date}</p>
                  <p className="font-semibold text-lg">{item.title}</p>
                  {item.subtitle && <p className="text-white/80">{item.subtitle}</p>}
                  {item.detail && <p className="text-sm text-white/60 mt-1">{item.detail}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Awards</h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-200">
                      {award.year}
                    </span>
                  </div>
                  <p className="font-semibold">{award.title}</p>
                  <p className="text-sm text-white/70">{award.project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
