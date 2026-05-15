import { useState } from "react";
import {
  Search,
  Gift,
  Calendar,
  Bell,
  Menu,
  Shapes,
  Waves,
  BarChart3,
  Globe,
  Calculator,
  BookOpen,
  Trophy,
  User,
  Wifi,
  Battery,
  Signal,
  ChevronRight,
} from "lucide-react";

interface Course {
  id: number;
  name: string;
  color: string;
  icon: React.ReactNode;
}

interface Competition {
  id: number;
  title: string;
  date: string;
  participants: number;
}

const COURSES: Course[] = [
  { id: 1, name: "CS Fundamentals", color: "bg-[#A78BFA]", icon: <Shapes className="w-7 h-7 text-white" /> },
  { id: 2, name: "Data Structures", color: "bg-[#A78BFA]", icon: <Waves className="w-7 h-7 text-white" /> },
  { id: 3, name: "English B2", color: "bg-[#FB923C]", icon: <Globe className="w-7 h-7 text-white" /> },
  { id: 4, name: "Academic Writing", color: "bg-[#FB923C]", icon: <BookOpen className="w-7 h-7 text-white" /> },
  { id: 5, name: "Calculus I", color: "bg-[#4ADE80]", icon: <Calculator className="w-7 h-7 text-white" /> },
  { id: 6, name: "Econometrics", color: "bg-[#4ADE80]", icon: <BarChart3 className="w-7 h-7 text-white" /> },
  { id: 7, name: "World History", color: "bg-[#E5E7EB]", icon: <BookOpen className="w-7 h-7 text-white" /> },
  { id: 8, name: "Sociology", color: "bg-[#E5E7EB]", icon: <Globe className="w-7 h-7 text-white" /> },
];

const COMPETITIONS: Competition[] = [
  { id: 1, title: "ICPC Qualifiers", date: "24 Oct", participants: 142 },
  { id: 2, title: "Hackathon 2024", date: "2 Nov", participants: 89 },
  { id: 3, title: "Data Cup", date: "15 Nov", participants: 64 },
  { id: 4, title: "AI Challenge", date: "1 Dec", participants: 120 },
];

const TABS = [
  { key: "study", label: "Обучение", icon: <BookOpen className="w-5 h-5" /> },
  { key: "competitions", label: "Соревнования", icon: <Trophy className="w-5 h-5" /> },
  { key: "profile", label: "Профиль", icon: <User className="w-5 h-5" /> },
] as const;

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white select-none">
      <span className="text-xs font-semibold text-gray-900">21:06</span>
      <div className="flex items-center gap-1.5 text-gray-900">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
          <span className="text-white text-xs font-bold">Цу</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-1">
          <Gift className="w-5 h-5 text-gray-600" />
        </button>
        <button className="flex items-center gap-1 p-1">
          <Calendar className="w-5 h-5 text-gray-600" />
          <span className="text-[10px] font-semibold text-gray-700">LD: 50</span>
        </button>
        <button className="relative p-1">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-[10px] font-bold text-indigo-700">ДК</span>
        </div>
        <button className="p-1">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="px-4 py-2 bg-white">
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <span className="font-medium">Обучение</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 font-semibold">Актуальные курсы</span>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <h1 className="text-lg font-bold text-gray-900">{title}</h1>
      <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
        <Search className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}

function CourseGrid() {
  return (
    <div className="px-4 pb-4 bg-white">
      <div className="grid grid-cols-2 gap-3">
        {COURSES.map((course) => (
          <button
            key={course.id}
            className="flex flex-col items-start gap-3 p-4 rounded-2xl transition-transform active:scale-95 text-left"
            style={{ backgroundColor: course.color.replace("bg-[", "").replace("]", "") }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {course.icon}
            </div>
            <span className="text-xs font-semibold text-gray-900">{course.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CompetitionsSection() {
  return (
    <div className="px-4 py-4 bg-white">
      <h2 className="text-sm font-bold text-gray-900 mb-3">Соревнования</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {COMPETITIONS.map((comp) => (
          <div
            key={comp.id}
            className="min-w-[160px] bg-gray-900 rounded-xl p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-gray-400">{comp.date}</span>
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            </div>
            <span className="text-sm font-bold text-white leading-tight">{comp.title}</span>
            <span className="text-[10px] text-gray-400">{comp.participants} участников</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomNav({ activeTab, onChange }: { activeTab: string; onChange: (key: string) => void }) {
  return (
    <div className="flex items-center justify-around px-2 py-2 bg-white border-t border-gray-100">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === tab.key ? "text-indigo-600" : "text-gray-400"
          }`}
        >
          {tab.icon}
          <span className="text-[10px] font-semibold">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export function CumockDemo() {
  const [activeTab, setActiveTab] = useState<string>("study");

  return (
    <div className="w-full flex justify-center py-8 bg-gray-50">
      {/* Phone frame */}
      <div className="w-full max-w-[360px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 flex flex-col">
        {/* Status bar */}
        <StatusBar />

        {/* App header */}
        <AppHeader />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <Breadcrumb />
          <SectionTitle title="Актуальные курсы" />
          <CourseGrid />
          <CompetitionsSection />
        </div>

        {/* Bottom navigation */}
        <BottomNav activeTab={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}
