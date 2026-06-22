import { BrowserMockup } from "@/components/browser-mockup";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  FileCode2,
  GitCommit,
  GitMerge,
  MessageSquare,
  Search,
  Shield,
  User,
} from "lucide-react";

export function AiCodeReviewDemo() {
  return (
    <div className="space-y-8">
      {/* MR List */}
      <BrowserMockup url="gitlab.tbank.internal/merge-requests">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px] flex">
          {/* Left Sidebar */}
          <div className="w-48 border-r border-white/5 p-3 hidden sm:block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-[#6b4fbb] flex items-center justify-center text-[10px] font-bold text-white">
                Gl
              </div>
              <span className="text-xs font-semibold">cashback-core</span>
            </div>
            <div className="space-y-1">
              {["Overview", "Issues", "Merge Requests", "CI/CD", "Settings"].map((item) => (
                <div
                  key={item}
                  className={`text-xs px-2 py-1.5 rounded ${
                    item === "Merge Requests" ? "bg-[#6b4fbb]/15 text-[#a68de0]" : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-4">
              <span>cashback-core</span>
              <span>/</span>
              <span>Merge Requests</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold">Merge Requests</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-white/5 rounded px-2 py-1 text-xs text-muted-foreground">
                  <Search className="w-3 h-3" />
                  <span>Search or filter results...</span>
                </div>
                <span className="text-[10px] px-2 py-1 bg-[#6b4fbb]/20 text-[#a68de0] rounded-full">
                  15 open
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  mr: "!1847",
                  title: "Add ClickHouse audience migration",
                  author: "a.sidnev",
                  pipeline: "passed",
                  aiStatus: "Reviewed · 2 minor",
                  aiColor: "text-yellow-400",
                  time: "2h ago",
                  assignee: "a.sidnev",
                },
                {
                  mr: "!1842",
                  title: "Fix partner region substitution logic",
                  author: "dev-maria",
                  pipeline: "passed",
                  aiStatus: "Reviewed · Clean",
                  aiColor: "text-green-400",
                  time: "4h ago",
                  assignee: "dev-maria",
                },
                {
                  mr: "!1839",
                  title: "Update CI pipeline for n8n workflows",
                  author: "dev-alex",
                  pipeline: "passed",
                  aiStatus: "Reviewed · 1 moderate",
                  aiColor: "text-orange-400",
                  time: "6h ago",
                  assignee: "dev-alex",
                },
              ].map((item) => (
                <div
                  key={item.mr}
                  className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 rounded-lg px-3 py-2.5 transition-colors"
                >
                  <GitMerge className="w-4 h-4 text-[#6b4fbb] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-mono text-muted-foreground">{item.mr}</span>
                      <span className="text-sm font-medium truncate">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-400" /> Pipeline passed
                      </span>
                      <span className={`flex items-center gap-1 ${item.aiColor}`}>
                        <Shield className="w-3 h-3" /> {item.aiStatus}
                      </span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-mono flex-shrink-0">
                    {item.assignee.charAt(0).toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* AI Review Tab */}
      <BrowserMockup url="gitlab.tbank.internal/mr/1847/ai-review">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px] flex">
          <div className="w-48 border-r border-white/5 p-3 hidden sm:block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-[#6b4fbb] flex items-center justify-center text-[10px] font-bold text-white">
                Gl
              </div>
              <span className="text-xs font-semibold">cashback-core</span>
            </div>
            <div className="space-y-1">
              {["Overview", "Commits", "Changes", "CI/CD", "AI Review"].map((item) => (
                <div
                  key={item}
                  className={`text-xs px-2 py-1.5 rounded ${
                    item === "AI Review" ? "bg-[#6b4fbb]/15 text-[#a68de0]" : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-3">
              <span>cashback-core</span>
              <span>/</span>
              <span>!1847</span>
              <span>/</span>
              <span>AI Review</span>
            </div>

            <div className="bg-[#6b4fbb]/10 border border-[#6b4fbb]/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#a68de0] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">AI Review by SidnevBot</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">Passed</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This MR introduces audience migration logic from legacy PostgreSQL to ClickHouse.
                    The implementation looks solid, but there are 2 minor suggestions and 1 moderate concern.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Security: Passed
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded flex items-center gap-1">
                      <AlertTriangle className="w-2.5 h-2.5" /> Performance: 1 issue
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Style: OK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Issue 1 */}
              <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-yellow-500/5">
                  <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded font-medium">Minor</span>
                  <span className="text-sm font-medium">Missing index on partner_id</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">AudienceMigrator.java:142</span>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Consider adding an index on partner_id for faster audience lookups. Without it, the migration query performs a full table scan on 4.2M rows.
                  </p>
                  <div className="bg-black/30 rounded p-2 space-y-1 font-mono text-[10px]">
                    <code className="text-red-400 block">- // TODO: add index before migration</code>
                    <code className="text-green-400 block">+ CREATE INDEX idx_audience_partner ON audiences(partner_id);</code>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <MessageSquare className="w-3 h-3" />
                    <span>Suggested by SidnevBot · 14m ago</span>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-yellow-500/5">
                  <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded font-medium">Minor</span>
                  <span className="text-sm font-medium">Consider batch inserts</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">AudienceMigrator.java:203</span>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    For large audiences, batch inserts may improve performance by ~40%. Current implementation inserts row-by-row.
                  </p>
                  <div className="bg-black/30 rounded p-2 space-y-1 font-mono text-[10px]">
                    <code className="text-red-400 block">- for (Audience a : audiences) &#123; stmt.execute(insert); &#125;</code>
                    <code className="text-green-400 block">+ stmt.executeBatch(insertBatch(audiences, BATCH_SIZE));</code>
                  </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-orange-500/5">
                  <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded font-medium">Moderate</span>
                  <span className="text-sm font-medium">Unchecked null in config loader</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">ClickHouseConfig.java:47</span>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    The host field may be null if the property is missing from the environment. Add a null check or default value validation.
                  </p>
                  <div className="bg-black/30 rounded p-2 space-y-1 font-mono text-[10px]">
                    <code className="text-red-400 block">- return host + &quot;:&quot; + port;</code>
                    <code className="text-green-400 block">+ return Objects.requireNonNullElse(host, &quot;localhost&quot;) + &quot;:&quot; + port;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* Diff View with inline comments */}
      <BrowserMockup url="gitlab.tbank.internal/mr/1847/diff">
        <div className="bg-[#0d0d0f] text-[#f5f5f5] min-h-[420px] flex">
          <div className="w-48 border-r border-white/5 p-3 hidden sm:block">
            <div className="text-[10px] font-mono text-muted-foreground mb-2">Files changed (12)</div>
            <div className="space-y-1">
              {[
                "src/migration/AudienceMigrator.java",
                "src/config/ClickHouseConfig.java",
                "src/service/AudienceService.java",
                "src/repository/LegacyRepo.java",
              ].map((f, i) => (
                <div
                  key={f}
                  className={`text-[10px] px-2 py-1.5 rounded truncate ${
                    i === 0 ? "bg-white/5 text-foreground" : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-mono text-muted-foreground">src/migration/AudienceMigrator.java</div>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                  <ChevronDown className="w-3 h-3" /> +203
                </span>
                <span className="text-[10px] px-2 py-1 bg-red-500/20 text-red-400 rounded flex items-center gap-1">
                  <ChevronDown className="w-3 h-3" /> -45
                </span>
              </div>
            </div>

            <div className="font-mono text-[11px] space-y-0 rounded-lg border border-white/5 overflow-hidden">
              <div className="flex">
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">138</span>
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">138</span>
                <span className="pl-3 py-1 text-muted-foreground">    // Initialize ClickHouse connection pool</span>
              </div>
              <div className="flex bg-green-500/5">
                <span className="w-10 text-right pr-3 py-1 select-none border-r border-white/5 text-green-400 bg-white/[0.02]"> </span>
                <span className="w-10 text-green-400 text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">139</span>
                <span className="pl-3 py-1 text-green-400">+   pool.setMaxConnections(64);</span>
              </div>

              <div className="flex bg-[#6b4fbb]/5 border-l-2 border-[#6b4fbb]">
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">142</span>
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">142</span>
                <span className="pl-3 py-1 text-muted-foreground">    // Migrate audiences</span>
              </div>
              <div className="flex">
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">143</span>
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">143</span>
                <span className="pl-3 py-1 text-muted-foreground">    List&lt;Audience&gt; audiences = legacyRepo.findAll();</span>
              </div>

              {/* Inline AI comment */}
              <div className="bg-[#6b4fbb]/5 px-3 py-2 border-l-2 border-[#6b4fbb]">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#6b4fbb]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-[#a68de0]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium">SidnevBot</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">Minor</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Consider adding an index on partner_id for faster audience lookups. Without it, the migration query performs a full table scan on 4.2M rows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex bg-yellow-500/5">
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">203</span>
                <span className="w-10 text-muted-foreground text-right pr-3 py-1 select-none border-r border-white/5 bg-white/[0.02]">203</span>
                <span className="pl-3 py-1 text-muted-foreground">    stmt.execute(insert);</span>
              </div>

              {/* Inline AI comment 2 */}
              <div className="bg-[#6b4fbb]/5 px-3 py-2 border-l-2 border-[#6b4fbb]">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#6b4fbb]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-[#a68de0]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium">SidnevBot</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">Minor</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      For large audiences, batch inserts may improve performance by ~40%. Current implementation inserts row-by-row.
                    </p>
                    <div className="bg-black/30 rounded p-2 mt-2 space-y-1 font-mono text-[10px]">
                      <code className="text-red-400 block">- for (Audience a : audiences) &#123; stmt.execute(insert); &#125;</code>
                      <code className="text-green-400 block">+ stmt.executeBatch(insertBatch(audiences, BATCH_SIZE));</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second file */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono text-muted-foreground">src/config/ClickHouseConfig.java</div>
                <span className="text-[10px] text-muted-foreground">+89 / -12 lines</span>
              </div>
              <div className="font-mono text-[11px] space-y-0 rounded-lg border border-white/5 overflow-hidden p-3">
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">public class ClickHouseConfig &#123;</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    @Value(&quot;&#36;clickhouse.host:ch-cluster-prod.tbank.internal&quot;)</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    private String host;</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    @Value(&quot;&#36;clickhouse.port:8123&quot;)</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    private int port;</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    @Value(&quot;&#36;clickhouse.database:audiences&quot;)</span>
                </div>
                <div className="flex bg-green-500/5">
                  <span className="w-6 text-green-400 text-right pr-2 select-none">+</span>
                  <span className="text-green-400">    private String database;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
