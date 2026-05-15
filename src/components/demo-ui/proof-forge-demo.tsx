import { BrowserMockup } from "@/components/browser-mockup";
import { CheckCircle, Clock, Flame, MessageSquare, Target, TrendingUp, UserCheck, Users, Zap } from "lucide-react";

export function ProofForgeDemo() {
  return (
    <div className="space-y-8">
      <BrowserMockup url="proofforge.io/team/acme-corp">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">ProofForge</h3>
              <p className="text-xs text-muted-foreground">Employee Growth Platform</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Team Members", value: "24" },
              { label: "Active Goals", value: "67" },
              { label: "Proofs This Week", value: "143" },
              { label: "Avg Streak", value: "8.4 days" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-muted-foreground mb-2">
              Growth Circles
            </div>
            {[
              {
                name: "Engineering Excellence",
                members: 8,
                week: 3,
                leader: "Alex M.",
                status: "active",
                topStreak: 14,
              },
              {
                name: "Leadership Skills",
                members: 6,
                week: 2,
                leader: "Maria K.",
                status: "active",
                topStreak: 9,
              },
              {
                name: "Public Speaking",
                members: 7,
                week: 1,
                leader: "Dmitry V.",
                status: "starting",
                topStreak: 3,
              },
              {
                name: "System Design",
                members: 5,
                week: 4,
                leader: "Ilya P.",
                status: "active",
                topStreak: 21,
              },
            ].map((circle) => (
              <div key={circle.name} className="bg-white/5 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{circle.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    circle.status === "active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {circle.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> {circle.members} members
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Week {circle.week}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400" /> Top streak: {circle.topStreak}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="proofforge.io/proof/verify">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Proof Verification</h3>
            <span className="text-xs text-muted-foreground">Engineering Excellence — Week 3</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Goal: Complete 3 code reviews this week</span>
                </div>
                <span className="text-xs text-green-400">In Progress</span>
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                Owner: Alex M. | Buddy: Maria K. | Due: Friday
              </div>

              <div className="space-y-2">
                <ProofItem
                  text="Reviewed PR #1847 — ClickHouse audience migration"
                  status="approved"
                  time="2 days ago"
                />
                <ProofItem
                  text="Reviewed PR #1842 — Partner region substitution logic"
                  status="approved"
                  time="1 day ago"
                />
                <ProofItem
                  text="Reviewed PR #1839 — CI pipeline update"
                  status="pending"
                  time="3 hours ago"
                />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Buddy Approval Required</span>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 space-y-2">
                <div className="text-xs text-muted-foreground">
                  Alex submitted proof for &quot;CI pipeline update review&quot;
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded transition-colors">
                    <CheckCircle className="w-3 h-3 inline mr-1" /> Approve
                  </button>
                  <button className="flex-1 px-3 py-1.5 text-xs bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 rounded transition-colors">
                    <MessageSquare className="w-3 h-3 inline mr-1" /> Request Clarification
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">AI Growth Dossier — Alex M.</span>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Consistency Score</span>
                  <span className="text-green-400 font-mono">94%</span>
                </div>
                <div className="flex justify-between">
                  <span>Goals Completed (4 weeks)</span>
                  <span className="text-green-400 font-mono">11/12</span>
                </div>
                <div className="flex justify-between">
                  <span>Top Skill Growth</span>
                  <span className="text-blue-400 font-mono">Code Review Depth</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Focus</span>
                  <span className="text-blue-400 font-mono">Architecture Decisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

function ProofItem({
  text,
  status,
  time,
}: {
  text: string;
  status: "approved" | "pending" | "rejected";
  time: string;
}) {
  const statusConfig = {
    approved: {
      icon: <CheckCircle className="w-3 h-3 text-green-400" />,
      label: "Approved",
      className: "bg-green-500/20 text-green-400",
    },
    pending: {
      icon: <Clock className="w-3 h-3 text-yellow-400" />,
      label: "Pending",
      className: "bg-yellow-500/20 text-yellow-400",
    },
    rejected: {
      icon: <MessageSquare className="w-3 h-3 text-red-400" />,
      label: "Rejected",
      className: "bg-red-500/20 text-red-400",
    },
  };

  const s = statusConfig[status];

  return (
    <div className="flex items-center justify-between bg-black/30 rounded-lg px-3 py-2">
      <div className="flex items-center gap-2">
        {s.icon}
        <span className="text-xs">{text}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${s.className}`}>
          {s.label}
        </span>
        <span className="text-[10px] text-muted-foreground">{time}</span>
      </div>
    </div>
  );
}
