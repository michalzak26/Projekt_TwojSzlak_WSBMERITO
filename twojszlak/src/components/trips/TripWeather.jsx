export default function TripWeather({ weather }) {
  return (
    <div className="flex flex-wrap gap-3">
      {Array.isArray(weather) &&
        weather.map((w, i) => (
          <div
            key={i}
            className="bg-yellow-50 border border-yellow-200 shadow-sm rounded-xl p-4
              w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-12px)]"
          >
            <div className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-2">
              Punkt {i + 1}
            </div>

            {w ? (
              <div className="text-sm space-y-1">
                <p>
                  Miejscowość: <b>{w.name}</b>
                </p>
                <p>
                  Warunki: <b>{w.weather[0].description}</b>
                </p>
                <p>
                  Temperatura: <b>{w.main.temp}°C</b>
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">brak danych</p>
            )}
          </div>
        ))}
    </div>
  );
}
