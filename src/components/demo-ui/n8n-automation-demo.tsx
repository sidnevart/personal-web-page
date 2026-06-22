import { Bot, ChevronDown, Clock, Paperclip, Send, Sparkles } from "lucide-react";

export function N8nAutomationDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* MacBook Frame */}
      <div className="relative rounded-2xl border border-neutral-700/40 bg-[#0c0c0e] shadow-2xl shadow-black/50">
        {/* Top Bezel */}
        <div className="h-6 bg-[#050505] rounded-t-2xl flex items-center justify-center border-b border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
        </div>

        {/* Screen */}
        <div className="rounded-b-xl overflow-hidden bg-background">
          {/* Header */}
          <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#0a0a0b]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AI Automation Assistant</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Claude 3.5 Sonnet</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Chat Thread */}
          <div className="p-4 space-y-5 max-h-[520px] overflow-y-auto">
            {/* Message 1: User */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="rounded-2xl bg-primary/20 px-4 py-2.5 text-sm text-foreground">
                  Create a new cashback campaign for CafeNetwork targeting 18-35 age group in Moscow.
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground text-right">2:34 PM</div>
              </div>
            </div>

            {/* Message 2: AI */}
            <div className="flex gap-2">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="max-w-[85%]">
                <div className="rounded-2xl bg-white/5 px-4 py-2.5 text-sm text-foreground space-y-1">
                  <p>I&apos;ll set up the campaign workflow for you. Here&apos;s what I&apos;m configuring:</p>
                  <div className="mt-2 rounded-xl border border-white/10 bg-black/20 p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Campaign</span>
                      <span className="text-foreground font-medium">CafeNetwork Summer Cashback</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Audience</span>
                      <span className="text-foreground font-medium">2.1M (age 18-35, Moscow)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Schedule</span>
                      <span className="text-foreground font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Daily at 09:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Integrations</span>
                      <span className="text-foreground font-medium">ClickHouse → Partner API → Kafka</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">The workflow will run automatically. Estimated execution time: ~30s.</p>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">2:34 PM</div>
              </div>
            </div>

            {/* Message 3: User */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="rounded-2xl bg-primary/20 px-4 py-2.5 text-sm text-foreground">
                  Add an email notification step when conversion rate drops below 4%.
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground text-right">2:35 PM</div>
              </div>
            </div>

            {/* Message 4: AI */}
            <div className="flex gap-2">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="max-w-[85%]">
                <div className="rounded-2xl bg-white/5 px-4 py-2.5 text-sm text-foreground space-y-1">
                  <p>Added a conditional alert node. Here&apos;s the rule:</p>
                  <div className="mt-2 rounded-lg border border-white/10 bg-black/20 p-2.5">
                    <code className="text-xs font-mono text-foreground">
                      IF conversion_rate &lt; 4% THEN send_email(to=marketing-team, subject=&apos;Campaign Alert&apos;)
                    </code>
                  </div>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">2:35 PM</div>
              </div>
            </div>

            {/* Message 5: User */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="rounded-2xl bg-primary/20 px-4 py-2.5 text-sm text-foreground">
                  Show me today&apos;s execution status.
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground text-right">2:36 PM</div>
              </div>
            </div>

            {/* Message 6: AI */}
            <div className="flex gap-2">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="max-w-[85%]">
                <div className="rounded-2xl bg-white/5 px-4 py-2.5 text-sm text-foreground space-y-1">
                  <p>Today&apos;s runs are healthy. 4 campaigns executed, 99.2% success rate.</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[10px] text-muted-foreground">1,847 workflows</span>
                    <span className="text-[10px] text-muted-foreground">30s avg</span>
                    <span className="text-[10px] text-muted-foreground">4 active campaigns</span>
                  </div>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">2:36 PM</div>
              </div>
            </div>

            {/* Message 7: User */}
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="rounded-2xl bg-primary/20 px-4 py-2.5 text-sm text-foreground">
                  What if the ClickHouse query times out?
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground text-right">2:37 PM</div>
              </div>
            </div>

            {/* Message 8: AI */}
            <div className="flex gap-2">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="max-w-[85%]">
                <div className="rounded-2xl bg-white/5 px-4 py-2.5 text-sm text-foreground">
                  <p>I&apos;ve added error handling: retry 3x with exponential backoff, then fallback to cached audience segment and alert the on-call channel.</p>
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">2:38 PM</div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className="h-14 border-t border-white/5 bg-[#0a0a0b] px-4 flex items-center gap-3">
            <Paperclip className="w-4 h-4 text-muted-foreground" />
            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-muted-foreground">
              Ask about campaigns, workflows, integrations...
            </div>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span>Claude 3.5 Sonnet</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Send className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
