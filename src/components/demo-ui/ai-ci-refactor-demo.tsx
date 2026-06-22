import { BrowserMockup } from "@/components/browser-mockup";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle,
  Circle,
  Clock,
  Code,
  FileCode2,
  FileText,
  Flag,
  GitBranch,
  GitCommit,
  GitMerge,
  Hash,
  Loader2,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Terminal,
  X,
  Zap,
} from "lucide-react";

export function AiCiRefactorDemo() {
  return (
    <div className="space-y-8">
      {/* Screen 1 — Push Event & Pipeline */}
      <BrowserMockup url="ci.tbank.internal/pipelines/4829">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px]">
          {/* Push banner */}
          <div className="bg-blue-500/10 border-b border-blue-500/20 px-4 py-2.5 flex items-center gap-3">
            <GitBranch className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <div className="text-sm">
              <span className="text-muted-foreground">Push detected on</span>{" "}
              <code className="bg-blue-500/20 px-1 py-0.5 rounded text-xs font-semibold text-blue-300 border border-blue-500/30">
                master
              </code>{" "}
              <span className="text-muted-foreground">by</span>{" "}
              <span className="font-medium text-foreground">a.sidnev</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <GitCommit className="w-3.5 h-3.5" />
              a4f7d2e
            </div>
          </div>

          {/* Pipeline header */}
          <div className="px-4 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Pipeline #4829</h2>
              <span className="text-xs text-muted-foreground">for audience-service</span>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/20 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Passed
            </span>
          </div>

          {/* Pipeline timeline */}
          <div className="px-4 py-6">
            <div className="flex items-center">
              {[
                { name: "Build", status: "passed" as const, icon: CheckCircle, duration: "2m 14s" },
                { name: "Test", status: "passed" as const, icon: CheckCircle, duration: "3m 42s" },
                { name: "Refactor", status: "running" as const, icon: Loader2, duration: "Running" },
                { name: "Validate", status: "pending" as const, icon: Circle, duration: "Pending" },
                { name: "Deploy", status: "pending" as const, icon: Circle, duration: "Pending" },
              ].map((stage, i, arr) => (
                <div key={stage.name} className="flex items-center flex-1">
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        stage.status === "passed"
                          ? "bg-green-500 border-green-500 text-white"
                          : stage.status === "running"
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "bg-transparent border-white/20 text-muted-foreground"
                      }`}
                    >
                      <stage.icon className={`w-5 h-5 ${stage.status === "running" ? "animate-spin" : ""}`} />
                    </div>
                    <div className="mt-2 text-xs font-semibold">{stage.name}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{stage.duration}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${stage.status === "passed" ? "bg-green-500" : "bg-white/10"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Refactor stage expanded */}
          <div className="mx-4 mb-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
            <div className="px-4 py-3 border-b border-purple-500/10 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Refactor Stage — Active</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-purple-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                Running
              </span>
            </div>
            <div className="px-4 py-3">
              <div className="text-sm mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="font-medium">Claude Agent is analyzing codebase</span>
                <span className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </div>

              {/* Live finding log */}
              <div className="bg-black/40 rounded-lg p-3 font-mono text-[11px] leading-relaxed text-muted-foreground max-h-40 overflow-y-auto space-y-1">
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:22]</span>
                  <span className="text-blue-400">INFO</span>
                  <span>Analyzing audience-service...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:25]</span>
                  <span className="text-amber-400">WARN</span>
                  <span>Found 3 JDBC connection leak patterns</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:28]</span>
                  <span className="text-blue-400">INFO</span>
                  <span>Generating refactoring plan...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:32]</span>
                  <span className="text-green-400">DONE</span>
                  <span>
                    Created Jira ticket:{" "}
                    <span className="text-white font-semibold">TECH-2847</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:35]</span>
                  <span className="text-blue-400">INFO</span>
                  <span>Generating try-with-resources transformations...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[09:14:40]</span>
                  <span className="text-blue-400">INFO</span>
                  <span>Applying changes to 8 files...</span>
                </div>
              </div>

              {/* Status badges */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border bg-amber-500/10 text-amber-400 border-amber-500/20">
                  <AlertTriangle className="w-3 h-3" />
                  Debt Patterns:{" "}
                  <span className="font-semibold">3</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border bg-blue-500/10 text-blue-400 border-blue-500/20">
                  <FileCode2 className="w-3 h-3" />
                  Files Affected:{" "}
                  <span className="font-semibold">8</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border bg-red-500/10 text-red-400 border-red-500/20">
                  <Zap className="w-3 h-3" />
                  Est. Impact:{" "}
                  <span className="font-semibold">High</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* Screen 2 — Jira Ticket & Plan */}
      <BrowserMockup url="jira.tbank.internal/browse/TECH-2847">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/5">
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mb-2">
              <span>Projects</span>
              <ArrowRight className="w-3 h-3" />
              <span>Audience Service</span>
              <ArrowRight className="w-3 h-3" />
              <span className="font-medium text-foreground">TECH-2847</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono font-semibold text-muted-foreground">TECH-2847</span>
                  </div>
                  <h1 className="text-base font-semibold leading-snug">Auto-refactor: Legacy JDBC patterns in audience-service</h1>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {["automation", "tech-debt", "ai-generated"].map((label) => (
                      <span key={label} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-muted-foreground border border-white/10">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="px-3 py-1.5 text-xs font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Edit</button>
                <button className="px-3 py-1.5 text-xs font-medium bg-white/5 text-foreground border border-white/10 rounded hover:bg-white/10 transition-colors">Comment</button>
              </div>
            </div>
          </div>

          {/* Two column layout */}
          <div className="flex">
            <div className="flex-1 px-4 py-4 border-r border-white/5 min-w-0">
              {/* Description */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Description</h3>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p>Claude Agent detected raw JDBC connection leaks in 3 methods during pipeline #4829. The identified patterns violate try-with-resources best practices and may lead to connection pool exhaustion under load.</p>
                  <p>Files affected:{" "}
                    <code className="text-xs bg-white/5 px-1 rounded text-foreground">AudienceMigrator.java</code>,{" "}
                    <code className="text-xs bg-white/5 px-1 rounded text-foreground">PartnerSync.java</code>,{" "}
                    <code className="text-xs bg-white/5 px-1 rounded text-foreground">CashbackCalculator.java</code>
                  </p>
                </div>
              </div>

              {/* Refactor Plan checklist */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Refactor Plan</h3>
                <div className="space-y-2">
                  {[
                    { text: "Detect connection leak patterns (AudienceMigrator, PartnerSync, CashbackCalculator)", done: true, inProgress: false },
                    { text: "Generate try-with-resources transformations", done: true, inProgress: false },
                    { text: "Run full test suite", done: false, inProgress: true },
                    { text: "Create draft MR for review", done: false, inProgress: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                          item.done ? "bg-blue-500" : item.inProgress ? "bg-blue-500/20 border border-blue-500/30" : "bg-transparent border border-white/20"
                        }`}
                      >
                        {item.done && <Check className="w-3 h-3 text-white" />}
                        {item.inProgress && <Loader2 className="w-3 h-3 text-blue-400 animate-spin" />}
                      </div>
                      <span className={`text-sm ${item.done ? "text-muted-foreground line-through" : item.inProgress ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline code diff */}
              <div className="mb-2">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Suggested Change</h3>
                <div className="rounded-lg border border-white/5 overflow-hidden">
                  <div className="bg-white/[0.03] px-3 py-1.5 border-b border-white/5 flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground">AudienceMigrator.java</span>
                    <span className="ml-auto text-[10px] text-muted-foreground">+312 / -89</span>
                  </div>
                  <div className="bg-black/30 p-3 font-mono text-[11px] leading-relaxed overflow-x-auto">
                    <div className="space-y-0.5">
                      <div className="text-red-400">- public void migrateAudience(...) &#123;</div>
                      <div className="text-red-400">- Connection conn = dataSource.getConnection();</div>
                      <div className="text-red-400">- Statement stmt = conn.createStatement();</div>
                      <div className="text-red-400">- ResultSet rs = stmt.executeQuery(sql);</div>
                      <div className="text-red-400">- // missing close()</div>
                      <div className="text-red-400">- &#125;</div>
                    </div>
                    <div className="mt-2 space-y-0.5">
                      <div className="text-green-400">+ @Transactional</div>
                      <div className="text-green-400">+ public void migrateAudience(...) &#123;</div>
                      <div className="text-green-400">+ try (Connection conn = dataSource.getConnection();</div>
                      <div className="text-green-400">+ Statement stmt = conn.createStatement();</div>
                      <div className="text-green-400">+ ResultSet rs = stmt.executeQuery(sql)) &#123;</div>
                      <div className="text-green-400">+ // resources auto-closed</div>
                      <div className="text-green-400">+ &#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-60 px-4 py-4 bg-white/[0.02] flex-shrink-0">
              <div className="space-y-5">
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Assignee</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">Claude Agent</div>
                      <div className="text-muted-foreground">sidnev-bot</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Reporter</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-xs font-medium">CI Refactor Bot</div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Status</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-medium">In Progress</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Linked MR</div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-400 hover:underline cursor-pointer">
                    <GitMerge className="w-3.5 h-3.5" />
                    !2341
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Priority</div>
                  <div className="flex items-center gap-1.5">
                    <Flag className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-medium">Medium</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Created</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    2m ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* Screen 3 — Draft MR with Inline Comments */}
      <BrowserMockup url="gitlab.tbank.internal/mr/2341">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px]">
          {/* MR Header */}
          <div className="px-4 py-4 border-b border-white/5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-6 h-6 rounded bg-green-500 flex items-center justify-center flex-shrink-0">
                  <GitMerge className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-base font-semibold leading-snug">[AUTO] Refactor: JDBC connection leaks → try-with-resources</h2>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/20 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Open
                    </span>
                    <span className="text-white/10">|</span>
                    <span>!2341</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="px-3 py-1.5 text-xs font-medium bg-white/5 text-foreground border border-white/10 rounded hover:bg-white/10 transition-colors">Edit</button>
              </div>
            </div>

            {/* Branch + pipeline */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 font-mono">auto/refactor-audience-service-jdbc</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/10 font-mono">master</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                <CheckCircle className="w-3.5 h-3.5" /> Pipeline passed
              </div>
            </div>

            {/* Auto-generated description */}
            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold">AI-generated description</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This MR addresses{" "}
                <span className="font-mono text-blue-400 bg-blue-500/10 px-1 rounded">TECH-2847</span>
                . It replaces raw JDBC connection management with try-with-resources blocks and adds{" "}
                <code className="text-[11px] bg-white/5 px-1 rounded border border-white/10">@Transactional</code>{" "}
                annotations where appropriate. All 1,247 tests pass; coverage increased 78% → 84%.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-4 border-b border-white/5 flex items-center gap-1">
            {[
              { label: "Overview", icon: FileText, active: false, count: null },
              { label: "Commits", icon: GitCommit, active: false, count: "3" },
              { label: "Changes", icon: Code, active: true, count: "8" },
              { label: "AI Review", icon: Zap, active: false, count: "4" },
            ].map((tab) => (
              <button
                key={tab.label}
                className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                  tab.active ? "border-orange-400 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
                {tab.count && (
                  <span className={`px-1.5 py-0 rounded text-[10px] ${tab.active ? "bg-white/10 text-foreground" : "bg-white/5 text-muted-foreground"}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Changes tab content */}
          <div className="px-4 py-4">
            <div className="rounded-t-lg border border-white/5 bg-white/[0.03] px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-mono font-medium">src/main/java/ru/tbank/audience/AudienceMigrator.java</span>
              </div>
              <div className="text-[10px] text-muted-foreground font-mono">+312 / -89</div>
            </div>

            <div className="border-x border-b border-white/5 rounded-b-lg overflow-hidden">
              <div className="bg-[#0a0a0b] p-0 font-mono text-[11px] leading-5 overflow-x-auto">
                <div className="flex">
                  <div className="w-10 bg-[#08080a] text-muted-foreground text-right pr-2 select-none border-r border-white/5">38</div>
                  <div className="pl-3 text-muted-foreground">@Service</div>
                </div>
                <div className="flex">
                  <div className="w-10 bg-[#08080a] text-muted-foreground text-right pr-2 select-none border-r border-white/5">39</div>
                  <div className="pl-3 text-muted-foreground">public class AudienceMigrator &#123;</div>
                </div>
                <div className="flex">
                  <div className="w-10 bg-[#08080a] text-muted-foreground text-right pr-2 select-none border-r border-white/5">40</div>
                  <div className="pl-3 text-muted-foreground"></div>
                </div>

                {/* Removed lines */}
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">41</div>
                  <div className="pl-3 text-red-400">- public void migrateAudience(Long campaignId) &#123;</div>
                </div>
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">42</div>
                  <div className="pl-3 text-red-400">- Connection conn = dataSource.getConnection();</div>
                </div>
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">43</div>
                  <div className="pl-3 text-red-400">- Statement stmt = conn.createStatement();</div>
                </div>
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">44</div>
                  <div className="pl-3 text-red-400">- ResultSet rs = stmt.executeQuery(sql);</div>
                </div>
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">45</div>
                  <div className="pl-3 text-red-400">- // no close() calls</div>
                </div>
                <div className="flex bg-red-500/5">
                  <div className="w-10 bg-[#08080a] text-red-400 text-right pr-2 select-none border-r border-white/5">46</div>
                  <div className="pl-3 text-red-400">- &#125;</div>
                </div>

                {/* Added lines */}
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">41</div>
                  <div className="pl-3 text-green-400">+ @Transactional</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">42</div>
                  <div className="pl-3 text-green-400">+ public void migrateAudience(Long campaignId) &#123;</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">43</div>
                  <div className="pl-3 text-green-400">+ try (Connection conn = dataSource.getConnection();</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">44</div>
                  <div className="pl-3 text-green-400">+ Statement stmt = conn.createStatement();</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">45</div>
                  <div className="pl-3 text-green-400">+ ResultSet rs = stmt.executeQuery(sql)) &#123;</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">46</div>
                  <div className="pl-3 text-green-400">+ // resources auto-closed</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">47</div>
                  <div className="pl-3 text-green-400">+ &#125;</div>
                </div>
                <div className="flex bg-green-500/5">
                  <div className="w-10 bg-[#08080a] text-green-400 text-right pr-2 select-none border-r border-white/5">48</div>
                  <div className="pl-3 text-green-400">+ &#125;</div>
                </div>
              </div>

              {/* Inline AI comment bubble */}
              <div className="border-t border-white/5 bg-[#0a0a0b]">
                <div className="flex">
                  <div className="w-10 bg-[#08080a] border-r border-white/5 flex items-start justify-center pt-3">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Terminal className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-xs font-semibold">Claude Agent</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/20 font-medium">AI</span>
                      <span className="text-[10px] text-muted-foreground ml-auto">2m ago</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed mb-2">
                      Consider try-with-resources or Spring{" "}
                      <code className="text-[11px] bg-white/5 px-1 rounded border border-white/10">@Transactional</code>{" "}
                      to prevent connection leak. The current pattern leaves{" "}
                      <code className="text-[11px] bg-white/5 px-1 rounded border border-white/10">conn</code>,{" "}
                      <code className="text-[11px] bg-white/5 px-1 rounded border border-white/10">stmt</code>, and{" "}
                      <code className="text-[11px] bg-white/5 px-1 rounded border border-white/10">rs</code>{" "}
                      unclosed on exception paths.
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      on{" "}
                      <span className="font-mono text-foreground">line 42</span> in{" "}
                      <span className="font-mono text-foreground">AudienceMigrator.java</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="px-4 py-3 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-xs font-semibold bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> Approve & Merge
              </button>
              <button className="px-3 py-2 text-xs font-medium bg-white/5 text-foreground border border-white/10 rounded hover:bg-white/10 transition-colors flex items-center gap-1.5">
                <Pencil className="w-3.5 h-3.5" /> Request Changes
              </button>
              <button className="px-3 py-2 text-xs font-medium bg-white/5 text-red-400 border border-white/10 rounded hover:bg-red-500/10 transition-colors flex items-center gap-1.5">
                <X className="w-3.5 h-3.5" /> Close
              </button>
            </div>
            <div className="text-[10px] text-muted-foreground">
              MR will be merged into{" "}
              <span className="font-mono text-foreground">master</span>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
