export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type StoreLink = {
  label: string;
  href: string;
};

export type FeatureStatus = "published" | "planned";

export type Feature = {
  title: string;
  status: FeatureStatus;
  descriptions?: string[];
};

export const neruzoAssets: {
  character: ImageAsset | null;
  screens: [ImageAsset | null, ImageAsset | null];
} = {
  character: {
    src: "/neruzo/character.png",
    width: 838,
    height: 1024,
    alt: "ねるぞう。薄紫色の、大きな耳をした子ゾウのキャラクター",
  },
  screens: [
    {
      src: "/neruzo/screen-talk.jpg",
      width: 471,
      height: 1024,
      alt: "アプリ画面。「眠れない夜のパートナー ねるぞうに今の思いを話そう。」という見出しと、マイクボタンでねるぞうに声で話しかける画面",
    },
    {
      src: "/neruzo/screen-insight.jpg",
      width: 471,
      height: 1024,
      alt: "アプリ画面。「話してくれたことをねるぞうが分析 自分のことがもっと分かる」という見出しと、話した内容から見えた思考のクセをねるぞうが伝える画面",
    },
  ],
};

export const storeLinks: StoreLink[] = [
  {
    label: "App Storeで見る",
    href: "https://apps.apple.com/jp/app/id6776958736",
  },
];

export const features: Feature[] = [
  {
    title: "寝る前に、ねるぞうと声で話す",
    status: "published",
    descriptions: [
      "寝る前、ねるぞうが「今日はどんな一日だった？」とやさしく話しかけます。",
      "日記を書く必要はありません。今日あったこと、感じたこと、まだ言葉になっていないモヤモヤを、声で話すだけです。",
      "ねるぞうは、すぐに答えを出したり、良い・悪いで評価したりせず、その夜の話を受け止めます。",
    ],
  },
  {
    title: "その夜に合う睡眠音声の提案",
    status: "published",
    descriptions: [
      "話し終えた後は、会話の内容に合わせて、その夜に合う睡眠音声を提案します。",
      "音声を聴かず、そのまま眠ることも選べます。",
    ],
  },
  {
    title: "話した内容から、思考のクセを知る",
    status: "published",
    descriptions: [
      "話してくれた内容をもとに、ねるぞうがあなたの思考のクセを分析して伝えます。",
    ],
  },
  { title: "幸せのおまじない", status: "planned" },
  {
    title: "ねるぞうからのお手紙",
    status: "planned",
    descriptions: ["話した日々をふり返る、ねるぞうからのお手紙を準備しています。"],
  },
];
