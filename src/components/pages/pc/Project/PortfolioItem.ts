export type PortfolioItem = {
  title: string;
  description: string;
  link: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "To Do アプリ(App Engineでデプロイ)",
    description:
      "ReactとTypeScriptで作成したタスク管理アプリです。App Engine の /tmp に保存しているので，一定時間後にToDo データはすべて消えてしまいます。",
    link: "https://karu-web-taupe.vercel.app/",
  },
  {
    title: "父の会社のホームページ",
    description:
      "企業紹介とお問い合わせ機能を備えたホームページです。Next.jsとMUIで実装されています。",
    link: "https://www.heiseiyusou.co.jp/",
  },
  {
    title: "To Do アプリ(Cloud Run + Cloud SQLでデプロイ)",
    description:
      "Cloud RunとCloud SQLを使用してデプロイされたTo Do アプリです。永続的なデータ保存が可能です。",
    link: "https://flask-service-995640452429.asia-northeast1.run.app/",
  },
];
