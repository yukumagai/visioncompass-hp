"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full px-0 py-3 bg-transparent border-b border-night/10 focus:border-lavender/50 focus:outline-none transition-colors duration-300 text-night text-base placeholder:text-night/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-12 h-12 border border-lavender/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-5 h-5 text-lavender"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-night mb-3">
          送信が完了しました
        </h3>
        <p className="text-night/40 text-base leading-[1.9]">
          お問い合わせありがとうございます。
          <br />
          内容を確認の上、折り返しご連絡いたします。
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-night/35 mb-2 tracking-wide"
          >
            お名前 <span className="text-lavender">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-night/35 mb-2 tracking-wide"
          >
            メールアドレス <span className="text-lavender">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm text-night/35 mb-2 tracking-wide"
        >
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className={inputClass}
          placeholder="株式会社〇〇"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm text-night/35 mb-2 tracking-wide"
        >
          件名 <span className="text-lavender">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClass}
          placeholder="お問い合わせの件名"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-night/35 mb-2 tracking-wide"
        >
          メッセージ <span className="text-lavender">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-12 py-3.5 bg-night text-white/70 text-sm tracking-wide rounded-full hover:bg-night-800 disabled:opacity-40 transition-all duration-300"
        >
          {loading ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}
