import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社Vision Compassへのお問い合わせ。事業に関するご質問・ご相談など、お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-6">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">
              お問い合わせ
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 sm:py-32 bg-mist">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-night/35 text-base leading-[1.9] text-center mb-16">
              事業に関するご質問・ご相談、取材のお申し込みなど、
              <br className="hidden sm:block" />
              下記フォームよりお気軽にお問い合わせください。
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
