import type { ReactNode } from "react";
import { container } from "@/lib/styles";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
};

export default function PageHeader({ label, title, lead }: PageHeaderProps) {
  return (
    <section className="pt-16 lg:pt-20">
      <div className={`${container} pt-20 pb-16 sm:pt-28 sm:pb-20`}>
        <p className="text-sm tracking-wide text-ink-meta">{label}</p>
        <h1 className="jp-heading mt-5 text-[2rem] leading-[1.5] sm:text-[2.75rem] sm:leading-[1.45] font-bold tracking-[0.02em] text-ink">
          {title}
        </h1>
        {lead && (
          <p className="jp-phrase mt-8 max-w-[34em] text-base sm:text-[17px] leading-[2.05] text-ink-soft">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
