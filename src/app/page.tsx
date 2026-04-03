import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-night overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lavender/[0.03] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-8">
              Vision Compass
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white/90 leading-[1.25] tracking-tight">
              一人ひとりが持っている
              <br />
              <span className="text-lavender">才能の花</span>を開花させる
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-base sm:text-base text-white/30 max-w-md mx-auto leading-[1.9]">
              心をテクノロジーで科学して、
              <br className="sm:hidden" />
              人類の知恵として未来に繋げる。
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-14">
              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-wide bg-lavender/10 text-lavender border border-lavender/20 rounded-full hover:bg-lavender/20 transition-all duration-300"
              >
                ねるぞうを見る
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/10" />
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-32 sm:py-44 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender-muted text-sm tracking-[0.3em] uppercase mb-6">
              Product
            </p>
            <h2 className="text-3xl sm:text-[2.5rem] font-bold text-night leading-tight mb-6">
              ねるぞう
            </h2>
            <p className="text-night/30 text-sm tracking-wide">
              AI睡眠ジャーナリングアプリ
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-night/45 text-base leading-[2] max-w-lg mx-auto mt-10">
              寝る前のAI対話で、あなたの思考や感情をそっと記録。
              パーソナライズされた睡眠音声で、
              深いリラックスと安らかな眠りへ導きます。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12">
              <Link
                href="/product"
                className="text-lavender-muted hover:text-lavender text-sm tracking-wide transition-colors duration-300"
              >
                詳しく見る &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 sm:py-44 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-6 leading-tight">
              お気軽にご相談ください
            </h2>
            <p className="text-white/25 text-base leading-[1.9] mb-12">
              事業やプロダクトに関するお問い合わせは、
              <br className="hidden sm:block" />
              下記よりお願いいたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-wide bg-lavender/10 text-lavender border border-lavender/20 rounded-full hover:bg-lavender/20 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
