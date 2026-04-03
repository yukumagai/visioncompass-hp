import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, company, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "必須項目が未入力です" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Vision Compass <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? "",
    replyTo: email,
    subject: `【お問い合わせ】${subject}`,
    text: `
お名前: ${name}
メールアドレス: ${email}
会社名: ${company || "未入力"}
件名: ${subject}

【メッセージ】
${message}
    `.trim(),
  });

  if (error) {
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
