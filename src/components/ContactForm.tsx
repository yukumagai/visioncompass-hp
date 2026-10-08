"use client";

import { useState, FormEvent } from "react";
import { focusRing } from "@/lib/styles";

const inputClass =
  "w-full border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-meta/60 transition-colors duration-200 focus:border-ink focus:outline-none";

const labelClass = "block text-sm text-ink mb-1";

function Required() {
  return (
    <span className="ml-2 text-xs text-neru-deep">
      必須
    </span>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      setError("送信に失敗しました。通信環境をご確認のうえ、再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="border-t border-ink/80 pt-10">
        <h2 className="text-xl font-bold text-ink">送信が完了しました</h2>
        <p className="mt-4 text-base leading-[2] text-ink-soft">
          お問い合わせありがとうございます。
          <br />
          内容を確認のうえ、折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            お名前
            <Required />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            メールアドレス
            <Required />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          会社名・所属
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          件名
          <Required />
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClass}
          placeholder="例：協業のご相談"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          お問い合わせ内容
          <Required />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-y`}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm leading-relaxed text-[#A2422F]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`inline-flex w-full items-center justify-center bg-ink px-10 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-ink-soft disabled:opacity-50 sm:w-auto ${focusRing}`}
      >
        {loading ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
