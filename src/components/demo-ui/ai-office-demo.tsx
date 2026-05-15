import { BrowserMockup } from "@/components/browser-mockup";
import {
  Monitor,
  Armchair,
  Sofa,
  Coffee,
  TreePine,
  Send,
  Globe,
  Wifi,
  MessageSquare,
  Terminal,
  Bot,
  ChevronDown,
  Users,
} from "lucide-react";

export function AiOfficeDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <BrowserMockup url="openclaw.local/office" className="bg-[#0a0a0b]">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] min-h-[560px] flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-indigo-500/15 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span className="text-sm font-semibold tracking-tight">OpenClaw Office</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/5">
                v2.4.0
              </span>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Active 0/1
                </span>
                <span>Tokens 100.0k</span>
              </div>

              <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/5">
                {["Office", "Chat", "Console"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                      tab === "Office"
                        ? "bg-white/10 text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  EN
                </span>
                <span className="flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-green-500" />
                  Connected
                </span>
              </div>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto">
            {/* Desk Zone */}
            <div className="rounded-xl border border-white/5 bg-blue-500/[0.03] p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-4 h-4 text-blue-400/70" />
                <div>
                  <h3 className="text-sm font-medium">Desk Zone</h3>
                  <p className="text-[10px] text-muted-foreground">4 stations</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white/5 border border-white/5 p-3 flex flex-col items-center justify-center gap-2"
                  >
                    <Monitor className="w-5 h-5 text-blue-400/40" />
                    {i === 0 ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/30 text-[10px] font-medium flex items-center justify-center text-green-400 ring-2 ring-green-500 ring-offset-1 ring-offset-[#0a0a0b]">
                          M
                        </div>
                        <span className="text-[10px] text-green-400/80">main</span>
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Zone */}
            <div className="rounded-xl border border-white/5 bg-indigo-500/[0.03] p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-indigo-400/70" />
                <div>
                  <h3 className="text-sm font-medium">Meeting Zone</h3>
                  <p className="text-[10px] text-muted-foreground">Round table · 6 seats</p>
                </div>
              </div>
              <div className="flex-1 relative flex items-center justify-center min-h-[140px]">
                {/* Table */}
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center z-10">
                  <Users className="w-5 h-5 text-indigo-400/40" />
                </div>
                {/* Chairs */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
                <div className="absolute top-1/4 right-2 -translate-y-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-2 translate-y-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-2 translate-y-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
                <div className="absolute top-1/4 left-2 -translate-y-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                    <Armchair className="w-3.5 h-3.5 text-indigo-400/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Desk Zone */}
            <div className="rounded-xl border border-white/5 bg-slate-500/[0.03] p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-4 h-4 text-slate-400/70" />
                <div>
                  <h3 className="text-sm font-medium">Hot Desk Zone</h3>
                  <p className="text-[10px] text-muted-foreground">8 shared · all empty</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 flex-1 content-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded bg-white/[0.02] border border-white/5 p-2 flex flex-col items-center gap-1.5"
                  >
                    <Monitor className="w-4 h-4 text-slate-500/30" />
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Lounge Zone */}
            <div className="rounded-xl border border-white/5 bg-purple-500/[0.03] p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sofa className="w-4 h-4 text-purple-400/70" />
                  <div>
                    <h3 className="text-sm font-medium">Lounge Zone</h3>
                    <p className="text-[10px] text-muted-foreground">Relax & recharge</p>
                  </div>
                </div>
                <div className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-purple-300/60 font-medium tracking-wide">
                  OpenClaw
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div className="flex items-end gap-3">
                  <div className="rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col items-center gap-1">
                    <Sofa className="w-7 h-7 text-purple-400/40" />
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col items-center gap-1">
                    <Sofa className="w-7 h-7 text-purple-400/40" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <Coffee className="w-4 h-4 text-amber-400/40" />
                    <span className="text-[10px] text-muted-foreground">Coffee</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <TreePine className="w-5 h-5 text-green-400/30" />
                    <span className="text-[10px] text-muted-foreground">Plant</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Coffee className="w-4 h-4 text-amber-400/40" />
                    <span className="text-[10px] text-muted-foreground">Coffee</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-3 text-center">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest border-t border-white/5 pt-2 inline-block px-4">
                  Entrance
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Chat Bar */}
          <div className="border-t border-white/5 bg-white/[0.02] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/30 text-[10px] font-medium flex items-center justify-center text-green-400">
                  M
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-medium text-foreground">main</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    Online
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2">
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  readOnly
                  placeholder="Type a message... (Enter to send, Shift+Enter for new line)"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full outline-none"
                />
              </div>
              <button className="shrink-0 rounded-lg bg-primary/15 border border-primary/20 p-2 text-primary hover:bg-primary/25 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
