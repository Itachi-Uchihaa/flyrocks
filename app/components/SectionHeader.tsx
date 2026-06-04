type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleClass = light ? "text-white" : "text-foreground";
  const descClass = light ? "text-white/75" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <span className={`eyebrow ${light ? "!text-brand-light before:!bg-brand-light" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-5 text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${descClass}`}>{description}</p>
      )}
    </div>
  );
}
