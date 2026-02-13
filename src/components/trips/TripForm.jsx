import { Navigation, StickyNote, AlertCircle } from "lucide-react";

export default function TripForm({
  title,
  setTitle,
  note,
  setNote,
  mode,
  setMode,
  points,
  canSave,
  onSave,
  clearLast,
  clearAll,
  error,
}) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full">
      {/* NAGŁÓWEK */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-emerald-900">Nowa trasa</h2>
        <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
          {points.length} pkt
        </span>
      </div>

      {/* INPUTY */}
      <div className="space-y-4">
        {/* Tytuł */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Nazwa trasy
          </label>
          <div className="relative">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="np. Weekend w Bieszczadach"
              maxLength={50}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-sm font-medium"
            />
            <Navigation className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Notatki */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Notatki
          </label>
          <div className="relative">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Lista rzeczy do zabrania, plan dnia..."
              maxLength={300}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-sm min-h-[100px] resize-none"
            />
            <StickyNote className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Transport */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Transport
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "driving", label: "Samochód", icon: "🚗" },
              { id: "cycling", label: "Rower", icon: "🚴" },
              { id: "foot", label: "Pieszo", icon: "🚶" },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`py-2 px-3 rounded-xl text-sm font-medium transition-all border ${
                  mode === m.id
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md transform scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className="mr-1">{m.icon}</span> {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SEKCJA BŁĘDU I PRZYCISKÓW AKCJI */}
      <div className="pt-6 mt-auto flex flex-col gap-2">
        {/* KOMUNIKAT O BŁĘDZIE */}
        {error && (
          <div className="flex items-center gap-2 p-3 mb-2 bg-red-50 border border-red-100 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <p className="text-xs font-medium text-red-600 leading-tight whitespace-pre-line">
              {error}
            </p>
          </div>
        )}

        <button
          onClick={onSave}
          disabled={!canSave}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
        >
          Zapisz trasę
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={clearLast}
            disabled={points.length === 0}
            className="py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            Cofnij punkt
          </button>
          <button
            onClick={clearAll}
            disabled={points.length === 0}
            className="py-2.5 text-sm font-medium text-red-600 bg-white border border-red-100 rounded-xl hover:bg-red-50 disabled:opacity-50 transition-colors"
          >
            Wyczyść
          </button>
        </div>
      </div>
    </div>
  );
}
