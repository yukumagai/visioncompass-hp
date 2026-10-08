type DevPlaceholderProps = {
  label: string;
  className?: string;
};

const isProduction = process.env.NODE_ENV === "production";

export default function DevPlaceholder({
  label,
  className = "",
}: DevPlaceholderProps) {
  if (isProduction) return null;

  return (
    <div
      role="note"
      className={`flex items-center justify-center border border-dashed border-ink-meta/50 bg-white/60 p-4 text-center text-xs leading-relaxed text-ink-meta ${className}`}
    >
      <span>
        開発用プレースホルダー
        <br />
        {label}
      </span>
    </div>
  );
}
