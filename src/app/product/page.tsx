import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "ねるぞう - AI睡眠ジャーナリングアプリ",
  description:
    "寝る前のAI対話で内面を記録し、睡眠音声で睡眠の質とメンタルを改善するAI睡眠ジャーナリングアプリ「ねるぞう」。",
};

const features = [
  {
    number: "01",
    title: "AI対話ジャーナリング",
    description:
      "寝る前、AIがやさしく問いかけます。今日あったこと、感じたこと、考えたこと——日記を書く必要はありません。対話するだけで、あなたの内面が自然と記録されます。",
  },
  {
    number: "02",
    title: "パーソナライズ睡眠音声",
    description:
      "対話で得られたあなたの状態やテーマをもとに、AIがパーソナライズされた睡眠音声を生成。心に寄り添う音声が、深いリラックスと安らかな眠りへ導きます。",
  },
  {
    number: "03",
    title: "睡眠×メンタル分析",
    description:
      "蓄積された対話と睡眠のデータから、あなたの心と体のパターンをやさしく可視化。自己理解が深まり、日々をより良い方向へ変えるきっかけを提供します。",
  },
];

const steps = [
  {
    title: "寝る前にAIと対話",
    description:
      "お布団に入ったら、ねるぞうを開いてAIと短い対話。今日のできごとや気持ちを自然に話すだけ。",
  },
  {
    title: "睡眠音声を聴きながら眠る",
    description:
      "対話をもとに生成されたパーソナライズ睡眠音声を聴きながら、リラックスして眠りにつきます。",
  },
  {
    title: "振り返りと気づき",
    description:
      "蓄積されたデータから、睡眠の質や心の状態の変化を可視化。自分自身への理解が深まります。",
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
            <p className="text-white/30 text-base leading-[1.9] max-w-md mx-auto">
              寝る前のAI対話で内面を記録し、
              <br />
              睡眠音声で睡眠の質とメンタルを改善する。
            </p>
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
                  <p className="text-night/40 text-base leading-[2] max-w-lg">
                    {feature.description}
                  </p>
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
                    <p className="text-white/30 text-base leading-[1.9]">
                      {step.description}
                    </p>
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
