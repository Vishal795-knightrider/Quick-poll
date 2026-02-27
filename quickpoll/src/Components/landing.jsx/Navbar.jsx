import { BarChart3, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,820px)]">
      <div className="flex h-14 items-center justify-between rounded-full border border-slate-300 bg-white/90 px-6 backdrop-blur-xl shadow-xl">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            QuickPoll
          </span>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg">
          <Plus className="h-4 w-4" />
          Create
        </button>

      </div>
    </nav>
  );
}     