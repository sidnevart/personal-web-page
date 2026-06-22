import { ReactNode } from "react";

interface BrowserMockupProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

export function BrowserMockup({ children, url = "localhost:3000", className = "" }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl border border-border bg-card overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center font-mono">
            {url}
          </div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
