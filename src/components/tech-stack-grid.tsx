type TechItem = {
  name: string;
  role: string;
};

export function TechStackGrid({ items }: { items: TechItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.name} className="border border-[var(--line)] rounded-lg p-4">
          <p className="font-mono text-sm font-medium text-[var(--fg)]">{item.name}</p>
          <p className="mt-1 text-small">{item.role}</p>
        </div>
      ))}
    </div>
  );
}
