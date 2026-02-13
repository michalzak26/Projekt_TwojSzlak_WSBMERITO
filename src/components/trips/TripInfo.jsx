import {
  Clock,
  Route,
  Compass,
  Ruler,
  Timer,
  Map,
  Navigation,
} from "lucide-react";

export default function TripInfo({
  route,
  modeLabel,
  distanceKm,
  totalDurationForMode,
  formatMinutes,
  getDurationForMode,
  mode,
}) {
  // 1. STAN PUSTY (Brak trasy)
  if (!route) {
    return (
      <div className="bg-white/60 backdrop-blur-sm border-2 border-dashed border-emerald-200/50 p-8 rounded-3xl text-center flex flex-col items-center justify-center min-h-[200px] animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <Map className="w-8 h-8 text-emerald-300" />
        </div>
        <p className="font-bold text-emerald-900 text-lg">
          Rozpocznij planowanie
        </p>
        <p className="text-sm text-gray-500 mt-1 max-w-xs">
          Kliknij na mapie, aby dodać punkty startu i celu. Trasa obliczy się
          automatycznie.
        </p>
      </div>
    );
  }

  // 2. STAN Z DANYMI
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 space-y-6">
      {/* NAGŁÓWEK */}
      <div className="flex items-center gap-2 mb-2">
        <Navigation className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg font-bold text-emerald-900">
          Podsumowanie trasy
        </h3>
      </div>

      {/* GŁÓWNE STATYSTYKI (Duże kafelki) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Karta: Tryb */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-emerald-200 transition-colors">
          <div className="p-2 bg-emerald-50 rounded-full mb-2 text-emerald-600">
            <Compass className="w-5 h-5" />
          </div>
          <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1">
            Transport
          </p>
          <p className="font-extrabold text-gray-900 text-lg leading-tight text-center">
            {modeLabel}
          </p>
        </div>

        {/* Karta: Dystans */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
          <div className="p-2 bg-blue-50 rounded-full mb-2 text-blue-600">
            <Route className="w-5 h-5" />
          </div>
          <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1">
            Dystans
          </p>
          <p className="font-extrabold text-gray-900 text-lg leading-tight text-center">
            {distanceKm}{" "}
            <span className="text-sm font-medium text-gray-400">km</span>
          </p>
        </div>

        {/* Karta: Czas */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-amber-200 transition-colors">
          <div className="p-2 bg-amber-50 rounded-full mb-2 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1">
            Czas
          </p>
          <p className="font-extrabold text-gray-900 text-lg leading-tight text-center">
            {formatMinutes(totalDurationForMode)}
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-100 w-full" />

      {/* LISTA ODCINKÓW */}
      {route.segments?.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
            Szczegóły odcinków ({route.segments.length})
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {route.segments.map((s) => {
              const baseDriving = s.baseDurationMin ?? s.durationMin;
              const segDuration = getDurationForMode(
                s.distanceKm,
                baseDriving,
                mode
              );

              return (
                <div
                  key={s.index}
                  className="bg-white border border-gray-100 p-3 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                >
                  {/* Numer odcinka */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      #{s.index}
                    </span>
                  </div>

                  {/* Dane odcinka */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-sm font-bold text-gray-700">
                        {s.distanceKm} km
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-sm font-bold text-gray-700">
                        {formatMinutes(segDuration)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
