import Link from "next/link";

interface TestCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge?: string;
}

export default function TestCard({
  title,
  subtitle,
  description,
  href,
  badge,
}: TestCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6 transition duration-300 hover:border-blue-500/40 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-[0.22em]">
            {subtitle}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>

        {badge ? (
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
            {badge}
          </span>
        ) : null}
      </div>

      <p className="text-zinc-400 leading-relaxed">{description}</p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition group-hover:text-blue-200">
        Ver detalhes
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
