import { Trash2 } from "lucide-react";

export default function PackingList({
  grouped,
  toggleChecked,
  changeQty,
  removeItem,
}) {
  return (
    <div id="packing-pdf" className="bg-white rounded-xl shadow p-4 space-y-4">
      <h2 className="text-lg font-bold text-gray-800 border-b pb-2">
        Lista pakowania – TwojSzlak.pl
      </h2>

      {grouped.map(({ cat, items }) =>
        items.length > 0 ? (
          <div key={cat.id} className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span>{cat.icon}</span> {cat.label}
            </h3>

            {items.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  {/* checkbox */}
                  <button
                    onClick={() => toggleChecked(i.id)}
                    className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                      i.checked
                        ? "bg-green-600 border-green-700"
                        : "border-gray-700"
                    }`}
                  >
                    {i.checked && (
                      <span className="text-white text-[10px]">✓</span>
                    )}
                  </button>

                  {/* ilość */}
                  <div className="flex items-center gap-1 text-xs">
                    <button
                      onClick={() => changeQty(i.id, -1)}
                      className="w-5 h-5 flex items-center justify-center border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-semibold">{i.qty}×</span>
                    <button
                      onClick={() => changeQty(i.id, 1)}
                      className="w-5 h-5 flex items-center justify-center border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <span
                    className={`text-sm ${
                      i.checked ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {i.text}
                  </span>
                </div>

                {/* usuń */}
                <button
                  onClick={() => removeItem(i.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
}
