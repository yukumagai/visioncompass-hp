import Link from "next/link";
import DevPlaceholder from "@/components/DevPlaceholder";
import { AppScreen, Character } from "@/components/NeruzoImages";
import { features, neruzoAssets, storeLinks } from "@/lib/neruzo";
import {
  buttonNeru,
  buttonOutline,
  container,
  focusRing,
  textLink,
} from "@/lib/styles";

const usage = [
  {
    term: "こんな人に",
    description: "一日の終わりに、言葉にしきれない気持ちを抱えている人へ。",
  },
  {
    term: "何のために",
    description:
      "誰にも気を遣わず、今日の出来事や気持ちを声に出して振り返る時間をつくるために。",
  },
  {
    term: "どう使う",
    description:
      "寝る前にねるぞうと話し、その夜に合う睡眠音声を聴くか、そのまま眠ります。",
  },
];

export default function Home() {
  const publishedFeatures = features.filter((f) => f.status === "published");
  const plannedFeatures = features.filter((f) => f.status === "planned");

  return (
    <>
      {/* Hero */}
      <section className="pt-16 lg:pt-20">
        <div className={container}>
          <div className="flex min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] flex-col justify-center py-20 sm:py-28">
            <p className="text-sm text-ink-meta tracking-wide">
              私たちのミッション
            </p>

            <h1 className="mt-6 text-[2.125rem] leading-[1.5] sm:text-5xl sm:leading-[1.45] lg:text-[3.75rem] lg:leading-[1.4] font-bold tracking-[0.02em]">
              <span className="inline-block">魂の望みで</span>
              <span className="inline-block">生きられる</span>
              <br className="hidden sm:inline" />
              <span className="inline-block">世界を創る。</span>
            </h1>

            <p className="jp-phrase mt-10 sm:mt-12 max-w-[30em] text-base sm:text-[17px] leading-[2.1] text-ink-soft">
              VisionCompassは、AIキャラクターとの対話を通じて、日々の出来事や気持ちを振り返るアプリ「ねるぞう」を開発・運営しています。
            </p>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-10 gap-y-6">
              <Link href="#neruzo" className={buttonOutline}>
                ねるぞうについて
                <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/about" className={textLink}>
                会社概要を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section
        id="neruzo"
        aria-labelledby="neruzo-heading"
        className="scroll-mt-16 lg:scroll-mt-20 bg-neru-wash"
      >
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6 lg:pr-6">
              <p className="text-sm font-medium tracking-wide text-neru">
                プロダクト
              </p>
              <h2
                id="neruzo-heading"
                className="mt-5 text-[2.5rem] sm:text-5xl font-bold tracking-[0.04em] leading-tight"
              >
                ねるぞう
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-soft">
                眠る前に、今日のことを話せるAIパートナー
              </p>

              <p className="jp-heading mt-12 text-lg sm:text-2xl font-medium leading-[1.8] text-ink">
                人に話すほどじゃない。
                <br />
                でも、誰かに聞いてほしい夜がある。
              </p>

              <dl className="mt-12 border-t border-neru/20">
                {usage.map((item) => (
                  <div
                    key={item.term}
                    className="grid gap-2 border-b border-neru/20 py-6 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-medium text-neru-deep">
                      {item.term}
                    </dt>
                    <dd className="jp-phrase text-base leading-[1.95] text-ink-soft">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-ink">いま使える機能</h3>
                <ul className="mt-4 space-y-2 text-base leading-[1.9] text-ink-soft">
                  {publishedFeatures.map((feature) => (
                    <li key={feature.title} className="flex gap-3">
                      <span aria-hidden="true" className="text-neru">
                        ・
                      </span>
                      {feature.title}
                    </li>
                  ))}
                </ul>

                {plannedFeatures.length > 0 && (
                  <>
                    <h3 className="mt-8 text-sm font-medium text-ink">
                      準備中の機能
                    </h3>
                    <ul className="mt-4 space-y-2 text-base leading-[1.9] text-ink-meta">
                      {plannedFeatures.map((feature) => (
                        <li key={feature.title} className="flex gap-3">
                          <span aria-hidden="true">・</span>
                          {feature.title}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-5">
                <Link href="/product" className={buttonNeru}>
                  ねるぞうの詳細
                  <span aria-hidden="true">→</span>
                </Link>
                {storeLinks.map((store) => (
                  <a
                    key={store.href}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-fit text-sm text-ink-soft underline decoration-neru/40 underline-offset-[6px] hover:text-ink hover:decoration-ink ${focusRing}`}
                  >
                    {store.label}
                    <span className="sr-only">（新しいタブで開きます）</span>
                  </a>
                ))}
                {storeLinks.length === 0 && (
                  <DevPlaceholder
                    label="公開ストアリンク（確認待ち）"
                    className="w-fit px-5 py-3"
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mx-auto max-w-[30rem] lg:max-w-[32rem] lg:mr-0">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
                  <AppScreen
                    asset={neruzoAssets.screens[0]}
                    label="実機画面 1（会話画面）"
                  />
                  <div>
                    <Character
                      asset={neruzoAssets.character}
                      sizes="(min-width: 640px) 128px, 96px"
                      className="mx-auto w-24 sm:w-32 mb-4 sm:mb-6"
                    />
                    <AppScreen
                      asset={neruzoAssets.screens[1]}
                      label="実機画面 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading">
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <p className="text-sm tracking-wide text-ink-meta lg:col-span-4 lg:pt-3">
              私たちについて
            </p>
            <div className="lg:col-span-8">
              <h2
                id="about-heading"
                className="jp-heading text-2xl sm:text-[2rem] font-bold leading-[1.6] tracking-[0.02em]"
              >
                人は、自分のことを
                <br className="sm:hidden" />
                驚くほど知らない。
              </h2>
              <div className="mt-10 max-w-[34em] space-y-6 text-base sm:text-[17px] leading-[2.05] text-ink-soft">
                <p className="jp-phrase">
                  何を感じ、何にエネルギーが湧き、何を本当に大切にしているのか。日々の忙しさの中で、その問いに向き合う時間はほとんどありません。
                </p>
                <p className="jp-phrase">
                  VisionCompassは、AIキャラクターとの対話を入口に、一人ひとりが自分の内面に触れる時間をつくりたいと考えています。その最初のかたちが「ねるぞう」です。
                </p>
              </div>
              <Link href="/about" className={`mt-10 inline-block ${textLink}`}>
                会社概要と代表メッセージ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="bg-paper-deep">
        <div className={`${container} py-20 sm:py-24`}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h2
                id="contact-heading"
                className="text-2xl sm:text-[2rem] font-bold leading-[1.6]"
              >
                お問い合わせ
              </h2>
              <p className="jp-phrase mt-6 max-w-[34em] text-base leading-[2] text-ink-soft">
                協業や取材、投資に関するご相談、ねるぞうへのご意見などを受け付けています。
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
