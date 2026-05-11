interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400 mb-3">
        {eyebrow}
      </p>

      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
        {title}
      </h2>

      {description ? (
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
