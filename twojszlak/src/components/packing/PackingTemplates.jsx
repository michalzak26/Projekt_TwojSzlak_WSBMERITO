export default function PackingTemplates({ onApply }) {
  return (
    <section className="bg-white rounded-xl shadow p-4 space-y-2">
      <h2 className="text-sm font-semibold text-gray-600 mb-1">
        Szablony pakowania:
      </h2>

      <div className="flex flex-wrap gap-2 text-sm">
        <button
          onClick={() => onApply("mountains")}
          className="px-3 py-1 rounded-lg border border-green-600 text-green-700 hover:bg-green-50"
        >
          🏔️ Góry
        </button>

        <button
          onClick={() => onApply("sea")}
          className="px-3 py-1 rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50"
        >
          🌊 Morze
        </button>

        <button
          onClick={() => onApply("camping")}
          className="px-3 py-1 rounded-lg border border-amber-600 text-amber-700 hover:bg-amber-50"
        >
          ⛺ Camping
        </button>
      </div>
    </section>
  );
}
