import type { Metadata } from "next";
import Link from "next/link";
import { AppScreen, Character } from "@/components/NeruzoImages";
import { features, neruzoAssets, storeLinks } from "@/lib/neruzo";
import { buttonNeru, buttonOutline, container, textLink } from "@/lib/styles";

export const metadata: Metadata = {
  title: "ねるぞう - 眠る前に、今日のことを話せるAIパートナー",
  description:
    "誰にも気を遣わず、今日あったことや今の気持ちを声で話せるAIキャラクター「ねるぞう」。話した後は、その夜に合う睡眠音声を提案します。",
};

const steps = [
  {
    title: "寝る前、ねるぞうに話す",
    description:
      "お布団に入ったら、ねるぞうを開きます。話題を選んでも、自由に話しても大丈夫。今日のできごとや気持ちを、思いつくまま声に出します。",
  },
  {
    title: "音声を聴く、またはそのまま眠る",
    description:
      "話し終えると、その夜に合う睡眠音声が提案されます。音声と一緒に体を休めても、そのまま「おやすみ」をして眠っても大丈夫です。",
  },
];

export default function ProductPage() {
  const published = features.filter((f) => f.status === "published");
  const planned = features.filter((f) => f.status === "planned");

  return (
    <>
      {/* Intro */}
      <section className="pt-16 lg:pt-20 bg-neru-wash">
        <div className={`${container} pt-20 pb-20 sm:pt-28 sm:pb-28`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-neru">
                プロダクト
              </p>
              <h1 className="mt-5 text-[2.75rem] sm:text-6xl font-bold tracking-[0.04em] leading-tight text-ink">
                ねるぞう
              </h1>
              <p className="mt-5 text-base sm:text-lg text-ink-soft">
                眠る前に、今日のことを話せるAIパートナー
              </p>

              <p className="jp-heading mt-12 text-lg sm:text-2xl font-medium leading-[1.8] text-ink">
                人に話すほどじゃない。
                <br />
                でも、誰かに聞いてほしい夜がある。
              </p>
              <p className="jp-phrase mt-8 max-w-[32em] text-base sm:text-[17px] leading-[2.05] text-ink-soft">
                ねるぞうは、誰にも気を遣わず、今日あったことや今の気持ちを話せるAIキャラクターです。話し終えたら、その夜に合う睡眠音声とともに、気持ちよく一日を終える時間へ。
              </p>

              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-5">
                {storeLinks.map((store) => (
                  <a
                    key={store.href}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonNeru}
                  >
                    {store.label}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">（新しいタブで開きます）</span>
                  </a>
                ))}
                <Link href="#features" className={textLink}>
                  できること
                </Link>
              </div>
            </div>

            <Character
              asset={neruzoAssets.character}
              sizes="(min-width: 1024px) 320px, 220px"
              className="mx-auto w-52 sm:w-64 lg:col-span-5 lg:w-80"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="scroll-mt-16 lg:scroll-mt-20"
      >
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-wide text-ink-meta">
                いま使える機能
              </p>
              <h2
                id="features-heading"
                className="mt-5 text-2xl sm:text-[2rem] font-bold leading-[1.6]"
              >
                話すこと、眠ること。
              </h2>

              <ol className="mt-12 border-t border-ink/80">
                {published.map((feature, index) => (
                  <li
                    key={feature.title}
                    className="grid gap-4 border-b border-rule py-10 sm:grid-cols-[4rem_1fr] sm:gap-6"
                  >
                    <span className="text-sm tabular-nums text-neru">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold leading-[1.6]">
                        {feature.title}
                      </h3>
                      <div className="mt-5 max-w-[32em] space-y-4 text-base leading-[2] text-ink-soft">
                        {feature.descriptions?.map((d) => (
                          <p key={d} className="jp-phrase">
                            {d}
                          </p>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto grid max-w-[30rem] grid-cols-2 gap-4 sm:gap-6 lg:sticky lg:top-28">
                <AppScreen
                  asset={neruzoAssets.screens[0]}
                  label="実機画面 1（会話画面）"
                  sizes="(min-width: 1024px) 200px, 45vw"
                />
                <div className="mt-16 sm:mt-20">
                  <AppScreen
                    asset={neruzoAssets.screens[1]}
                    label="実機画面 2"
                    sizes="(min-width: 1024px) 200px, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section aria-labelledby="usage-heading" className="bg-paper-deep">
        <div className={`${container} py-24 sm:py-32`}>
          <p className="text-sm tracking-wide text-ink-meta">使い方</p>
          <h2
            id="usage-heading"
            className="mt-5 text-2xl sm:text-[2rem] font-bold leading-[1.6]"
          >
            寝る前の、数分間。
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink/80 pt-8">
                <span className="text-sm tabular-nums text-neru">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-[1.6]">
                  {step.title}
                </h3>
                <p className="jp-phrase mt-4 text-base leading-[2] text-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planned */}
      {planned.length > 0 && (
        <section aria-labelledby="planned-heading">
          <div className={`${container} py-24 sm:py-32`}>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-sm tracking-wide text-ink-meta">準備中</p>
                <h2
                  id="planned-heading"
                  className="mt-5 text-2xl sm:text-[2rem] font-bold leading-[1.6]"
                >
                  これから届ける機能
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ul className="border-t border-rule">
                  {planned.map((feature) => (
                    <li key={feature.title} className="border-b border-rule py-6">
                      <h3 className="text-base sm:text-lg font-medium">
                        {feature.title}
                      </h3>
                      {feature.descriptions?.map((d) => (
                        <p
                          key={d}
                          className="jp-phrase mt-2 text-base leading-[1.9] text-ink-meta"
                        >
                          {d}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-ink-meta">
                  公開時期や内容は変更になる場合があります。
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section aria-labelledby="product-contact-heading" className="border-t border-rule">
        <div className={`${container} py-20 sm:py-24`}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h2
                id="product-contact-heading"
                className="text-2xl sm:text-[2rem] font-bold leading-[1.6]"
              >
                ねるぞうについてのお問い合わせ
              </h2>
              <p className="jp-phrase mt-6 max-w-[34em] text-base leading-[2] text-ink-soft">
                ご意見・ご要望、取材や協業のご相談は、お問い合わせフォームからお寄せください。
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link href="/contact" className={buttonOutline}>
                お問い合わせフォームへ
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
