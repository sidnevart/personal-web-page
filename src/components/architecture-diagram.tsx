export function ArchitectureDiagram({ svg }: { svg: string }) {
  return (
    <div
      className="my-6 overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-6"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
