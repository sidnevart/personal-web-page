type MockupType = "form" | "card" | "terminal" | "dashboard";

export function UiMockup({
  type,
  title,
  children
}: {
  type: MockupType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-[var(--line)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--surface-muted)] px-4 py-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--fg-soft)] opacity-30" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--fg-soft)] opacity-30" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--fg-soft)] opacity-30" />
        </div>
        <span className="ml-2 text-small font-mono">{title}</span>
      </div>
      {/* Content */}
      <div className="p-6 bg-[var(--surface)]">
        {children}
      </div>
    </div>
  );
}
