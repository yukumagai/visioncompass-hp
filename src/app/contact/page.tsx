import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { container, textLink } from "@/lib/styles";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社VisionCompassへのお問い合わせ。協業・取材・投資に関するご相談、ねるぞうへのご意見などを受け付けています。",
};

const topics = [
  "協業・提携のご相談",
  "取材のお申し込み",
  "投資に関するご相談",
  "ねるぞうへのご意見・ご要望",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="お問い合わせ"
        title="お問い合わせ"
        lead="VisionCompassとねるぞうに関するご相談を、こちらのフォームから受け付けています。"
      />

      <section aria-label="お問い合わせフォーム" className="border-t border-rule">
        <div className={`${container} py-20 sm:py-24`}>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-sm text-ink">受け付けている内容</h2>
              <ul className="mt-5 space-y-2 text-base leading-[1.9] text-ink-soft">
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <p className="jp-phrase mt-8 text-sm leading-[1.9] text-ink-meta">
                個人情報の取り扱いについては、
                <Link href="/legal/privacy" className={`mx-1 ${textLink}`}>
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
