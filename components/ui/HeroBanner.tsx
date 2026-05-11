import { ReactNode } from "react";

interface HeroBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function HeroBanner({
  eyebrow,
  title,
  description,
  children,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/90 p-8 sm:p-12 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.9)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
          {title}
        </h1>

        <p className="text-zinc-300 text-lg sm:text-xl leading-8 max-w-3xl mb-8">
          {description}
        </p>

        {children && <div className="flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
