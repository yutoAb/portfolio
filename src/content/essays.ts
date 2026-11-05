import type { Lang } from '../i18n/translations'

type L = Record<Lang, string>

export type TextEssay = {
  slug: string
  date: string
  image: string
  title: L
  summary: L
  lead: L
  sections: { heading: L; paragraphs: L[] }[]
  closing: L
}

// Text-only essays served at /essays/<slug>. Newest first.
export const textEssays: TextEssay[] = [
  {
    slug: 'what-only-humans-can-do',
    date: '2026-11-05',
    image: 'essays/what-only-humans-can-do.svg',
    title: {
      ja: '人間にできて、AI にまだできないこと',
      en: 'What humans can do that AI still cannot',
    },
    summary: {
      ja: 'テキストの知能では AI が勝る。それでも人間が勝っているのは、時間スケールの違う情報を同時に回しながら身体を動かすこと。',
      en: 'AI already wins at text-based intelligence. What humans still win at is running streams on different time scales at once — while moving a body.',
    },
    lead: {
      ja: '「人間にできて、AI にできないことは何か」。最近よく考える問いです。私の今の答えは、知能の高さではなく、「同時に回すこと」にあります。',
      en: '"What can humans do that AI cannot?" I have been thinking about this a lot. My current answer is not about how intelligent you are, but about running things at the same time.',
    },
    sections: [
      {
        heading: { ja: 'テキストの知能は、もう AI の方が強い', en: 'At text-based intelligence, AI is already stronger' },
        paragraphs: [
          {
            ja: '文章を読んで、考えて、文章で答える。この「テキストベースの知能」に限れば、もう AI の方が強いと感じています。知識の量でも、書く速さでも、人間が正面から勝てる場面は減り続けています。',
            en: 'Read text, think, answer in text. As far as this kind of text-based intelligence goes, I feel AI is already stronger. In breadth of knowledge and in speed of writing, the cases where a human wins head-on keep shrinking.',
          },
        ],
      },
      {
        heading: { ja: '人間が勝っているのは、時間スケールの違う情報を同時に回すこと', en: 'Where humans still win: running streams on different time scales at once' },
        paragraphs: [
          {
            ja: '一方で、人間が当たり前にやっていることがあります。聴覚の情報には数ミリ秒の単位で同期し、視覚の情報には数秒の単位で同期しながら、過去の情報を覚えたまま考え、そのうえで身体を動かす。これを全部、同時にやっています。',
            en: 'Meanwhile, there is something humans do without thinking. We sync to sound on a scale of milliseconds and to vision on a scale of seconds, keep thinking while holding on to what came before, and move our bodies on top of all that — all at once.',
          },
          {
            ja: 'たとえば対面で話しているとき、私たちは相手の声を聞きながら、話し終わる前に相槌を打ったり、割り込むタイミングを計ったりしています。同時に、相手の表情や手元を見て、さっきまでの話の流れも覚えています。料理をしながら会話をするのも同じです。',
            en: 'When we talk face to face, for example, we listen to the other person and nod along or time an interruption before they finish. At the same time, we watch their face and hands, and remember where the conversation has been. Chatting while cooking is the same thing.',
          },
          {
            ja: '一つひとつは AI にもできるようになってきています。でも、時間の刻みが違う情報を同時に処理しながら、身体を動かし続けることは、まだ人間にしかできていないと思います。',
            en: 'AI is getting good at each of these on its own. But processing streams with different clock rates simultaneously, while keeping a body in motion, is still something only humans can do.',
          },
        ],
      },
      {
        heading: { ja: 'だから、ブルーワーカーの仕事はまだ自動化できない', en: 'That is why blue-collar work cannot be automated yet' },
        paragraphs: [
          {
            ja: 'ホワイトカラーの仕事の多くは、テキストを読んで書くことに近いので、AI に置き換わり始めています。一方、現場で身体を動かす仕事は、まさに上の「同時に回す」ことの塊です。だから、ブルーワーカーの仕事はまだ自動化できていません。',
            en: 'Much white-collar work is close to reading and writing text, so AI is starting to take it over. Hands-on physical work, on the other hand, is exactly a bundle of that "run it all at once" ability. That is why blue-collar work has not been automated yet.',
          },
        ],
      },
      {
        heading: { ja: '埋めにいくのは、リアルタイム性とフィジカル AI', en: 'What closes the gap: real-time AI and physical AI' },
        paragraphs: [
          {
            ja: 'この差は、「リアルタイム性」と「フィジカル AI」が発展すれば埋められると考えています。私の研究と開発は、どちらもここに向かっています。',
            en: 'I believe this gap can be closed as real-time AI and physical AI mature. Both my research and my side projects point in that direction.',
          },
          {
            ja: '全二重音声対話の研究は、聞きながら話す、つまりミリ秒単位の同期を AI にさせる試みです。ロボットアームやヒューマノイドのプロジェクトは、そこに身体を足す試みです。その先に、私のビジョンである「衣食住の自動化」があります。',
            en: 'My research on full-duplex spoken dialogue is an attempt to make AI listen while it speaks — to sync at the millisecond scale. My robot-arm and humanoid projects add a body to that. Beyond them lies my long-term vision: automating the essentials of daily life.',
          },
        ],
      },
    ],
    closing: {
      ja: 'テキストの知能の次に問われるのは、同時に回す力です。そこを AI ができるようになったとき、初めて身体を使う仕事の自動化が始まると思っています。',
      en: 'After text-based intelligence, the next test is the ability to run everything at once. Only when AI can do that, I think, will the automation of physical work truly begin.',
    },
  },
  {
    slug: 'compute-and-questions',
    date: '2026-11-05',
    image: 'essays/compute-and-questions.svg',
    title: {
      ja: '計算資源は、研究の問いの形を変える',
      en: 'Compute shapes the questions research can ask',
    },
    summary: {
      ja: '予算の制約が問いを小さく切り出させること。そして、良い抽象化は手を動かした具体からしか生まれないこと。',
      en: 'How budget limits force questions to be carved down — and why good abstraction only comes from hands-on, concrete work.',
    },
    lead: {
      ja: '日本で音声対話モデルの研究をしていて、ずっと引っかかっていることがあります。研究の「問い」そのものが、計算資源の量で決まってしまっているのではないか、ということです。',
      en: 'Doing spoken dialogue research in Japan, one thing keeps nagging at me: the research question itself seems to be decided by how much compute you have.',
    },
    sections: [
      {
        heading: { ja: '問いが、解ける大きさまで切り出される', en: 'Questions get carved down to what you can afford' },
        paragraphs: [
          {
            ja: 'ある問題があって、本当はそれを正面から解きたい。でも、正面から解くのに必要な計算資源やデータは、予算的に用意できない。そこで、手元の資源で解ける大きさまで問題を切り出します。',
            en: 'There is a problem you genuinely want to tackle head-on. But the compute and data needed to do that are out of budget. So you carve the problem down to a size your resources can handle.',
          },
          {
            ja: '切り出すこと自体は研究の基本です。ただ、切り出しを重ねるうちに、元の問題の原型が残らないところまで来てしまうことがあります。そうなると、解けたとしても、最初に解きたかった問題には近づいていません。',
            en: 'Carving down is a basic research skill. But carve enough times and you can end up somewhere the original problem is barely recognizable. Even if you solve that, you have not moved much closer to the problem you started with.',
          },
        ],
      },
      {
        heading: { ja: '大規模モデルの時代には、差がそのまま問いの差になる', en: 'In the era of large models, the resource gap becomes a question gap' },
        paragraphs: [
          {
            ja: '思想のページにも書いたとおり、LLM ほどの規模になると、振る舞いはアーキテクチャではなくデータで決まり、勝負は「データを合成し、保存し、学習する」基盤を回せるかどうかになります。',
            en: 'As I wrote on the Philosophy page, at LLM scale behavior is shaped by data rather than architecture, and the contest becomes whether you can keep the infrastructure for synthesizing, storing, and training on data turning.',
          },
          {
            ja: 'だとすると、計算資源の差は、結果の差である前に、立てられる問いの差になります。同じテーマでも、資源のある場所では「正面から解く」問いが立ち、資源のない場所では「切り出した一部を解く」問いしか立たない。',
            en: 'If so, a gap in compute is a gap in which questions you can even ask, before it is a gap in results. On the same topic, a well-resourced lab can ask the head-on question, while a less-resourced one can only ask about a carved-out piece.',
          },
          {
            ja: 'だから私は、日本で積んだ研究を、より大きな問いに挑むための足場だと考えています。ここで身につけた手と目を、正面から問題を解ける場所で使いたい。',
            en: 'That is why I see the research I have done in Japan as a foothold for taking on bigger questions. I want to bring the hands and eyes I built here to a place where problems can be solved head-on.',
          },
        ],
      },
      {
        heading: { ja: '良い抽象化は、具体からしか生まれない', en: 'Good abstraction only comes from the concrete' },
        paragraphs: [
          {
            ja: '研究でもエンジニアリングでも、大事なのは抽象と具体を行き来することだと思っています。具体的な作業をしてみて初めて、どこが本質でどこが枝葉かが見えてきて、それが良い抽象化になります。',
            en: 'In research and engineering alike, I think what matters is moving back and forth between the abstract and the concrete. Only by doing the concrete work do you see what is essential and what is incidental — and that is what makes a good abstraction.',
          },
          {
            ja: '逆に、抽象の側にだけ居続けると、具体的な作業を自分ではできなくなり、他人に頼むしかなくなります。そうなると、抽象化の材料になる具体が手に入らないので、抽象の質も少しずつ落ちていきます。これは立場に関係なく、誰にでも起こりうることだと思います。',
            en: 'Conversely, if you stay only on the abstract side, you lose the ability to do the concrete work yourself and can only delegate it. Then you stop getting the concrete material that abstraction is made from, and the quality of your abstractions slowly erodes. I think this can happen to anyone, regardless of position.',
          },
        ],
      },
      {
        heading: { ja: '手を動かし続ける理由', en: 'Why I keep my hands moving' },
        paragraphs: [
          {
            ja: '手を動かしていると、受け取った助言や方針が、自分の問題に本当に当てはまるのかを、自分で判断できます。手を動かしていなければ、その判断ができず、言われたことをそのままやるしかありません。',
            en: 'When you are hands-on, you can judge for yourself whether a piece of advice or a direction really fits your problem. If you are not, you cannot make that judgment, and all you can do is follow what you are told.',
          },
          {
            ja: '学生のうちは特に、この判断ができるくらいには手を動かしていたいと思っています。そして将来、抽象を扱う立場になっても、具体から離れないでいたいです。',
            en: 'Especially as a student, I want to be hands-on enough to make that judgment. And even when I eventually work at a more abstract level, I want to stay close to the concrete.',
          },
        ],
      },
    ],
    closing: {
      ja: '計算資源が問いを決めるなら、問いを大きくするために、資源のある場所へ行く。抽象が具体から生まれるなら、手を動かし続ける。今のところ、この 2 つが私の結論です。',
      en: 'If compute decides the question, go where the compute is so the question can grow. If abstraction comes from the concrete, keep your hands moving. For now, those two are my conclusions.',
    },
  },
]
