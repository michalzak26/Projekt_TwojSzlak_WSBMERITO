import { Mountain, Tent, Waves, Printer, Trash2, Layers } from "lucide-react";

export default function PackingTemplates({ onApply, onClear, onExport }) {
  const templates = [
    {
      id: "mountains",
      label: "Góry",
      desc: "Buty, plecak, kurtka...",
      icon: <Mountain className="w-5 h-5" />,
      colorClass: "text-stone-600 group-hover:text-stone-800",
      bgClass: "group-hover:bg-stone-50 group-hover:border-stone-200",
    },
    {
      id: "sea",
      label: "Morze",
      desc: "Ręcznik, krem, strój...",
      icon: <Waves className="w-5 h-5" />,
      colorClass: "text-blue-500 group-hover:text-blue-700",
      bgClass: "group-hover:bg-blue-50 group-hover:border-blue-200",
    },
    {
      id: "camping",
      label: "Camping",
      desc: "Namiot, śpiwór, latarka...",
      icon: <Tent className="w-5 h-5" />,
      colorClass: "text-amber-600 group-hover:text-amber-800",
      bgClass: "group-hover:bg-amber-50 group-hover:border-amber-200",
    },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full">
      {/* NAGŁÓWEK */}
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Layers className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-emerald-900 text-lg">Szybki start</h3>
      </div>

      <div className="flex flex-col justify-between flex-grow gap-6">
        {/* LISTA SZABLONÓW */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">
            Wybierz szablon
          </p>
          <div className="grid grid-cols-1 gap-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => onApply(t.id)}
                className={`group flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:shadow-md text-left ${t.bgClass}`}
              >
                <div
                  className={`p-2 rounded-lg bg-gray-50 transition-colors ${t.colorClass
                    .replace("text-", "bg-")
                    .replace("600", "100")
                    .replace("500", "100")} ${t.colorClass}`}
                >
                  {t.icon}
                </div>
                <div>
                  <span
                    className={`block font-bold text-sm text-gray-700 ${t.colorClass}`}
                  >
                    {t.label}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {t.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* PRZYCISKI AKCJI */}
        <div className="space-y-3 pt-4 border-t border-emerald-100/50">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 ml-1">
            Zarządzaj listą
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onExport}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
            >
              <Printer className="w-4 h-4" />
              PDF / Drukuj
            </button>

            <button
              onClick={onClear}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-red-100 text-red-600 text-sm font-bold rounded-xl hover:bg-red-50 hover:border-red-200 transition-all"
            >
              <Trash2 className="w-4 h-4" />
              Wyczyść
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
