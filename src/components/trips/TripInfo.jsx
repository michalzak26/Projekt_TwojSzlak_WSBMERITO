export default function TripInfo({
  route,
  modeLabel,
  distanceKm,
  totalDurationForMode,
  formatMinutes,
  getDurationForMode,
  mode,
}) {
  return (
    <div className="bg-blue-50 p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-1">📍 Informacje o trasie</h3>

      {!route ? (
        <p className="text-xs text-gray-500">
          Dodaj minimum 2 punkty, aby obliczyć trasę.
        </p>
      ) : (
        <div className="text-sm">
          <p>
            Tryb: <b>{modeLabel}</b> <br />
            Łączny dystans: <b>{distanceKm} km</b> <br />
            Czas: <b>{formatMinutes(totalDurationForMode)}</b>
          </p>

          <hr className="my-3" />

          {route.segments?.length > 0 && (
            <div className="flex flex-wrap gap-3">
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
                    className="min-w-[170px] flex-1 rounded-xl bg-white/90 border border-blue-100 shadow-sm px-3 py-2"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-1">
                      Odcinek {s.index}
                    </div>
                    <p>
                      Dystans: <b>{s.distanceKm} km</b>
                    </p>
                    <p>
                      Czas: <b>{formatMinutes(segDuration)}</b>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
