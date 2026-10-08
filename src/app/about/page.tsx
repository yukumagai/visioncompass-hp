import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { container, textLink } from "@/lib/styles";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社VisionCompassの会社概要。ビジョン・ミッション・事業内容・代表メッセージ・会社情報をご紹介します。",
};

const ceoProfile = [
  "2014年、早稲田大学教育学部卒業。在学中の2013年に起業し、Webマーケターとして上場企業を中心に100件以上のグロースハックを担当。",
  "2019年にRelook株式会社を創業。瞑想アプリ「Relook」を開発し、2020年に株式会社ARETECO HOLDINGSへ売却。同アプリは45万DLを超えたアプリに成長。",
  "2026年4月に株式会社VisionCompassを創業。AIキャラクターとの対話を通じて、日々の出来事や気持ちを振り返るアプリ「ねるぞう」の開発・運営に取り組んでいる。",
];

const philosophy = [
  {
    label: "ビジョン",
    statement: ["最高のAIパートナーを", "全ての人に。"],
  },
  {
    label: "ミッション",
    statement: ["魂の望みで生きられる", "世界を創る。"],
    note: (
      <>
        <span className="whitespace-nowrap">一人ひとり</span>
        が持っている才能の花を開花させる。AIテクノロジーの力で
        <span className="whitespace-nowrap">一人ひとり</span>
        の心に寄り添い、自分らしい生き方をサポートします。
      </>
    ),
  },
  {
    label: "スローガン",
    statement: ["世界を才能の花で満たす。"],
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社VisionCompass" },
  { label: "設立", value: "2026年4月" },
  { label: "代表者", value: "代表取締役CEO　熊谷 祐" },
  {
    label: "所在地",
    value: "〒153-0042 東京都目黒区青葉台三丁目15番17号 FARO中目黒1階",
  },
  {
    label: "事業内容",
    value:
      "AIキャラクターと関係性データ基盤を活用した、パーソナルAIサービスの企画・開発・運営",
  },
  { label: "URL", value: "https://visioncompass.jp" },
];

const sectionLabel = "text-sm tracking-wide text-ink-meta lg:col-span-3 lg:pt-2";

export default function AboutPage() {
  return (
    <>
      <PageHeader label="会社概要" title="VisionCompassについて" />

      {/* Philosophy */}
      <section aria-label="理念" className={container}>
        <div className="border-t border-ink/80">
          {philosophy.map((item) => (
            <div
              key={item.label}
              className="grid gap-4 border-b border-rule py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
            >
              <h2 className={sectionLabel}>{item.label}</h2>
              <div className="lg:col-span-9">
                <p className="text-[1.625rem] sm:text-[2.25rem] font-bold leading-[1.55] tracking-[0.02em] text-ink">
                  {item.statement.map((line) => (
                    <span key={line} className="inline-block">
                      {line}
                    </span>
                  ))}
                </p>
                {item.note && (
                  <p className="jp-phrase mt-8 max-w-[34em] text-base leading-[2.05] text-ink-soft">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business */}
      <section aria-labelledby="business-heading">
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <p className={sectionLabel}>事業内容</p>
            <div className="lg:col-span-9">
              <h2
                id="business-heading"
                className="jp-heading text-2xl sm:text-[2rem] font-bold leading-[1.6]"
              >
                AIを、使う道具から、
                <br className="hidden sm:inline" />
                あなたを知るパートナーへ。
              </h2>
              <div className="mt-10 max-w-[34em] space-y-6 text-base sm:text-[17px] leading-[2.05] text-ink-soft">
                <p className="jp-phrase">
                  VisionCompassは、AIキャラクターをコミュニケーションの入口とし、継続的な対話から育つ関係性データをもとに、一人ひとりに合ったケアや気づきを届けるパーソナルAIサービスを開発しています。
                </p>
                <p className="jp-phrase">
                  第一弾として、誰にも気を遣わずに一日の出来事や気持ちを話し、気持ちよく一日を終えるためのAIパートナー「ねるぞう」を提供しています。
                </p>
              </div>
              <Link href="/product" className={`mt-10 inline-block ${textLink}`}>
                ねるぞうについて
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section aria-labelledby="message-heading" className="bg-paper-deep">
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <h2 id="message-heading" className={sectionLabel}>
              代表メッセージ
            </h2>
            <div className="lg:col-span-9">
              <div className="max-w-[34em] space-y-6 text-base sm:text-[17px] leading-[2.05] text-ink-soft">
                <p className="jp-phrase">
                  私は20代で瞑想アプリの事業を経験する中で、ひとつの確信を持ちました。
                </p>
                <p className="jp-heading py-2 text-xl sm:text-2xl font-bold leading-[1.7] text-ink">
                  「人は、自分のことを驚くほど知らない」ということです。
                </p>
                <p className="jp-phrase">
                  自分が何を感じているのか。何にエネルギーが湧くのか。何を本当に大切にしているのか。日々の忙しさの中で、こうした問いに向き合う時間は、ほとんどありません。
                </p>
                <p className="jp-phrase">
                  でも、自分の内面を理解した瞬間——人は驚くほど変わります。迷いが消え、判断が速くなり、自分だけの道が見えてくる。
                </p>
                <p className="jp-phrase">
                  この体験を、テクノロジーの力で、もっと多くの人に届けたい。それがVisionCompassの出発点です。
                </p>
                <p className="jp-phrase">
                  最初のプロダクトとして、眠る前に今日のことを話せるAIパートナー「ねるぞう」を開発しています。寝る前のわずかな時間、AIとの対話を通じて自分自身と向き合う。その小さな習慣が、あなたの中に眠っている才能の花を開かせる——私たちはそう信じています。
                </p>
              </div>
              <p className="mt-12 text-sm leading-relaxed text-ink">
                株式会社VisionCompass
                <br />
                代表取締役CEO　熊谷 祐
              </p>

              <div className="mt-20 max-w-[34em] border-t border-rule pt-12">
                <h3 className="text-sm text-ink-meta">プロフィール</h3>
                <p className="mt-5 text-lg font-bold text-ink">
                  熊谷 祐
                  <span className="ml-3 text-sm font-normal text-ink-soft">
                    代表取締役CEO
                  </span>
                </p>
                <div className="mt-6 space-y-5 text-base leading-[2] text-ink-soft">
                  {ceoProfile.map((paragraph) => (
                    <p key={paragraph} className="jp-phrase">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section aria-labelledby="company-heading">
        <div className={`${container} py-24 sm:py-32`}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <h2 id="company-heading" className={sectionLabel}>
              会社情報
            </h2>
            <dl className="lg:col-span-9 border-t border-ink/80">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-ink-meta">{item.label}</dt>
                  <dd className="jp-phrase text-base leading-[1.9] text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
