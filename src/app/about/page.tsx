import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社Vision Compassの会社概要。ビジョン・代表メッセージ・会社情報をご紹介します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社Vision Compass" },
  { label: "所在地", value: "東京都目黒区八雲2-20-12" },
  { label: "事業内容", value: "AI睡眠ジャーナリングアプリの開発・運営" },
  { label: "URL", value: "https://visioncompass.jp" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-6">
              About
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">
              会社概要
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 sm:py-44 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender-muted text-sm tracking-[0.3em] uppercase mb-8">
              Vision
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-night leading-[1.35]">
              一人ひとりが持っている
              <br />
              才能の花を開花させる
            </h2>
            <div className="mt-10 w-8 h-px bg-lavender/40 mx-auto" />
            <p className="mt-10 text-night/40 text-base leading-[2] max-w-xl mx-auto">
              私たちは、すべての人の内面に価値があると信じています。
              AIテクノロジーの力で一人ひとりの心を科学し、
              個人の自己理解を促進するとともに、
              人類共通の知的資産として次世代に受け継ぎます。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-32 sm:py-44 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-8">
              Message
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-16">
              代表メッセージ
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-7 text-white/35 text-base leading-[2]">
              <p>
                私は20代で瞑想アプリの事業を経験する中で、ひとつの確信を持ちました。
              </p>
              <p className="text-white/70 text-base">
                「人は、自分のことを驚くほど知らない」ということです。
              </p>
              <p>
                自分が何を感じているのか。何にエネルギーが湧くのか。何を本当に大切にしているのか。
                日々の忙しさの中で、こうした問いに向き合う時間は、ほとんどありません。
              </p>
              <p>
                でも、自分の内面を理解した瞬間——人は驚くほど変わります。
                迷いが消え、判断が速くなり、自分だけの道が見えてくる。
              </p>
              <p>
                この体験を、テクノロジーの力で、もっと多くの人に届けたい。
                それがVision Compassの出発点です。
              </p>
              <p>
                最初のプロダクトとして、AI睡眠ジャーナリングアプリ「ねるぞう」を開発しています。
                寝る前のわずかな時間、AIとの対話を通じて自分自身と向き合う。
                その小さな習慣が、あなたの中に眠っている才能の花を開かせる——私たちはそう信じています。
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.06]">
              <p className="text-white/50 text-sm">
                株式会社Vision Compass
              </p>
              <p className="text-white/25 text-sm mt-1">
                代表取締役　熊谷 祐
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-32 sm:py-44 bg-mist">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-lavender-muted text-sm tracking-[0.3em] uppercase mb-8">
              Company
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-night mb-16">
              会社情報
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <dl>
              {companyInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col sm:flex-row py-5 ${
                    index !== companyInfo.length - 1
                      ? "border-b border-night/[0.06]"
                      : ""
                  }`}
                >
                  <dt className="sm:w-36 text-sm text-night/35 mb-1 sm:mb-0 shrink-0 tracking-wide">
                    {item.label}
                  </dt>
                  <dd className="text-night/60 text-base">{item.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
