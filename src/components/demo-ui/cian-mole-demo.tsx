import { BrowserMockup } from "@/components/browser-mockup";
import { MapPin, TrendingUp, Building2, Calculator, BarChart3 } from "lucide-react";

export function CianMoleDemo() {
  return (
    <div className="space-y-8">
      <BrowserMockup url="cian-mole.local/admin/dashboard">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">CIAN Mole Dashboard</h3>
              <p className="text-xs text-muted-foreground">Commercial Real Estate Analytics</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Active Listings", value: "14,203" },
              { label: "Auctions Tracked", value: "892" },
              { label: "Properties Analyzed", value: "3,847" },
              { label: "Avg Eval Time", value: "~10 min" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-muted-foreground mb-2">
              Recent Analysis Requests
            </div>
            {[
              {
                address: "ул. Тверская, 15",
                type: "Office",
                area: "420 m²",
                price: "₽85M",
                status: "Analyzed",
                roi: "12.4%",
              },
              {
                address: "ул. Новый Арбат, 32",
                type: "Retail",
                area: "180 m²",
                price: "₽42M",
                status: "In Progress",
                roi: "—",
              },
              {
                address: "ул. Ленинградский просп., 45",
                type: "Warehouse",
                area: "1,200 m²",
                price: "₽120M",
                status: "Analyzed",
                roi: "8.7%",
              },
              {
                address: "ул. Пресненская наб., 10",
                type: "Office",
                area: "650 m²",
                price: "₽210M",
                status: "Analyzed",
                roi: "15.2%",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span className="text-sm font-medium">{item.address}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    item.status === "Analyzed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" /> {item.type}
                  </span>
                  <span>{item.area}</span>
                  <span className="font-mono">{item.price}</span>
                  {item.roi !== "—" && (
                    <span className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-3 h-3" /> ROI {item.roi}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserMockup>

      <BrowserMockup url="cian-mole.local/analysis/420-tverskaya">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded">
          <div className="flex items-center gap-2 mb-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium">Property Analysis</span>
          </div>

          <h3 className="text-lg font-semibold mb-1">ул. Тверская, 15</h3>
          <p className="text-xs text-muted-foreground mb-4">Office — 420 m² — ₽85,000,000</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Price per m²", value: "₽202K" },
              { label: "Market Avg", value: "₽215K" },
              { label: "Rental Yield", value: "12.4%" },
              { label: "Payback Period", value: "8.1 yrs" },
            ].map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-mono font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">District Market Analysis</span>
              </div>
              <div className="space-y-2">
                {[
                  { metric: "Avg price/m²", value: "₽215K", trend: "+3.2%" },
                  { metric: "Transaction volume", value: "47 deals", trend: "+12%" },
                  { metric: "Time on market", value: "89 days", trend: "-5 days" },
                  { metric: "Demand index", value: "7.4/10", trend: "stable" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{row.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{row.value}</span>
                      <span className={`${
                        row.trend.startsWith("+") ? "text-green-400" :
                        row.trend.startsWith("-") ? "text-red-400" :
                        "text-muted-foreground"
                      }`}>
                        {row.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Economic Calculator</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly rent (est.)</span>
                  <span className="font-mono">₽875K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Operating costs</span>
                  <span className="font-mono">₽180K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net monthly income</span>
                  <span className="font-mono text-green-400">₽695K</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-muted-foreground">Annual yield</span>
                  <span className="font-mono text-green-400 font-bold">12.4%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-xs font-mono text-muted-foreground mb-2">
              Comparable Listings
            </div>
            <div className="space-y-2">
              {[
                { address: "ул. Тверская, 12", area: "380 m²", price: "₽78M" },
                { address: "ул. Тверская, 18", area: "450 m²", price: "₽92M" },
                { address: "ул. Большая Дмитровка, 5", area: "410 m²", price: "₽88M" },
              ].map((comp, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span>{comp.address}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{comp.area}</span>
                    <span className="font-mono">{comp.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
