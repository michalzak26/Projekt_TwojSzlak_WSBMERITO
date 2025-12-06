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
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow space-y-3">
      <h2 className="text-xl font-semibold mb-1">Nowa trasa</h2>

      <label className="block text-sm">Tytuł</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Np. Warszawa → Zakopane"
        className="w-full border rounded-lg p-2 mb-3"
      />

      <label className="block text-sm">Notatka</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Dodaj opis/plany…"
        rows={4}
        className="w-full border rounded-lg p-2 mb-3"
      />

      <label className="block text-sm">Środek transportu</label>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="w-full border rounded-lg p-2 mb-3"
      >
        <option value="driving">🚗 Samochód</option>
        <option value="cycling">🚴 Rower</option>
        <option value="foot">🚶 Pieszo</option>
      </select>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={onSave}
          disabled={!canSave}
          className="px-4 py-2 rounded-lg bg-green-600 text-white disabled:opacity-50"
        >
          Zapisz trasę
        </button>

        <button
          onClick={clearLast}
          disabled={points.length === 0}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Usuń ostatni punkt
        </button>

        <button
          onClick={clearAll}
          disabled={points.length === 0}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Wyczyść punkty
        </button>
      </div>
    </div>
  );
}
