import ReactMarkdown from "react-markdown";
import PageHeader from "@/components/PageHeader";
import type { CurrentLegalDocument } from "@/lib/legalDocuments";
import { container, focusRing } from "@/lib/styles";

type LegalDocumentViewProps = {
  fallbackTitle: string;
  result:
    | { ok: true; document: CurrentLegalDocument }
    | { ok: false; message: string };
};

export default function LegalDocumentView({
  fallbackTitle,
  result,
}: LegalDocumentViewProps) {
  const title = result.ok ? result.document.title : fallbackTitle;

  return (
    <>
      <PageHeader label="ねるぞう" title={title} />

      <section className="border-t border-rule">
        <div className={`${container} py-16 sm:py-20`}>
          <div className="max-w-3xl">
            {result.ok ? (
              <>
                <dl className="mb-12 grid grid-cols-[5rem_1fr] gap-y-1 text-sm text-ink-meta">
                  <dt>施行日</dt>
                  <dd>{formatDate(result.document.effective_at)}</dd>
                  <dt>公開日</dt>
                  <dd>{formatDate(result.document.published_at)}</dd>
                </dl>
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h2 className="text-2xl sm:text-[1.75rem] font-bold text-ink leading-[1.5] mt-14 first:mt-0 mb-6">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl sm:text-2xl font-bold text-ink leading-[1.5] mt-14 mb-5">
                        {children}
                      </h2>
                    ),
                    hr: () => <hr className="my-14 border-rule" />,
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold text-ink leading-[1.6] mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-ink-soft text-base leading-[2] my-5">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 my-6 space-y-2 text-ink-soft leading-[2]">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 my-6 space-y-2 text-ink-soft leading-[2]">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li>{children}</li>,
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className={`text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink ${focusRing}`}
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href?.startsWith("http")
                            ? "noreferrer noopener"
                            : undefined
                        }
                      >
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-rule pl-5 my-8 text-ink-meta">
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-ink">{children}</strong>
                    ),
                  }}
                >
                  {result.document.body_md}
                </ReactMarkdown>
              </>
            ) : (
              <p
                role="alert"
                className="border-l-2 border-ink/40 pl-5 text-base leading-[1.9] text-ink-soft"
              >
                {result.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  }).format(date);
}
