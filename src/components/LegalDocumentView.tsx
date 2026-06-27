import ReactMarkdown from "react-markdown";
import FadeIn from "@/components/FadeIn";
import type { CurrentLegalDocument } from "@/lib/legalDocuments";

type LegalDocumentViewProps = {
  eyebrow: string;
  fallbackTitle: string;
  result:
    | { ok: true; document: CurrentLegalDocument }
    | { ok: false; message: string };
};

export default function LegalDocumentView({
  eyebrow,
  fallbackTitle,
  result,
}: LegalDocumentViewProps) {
  const title = result.ok ? result.document.title : fallbackTitle;

  return (
    <>
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28 bg-night relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-lavender/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lavender/50 text-sm tracking-[0.3em] uppercase mb-6">
              {eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">
              {title}
            </h1>
            {result.ok && (
              <p className="mt-6 text-white/25 text-sm tracking-wide">
                ねるぞう
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            {result.ok ? (
              <>
                <div className="mb-12 border-b border-night/[0.06] pb-6 text-sm text-night/35 leading-relaxed">
                  <p>施行日: {formatDate(result.document.effective_at)}</p>
                  <p className="mt-1">
                    公開日: {formatDate(result.document.published_at)}
                  </p>
                </div>
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h2 className="text-2xl sm:text-3xl font-bold text-night leading-[1.45] mt-12 first:mt-0 mb-6">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl sm:text-2xl font-bold text-night leading-[1.5] mt-12 mb-5">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold text-night/80 leading-[1.6] mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-night/55 text-base leading-[2] my-5">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 my-6 space-y-2 text-night/55 leading-[2]">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 my-6 space-y-2 text-night/55 leading-[2]">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li>{children}</li>,
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="text-lavender-muted underline underline-offset-4 hover:text-lavender-dark transition-colors"
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
                      <blockquote className="border-l border-lavender/40 pl-5 my-8 text-night/45">
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-night/75">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {result.document.body_md}
                </ReactMarkdown>
              </>
            ) : (
              <div className="border border-night/[0.08] bg-white/35 px-6 py-6">
                <p className="text-night/55 text-base leading-[1.9]">
                  {result.message}
                </p>
              </div>
            )}
          </FadeIn>
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
