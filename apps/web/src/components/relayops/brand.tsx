export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/mayak-mark-128.webp"
      srcSet="/brand/mayak-mark-128.webp 128w, /brand/mayak-mark-256.webp 256w"
      sizes="48px"
      width={48}
      height={48}
      alt=""
      className={`mayak-brand-mark ${className}`}
      aria-hidden="true"
    />
  );
}

export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`mayak-wordmark ${compact ? "is-compact" : ""}`}>
      <BrandMark />
      <span translate="no">Маяк</span>
    </span>
  );
}
