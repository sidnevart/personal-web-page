interface TagProps {
  label: string;
  variant?: "default" | "primary" | "secondary" | "muted";
}

export function Tag({ label, variant = "default" }: TagProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-muted text-muted-foreground",
    muted: "bg-secondary/50 text-muted-foreground",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
