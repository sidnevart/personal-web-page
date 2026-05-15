import { ReactNode } from "react";

interface IPhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function IPhoneMockup({ children, className = "" }: IPhoneMockupProps) {
  return (
    <div className={`relative mx-auto border-[8px] border-[#2a2a2a] rounded-[3rem] bg-black shadow-2xl max-w-[320px] ${className}`}>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-[#2a2a2a] rounded-b-2xl z-10"></div>
      <div className="rounded-[2.5rem] overflow-hidden bg-background">
        <div className="h-8 bg-background"></div>
        <div className="px-3 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}
