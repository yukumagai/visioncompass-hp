import Image from "next/image";
import DevPlaceholder from "@/components/DevPlaceholder";
import type { ImageAsset } from "@/lib/neruzo";

export function AppScreen({
  asset,
  label,
  sizes = "(min-width: 1024px) 248px, 45vw",
}: {
  asset: ImageAsset | null;
  label: string;
  sizes?: string;
}) {
  if (!asset) {
    return (
      <DevPlaceholder
        label={label}
        className="aspect-[9/19.5] rounded-2xl"
      />
    );
  }

  return (
    <Image
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={asset.alt}
      sizes={sizes}
      className="h-auto w-full rounded-2xl shadow-[0_20px_40px_-24px_rgba(43,42,40,0.45)]"
    />
  );
}

export function Character({
  asset,
  sizes,
  className = "",
}: {
  asset: ImageAsset | null;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {asset ? (
        <Image
          src={asset.src}
          width={asset.width}
          height={asset.height}
          alt={asset.alt}
          sizes={sizes}
          className="h-auto w-full"
        />
      ) : (
        <DevPlaceholder
          label="正式キャラクター"
          className="aspect-square rounded-full"
        />
      )}
    </div>
  );
}
