import type { Metadata } from "next";
import LegalDocumentView from "@/components/LegalDocumentView";
import { fetchCurrentLegalDocument } from "@/lib/legalDocuments";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ねるぞう プライバシーポリシー",
  description:
    "AIパートナーアプリ「ねるぞう」のプライバシーポリシーです。",
};

export default async function PrivacyPage() {
  const result = await fetchCurrentLegalDocument("privacy_policy");

  return (
    <LegalDocumentView
      fallbackTitle="プライバシーポリシー"
      result={result}
    />
  );
}
