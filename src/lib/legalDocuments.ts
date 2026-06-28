export type LegalDocumentKind = "terms_of_service" | "privacy_policy";

export type CurrentLegalDocument = {
  kind: LegalDocumentKind;
  document_public_id: string;
  document_version_public_id: string;
  title: string;
  display_version: string;
  locale: string;
  body_md: string;
  published_at: string;
  effective_at: string;
};

type CurrentLegalDocumentsResponse = {
  documents: CurrentLegalDocument[];
};

type FetchCurrentLegalDocumentResult =
  | { ok: true; document: CurrentLegalDocument }
  | { ok: false; message: string };

const defaultProductCode = "neruzou";
const defaultLocale = "ja";

export async function fetchCurrentLegalDocument(
  kind: LegalDocumentKind,
): Promise<FetchCurrentLegalDocumentResult> {
  const baseUrl = process.env.CORE_API_BASE_URL?.replace(/\/+$/, "");

  if (!baseUrl) {
    return {
      ok: false,
      message: "CORE_API_BASE_URL が未設定です。",
    };
  }

  let url: URL;
  try {
    url = new URL("/v1/legal-documents/current", baseUrl);
  } catch {
    return {
      ok: false,
      message: "CORE_API_BASE_URL の形式が正しくありません。",
    };
  }

  url.searchParams.set("product_code", defaultProductCode);
  url.searchParams.set("locale", defaultLocale);
  url.searchParams.set("kind", kind);

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        accept: "application/json",
      },
      cache: "no-store",
    });
  } catch {
    return {
      ok: false,
      message: "文書を取得できませんでした。しばらくしてから再度お試しください。",
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      message:
        response.status === 404
          ? "現在公開中の文書が見つかりませんでした。"
          : "文書を取得できませんでした。しばらくしてから再度お試しください。",
    };
  }

  let body: CurrentLegalDocumentsResponse;
  try {
    body = (await response.json()) as CurrentLegalDocumentsResponse;
  } catch {
    return {
      ok: false,
      message: "文書を取得できませんでした。しばらくしてから再度お試しください。",
    };
  }

  const document = body.documents.find((item) => item.kind === kind);

  if (!document) {
    return {
      ok: false,
      message: "現在公開中の文書が見つかりませんでした。",
    };
  }

  return { ok: true, document };
}
