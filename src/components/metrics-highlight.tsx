type Metric = {
  label: string;
  value: string;
};

export function MetricsHighlight({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {metrics.map((m) => (
        <div key={m.label}>
          <p className="text-display text-[var(--accent)]">{m.value}</p>
          <p className="mt-1 text-small">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
