export type Lang = 'ja' | 'en'

type T = Record<Lang, string>

const translations = {
  hero: {
    subtitle: { ja: '阿部 雄斗', en: 'Yuto Abe' } as T,
    bio1: {
      ja: '早稲田大学 基幹理工学術院 修士1年。小林・小川研究室にて、全二重音声対話システムの研究に取り組んでいます。',
      en: "M1 at Waseda University, Graduate School of Fundamental Science and Engineering. Researching full-duplex spoken dialogue systems in Kobayashi-Ogawa Lab.",
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
  profiles: {
    sectionTitle: { ja: 'プロフィール', en: 'Profiles' } as T,
    swDescription: { ja: 'データ基盤の設計・構築、アルゴリズム', en: 'Data infrastructure, algorithms' } as T,
    dsDescription: { ja: 'データからモデルを構築、実験・分析', en: 'Model building, experiments & analysis' } as T,
    othersDescription: { ja: 'SNS・発信・キャリア', en: 'Social media & career' } as T,
  },
  experience: {
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
    pub_asj_title: { ja: '日本語全二重音声対話モデルに関する発表', en: 'Presentation on Japanese Full-Duplex Spoken Dialogue Models' } as T,
    bachelorThesisTitle: { ja: "Bachelor's Thesis", en: "Bachelor's Thesis" } as T,
    bachelorThesisDesc: { ja: 'GPT-2言語モデルと音声認識モデルのモデルマージによる音声認識性能の向上', en: 'Improving speech recognition performance through model merging of GPT-2 language model and speech recognition model' } as T,
    videoLabel: { ja: '紹介動画', en: 'Introduction Video' } as T,
  },
  projects: {
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
    communityMirai: { ja: 'チームみらい 学生運営エンジニアチーム', en: 'Team Mirai Student Engineer Team' } as T,
    communityMiraiDesc: { ja: 'テクノロジーと政策をつなぐシビックテック活動', en: 'Civic tech initiative bridging technology and policy' } as T,
    communityRecursion: { ja: 'Recursion', en: 'Recursion' } as T,
    communityRecursionDesc: { ja: 'CS基礎を体系的に学ぶプログラミング学習コミュニティ', en: 'A programming learning community for systematic CS fundamentals' } as T,
    communityRikoten: { ja: '理工展覧会', en: 'Rikoten (Science & Engineering Exhibition)' } as T,
    communityRikotenDesc: { ja: '早稲田大学の学園祭ホームページの作成', en: "Development of Waseda University's campus festival website" } as T,
  },
  contact: {
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
