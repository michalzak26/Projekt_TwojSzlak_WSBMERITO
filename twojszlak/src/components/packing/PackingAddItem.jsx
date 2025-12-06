import { Plus } from "lucide-react";

export default function PackingAddItem({
  item,
  setItem,
  category,
  setCategory,
  categories,
  onAdd,
}) {
  return (
    <section className="bg-white rounded-xl shadow p-4 space-y-3">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Dodaj rzecz do spakowania..."
          className="flex-1 border rounded-lg p-2 text-sm"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-2 text-sm w-full md:w-48"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.icon} {cat.label}
            </option>
          ))}
        </select>

        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" /> Dodaj
        </button>
      </div>
    </section>
  );
}
