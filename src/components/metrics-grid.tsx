interface Metric {
  label: string;
  value: string;
}

interface MetricsGridProps {
  metrics: Metric[];
  className?: string;
}

export function MetricsGrid({ metrics, className = "" }: MetricsGridProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-secondary/50 rounded-lg p-4 border border-border">
          <div className="text-2xl font-bold font-mono text-foreground mb-1">
            {metric.value}
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
