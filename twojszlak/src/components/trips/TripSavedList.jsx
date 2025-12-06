export default function TripSavedList({
  trips,
  loadTripToMap,
  generateTripPDF,
  pdfRef,
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">📋 Zapisane trasy</h3>

      {trips.length === 0 ? (
        <p className="text-gray-600 text-sm">Brak zapisanych tras.</p>
      ) : (
        <ul className="space-y-3">
          {trips.map((t) => (
            <li
              key={t.id}
              className="p-3 rounded-xl bg-gray-50 hover:bg-green-50 transition"
            >
              <div className="flex justify-between items-center">
                <div
                  onClick={() => loadTripToMap(t)}
                  className="cursor-pointer"
                >
                  <h3 className="font-semibold text-green-700">{t.title}</h3>
                  {t.note && <p className="text-sm text-gray-600">{t.note}</p>}
                </div>

                <button
                  onClick={() => generateTripPDF(t, pdfRef.current)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  📄 PDF
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
