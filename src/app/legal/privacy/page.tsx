import type { Metadata } from "next";
import LegalDocumentView from "@/components/LegalDocumentView";
import { fetchCurrentLegalDocument } from "@/lib/legalDocuments";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ねるぞう プライバシーポリシー",
  description:
    "AI睡眠ジャーナリングアプリ「ねるぞう」のプライバシーポリシーです。",
};

export default async function PrivacyPage() {
  const result = await fetchCurrentLegalDocument("privacy_policy");

  return (
    <LegalDocumentView
      eyebrow="Privacy Policy"
      fallbackTitle="プライバシーポリシー"
      result={result}
    />
  );
}
