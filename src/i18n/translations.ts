export type Lang = 'ja' | 'en'

type T = Record<Lang, string>

const translations = {
  hero: {
    subtitle: { ja: '阿部 雄斗', en: 'Yuto Abe' } as T,
    bio1: {
      ja: '早稲田大学 基幹理工学術院 修士2年。小林・小川研究室にて、全二重音声対話システムの研究に取り組んでいます。',
      en: "M2 at Waseda University, Graduate School of Fundamental Science and Engineering. Researching full-duplex spoken dialogue systems in Kobayashi-Ogawa Lab.",
    } as T,
    bio2_prefix: {
      ja: '国立情報学研究所 (NII) にてリサーチエンジニアとして、7Bパラメータの日本語全二重音声対話モデル',
      en: 'As a Research Engineer at the National Institute of Informatics (NII), lead developer of a 7B-parameter Japanese full-duplex spoken dialogue model',
    } as T,
    bio2_mid: { ja: 'を筆頭開発。', en: '.' } as T,
    bio2_suffix: { ja: 'にて筆頭著者として発表。', en: ' — presented as first author.' } as T,
    bio3: {
      ja: 'データ基盤を設計・構築するソフトウェアエンジニアリングと、データからモデルを生み出すデータサイエンスの両軸で、人とAIの自然なコミュニケーションの実現を目指しています。',
      en: 'Bridging software engineering for data infrastructure and data science for model building, I aim to realize natural communication between humans and AI.',
    } as T,
    bio4: {
      ja: '将来のビジョンとして、AIとテクノロジーの力で「衣食住の自動化」を実現し、誰もが生活の基盤を気にせず創造的な活動に集中できる社会をつくりたいと考えています。',
      en: 'My long-term vision is to automate the essentials of daily life — clothing, food, and housing — through AI and technology, creating a society where everyone can focus on creative pursuits.',
    } as T,
  },
  nav: {
    top: { ja: 'トップ', en: 'Top' } as T,
    philosophy: { ja: '思想', en: 'Philosophy' } as T,
    skills: { ja: 'スキル', en: 'Skills' } as T,
    profiles: { ja: 'プロフィール', en: 'Profiles' } as T,
    experience: { ja: '職務経歴', en: 'Experience' } as T,
    research: { ja: '研究', en: 'Research' } as T,
    projects: { ja: 'プロジェクト', en: 'Projects' } as T,
    education: { ja: '学歴', en: 'Education' } as T,
    contact: { ja: 'お問い合わせ', en: 'Contact' } as T,
  },
  philosophy: {
    sectionTitle: { ja: '思想', en: 'Philosophy' } as T,
    sectionLead: {
      ja: '日々の研究・開発・観察から形成されてきた、自分なりの世界の捉え方と、向かいたい未来。',
      en: 'My evolving way of seeing the world and the future I want to move toward — shaped by everyday research, engineering, and observation.',
    } as T,
    visionTitle: { ja: '衣食住の自動化と World API', en: 'Automating the Essentials & the World API' } as T,
    visionBody: {
      ja: '技術で生活基盤を自動化し、人間が創造的な活動に集中できる社会を作りたい。衣・食・住といった生きるための土台を丸ごと動かせる「World API」のような仕組みを、最終的には手元で扱えるようにしたい。',
      en: 'I want to use technology to automate life\'s essentials so that humans can focus on creative pursuits. My long-term goal is a "World API" that lets us orchestrate the foundations of living — clothing, food, and housing — as a first-class interface.',
    } as T,
    worldviewTitle: { ja: 'SWE × DS × BIZ の三位一体', en: 'The SWE × DS × BIZ Trinity' } as T,
    worldviewBody: {
      ja: '世界は 3 つの役割で回っていると捉えている。ルールベースでデータを動かす「ソフトウェアエンジニア」、そのデータからモデルを生み出す「データサイエンティスト」、出来上がったプロダクトをユーザーに届けて要望を汲み取る「ビジネスパーソン」。必要に応じてフィジカル (ハードウェア・ロボティクス) が加わる。自分は SWE と DS の両輪を自力で回せる人間でいたい。',
      en: 'I see the world running on three roles: software engineers who move data rule-based, data scientists who create models from that data, and business people who deliver the products and capture user needs. Physical domains (hardware/robotics) join when needed. I aim to be the kind of person who can personally cover both SWE and DS.',
    } as T,
    dreamTitle: { ja: '研究の先にある夢 — 個人の再現', en: 'A Dream Beyond Research — Recreating People' } as T,
    dreamBody: {
      ja: 'Black Mirror が描いたように、人間の音声対話や人格をデジタルで再現したい。全二重音声対話システムの研究の先には、いつか、失われた人とももう一度話せる未来があると信じている。',
      en: 'Inspired by Black Mirror, I want to digitally recreate human voice conversations and personalities. Beyond my research on full-duplex spoken dialogue systems, I imagine a future where we can speak once more with those we have lost.',
    } as T,
    observationTitle: { ja: 'ブラックボックスでも、データが揃えば再現できてしまう', en: 'Black Box or Not — Enough Data Will Reproduce It' } as T,
    observationBody: {
      ja: '音声対話研究と自動運転を間近で見ていて気づいたこと。入出力さえ決めてしまえば、モデルの中身がブラックボックスでも、ノイジーな大量データとクリーンなデータを積み上げていくだけで、悲しいかなそれを再現できるモデルが出来上がってしまう (調子の波はあれど)。これは、人間の対話や運転のような「知能らしい振る舞い」も例外ではない、という実感。',
      en: 'An observation from watching spoken dialogue research and self-driving closely: once you fix the input and output, even if the model itself is a black box, simply stacking massive noisy data together with clean data is enough to produce a model that — bittersweetly — reproduces the behavior (with some variance in quality). This applies to "intelligent-looking" behavior like conversation and driving too.',
    } as T,
    readMore: { ja: '続きを読む', en: 'Read more' } as T,
    close: { ja: '閉じる', en: 'Close' } as T,
    visionArticle: {
      ja: `自分の長期的なビジョンは、技術の力で「生きるための土台」を自動化することだ。衣・食・住という、人間が生まれてから死ぬまで避けて通れない基盤。これらを自動化できれば、人は本当に創造的な活動だけに時間を使えるようになる。

いまの世界は、この土台に膨大な人的リソースが投入されている。服を作る人、食事を作る人、家を建てる人、そしてそれらを届ける物流。どれも不可欠だが、AI とロボティクスの進歩で自動化できる領域が急速に広がっている。

「World API」という言葉で自分が考えているのは、この現実世界の基盤を、ソフトウェアから呼び出せる API として扱える未来だ。order_meal(), provide_housing(needs), deliver_clothes(style) — こういった抽象化を現実世界に対してできるようになれば、人間は「何を作りたいか」にだけ集中できる。

そのために、自分は今、データ基盤とモデル開発の両方を経験している。どちらか片方では足りない。現実世界から信頼できるデータを流し、そこから意思決定モデルを作り、物理世界にアクションを返す — この循環を作る側に回りたい。`,
      en: `My long-term vision is to use technology to automate the foundations of human life. Clothing, food, housing — the essentials nobody can escape from birth to death. If these can be automated, humans can truly spend their time on creative activities.

Today's world pours enormous human resources into these foundations. People who make clothes, prepare food, build houses, and the logistics that deliver all of it. All indispensable, but AI and robotics are rapidly expanding what can be automated.

When I say "World API," I mean a future where these real-world foundations can be invoked as APIs from software. order_meal(), provide_housing(needs), deliver_clothes(style) — if we can abstract the physical world this way, humans can focus purely on "what do we want to create?"

That's why I'm now gaining experience in both data infrastructure and model development. One without the other isn't enough. Flow trusted data from the real world, build decision-making models from it, return actions to the physical world — I want to be on the side that builds this loop.`,
    } as T,
    worldviewArticle: {
      ja: `世界を構成するソフトウェアは、大きく 3 つの役割で回っていると自分は見ている。

1. ルールベースでデータを動かす人 — ソフトウェアエンジニア。データベースに情報を入れ、API を通じてそれを取り出し、ユーザー画面に表示する。世界に存在するデータを、どう安全に・正しく・速く動かすかを突き詰める職能。

2. データから価値を抽出する人 — データサイエンティスト。動かされているデータをモデルに食わせ、予測・分類・生成を通じて「人間にとって useful な信号」を絞り出す。統計・機械学習の力で、ルールベースでは書けない知能を作り出す。

3. 出来上がったプロダクトをユーザーに届ける人 — ビジネスパーソン。プロダクトマーケター、セールス、事業責任者。ユーザーの声を拾い、プロダクトに要求としてフィードバックする。技術と市場の翻訳者。

この 3 者が揃って初めて、世の中に「使われる」ソフトウェアが生まれる。さらに、ハードウェア・ロボティクスが絡むと「フィジカル」なレイヤーが加わる。これらが噛み合って、初めて「衣食住の自動化」のような大きなビジョンに近づける。

自分は、SWE と DS の両輪を回せる存在でいたい。この 2 つを分断せず、データが生まれる瞬間からモデルが推論を返す瞬間まで、全部自分で触れる人間でありたい。`,
      en: `I see software-driven society running on three core roles.

1. People who move data rule-based — software engineers. They insert data into databases, retrieve it through APIs, display it on user screens. Professionals who pursue the question of how to move existing data safely, correctly, and quickly.

2. People who extract value from data — data scientists. They feed that flowing data into models to squeeze out "useful signals for humans" through prediction, classification, and generation. With statistics and ML, they create intelligence that rule-based code can't express.

3. People who deliver the product to users — business folks. Product marketers, salespeople, business leads. They capture user voices and feed them back as requirements. Translators between technology and market.

Only when these three come together does software that "gets used" come into the world. Add hardware and robotics, and a "physical" layer joins. All of these interlocking is what brings us closer to big visions like automating clothing, food, and housing.

I want to be someone who can personally turn both the SWE and DS wheels. Without splitting these two, I want to be the kind of person who can touch every step — from the moment data is born to the moment the model returns an inference.`,
    } as T,
    dreamArticle: {
      ja: `Black Mirror の "Be Right Back" というエピソードがある。亡くなった恋人の SNS ログから、AI が本人の声・人格・振る舞いを再現してくれるという話。見終わった後、ずっと忘れられなかった。

これは単なる SF ではなく、いま自分が研究している技術の延長線上にある未来だからだ。

自分は全二重音声対話システムを研究している。7B パラメータの音声対話モデルを日本語データで学習し、人間のように「相槌を打つ」「遮って話す」「黙って聞く」ことができる AI を作る。この研究が進んだ先には、誰か特定の個人の音声ログ・チャット履歴・動画があれば、その人の喋り方・考え方・人格までコピーされたデジタルコピーを作れる未来がある。

これが倫理的に難しいのは分かっている。本人の同意、遺族感情、死の受容。それでも、失われた人ともう一度話せる未来があるなら、それを可能にする側に自分は回りたい。

研究者としての好奇心だけではなく、人の人生の経験として「もう一度あの人と話したい」という感情は、誰にでもあるものだと思う。そこに技術で応えられるなら、応える価値があると思っている。`,
      en: `There's a Black Mirror episode called "Be Right Back." An AI recreates a deceased partner's voice, personality, and behavior from their social media logs. After watching, I couldn't forget it.

That's because this isn't just sci-fi — it's a future on the extension of the technology I research today.

I study full-duplex spoken dialogue systems. I train 7B-parameter spoken dialogue models on Japanese data to build AI that can backchannel, interrupt, and listen silently like humans. Beyond this research lies a future where, given someone's voice logs, chat history, and videos, we can create a digital copy that replicates their way of speaking, thinking, and personality.

I know the ethical difficulty — consent, grief, accepting death. Even so, if there's a future where we can speak once more with those we've lost, I want to be on the side that makes it possible.

Beyond researcher curiosity, I believe the feeling of "I want to talk to that person one more time" is something everyone carries. If technology can answer that, I think it's worth answering.`,
    } as T,
    dreamImageAlt: { ja: '個人を再現する AI のイメージ', en: 'Conceptual image of an AI recreating an individual' } as T,
    dreamImageCaption: {
      ja: 'イメージ：失われた人を、声・人格・振る舞いまで再現する未来',
      en: 'Image: a future where voice, personality, and behavior of the lost are recreated',
    } as T,
    observationArticle: {
      ja: `音声対話モデルの研究と、自動運転の進化を間近で見ていて、ある気持ち悪い洞察に辿り着いた。

「入力と出力さえ決めてしまえば、モデルの中身がブラックボックスでも、ノイジーなデータの大量とクリーンなデータの積み重ねで、それを再現するモデルが出来上がってしまう」

音声対話で言えば、膨大な人間同士の対話ログを食わせれば、人間らしい相槌・ターンテイキング・流暢さが出てくる。自動運転で言えば、大量のドライブレコーダー映像から、人間らしい運転判断が出てくる。

これは「悲しいかな」と付け加えたくなる洞察だ。なぜなら、人間の知能や判断が、特別な魔法ではなく、単にデータの分布を学習した関数近似で置き換え可能だと示唆しているから。

もちろん調子の良し悪しはあるし、エッジケースで失敗することもある。それでも平均的な振る舞いは、十分なデータと計算資源があれば再現できてしまう。

この洞察は、自分のキャリアの基礎になっている。「人間らしい振る舞い」を目指すのであれば、まずデータ基盤を作り、大量にデータを集める場を作ることが最短ルート。だからデータエンジニアリングと MLOps に自分は重みを置いている。`,
      en: `Watching spoken dialogue research and the evolution of self-driving up close, I've arrived at an uncomfortable insight.

"Once you fix the input and output, even if the model itself is a black box, simply stacking massive noisy data with clean data is enough to produce a model that reproduces the behavior."

In spoken dialogue: feed enough human conversation logs, and human-like backchanneling, turn-taking, and fluency emerge. In self-driving: feed enough dashcam footage, and human-like driving judgment emerges.

It's an insight that makes me want to add "bittersweetly" — because it suggests human intelligence and judgment aren't a special kind of magic, but are replaceable by function approximations that have simply learned a data distribution.

Of course there's variance in quality, and edge cases fail. Still, the average behavior can be reproduced given enough data and compute.

This insight has become the foundation of my career. If the goal is "human-like behavior," the shortest path is to first build the data infrastructure — create the place where massive amounts of data accumulate. That's why I put weight on data engineering and MLOps.`,
    } as T,
  },
  profiles: {
    sectionTitle: { ja: 'プロフィール・リンク', en: 'Profiles' } as T,
    swDescription: { ja: 'データ基盤の設計・構築、アルゴリズム', en: 'Data infrastructure, algorithms' } as T,
    dsDescription: { ja: 'データからモデルを構築、実験・分析', en: 'Model building, experiments & analysis' } as T,
    othersDescription: { ja: 'SNS・発信・キャリア', en: 'Social media & career' } as T,
  },
  experience: {
    sectionTitle: { ja: '職務経歴', en: 'Experience' } as T,
    gmo_company: { ja: 'GMOインターネットグループ', en: 'GMO Internet Group' } as T,
    gmo_role: { ja: 'エンジニアインターン', en: 'Engineering Intern' } as T,
    nii_company: { ja: '国立情報学研究所 (NII)', en: 'National Institute of Informatics (NII)' } as T,
    nii_role: { ja: 'リサーチエンジニア', en: 'Research Engineer' } as T,
    medley_company: { ja: '株式会社メドレー', en: 'Medley, Inc.' } as T,
    medley_role: { ja: 'エンジニアインターン', en: 'Engineering Intern' } as T,
    kubell_company: { ja: '株式会社kubell', en: 'kubell, Inc.' } as T,
    kubell_role: { ja: 'データサイエンスインターン', en: 'Data Science Intern' } as T,
    hitachi_company: { ja: '株式会社日立製作所 研究開発グループ', en: 'Hitachi, Ltd. R&D Group' } as T,
    hitachi_role: { ja: '研究インターン', en: 'Research Intern' } as T,
    accenture_company: { ja: 'アクセンチュア株式会社', en: 'Accenture' } as T,
    accenture_role: { ja: 'エンジニアインターン', en: 'Engineering Intern' } as T,
    baycurrent_company: { ja: 'ベイカレント・コンサルティング', en: 'BayCurrent Consulting' } as T,
    baycurrent_role: { ja: 'コンサルティングインターン', en: 'Consulting Intern' } as T,
    jus_company: { ja: '日本ユースウェアシステム株式会社', en: 'Japan Useware Systems Co., Ltd.' } as T,
    jus_role: { ja: 'ソフトウェアエンジニア', en: 'Software Engineer' } as T,
    carrot_company: { ja: '株式会社キャロットソフトウェア', en: 'Carrot Software Co., Ltd.' } as T,
    carrot_role: { ja: 'アルバイトエンジニア', en: 'Part-time Engineer' } as T,
    gmo_desc0: { ja: '2週間の集中プログラムで「天秤AI」（AI比較ツール）をエンドツーエンドで実装', en: 'Built "Tenbin AI" (AI comparison tool) end-to-end in a 2-week intensive program' } as T,
    nii_desc0: { ja: 'LLM-jp-Moshi-v1: 7Bパラメータの日本語全二重音声対話モデルを筆頭開発', en: 'LLM-jp-Moshi-v1: Lead development of a 7B-parameter Japanese full-duplex spoken dialogue model' } as T,
    nii_desc1: { ja: 'J-CHAT, CSJ, CallHome-Japanese等の多言語対話コーパスを用いたカリキュラム学習', en: 'Curriculum learning using multilingual dialogue corpora including J-CHAT, CSJ, and CallHome-Japanese' } as T,
    nii_desc2: { ja: 'ターンテイキング・相槌行動のモデリングに関する研究', en: 'Research on modeling turn-taking and backchanneling behavior' } as T,
    medley_desc0: { ja: 'LLMベースの医療対話要約の改善', en: 'Improved LLM-based medical dialogue summarization' } as T,
    medley_desc1: { ja: '薬品名の欠落や文脈参照の問題を解決', en: 'Resolved issues with missing drug names and contextual references' } as T,
    kubell_desc0: { ja: 'Chatworkの顧客データ分析に基づく経営戦略の立案', en: 'Business strategy planning based on Chatwork customer data analysis' } as T,
    hitachi_desc0: { ja: 'Qwen-Audio（大規模音声言語モデル）を用いたフェイク音声検出の研究', en: 'Research on fake speech detection using Qwen-Audio (large-scale audio language model)' } as T,
    accenture_desc0: { ja: '倉庫管理アプリケーションの開発', en: 'Development of a warehouse management application' } as T,
    baycurrent_desc0: { ja: '保険会社向けコンサルティングのグループディスカッション', en: 'Group discussion on consulting for insurance companies' } as T,
    jus_desc0: { ja: 'Elasticsearch + React + MUI によるアクセスログ分析ダッシュボードの設計・実装', en: 'Designed and built an access log analytics dashboard with Elasticsearch + React + MUI' } as T,
    jus_desc1: { ja: 'Elasticsearch集約の最適化によるAPIレスポンス遅延の解決', en: 'Resolved API response latency by optimizing Elasticsearch aggregations' } as T,
    jus_desc2: { ja: 'パフォーマンスプロファイリングに基づくフロントエンドレンダリングの最適化', en: 'Optimized frontend rendering based on performance profiling' } as T,
    carrot_desc0: { ja: 'システムのテスト業務', en: 'System testing' } as T,
  },
  research: {
    sectionTitle: { ja: '研究', en: 'Research' } as T,
    publicationsLabel: { ja: '論文発表', en: 'Publications' } as T,
    pub_asj_title: { ja: 'Moshiに基づく音声対話モデルの日本語ファインチューニングにおける対話データ特性の影響', en: 'Effects of Dialogue Corpora Properties on Fine-Tuning a Moshi-Based Spoken Dialogue Model in Japanese' } as T,
    bachelorThesisTitle: { ja: '卒業論文', en: "Bachelor's Thesis" } as T,
    bachelorThesisDesc: { ja: 'GPT-2言語モデルと音声認識モデルのモデルマージによる音声認識性能の向上', en: 'Improving speech recognition performance through model merging of GPT-2 language model and speech recognition model' } as T,
    videoLabel: { ja: '紹介動画', en: 'Introduction Video' } as T,
    researchInterestsTitle: { ja: '研究テーマ', en: 'Research Interests' } as T,
    topic1: { ja: '全二重音声対話システム', en: 'Full-duplex spoken dialogue systems' } as T,
    topic2: { ja: '音声トークン × LLM アーキテクチャ', en: 'Speech tokens x LLM architectures' } as T,
    topic3: { ja: 'ターンテイキング評価と音声トークン化', en: 'Turn-taking evaluation & speech tokenization' } as T,
    topic4: { ja: '音声モデルのための MLOps パイプライン', en: 'MLOps pipelines for speech models' } as T,
    mastersThesisTitle: { ja: '修士論文', en: "Master's Thesis" } as T,
    mastersThesisDesc: { ja: '全二重音声対話モデルの自然な雑談能力を継続的に評価・改善するためのインフラ中心 MLOps パイプライン', en: "Infrastructure-centric MLOps pipeline for continuously evaluating and improving full-duplex spoken dialogue models' natural chat ability" } as T,
    mastersAdviser: { ja: '指導教員: 小林哲則 教授 & 小川哲司 教授 — 早稲田大学', en: 'Adviser: Prof. Tetsunori Kobayashi & Prof. Tetsuji Ogawa — Waseda University' } as T,
    bachelorAdviser: { ja: '指導教員: 小林哲則 教授 & 小川哲司 教授 — 早稲田大学', en: 'Adviser: Prof. Tetsunori Kobayashi & Prof. Tetsuji Ogawa — Waseda University' } as T,
  },
  projects: {
    sectionTitle: { ja: 'プロジェクト', en: 'Projects' } as T,
    speechArena: { ja: 'リアルタイム全二重音声対話モデルのための人間中心A/B評価プラットフォーム。ブラインド比較とBradley-Terryランキングの統合を実現。', en: 'A human-centric A/B evaluation platform for real-time full-duplex spoken dialogue models. Integrates blind comparison with Bradley-Terry ranking.' } as T,
    changemakers: { ja: 'GPT-Realtime APIを活用したAI医療相談・予約アプリ。リアルタイム音声インタラクションによる病院の問診を実現。', en: 'An AI medical consultation & booking app powered by GPT-Realtime API. Enables hospital consultations via real-time voice interaction.' } as T,
    dreamBlossom: { ja: '個人の夢や目標を共有・追跡するWebアプリ。目標達成時に桜のアニメーションが咲く。', en: 'A web app for sharing and tracking personal dreams and goals. Cherry blossom animations bloom when goals are achieved.' } as T,
    globalMirai: { ja: 'AIとチャットして自分の課題を抽出し、世界各国の政策を取得して日本風にアレンジするシビックテックアプリ。チームみらい学生エンジニアとして開発。', en: 'A civic tech app that uses AI chat to identify your concerns, fetches global policies, and adapts them for Japan. Developed as a Team Mirai student engineer.' } as T,
    politicalQuiz: { ja: '政治に関するクイズが出題される「みんはや」風アプリ。複数人でのリアルタイム対戦に対応。', en: 'A "Minhaya"-style quiz app featuring politics questions. Supports real-time multiplayer battles.' } as T,
    fatherCompany: { ja: '企業紹介とお問い合わせ機能を備えたコーポレートサイト。', en: 'A corporate website with company introduction and contact form.' } as T,
    viewApp: { ja: 'View App', en: 'View App' } as T,
    close: { ja: '閉じる', en: 'Close' } as T,
  },
  education: {
    sectionTitle: { ja: '学歴・受賞・コミュニティ', en: 'Education, Awards & Communities' } as T,
    educationLabel: { ja: '学歴', en: 'Education' } as T,
    awardsLabel: { ja: '受賞', en: 'Awards' } as T,
    communitiesLabel: { ja: 'コミュニティ・課外活動', en: 'Communities & Activities' } as T,
    eduDate1: { ja: '2025年4月 - 2027年3月（見込み）', en: '2025 Apr - 2027 Mar (Expected)' } as T,
    eduTitle1: { ja: '早稲田大学 基幹理工学研究科 修士課程', en: 'Waseda University - Master of Engineering' } as T,
    eduSubtitle1: { ja: '情報理工・情報通信専攻', en: 'Computer Science & Communications' } as T,
    eduDetail1: { ja: '小林・小川研究室 / 全二重音声対話システム / LLM-jp 対話WG (国立情報学研究所)', en: 'Kobayashi-Ogawa Lab / Full-duplex spoken dialogue systems / LLM-jp Dialogue WG (NII)' } as T,
    eduDate2: { ja: '2021年4月 - 2025年3月', en: '2021 Apr - 2025 Mar' } as T,
    eduTitle2: { ja: '早稲田大学 基幹理工学部', en: 'Waseda University - Bachelor of Engineering' } as T,
    eduSubtitle2: { ja: '情報通信学科', en: 'Information & Communication Engineering' } as T,
    eduDetail2: { ja: 'GPA: 3.33 / 4.00', en: 'GPA: 3.33 / 4.00' } as T,
    award0Title: { ja: 'Progate ハッカソン 最優秀賞', en: 'Progate Hackathon Grand Prize' } as T,
    award0Project: { ja: 'Samether.io', en: 'Samether.io' } as T,
    award1Title: { ja: 'PKSHA ハッカソン 最優秀賞', en: 'PKSHA Hackathon Grand Prize' } as T,
    award1Project: { ja: 'Changemakers', en: 'Changemakers' } as T,
    award2Title: { ja: 'PR TIMES ハッカソン 個人優秀賞', en: 'PR TIMES Hackathon Individual Excellence Award' } as T,
    award2Project: { ja: 'Dream Blossom', en: 'Dream Blossom' } as T,
    communityMirai: { ja: 'チームみらい 学生運営エンジニアチーム', en: 'Team Mirai Student Engineer Team' } as T,
    communityMiraiDesc: { ja: 'テクノロジーと政策をつなぐシビックテック活動', en: 'Civic tech initiative bridging technology and policy' } as T,
    communityRecursion: { ja: 'Recursion', en: 'Recursion' } as T,
    communityRecursionDesc: { ja: 'CS基礎を体系的に学ぶプログラミング学習コミュニティ', en: 'A programming learning community for systematic CS fundamentals' } as T,
    communityRikoten: { ja: '理工展覧会', en: 'Rikoten (Science & Engineering Exhibition)' } as T,
    communityRikotenDesc: { ja: '早稲田大学の学園祭ホームページの作成', en: "Development of Waseda University's campus festival website" } as T,
    circlePadi: { ja: 'パディゴルフクラブ', en: 'Padi Golf Club' } as T,
    circlePadiDesc: { ja: 'ゴルフサークル', en: 'Golf circle' } as T,
    circleNeige: { ja: 'La Neige', en: 'La Neige' } as T,
    circleNeigeDesc: { ja: 'テニスサークル', en: 'Tennis circle' } as T,
    circleUtaou: { ja: '早稲田うたおう会', en: 'Waseda Utaou-kai' } as T,
    circleUtaouDesc: { ja: 'バンドサークル', en: 'Band circle' } as T,
  },
  skills: {
    sectionTitle: { ja: 'スキル', en: 'Skills' } as T,
    learningTitle: { ja: '学習中', en: 'Currently Learning' } as T,
    learningNote: {
      ja: 'データ基盤・システム側と大規模モデル学習側、両方向のスケールを取りにいくために学習中。',
      en: 'Scaling in both directions — data infrastructure/systems and large-scale model training.',
    } as T,
    learningToolsLabel: { ja: 'ツール', en: 'Tools' } as T,
    learningTopicsLabel: { ja: '注力領域', en: 'Focus Areas' } as T,
    topicMLOps: { ja: 'MLOps', en: 'MLOps' } as T,
    topicDistributed: { ja: '分散システム (PB級)', en: 'Distributed Systems (PB-scale)' } as T,
    topicRealtime: { ja: 'リアルタイム処理 (Kafka)', en: 'Real-time Streaming (Kafka)' } as T,
  },
  contact: {
    sectionTitle: { ja: 'お問い合わせ', en: 'Contact' } as T,
    name: { ja: 'お名前', en: 'Name' } as T,
    email: { ja: 'メールアドレス', en: 'Email' } as T,
    subject: { ja: '件名', en: 'Subject' } as T,
    message: { ja: 'お問い合わせ内容', en: 'Message' } as T,
    submit: { ja: '送信', en: 'Send' } as T,
    mailtoName: { ja: 'お名前', en: 'Name' } as T,
    mailtoEmail: { ja: 'メールアドレス', en: 'Email' } as T,
    mailtoMessage: { ja: 'お問い合わせ内容', en: 'Message' } as T,
  },
} as const

export default translations
