import { Trash2, CheckSquare } from "lucide-react";

export default function PackingList({
  grouped,
  toggleChecked,
  changeQty,
  removeItem,
}) {
  // Sprawdź, czy lista jest pusta
  const isEmpty = grouped.every((g) => g.items.length === 0);

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl bg-white/50">
        <CheckSquare className="w-12 h-12 mb-2 opacity-20" />
        <p className="font-medium">Twoja lista jest pusta</p>
        <p className="text-sm">Dodaj przedmioty lub wybierz szablon powyżej.</p>
      </div>
    );
  }

  return (
    <div id="packing-pdf" className="space-y-6">
      {grouped.map(({ cat, items }) =>
        items.length > 0 ? (
          <section
            key={cat.id}
            className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-xl shadow-emerald-900/5 print:shadow-none print:border-gray-200 print:break-inside-avoid"
          >
            {/* NAGŁÓWEK KATEGORII */}
            <h3 className="text-lg font-bold text-emerald-900 flex items-center gap-2 mb-4 border-b border-emerald-100 pb-2">
              <span className="text-xl">{cat.icon}</span> {cat.label}
              <span className="text-xs font-normal text-gray-400 ml-auto bg-white px-2 py-1 rounded-full border border-gray-100">
                {items.filter((i) => i.checked).length} / {items.length}
              </span>
            </h3>

            {/* LISTA PRZEDMIOTÓW */}
            <div className="space-y-2">
              {items.map((i) => (
                <div
                  key={i.id}
                  className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200 border ${
                    i.checked
                      ? "bg-emerald-50/50 border-emerald-100 opacity-75"
                      : "bg-white border-gray-100 hover:border-emerald-200 hover:shadow-md"
                  }`}
                >
                  {/* LEWA STRONA: Checkbox i Nazwa */}
                  <div className="flex items-center gap-3 flex-1">
                    <button
                      onClick={() => toggleChecked(i.id)}
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                        i.checked
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-gray-100 text-transparent hover:bg-gray-200"
                      }`}
                    >
                      <CheckSquare className="w-4 h-4" />
                    </button>

                    <span
                      className={`text-sm font-medium transition-colors cursor-pointer select-none ${
                        i.checked
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                      onClick={() => toggleChecked(i.id)}
                    >
                      {i.text}
                    </span>
                  </div>

                  {/* PRAWA STRONA: Ilość i Usuń */}
                  <div className="flex items-center gap-3 print:hidden">
                    {/* Kontroler ilości */}
                    <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                      <button
                        onClick={() => changeQty(i.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:text-emerald-600 rounded-md transition-colors font-bold disabled:opacity-30"
                        disabled={i.qty <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-700">
                        {i.qty}
                      </span>
                      <button
                        onClick={() => changeQty(i.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-white hover:text-emerald-600 rounded-md transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Przycisk Usuń */}
                    <button
                      onClick={() => removeItem(i.id)}
                      className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Usuń przedmiot"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Wersja do druku (sama ilość) */}
                  <div className="hidden print:block text-sm font-bold text-gray-600">
                    x{i.qty}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null
      )}
    </div>
  );
}
