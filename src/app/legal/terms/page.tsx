import type { Metadata } from "next";
import LegalDocumentView from "@/components/LegalDocumentView";
import { fetchCurrentLegalDocument } from "@/lib/legalDocuments";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ねるぞう 利用規約",
  description: "AIパートナーアプリ「ねるぞう」の利用規約です。",
};

export default async function TermsPage() {
  const result = await fetchCurrentLegalDocument("terms_of_service");

  return (
    <LegalDocumentView
      fallbackTitle="利用規約"
      result={result}
    />
  );
}
