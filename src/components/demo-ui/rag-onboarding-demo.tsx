import { BrowserMockup } from "@/components/browser-mockup";
import { BookOpen, CheckCircle2, Circle, Cpu, FileText, GitCommit, Layers, MessageSquare, Search, Shield, Sparkles, Target, Zap } from "lucide-react";

export function RagOnboardingDemo() {
  return (
    <div className="space-y-8">
      <BrowserMockup url="kb.tbank.internal/onboarding-agent">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">RAG Onboarding Agent</h3>
              <p className="text-xs text-muted-foreground">AI Knowledge Assistant — v2.1.3</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                <Zap className="w-3 h-3" /> Online
              </span>
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded flex items-center gap-1">
                <Cpu className="w-3 h-3" /> GPU-4
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: "Docs Indexed", value: "1,247", change: "+23 today" },
              { label: "Questions Today", value: "89", change: "+12 vs avg" },
              { label: "Avg Confidence", value: "94%", change: "+2% this week" },
              { label: "Active Sessions", value: "7", change: "Peak: 15" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-[10px] text-muted-foreground">{m.label}</div>
                <div className="mt-1 text-[9px] text-green-400">{m.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-2 bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium">Knowledge Graph Preview</span>
                <span className="text-[10px] text-muted-foreground">3,421 edges</span>
              </div>
              <div className="relative h-28 flex items-center justify-center">
                <svg width="280" height="110" viewBox="0 0 280 110" className="absolute">
                  <defs>
                    <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <line x1="140" y1="55" x2="60" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="140" y1="55" x2="60" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="140" y1="55" x2="220" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="140" y1="55" x2="220" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="60" y1="25" x2="220" y2="85" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="60" y1="85" x2="220" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <circle cx="140" cy="55" r="12" fill="url(#nodeGrad)" />
                  <circle cx="60" cy="25" r="8" fill="rgba(59,130,246,0.3)" />
                  <circle cx="60" cy="85" r="6" fill="rgba(168,85,247,0.3)" />
                  <circle cx="220" cy="25" r="7" fill="rgba(34,197,94,0.3)" />
                  <circle cx="220" cy="85" r="9" fill="rgba(234,179,8,0.3)" />
                </svg>
                <div className="flex gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500/60" /> Onboarding</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500/60" /> Security</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500/60" /> Infra</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500/60" /> API</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs font-medium mb-3">Top Sources</div>
              <div className="space-y-2">
                {[
                  { name: "Onboarding Wiki", hits: 342, pct: 42 },
                  { name: "Team Playbook", hits: 218, pct: 27 },
                  { name: "CHaaS Guide", hits: 156, pct: 19 },
                  { name: "API Reference", hits: 97, pct: 12 },
                ].map((source) => (
                  <div key={source.name}>
                    <div className="flex justify-between text-[10px] mb-0.5">
                      <span className="text-muted-foreground">{source.name}</span>
                      <span className="text-muted-foreground">{source.hits}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${source.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-muted-foreground">
                Recent Conversations
              </div>
              <span className="text-[10px] text-muted-foreground">Last 24h</span>
            </div>
            {[
              {
                user: "Intern — Maria K.",
                question: "How do I set up local ClickHouse connection?",
                answer: "Use the internal CHaaS proxy with your VPN token. First, clone the infra repo, then run docker-compose up in /local/chaas. Your connection string will be ch://localhost:8123/default.",
                sources: ["Onboarding Wiki", "CHaaS Setup Guide"],
                confidence: 96,
                resolved: true,
                time: "10m ago",
              },
              {
                user: "Intern — Alex P.",
                question: "What is the review process for audience migrations?",
                answer: "All audience migrations require 2 approvals (1 senior + 1 domain expert) and QA sign-off. Create an MR from feature/* to develop, tag @audience-team, and include the migration checklist.",
                sources: ["Team Playbook", "Migration Checklist"],
                confidence: 92,
                resolved: true,
                time: "35m ago",
              },
              {
                user: "Intern — Dmitry V.",
                question: "Where can I find the partner API staging credentials?",
                answer: "Credentials are stored in Vault under /partner-api/staging. Use vault kv get -mount=secret partner-api/staging to retrieve them. Note: requires staging-access group membership.",
                sources: ["Vault Docs", "Partner API README"],
                confidence: 88,
                resolved: false,
                time: "1h ago",
              },
            ].map((chat, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{chat.user}</span>
                    <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    chat.resolved
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {chat.resolved ? "Resolved" : "In Progress"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="bg-white/5 rounded-lg rounded-tl-none px-3 py-2 flex-1">
                    <p className="text-sm text-muted-foreground">{chat.question}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/10 rounded-lg rounded-tl-none px-3 py-2 flex-1">
                    <p className="text-sm">{chat.answer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {chat.sources.join(", ")}
                  </div>
                  <span className={`flex items-center gap-1 ${
                    chat.confidence >= 90 ? "text-green-400" : "text-yellow-400"
                  }`}>
                    <Target className="w-3 h-3" /> Confidence: {chat.confidence}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="kb.tbank.internal/onboarding-agent/checklist/maria-k">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Onboarding Checklist</h3>
              <p className="text-xs text-muted-foreground">Maria K. — Week 1 of 4</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Progress: 5/8</span>
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "62.5%" }} />
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "VPN & Environment Setup", done: true, time: "Day 1 — 15m" },
              { label: "GitLab Access & SSH Keys", done: true, time: "Day 1 — 10m" },
              { label: "Read Team Onboarding Wiki", done: true, time: "Day 1 — 45m" },
              { label: "Complete CHaaS Tutorial", done: true, time: "Day 2 — 2h" },
              { label: "First Local Build", done: true, time: "Day 2 — 30m" },
              { label: "Shadow Code Review Session", done: false, time: "Day 3 — Scheduled" },
              { label: "Write First Unit Test", done: false, time: "Day 3 — Pending" },
              { label: "Deploy to Staging (guided)", done: false, time: "Day 4 — Pending" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5"
              >
                {item.done ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                )}
                <span className={`text-sm flex-1 ${item.done ? "text-muted-foreground" : ""}`}>
                  {item.label}
                </span>
                <span className="text-[10px] text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs font-mono text-muted-foreground mb-3">
                Suggested Next Steps
              </div>
              <div className="space-y-2">
                {[
                  "Schedule shadow review with senior engineer",
                  "Explore audience-service test suite",
                  "Read partner API integration guide",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    <GitCommit className="w-3 h-3" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xs font-mono text-muted-foreground mb-3">
                Mentorship Session
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-xs">1-on-1 with Lead Engineer</div>
                    <div className="text-[10px] text-muted-foreground">Tomorrow, 14:00 — Room 304</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="text-xs">Architecture Overview</div>
                    <div className="text-[10px] text-muted-foreground">Fri, 11:00 — Zoom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="kb.tbank.internal/onboarding-agent/retrieve/q-4821">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Document Retrieval</h3>
              <p className="text-xs text-muted-foreground">Query: "How do I set up local ClickHouse connection?"</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded flex items-center gap-1">
                <Search className="w-3 h-3" /> Semantic Search
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Sources Found", value: "5" },
              { label: "Avg Relevance", value: "91%" },
              { label: "Chunks Retrieved", value: "12" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-[10px] text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {[
              {
                doc: "Onboarding Wiki — CHaaS Setup",
                chunk: "To set up a local ClickHouse instance, use the CHaaS (ClickHouse as a Service) proxy. First, ensure your VPN token is active. Clone the infra repository from gitlab.tbank.internal/infra/chaas and run docker-compose up in the /local directory.",
                confidence: 98,
                highlights: ["CHaaS proxy", "VPN token", "docker-compose up"],
                source: "wiki/onboarding/chaas-setup.md",
              },
              {
                doc: "CHaaS Setup Guide",
                chunk: "Connection string format: ch://localhost:8123/default. For staging data, use ch://chaas-proxy.tbank.internal:8123/staging. Authentication is handled via Kerberos tokens injected by the VPN client.",
                confidence: 94,
                highlights: ["Connection string", "localhost:8123", "Kerberos tokens"],
                source: "docs/chaas/connection-guide.md",
              },
              {
                doc: "Team Playbook — Local Development",
                chunk: "All local development databases are provisioned via Docker Compose. The audience-service expects CH_HOST=localhost and CH_PORT=8123. Verify connectivity with: curl http://localhost:8123/ping",
                confidence: 87,
                highlights: ["Docker Compose", "CH_HOST", "curl"],
                source: "playbook/local-dev.md",
              },
            ].map((source, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{source.doc}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    source.confidence >= 90 ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {source.confidence}% match
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">{source.source}</div>
                <div className="text-sm leading-relaxed">
                  {source.chunk.split(" ").map((word, wi) => {
                    const isHighlight = source.highlights.some(h => word.toLowerCase().includes(h.toLowerCase()) || h.toLowerCase().includes(word.toLowerCase()));
                    return (
                      <span key={wi} className={isHighlight ? "bg-yellow-500/20 text-yellow-200 px-0.5 rounded" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-1">
                  {source.highlights.map((h) => (
                    <span key={h} className="text-[10px] px-1.5 py-0.5 bg-blue-500/10 text-blue-400 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
