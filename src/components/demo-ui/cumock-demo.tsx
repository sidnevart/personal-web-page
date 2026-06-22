import { BrowserMockup } from "@/components/browser-mockup";
import { useState } from "react";
import {
  Timer,
  Bomb,
  Snowflake,
  Shuffle,
  Trophy,
  Circle,
  Zap,
  Users,
  ChevronDown,
  ChevronUp,
  Code2,
} from "lucide-react";

const PARTICIPANTS = [
  { id: 1, name: "You", color: "bg-green-500", ring: "ring-green-500", status: "coding", score: 1420 },
  { id: 2, name: "Player2", color: "bg-red-500", ring: "ring-red-500", status: "idle", score: 1580 },
  { id: 3, name: "Player3", color: "bg-blue-500", ring: "ring-blue-500", status: "bombing", score: 1200 },
  { id: 4, name: "Player4", color: "bg-yellow-500", ring: "ring-yellow-500", status: "coding", score: 1100 },
];

const LEADERBOARD = [
  { rank: 1, player: "Player2", score: 1580, time: "12:34", bombs: 3 },
  { rank: 2, player: "You", score: 1420, time: "14:32", bombs: 5 },
  { rank: 3, player: "Player3", score: 1200, time: "16:01", bombs: 2 },
  { rank: 4, player: "Player4", score: 1100, time: "18:45", bombs: 1 },
];

const CODE_LINES = [
  { num: 1, text: "def defuse_bomb(grid, time_left):", tokens: [["def","kw"],[" ","pl"],["defuse_bomb","fn"],["(grid, time_left):","pl"]] },
  { num: 2, text: "    n = len(grid)", tokens: [["    ","pl"],["n","var"],[" ","pl"],["=","op"],[" ","pl"],["len(grid)","call"]] },
  { num: 3, text: "    visited = [[False] * n for _ in range(n)]", tokens: [["    ","pl"],["visited","var"],[" ","pl"],["=","op"],[" ","pl"],["[[False] * n for _ in range(n)]","pl"]] },
  { num: 4, text: "    queue = deque([(0, 0, 0, [])])", tokens: [["    ","pl"],["queue","var"],[" ","pl"],["=","op"],[" ","pl"],["deque([(0, 0, 0, [])])","call"]] },
  { num: 5, text: "    # BFS with priority on time", tokens: [["    ","pl"],["# BFS with priority on time","cm"]] },
  { num: 6, text: "    while queue:", tokens: [["    ","pl"],["while","kw"],[" ","pl"],["queue:","var"]] },
  { num: 7, text: "        x, y, t, path = queue.popleft()", tokens: [["        ","pl"],["x, y, t, path","var"],[" ","pl"],["=","op"],[" ","pl"],["queue.popleft()","call"]] },
  { num: 8, text: "        if t > time_left:", tokens: [["        ","pl"],["if","kw"],[" ","pl"],["t","var"],[" ","pl"],[">","op"],[" ","pl"],["time_left","var"],[":","pl"]] },
  { num: 9, text: "            continue", tokens: [["            ","pl"],["continue","kw"]] },
  { num: 10, text: "        if grid[x][y] == 'target':", tokens: [["        ","pl"],["if","kw"],[" ","pl"],["grid[x][y]","pl"],[" ","pl"],["==","op"],[" ","pl"],["'target'","st"],[":","pl"]] },
  { num: 11, text: "            return path + [(x, y)]", tokens: [["            ","pl"],["return","kw"],[" ","pl"],["path","var"],[" ","pl"],["+","op"],[" ","pl"],["[(x, y)]","pl"]] },
  { num: 12, text: "        for dx, dy in DIRECTIONS:", tokens: [["        ","pl"],["for","kw"],[" ","pl"],["dx, dy","var"],[" ","pl"],["in","kw"],[" ","pl"],["DIRECTIONS","var"],[":","pl"]] },
  { num: 13, text: "            nx, ny = x + dx, y + dy", tokens: [["            ","pl"],["nx, ny","var"],[" ","pl"],["=","op"],[" ","pl"],["x + dx, y + dy","pl"]] },
  { num: 14, text: "            if 0 <= nx < n and 0 <= ny < n:", tokens: [["            ","pl"],["if","kw"],[" ","pl"],["0 <= nx < n and 0 <= ny < n","pl"],[":","pl"]] },
  { num: 15, text: "                if not visited[nx][ny]:", tokens: [["                ","pl"],["if","kw"],[" ","pl"],["not","kw"],[" ","pl"],["visited[nx][ny]","pl"],[":","pl"]] },
];

const CHAT = [
  { from: "sys", text: "Round 3 started: Bomb Defusal II" },
  { from: "p2", text: "Player2 used Freeze on you — 5s" },
  { from: "sys", text: "You used Bomb on Player3 — 20pts" },
  { from: "p3", text: "Player3 used Shuffle on Player4" },
];

function TokenSpan({ type, text }: { type: string; text: string }) {
  const colorMap: Record<string, string> = {
    kw: "text-purple-400",
    fn: "text-blue-400",
    var: "text-sky-300",
    op: "text-pink-400",
    st: "text-green-400",
    cm: "text-gray-500 italic",
    call: "text-amber-300",
    pl: "text-gray-300",
  };
  return <span className={colorMap[type] || "text-gray-300"}>{text}</span>;
}

export function CumockDemo() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [cooldowns, setCooldowns] = useState({ freeze: 0, bomb: 0, shuffle: 0 });

  const useAbility = (key: "freeze" | "bomb" | "shuffle") => {
    if (cooldowns[key] > 0) return;
    setCooldowns((c) => ({ ...c, [key]: key === "bomb" ? 15 : key === "freeze" ? 20 : 10 }));
    setTimeout(() => setCooldowns((c) => ({ ...c, [key]: 0 })), (key === "bomb" ? 15 : key === "freeze" ? 20 : 10) * 1000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <BrowserMockup url="cumock.local/arena" className="bg-[#0a0a0b]">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] min-h-[560px] flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400">
                <Timer className="w-3.5 h-3.5" />
                14:32
              </div>
              <span className="text-xs text-muted-foreground">Bomb Defusal II</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Python</span>
              <div className="flex -space-x-1.5">
                {PARTICIPANTS.map((p) => (
                  <div
                    key={p.id}
                    className={`w-6 h-6 rounded-full ${p.color} ring-2 ${p.ring} ring-offset-1 ring-offset-[#0a0a0b] flex items-center justify-center text-[8px] font-bold text-white z-${10 - p.id}`}
                  >
                    {p.name[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main layout */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Code editor */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-white/5">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 text-[10px] text-muted-foreground bg-white/[0.01]">
                <Code2 className="w-3 h-3" />
                solution.py
                <span className="ml-auto flex items-center gap-1">
                  <Zap className="w-3 h-3 text-green-500" />
                  Running
                </span>
              </div>
              <div className="flex-1 overflow-auto p-4 font-mono text-[13px] leading-relaxed">
                {CODE_LINES.map((line) => (
                  <div
                    key={line.num}
                    className={`flex gap-3 ${line.num === 7 ? "bg-white/[0.03] -mx-4 px-4 py-0.5 rounded" : ""}`}
                  >
                    <span className="w-6 text-right text-gray-600 select-none shrink-0">{line.num}</span>
                    <span className="whitespace-pre">
                      {line.tokens.map((t, i) => (
                        <TokenSpan key={i} type={t[1]} text={t[0]} />
                      ))}
                    </span>
                  </div>
                ))}
                <div className="flex gap-3 mt-1">
                  <span className="w-6 text-right text-gray-600 select-none shrink-0">16</span>
                  <span className="whitespace-pre text-gray-300">                    </span>
                  <span className="inline-block w-2 h-4 bg-primary/60 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-[260px] border-l border-white/5 flex flex-col bg-white/[0.01]">
              {/* Participants */}
              <div className="p-3 border-b border-white/5">
                <div className="flex items-center gap-2 mb-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                  <Users className="w-3 h-3" /> Participants
                </div>
                <div className="space-y-2">
                  {PARTICIPANTS.map((p) => (
                    <div key={p.id} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full ${p.color} flex items-center justify-center text-[8px] font-bold text-white`}>
                        {p.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium truncate">{p.name}</span>
                          <span className="text-[10px] text-muted-foreground">{p.score}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Circle className={`w-2 h-2 ${p.status === "coding" ? "text-green-500 fill-green-500" : p.status === "bombing" ? "text-red-500 fill-red-500" : "text-gray-600 fill-gray-600"}`} />
                          <span className="text-[10px] text-muted-foreground capitalize">{p.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bomb toolbar */}
              <div className="p-3 border-b border-white/5">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Sabotage</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: "freeze" as const, icon: Snowflake, label: "Freeze", color: "blue", cd: 20 },
                    { key: "bomb" as const, icon: Bomb, label: "Bomb", color: "red", cd: 15 },
                    { key: "shuffle" as const, icon: Shuffle, label: "Shuffle", color: "orange", cd: 10 },
                  ].map((a) => (
                    <button
                      key={a.key}
                      onClick={() => useAbility(a.key)}
                      disabled={cooldowns[a.key] > 0}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-all ${
                        cooldowns[a.key] > 0
                          ? "bg-white/[0.02] border-white/5 text-gray-600 cursor-not-allowed"
                          : a.color === "blue"
                          ? "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 active:scale-95"
                          : a.color === "red"
                          ? "bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20 active:scale-95"
                          : "bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-500/20 active:scale-95"
                      }`}
                    >
                      <a.icon className="w-4 h-4" />
                      <span className="text-[10px] font-medium">{a.label}</span>
                      {cooldowns[a.key] > 0 && (
                        <span className="text-[9px] text-muted-foreground">{cooldowns[a.key]}s</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mini chat */}
              <div className="flex-1 overflow-hidden flex flex-col p-3">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Log</div>
                <div className="flex-1 overflow-auto space-y-2">
                  {CHAT.map((msg, i) => (
                    <div key={i} className="text-[11px]">
                      {msg.from === "sys" ? (
                        <span className="text-gray-500">{msg.text}</span>
                      ) : (
                        <>
                          <span className={`font-medium ${msg.from === "p2" ? "text-red-400" : "text-blue-400"}`}>
                            {msg.from === "p2" ? "Player2" : "Player3"}
                          </span>
                          <span className="text-gray-400">{" "}{msg.text}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard toggle */}
          <div className="border-t border-white/5 bg-white/[0.01]">
            <button
              onClick={() => setShowLeaderboard((s) => !s)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Trophy className="w-3.5 h-3.5" />
              {showLeaderboard ? "Hide" : "Show"} Leaderboard
              {showLeaderboard ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {showLeaderboard && (
              <div className="px-4 pb-3">
                <div className="rounded-lg border border-white/5 overflow-hidden">
                  <div className="grid grid-cols-5 text-[10px] text-muted-foreground uppercase tracking-wider px-3 py-2 bg-white/[0.02] border-b border-white/5">
                    <span>Rank</span>
                    <span>Player</span>
                    <span className="text-right">Score</span>
                    <span className="text-right">Time</span>
                    <span className="text-right">Bombs</span>
                  </div>
                  {LEADERBOARD.map((row) => (
                    <div
                      key={row.rank}
                      className={`grid grid-cols-5 text-xs px-3 py-2 ${row.player === "You" ? "bg-primary/5 text-primary" : "text-gray-300"} border-b border-white/5 last:border-0`}
                    >
                      <span className="font-mono">#{row.rank}</span>
                      <span>{row.player}</span>
                      <span className="text-right font-mono">{row.score}</span>
                      <span className="text-right font-mono text-muted-foreground">{row.time}</span>
                      <span className="text-right font-mono text-muted-foreground">{row.bombs}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
