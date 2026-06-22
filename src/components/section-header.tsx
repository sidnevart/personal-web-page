interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

export function SectionHeader({ title, subtitle, centered = false, id }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
        <span className="text-xs font-mono text-primary uppercase tracking-wider">
          {title.split(" ")[0]}
        </span>
        <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
      </div>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
