import { BrowserMockup } from "@/components/browser-mockup";
import {
  Scissors,
  Sparkles,
  Car,
  UtensilsCrossed,
  Clock,
  MapPin,
  Star,
  Flame,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  Calendar,
  Search,
  Filter,
  Heart,
  ShoppingBag,
  Zap,
  UserCheck,
  Activity,
  PieChart,
  Eye,
  Shield,
} from "lucide-react";

export function SvobodnoDemo() {
  return (
    <div className="space-y-8">
      {/* ─── Customer View: Hot Slots Discovery ─── */}
      <BrowserMockup url="urvi.app/explore">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                URVI
              </h3>
              <p className="text-xs text-muted-foreground">
                Last-minute deals near you
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Moscow
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Search services, salons...
              </span>
            </div>
            <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Filter className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { icon: <Scissors className="w-5 h-5" />, label: "Hair", active: true },
              { icon: <Sparkles className="w-5 h-5" />, label: "Nails", active: false },
              { icon: <Car className="w-5 h-5" />, label: "Car Wash", active: false },
              { icon: <UtensilsCrossed className="w-5 h-5" />, label: "Food", active: false },
            ].map((cat) => (
              <div
                key={cat.label}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg cursor-pointer transition-colors ${
                  cat.active
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                }`}
              >
                {cat.icon}
                <span className="text-[10px] font-medium">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Hot Slots Section */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Hot Slots</span>
            </div>
            <span className="text-xs text-muted-foreground">
              12 available now
            </span>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Studio 54",
                service: "Haircut + Styling",
                originalPrice: 4500,
                price: 2900,
                time: "Today, 18:00",
                distance: "0.8 km",
                rating: 4.8,
                reviews: 124,
                discount: 36,
                booked: false,
              },
              {
                name: "Luxe Nails",
                service: "Manicure Gel Polish",
                originalPrice: 3200,
                price: 1900,
                time: "Today, 19:30",
                distance: "1.2 km",
                rating: 4.6,
                reviews: 89,
                discount: 41,
                booked: false,
              },
              {
                name: "Gleam Auto",
                service: "Express Car Wash",
                originalPrice: 1500,
                price: 799,
                time: "Today, 17:00",
                distance: "2.5 km",
                rating: 4.4,
                reviews: 215,
                discount: 47,
                booked: true,
              },
            ].map((slot) => (
              <div
                key={slot.name}
                className="bg-white/5 rounded-lg p-3 space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                      {slot.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{slot.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {slot.service}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    {slot.rating} ({slot.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {slot.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {slot.time}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-green-400">
                      {slot.price.toLocaleString()} RUB
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      {slot.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded">
                      -{slot.discount}%
                    </span>
                  </div>
                  <button
                    className={`px-3 py-1.5 text-xs rounded-lg flex items-center gap-1 transition-colors ${
                      slot.booked
                        ? "bg-white/10 text-muted-foreground cursor-not-allowed"
                        : "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                    }`}
                  >
                    {slot.booked ? (
                      <>
                        <ShoppingBag className="w-3 h-3" /> Booked
                      </>
                    ) : (
                      <>
                        Book <ChevronRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>

      {/* ─── Partner View: Dashboard ─── */}
      <BrowserMockup url="urvi.app/partner/dashboard">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Partner Dashboard
              </h3>
              <p className="text-xs text-muted-foreground">
                Studio 54 — Hair & Beauty
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded flex items-center gap-1">
                <Shield className="w-3 h-3" /> Verified
              </span>
            </div>
          </div>

          {/* Revenue Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Revenue", value: "87,400 RUB", icon: <DollarSign className="w-4 h-4 text-green-400" />, change: "+12%" },
              { label: "Bookings", value: "34", icon: <ShoppingBag className="w-4 h-4 text-blue-400" />, change: "+5" },
              { label: "Fill Rate", value: "78%", icon: <TrendingUp className="w-4 h-4 text-orange-400" />, change: "+8%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {stat.icon}
                  <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-sm font-mono font-bold">{stat.value}</div>
                <span className="text-[10px] text-green-400">{stat.change} this week</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-4 bg-white/5 rounded-lg p-1">
            {["Slots", "Bookings", "Revenue"].map((tab, i) => (
              <button
                key={tab}
                className={`flex-1 py-1.5 text-xs rounded-md transition-colors ${
                  i === 1
                    ? "bg-white/10 text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Today's Bookings */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              Today&apos;s Bookings
            </span>
            <span className="text-xs text-muted-foreground">7 slots</span>
          </div>

          <div className="space-y-2 mb-5">
            {[
              { time: "10:00", client: "Maria K.", service: "Haircut", status: "completed", price: 3500 },
              { time: "12:00", client: "Anna S.", service: "Coloring", status: "completed", price: 5500 },
              { time: "14:00", client: "Dmitry V.", service: "Styling", status: "in-progress", price: 2900 },
              { time: "16:00", client: "Elena P.", service: "Haircut", status: "upcoming", price: 3500 },
              { time: "18:00", client: "Via URVI", service: "Haircut + Styling", status: "hot-slot", price: 2900 },
            ].map((booking) => (
              <div
                key={booking.time}
                className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                  booking.status === "hot-slot"
                    ? "bg-orange-500/10 border border-orange-500/20"
                    : "bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-10">
                    {booking.time}
                  </span>
                  <div>
                    <div className="text-sm">{booking.client}</div>
                    <div className="text-xs text-muted-foreground">
                      {booking.service}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono">{booking.price.toLocaleString()} RUB</span>
                  <BookingStatusBadge status={booking.status} />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg py-2.5 text-xs transition-colors">
              <Zap className="w-3.5 h-3.5 text-orange-400" />
              Publish Hot Slot
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg py-2.5 text-xs transition-colors">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              View Analytics
            </button>
          </div>
        </div>
      </BrowserMockup>

      {/* ─── Admin View: Platform Management ─── */}
      <BrowserMockup url="urvi.app/admin/platform">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                Admin Panel
              </h3>
              <p className="text-xs text-muted-foreground">
                Platform Overview & Management
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded">
                Super Admin
              </span>
            </div>
          </div>

          {/* Platform Metrics */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: "Users", value: "2,847", icon: <Users className="w-4 h-4 text-blue-400" /> },
              { label: "Partners", value: "63", icon: <UserCheck className="w-4 h-4 text-green-400" /> },
              { label: "Bookings", value: "1,204", icon: <ShoppingBag className="w-4 h-4 text-orange-400" /> },
              { label: "Revenue", value: "2.4M", icon: <DollarSign className="w-4 h-4 text-green-400" /> },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3 text-center">
                <div className="flex justify-center mb-1">{m.icon}</div>
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-[10px] text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs font-medium">Weekly Revenue</span>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[45, 62, 55, 78, 85, 92, 88].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-green-500/30 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-muted-foreground">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-3">
                <PieChart className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium">Category Split</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Hair", pct: 42, color: "bg-orange-400" },
                  { label: "Nails", pct: 28, color: "bg-pink-400" },
                  { label: "Car Wash", pct: 18, color: "bg-blue-400" },
                  { label: "Food", pct: 12, color: "bg-green-400" },
                ].map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2">
                    <div className="w-16 text-xs text-muted-foreground">{cat.label}</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.color}`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono w-8 text-right">{cat.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partner Approvals */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-purple-400" />
              Pending Partner Approvals
            </span>
            <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">
              4 pending
            </span>
          </div>

          <div className="space-y-2">
            {[
              { name: "CleanDrive Auto", category: "Car Wash", city: "Moscow", submitted: "2h ago", status: "pending" },
              { name: "NailArt Pro", category: "Nails", city: "SPb", submitted: "5h ago", status: "pending" },
              { name: "BurgerHub", category: "Food", city: "Kazan", submitted: "1d ago", status: "pending" },
              { name: "StyleLab", category: "Hair", city: "Moscow", submitted: "1d ago", status: "pending" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                    {partner.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{partner.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {partner.category} | {partner.city} | {partner.submitted}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 bg-green-500/20 hover:bg-green-500/30 rounded transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="p-1.5 bg-red-500/20 hover:bg-red-500/30 rounded transition-colors">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </button>
                  <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Alerts */}
          <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-medium">YClients Sync Delay</div>
              <div className="text-xs text-muted-foreground">
                3 partners experiencing slot sync delays. Last successful sync: 14 min ago.
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

function BookingStatusBadge({ status }: { status: string }) {
  const config: Record<string, { className: string; label: string; icon: React.ReactNode }> = {
    completed: {
      className: "bg-green-500/20 text-green-400",
      label: "Done",
      icon: <CheckCircle className="w-3 h-3" />,
    },
    "in-progress": {
      className: "bg-blue-500/20 text-blue-400",
      label: "Now",
      icon: <Activity className="w-3 h-3" />,
    },
    upcoming: {
      className: "bg-white/10 text-muted-foreground",
      label: "Soon",
      icon: <Clock className="w-3 h-3" />,
    },
    "hot-slot": {
      className: "bg-orange-500/20 text-orange-400",
      label: "Hot",
      icon: <Flame className="w-3 h-3" />,
    },
  };

  const s = config[status] || config.upcoming;

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded flex items-center gap-1 ${s.className}`}>
      {s.icon} {s.label}
    </span>
  );
}
