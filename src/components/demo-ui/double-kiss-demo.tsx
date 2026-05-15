import { BrowserMockup } from "@/components/browser-mockup";
import {
  Calendar,
  ChevronRight,
  Clock,
  Coins,
  Crosshair,
  MapPin,
  Trophy,
  User,
} from "lucide-react";

export function DoubleKissDemo() {
  return (
    <div className="space-y-8">
      {/* ── Screen 1: Home ───────────────────────────────────────────── */}
      <BrowserMockup url="t.me/doublekiss_bot/app">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          {/* Hero */}
          <div className="flex items-start justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold leading-tight">Привет, Иван!</h3>
              <p className="text-sm text-[#f5f5f5]/65 mt-1">
                Добро пожаловать в Double Kiss
              </p>
            </div>
            <div className="shrink-0 border border-[#f5f5f5]/20 bg-[#1D1D1B]/80 px-3 py-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-[#ED793E]" />
                <span className="text-lg font-bold tabular-nums">1 250</span>
              </div>
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#f5f5f5]/50">
                кисскоинов
              </p>
            </div>
          </div>

          {/* Active matches */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
              Активные матчи
            </p>
            <div className="flex flex-col gap-3">
              <div className="border border-white/10 bg-white/[0.03] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-[#ED793E]" />
                    <span className="text-sm font-bold">Пул · ELO 1 420</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                    Запланирован
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#f5f5f5]/55">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> vs Алексей К.
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> 15 мая
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 19:00
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#f5f5f5]/45 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Double Kiss — Москва, ул. Большая Полянка, 28
                </div>
              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-[#ED793E]" />
                    <span className="text-sm font-bold">Снукер · ELO 980</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400">
                    Ожидает подтверждения
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#f5f5f5]/55">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> vs Дмитрий В.
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> 18 мая
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 20:30
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#f5f5f5]/45 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Double Kiss — Москва, ул. Большая Полянка, 28
                </div>
              </div>
            </div>
          </div>

          {/* Invites */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
              Приглашения
            </p>
            <div className="border border-white/10 bg-white/[0.03] rounded-lg p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold">Мария С.</p>
                  <p className="text-xs text-[#f5f5f5]/45 mt-0.5">
                    Пул · ELO 1 350
                  </p>
                  <p className="text-xs text-[#f5f5f5]/40 mt-1">
                    Ставка: 100 кисскоинов
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2 shrink-0">
                  <button className="bg-[#1D1D1B] px-3 py-2 text-xs font-bold text-white rounded hover:opacity-90 transition-opacity">
                    Принять
                  </button>
                  <button className="border border-white/20 bg-transparent px-3 py-2 text-xs font-bold text-[#f5f5f5] rounded hover:bg-white/5 transition-colors">
                    Нет
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Event */}
          <div>
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45">
                Афиша
              </p>
              <span className="text-xs font-bold text-[#f5f5f5] underline decoration-[#ED793E] decoration-2 underline-offset-4 cursor-pointer">
                Все →
              </span>
            </div>
            <div className="border border-white/15 bg-white/[0.04] rounded-lg shadow-lg overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-[#1D1D1B] to-[#2a2a28] flex items-center justify-center">
                <Trophy className="w-10 h-10 text-[#ED793E]/60" />
              </div>
              <div className="p-3 border-t border-white/10">
                <p className="text-sm font-bold leading-snug">
                  Турнир по пулу — «Весенний кубок 2026»
                </p>
                <p className="text-xs text-[#f5f5f5]/45 mt-1">
                  24 мая, 12:00 — 20:00
                </p>
              </div>
              <div className="border-t border-white/10 px-3 pb-3">
                <button className="mt-2 w-full bg-[#ED793E] py-2.5 text-sm font-bold text-white rounded hover:bg-[#D96A2E] transition-colors">
                  Забронировать стол
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* ── Screen 2: Booking Flow (Confirm step) ───────────────────── */}
      <BrowserMockup url="t.me/doublekiss_bot/booking">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Бронирование</h3>
            <button className="text-xs text-[#f5f5f5]/55 hover:text-[#f5f5f5]">
              Закрыть
            </button>
          </div>

          {/* Step breadcrumb */}
          <div className="flex items-center gap-1 text-[10px] text-[#f5f5f5]/35 mb-6 overflow-x-auto">
            {[
              { label: "Локация", done: true },
              { label: "Дисциплина", done: true },
              { label: "Дата", done: true },
              { label: "Время", done: true },
              { label: "Стол", done: true },
              { label: "Подтверждение", done: false },
            ].map((step, idx, arr) => (
              <span key={step.label} className="flex items-center gap-1 shrink-0">
                <span
                  className={`${
                    step.done
                      ? "text-[#f5f5f5]/55"
                      : idx === arr.length - 1
                        ? "text-[#ED793E] font-bold"
                        : "text-[#f5f5f5]/35"
                  }`}
                >
                  {step.label}
                </span>
                {idx < arr.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-[#f5f5f5]/20" />
                )}
              </span>
            ))}
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-3">
            Double Kiss · Пул · 15 мая
          </p>

          <h2 className="text-xl font-bold mb-4">Подтверждение</h2>

          <div className="border border-white/15 bg-white/[0.03] rounded-lg p-4 mb-4">
            <SummaryRow label="Локация" value="Double Kiss — Москва" />
            <SummaryRow label="Дисциплина" value="Пул (8 футов)" />
            <SummaryRow label="Дата" value="15 мая, 19:00 — 20:30" />
            <SummaryRow label="Стол" value="Стол 3 — VIP зал" />
            <div className="my-3 border-t border-white/10" />
            <SummaryRow label="Соперник" value="Алексей К." />
            <SummaryRow label="Ставка" value="100 кисскоинов" />
          </div>

          <p className="text-xs text-[#f5f5f5]/35 leading-relaxed mb-6">
            Бронирование будет создано в системе клуба. Алексей получит
            уведомление о дате и месте матча.
          </p>

          <button className="w-full bg-[#1D1D1B] py-3.5 text-sm font-bold text-white rounded hover:opacity-85 transition-opacity">
            Подтвердить бронирование
          </button>

          {/* Time slots preview (visual detail) */}
          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
              Доступное время
            </p>
            <div className="grid grid-cols-4 gap-2">
              {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(
                (t) => (
                  <button
                    key={t}
                    className={`border py-2.5 text-xs font-bold rounded transition-colors ${
                      t === "19:00"
                        ? "border-white/30 bg-white/10 text-[#f5f5f5]"
                        : t === "20:30"
                          ? "border-[#ED793E] bg-[#ED793E] text-white"
                          : "border-white/10 bg-white/[0.02] text-[#f5f5f5]/30"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
            <p className="text-xs text-[#f5f5f5]/35 mt-2">
              Серые слоты уже заняты. Оранжевый — ваш выбор.
            </p>
          </div>
        </div>
      </BrowserMockup>

      {/* ── Screen 3: Profile + Match Invite ───────────────────────── */}
      <BrowserMockup url="t.me/doublekiss_bot/player/ivan_k">
        <div className="bg-[#0a0a0b] text-[#f5f5f5] p-4 rounded min-h-[520px]">
          {/* Profile header */}
          <div className="flex items-start gap-3 mb-6">
            <div className="h-20 w-20 shrink-0 overflow-hidden border border-white/15 bg-white/5 rounded-lg flex items-center justify-center">
              <User className="h-9 w-9 text-[#f5f5f5]/30" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center pt-1">
              <p className="text-xl font-bold leading-tight truncate">
                Иван Кузнецов
              </p>
              <p className="text-sm text-[#f5f5f5]/45 mt-0.5 truncate">
                @ivan_k
              </p>
            </div>
            <div className="shrink-0 border border-[#f5f5f5]/20 bg-[#1D1D1B]/80 px-2 py-2 rounded-lg">
              <div className="flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-[#ED793E]" />
                <span className="text-base font-bold tabular-nums">1 250</span>
              </div>
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#f5f5f5]/50 text-center">
                KC
              </p>
            </div>
          </div>

          {/* Disciplines */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
              Дисциплины
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                { name: "Пул", elo: 1420 },
                { name: "Снукер", elo: 980 },
                { name: "Русский бильярд", elo: 1150 },
              ].map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between border border-white/10 bg-white/[0.03] px-4 py-3 rounded-lg"
                >
                  <span className="text-sm font-bold">{d.name}</span>
                  <span className="text-xs font-bold tabular-nums tracking-wide text-[#f5f5f5]/55">
                    ELO {d.elo.toLocaleString("ru-RU")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
              О себе
            </p>
            <p className="text-sm text-[#f5f5f5]/80 leading-relaxed">
              Играю в пул 5 лет. Люблю агрессивный стиль и сложные выходы.
              Предпочитаю вечерние катки после работы.
            </p>
          </div>

          {/* Match invite composition */}
          <div className="border border-white/15 bg-white/[0.03] rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold">Приглашение на матч</h4>
              <span className="text-xs text-[#f5f5f5]/45">
                vs Иван К.
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
                Дисциплина
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Пул", "Снукер", "Русский бильярд"].map((d) => (
                  <button
                    key={d}
                    className={`border px-3.5 py-2.5 text-xs font-bold rounded transition-colors ${
                      d === "Пул"
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-[#f5f5f5]/70 hover:bg-white/5"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/45 mb-2">
                Ставка (кисскоины)
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {[50, 100, 200, 500].map((n) => (
                  <button
                    key={n}
                    className={`border py-2.5 text-xs font-bold tabular-nums rounded transition-colors ${
                      n === 100
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-[#f5f5f5]/70 hover:bg-white/5"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] px-4 py-3 rounded-lg mb-4">
              <SummaryRow label="Соперник" value="Иван К." />
              <SummaryRow label="Дисциплина" value="Пул" />
              <SummaryRow label="Ставка" value="100 кисскоинов" />
              <div className="my-2 border-t border-white/10" />
              <SummaryRow label="Ваш баланс" value="1 250 кисскоинов" />
            </div>

            <button className="w-full bg-[#1D1D1B] py-3.5 text-sm font-bold text-white rounded hover:opacity-85 transition-opacity">
              Отправить приглашение
            </button>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1.5 first:pt-0 last:pb-0">
      <span className="text-xs text-[#f5f5f5]/45">{label}</span>
      <span className="text-xs font-bold text-right text-[#f5f5f5] max-w-[60%]">
        {value}
      </span>
    </div>
  );
}
