import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "ねるぞう - 話して心を整える、眠る前のAIパートナー",
  description:
    "誰にも気を遣わず、今日あったことや今の気持ちを話せるAIキャラクター「ねるぞう」。話すうちに心を整え、今夜のあなたに合う睡眠音声とともに静かに眠る準備へ。",
};

const overview = [
  "人に話すほどじゃない。",
  "でも、誰かに聞いてほしい夜がある。",
  "ねるぞうは、誰にも気を遣わず、今日あったことや今の気持ちを話せるAIキャラクターです。",
  "話すうちに頭の中が少しずつほどけ、今夜のあなたに合う睡眠音声とともに、静かに眠る準備へ。話した日々は「ねるぞうからのお手紙」として返り、少しずつ自分のことも見えてきます。",
];

const features = [
  {
    number: "01",
    title: "誰にも気を遣わず話せる、夜の対話",
    descriptions: [
      "寝る前、ねるぞうが「今日はどんな一日だった？」とやさしく話しかけます。",
      "日記を書く必要はありません。今日あったこと、感じたこと、まだ言葉になっていないモヤモヤを、声で自然に話すだけ。",
      "ねるぞうは、すぐに答えを出したり、良い・悪いで評価したりせず、その夜の気持ちを受け止めながら、頭の中を一緒にほどいていきます。",
    ],
  },
  {
    number: "02",
    title: "今夜のあなたに寄り添う睡眠音声",
    descriptions: [
      "話し終えた後は、会話から見えてきた気持ちやテーマに合わせて、その夜に合う睡眠音声を提案します。",
      "今すぐ答えを出さなくてもよい状態で、呼吸と体をゆるめ、静かに眠る準備へ。",
      "音声を聴かず、そのまま眠ることも選べます。",
    ],
  },
  {
    number: "03",
    title: "話すほど自分が見えてくる、ねるぞうからのお手紙",
    descriptions: [
      "ねるぞうは、毎晩話してくれた言葉や出来事を少しずつ覚えています。",
      "一週間ごとに届く「ねるぞうからのお手紙」では、別々に見えた夜のつながりや、何度か現れていた気持ちを、決めつけずにそっと返します。",
      "違っていたら訂正することもできます。ねるぞうと一緒に理解を育てながら、話すほど少しずつ、自分の考え方や大切にしていることが見えてきます。",
    ],
  },
];

const steps = [
  {
    title: "寝る前、ねるぞうに話す",
    descriptions: [
      "お布団に入ったら、ねるぞうを開きます。",
      "話題を選んでも、自由に話しても大丈夫。今日のできごとや気持ちを、思いつくまま声に出します。",
    ],
  },
  {
    title: "音声を聴く、またはそのまま眠る",
    descriptions: [
      "話した内容がやさしく整理された後、今夜の状態に合う睡眠音声が提案されます。",
      "音声と一緒に体を休めても、そのまま「おやすみ」をして眠っても大丈夫です。",
    ],
  },
  {
    title: "ねるぞうからのお手紙を受け取る",
    descriptions: [
      "話した日々が積み重なると、ねるぞうからお手紙が届きます。",
      "一週間を良い・悪いで採点するのではなく、ねるぞうが覚えていた言葉や出来事を一緒に振り返り、自分では見落としていたつながりに気づいていきます。",
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 sm:pt-44 sm:pb-32 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lavender/[0.03] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-6">
              Product
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 mb-6">
              ねるぞう
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-[1.9] max-w-lg mx-auto mb-10">
              話して心を整える、眠る前のAIパートナー
            </p>
            <div className="space-y-5 text-white/30 text-base leading-[2] max-w-lg mx-auto text-left sm:text-center">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 sm:py-44 bg-mist">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-lavender-muted text-sm tracking-[0.3em] uppercase mb-16">
              Features
            </p>
          </FadeIn>

          <div className="space-y-20 sm:space-y-24">
            {features.map((feature, index) => (
              <FadeIn key={feature.number} delay={index * 0.1}>
                <div>
                  <span className="text-lavender/30 text-sm tracking-[0.15em]">
                    {feature.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-night mt-3 mb-5">
                    {feature.title}
                  </h3>
                  <div className="space-y-5">
                    {feature.descriptions.map((description) => (
                      <p
                        key={description}
                        className="text-night/40 text-base leading-[2] max-w-lg"
                      >
                        {description}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-32 sm:py-44 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-8">
              How to Use
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-16">
              使い方
            </h2>
          </FadeIn>

          <div className="space-y-14">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <span className="text-lavender/25 text-sm tracking-[0.15em] shrink-0 pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white/75 mb-3">
                      {step.title}
                    </h3>
                    <div className="space-y-4">
                      {step.descriptions.map((description) => (
                        <p
                          key={description}
                          className="text-white/30 text-base leading-[1.9]"
                        >
                          {description}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 sm:py-44 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-night mb-6">
              ねるぞうについて
            </h2>
            <p className="text-night/35 text-base leading-[1.9] mb-12">
              ご質問・ご要望・取材のお申し込みなど、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-wide bg-night text-white/70 rounded-full hover:bg-night-800 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
