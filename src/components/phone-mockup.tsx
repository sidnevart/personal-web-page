import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  caption?: string;
}

export function PhoneMockup({ children, caption }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Phone chassis */}
      <div className="relative w-[260px] sm:w-[300px] rounded-[2.75rem] border-[10px] border-[#111112] bg-[#111112] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_50px_-12px_rgba(0,0,0,0.8)]">
        {/* Outer glossy rim effect */}
        <div className="absolute inset-0 rounded-[2.75rem] ring-1 ring-inset ring-white/[0.04] pointer-events-none" />

        {/* Notch / Dynamic Island */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[26px] bg-[#0a0a0b] rounded-full" />

        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0b] relative">
          {/* Inner screen bezel shadow */}
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/40 pointer-events-none z-10" />
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[5px] bg-white/25 rounded-full z-20" />
      </div>

      {caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center max-w-[260px] sm:max-w-[300px]">
          {caption}
        </p>
      )}
    </div>
  );
}
