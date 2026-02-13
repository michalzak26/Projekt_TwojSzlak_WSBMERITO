import { CloudSun, MapPin, Thermometer, Info } from "lucide-react";

export default function TripWeather({ weather }) {
  // Jeśli brak danych, nie renderuj nic
  if (!weather || weather.length === 0) return null;

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100">
      {/* NAGŁÓWEK SEKCJI */}
      <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2 mb-5">
        <CloudSun className="w-6 h-6 text-emerald-600" />
        Prognoza na trasie
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {weather.map((w, i) => {
          const iconCode = w?.weather?.[0]?.icon;
          const iconUrl = iconCode
            ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
            : null;

          return (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Oznaczenie Punktu */}
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center justify-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-100">
                  Punkt {i + 1}
                </span>
                {/* Ozdobna ikona w tle */}
                <CloudSun className="absolute -right-4 -top-4 w-20 h-20 text-gray-50 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              </div>

              {w ? (
                <div className="space-y-4 relative z-10 mt-1">
                  {/* 1. Miejscowość */}
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-[15px] text-gray-400 uppercase font-bold tracking-wide">
                        Lokalizacja
                      </p>
                      <p className="text-[20px] font-bold text-gray-900 text-lg leading-tight">
                        {w.name}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 w-full" />

                  {/* 2. DANE POGODOWE */}
                  <div className="flex flex-col gap-3">
                    {/* TEMPERATURA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-red-50 rounded-lg text-red-500">
                          <Thermometer className="w-5 h-5" />
                        </div>
                        <span className="text-[20px] font-extrabold text-gray-800 tracking-tight">
                          Temp. {Math.round(w.main.temp)}°C
                        </span>
                      </div>
                    </div>

                    {/* WARUNKI */}
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50/80 p-2 rounded-lg">
                      <Info className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-[20px] text-sm font-medium capitalize truncate">
                        {w.weather[0].description}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Stan braku danych */
                <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                  <CloudSun className="w-10 h-10 mb-2 opacity-20" />
                  <p className="text-xs font-medium">Brak danych</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
