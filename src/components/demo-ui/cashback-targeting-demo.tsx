import { BrowserMockup } from "@/components/browser-mockup";
import { Activity, Clock, Database, Globe, Layers, Server, Shield, TrendingUp, Zap } from "lucide-react";

export function CashbackTargetingDemo() {
  return (
    <div className="space-y-8">
      <BrowserMockup url="analytics.tbank.internal/audiences">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Audience Builder</h3>
              <p className="text-xs text-muted-foreground">Partner Cashback Targeting — v2.4.1</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                <Activity className="w-3 h-3" /> Active
              </span>
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded flex items-center gap-1">
                <Database className="w-3 h-3" /> ClickHouse
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: "Transactions Today", value: "28.4M", change: "+12%", icon: <TrendingUp className="w-3 h-3" /> },
              { label: "Audience Size", value: "4.2M", change: "+840K", icon: <UsersIcon /> },
              { label: "ClickHouse Query", value: "1.2s", change: "-82%", icon: <Zap className="w-3 h-3" /> },
              { label: "Legacy Query", value: "6.8s", change: "Deprecated", icon: <Clock className="w-3 h-3" /> },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-muted-foreground">{m.label}</span>
                  <span className="text-[10px] text-green-400">{m.change}</span>
                </div>
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: m.label.includes("Query") ? "85%" : "72%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium">Query Performance</span>
                <span className="text-[10px] text-muted-foreground">Last 7 days</span>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[45, 62, 38, 75, 55, 88, 92].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-blue-500/40 rounded-sm"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-muted-foreground">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium">Region Distribution</span>
                <span className="text-[10px] text-muted-foreground">Active partners</span>
              </div>
              <div className="space-y-2">
                {[
                  { region: "Moscow", pct: 62, color: "bg-blue-500" },
                  { region: "SPb", pct: 24, color: "bg-purple-500" },
                  { region: "Kazan", pct: 9, color: "bg-yellow-500" },
                  { region: "Other", pct: 5, color: "bg-green-500" },
                ].map((r) => (
                  <div key={r.region} className="flex items-center gap-2">
                    <span className="text-[10px] w-12 text-muted-foreground">{r.region}</span>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="text-[10px] w-6 text-right">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-muted-foreground">
                Region Substitution Rules
              </div>
              <span className="text-[10px] text-muted-foreground">12 rules active</span>
            </div>
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="grid grid-cols-5 gap-2 px-3 py-2 border-b border-white/5 text-[10px] text-muted-foreground uppercase tracking-wider">
                <span>Region</span>
                <span>Partner</span>
                <span>Category</span>
                <span>Match Type</span>
                <span>Status</span>
              </div>
              {[
                { region: "Moscow", partner: "CafeNetwork", category: "Food & Beverage", match: "ML-based", status: "Auto" },
                { region: "SPb", partner: "CoffeeChain", category: "Food & Beverage", match: "Rule-based", status: "Auto" },
                { region: "Kazan", partner: "LocalFood", category: "Regional", match: "Manual", status: "Manual" },
                { region: "Novosibirsk", partner: "SiberiaRetail", category: "Retail", match: "ML-based", status: "Auto" },
                { region: "Yekaterinburg", partner: "UralExpress", category: "Logistics", match: "Rule-based", status: "Auto" },
              ].map((row) => (
                <div
                  key={row.region}
                  className="grid grid-cols-5 gap-2 px-3 py-2 border-b border-white/5 items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-xs flex items-center gap-1">
                    <Globe className="w-3 h-3 text-muted-foreground" />
                    {row.region}
                  </span>
                  <span className="text-xs text-muted-foreground">{row.partner}</span>
                  <span className="text-[10px] text-muted-foreground">{row.category}</span>
                  <span className="text-[10px] text-blue-400">{row.match}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded w-fit ${
                      row.status === "Auto"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="analytics.tbank.internal/pipeline">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">CI Pipeline</h3>
              <p className="text-xs text-muted-foreground">Pipeline #4829 — audience-service</p>
            </div>
            <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded flex items-center gap-1">
              <Shield className="w-3 h-3" /> Passed
            </span>
          </div>

          <div className="space-y-3">
            {[
              { step: "Build", time: "2m 14s", status: "pass", detail: "3,421 files compiled" },
              { step: "Unit Tests", time: "3m 42s", status: "pass", detail: "1,847 tests, 0 failures" },
              { step: "ClickHouse Validation", time: "1m 08s", status: "pass", detail: "Schema match: 100%" },
              { step: "Audience Integration Test", time: "2m 31s", status: "pass", detail: "4.2M rows validated" },
              { step: "Performance Benchmarks", time: "1m 15s", status: "pass", detail: "p95 < 1.5s" },
              { step: "Deploy to Staging", time: "45s", status: "pass", detail: "Rolling update complete" },
            ].map((step, i) => (
              <div key={step.step} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full ${step.status === "pass" ? "bg-green-500" : "bg-red-500"}`} />
                    {i < 5 && <div className="w-px h-6 bg-white/10 mt-1" />}
                  </div>
                  <div>
                    <span className="text-sm">{step.step}</span>
                    <p className="text-[10px] text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{step.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Total: 10m 20s</span>
              <span className="text-xs text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> 6m faster than legacy
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-muted-foreground">Runner: ci-runner-07</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-muted-foreground">Commit: a3f7d2e</span>
            </div>
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="analytics.tbank.internal/query-editor">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">ClickHouse Query Editor</h3>
              <p className="text-xs text-muted-foreground">Partner Substitution Analytics — shard 3 of 8</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                <Server className="w-3 h-3" /> Connected
              </span>
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded flex items-center gap-1">
                <Layers className="w-3 h-3" /> ch-cluster-prod
              </span>
            </div>
          </div>

          <div className="bg-black/40 rounded-lg border border-white/10 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/5">
              <span className="text-xs text-muted-foreground">query_partners_by_region.sql</span>
              <div className="flex gap-1">
                <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded text-muted-foreground">SQL</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">Validated</span>
              </div>
            </div>
            <div className="p-3 font-mono text-xs space-y-1">
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">1</span>
                <span><span className="text-purple-400">SELECT</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">2</span>
                <span className="pl-4"><span className="text-blue-400">region</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">3</span>
                <span className="pl-4"><span className="text-blue-400">partner_id</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">4</span>
                <span className="pl-4"><span className="text-yellow-400">COUNT</span>(<span className="text-blue-400">*</span>) <span className="text-purple-400">AS</span> <span className="text-blue-400">audience_size</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">5</span>
                <span className="pl-4"><span className="text-yellow-400">AVG</span>(<span className="text-blue-400">cashback_rate</span>) <span className="text-purple-400">AS</span> <span className="text-blue-400">avg_rate</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">6</span>
                <span><span className="text-purple-400">FROM</span> <span className="text-green-400">audiences</span>.<span className="text-green-400">partner_targeting</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">7</span>
                <span><span className="text-purple-400">WHERE</span> <span className="text-blue-400">date</span> &gt;= <span className="text-orange-400">today</span>() - <span className="text-orange-400">7</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">8</span>
                <span><span className="text-purple-400">GROUP BY</span> <span className="text-blue-400">region</span>, <span className="text-blue-400">partner_id</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-muted-foreground text-right pr-2 select-none">9</span>
                <span><span className="text-purple-400">ORDER BY</span> <span className="text-blue-400">audience_size</span> <span className="text-purple-400">DESC</span></span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium">Query Results</span>
              <div className="flex gap-2">
                <span className="text-[10px] text-muted-foreground">Rows: 47</span>
                <span className="text-[10px] text-green-400">Execution: 1.14s</span>
                <span className="text-[10px] text-muted-foreground">Scanned: 28.4M</span>
              </div>
            </div>
            <div className="overflow-hidden rounded border border-white/10">
              <div className="grid grid-cols-4 gap-2 px-3 py-2 bg-white/5 border-b border-white/10 text-[10px] text-muted-foreground uppercase tracking-wider">
                <span>Region</span>
                <span>Partner ID</span>
                <span className="text-right">Audience Size</span>
                <span className="text-right">Avg Rate</span>
              </div>
              {[
                { region: "Moscow", partner: "CafeNetwork", size: "1,847,293", rate: "4.2%", highlight: true },
                { region: "SPb", partner: "CoffeeChain", size: "892,104", rate: "3.8%", highlight: false },
                { region: "Kazan", partner: "LocalFood", size: "341,502", rate: "5.1%", highlight: false },
                { region: "Novosibirsk", partner: "SiberiaRetail", size: "218,947", rate: "3.5%", highlight: false },
                { region: "Yekaterinburg", partner: "UralExpress", size: "156,203", rate: "4.0%", highlight: false },
              ].map((row) => (
                <div
                  key={row.partner}
                  className={`grid grid-cols-4 gap-2 px-3 py-2 border-b border-white/5 text-xs items-center ${row.highlight ? "bg-blue-500/10" : ""}`}
                >
                  <span>{row.region}</span>
                  <span className="font-mono text-muted-foreground">{row.partner}</span>
                  <span className="text-right font-mono">{row.size}</span>
                  <span className="text-right font-mono text-green-400">{row.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

function UsersIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
