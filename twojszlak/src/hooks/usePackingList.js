import { useEffect, useState } from "react";
import { CATEGORIES, TEMPLATES } from "../lib/lib_packing/packing-constants.js";

const STORAGE_KEY = "packing_list";

export function usePackingList() {
  const [list, setList] = useState([]);

  // Load on start
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setList(JSON.parse(saved));
  }, []);

  // SAVE function
  const saveList = (updated) => {
    setList(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Clear list
  const clearList = () => {
    saveList([]);
  };

  // Add item
  const addItem = (text, category) => {
    if (!text.trim()) return;

    const updated = [
      ...list,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        qty: 1,
        checked: false,
        category,
      },
    ];

    saveList(updated);
  };

  // Remove item
  const removeItem = (id) => {
    saveList(list.filter((i) => i.id !== id));
  };

  // Change quantity
  const changeQty = (id, delta) => {
    saveList(
      list.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  };

  // Toggle checkbox
  const toggleChecked = (id) => {
    saveList(
      list.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    );
  };

  // Apply template
  const applyTemplate = (key) => {
    const template = TEMPLATES[key];
    if (!template) return;

    const generated = template.map((t) => ({
      id: crypto.randomUUID(),
      text: t.text,
      qty: t.qty,
      checked: false,
      category: t.category,
    }));

    saveList(generated);
  };

  // Group items by category
  const grouped = CATEGORIES.map((cat) => ({
    cat,
    items: list.filter((i) => i.category === cat.id),
  }));

  return {
    list,
    grouped,
    addItem,
    removeItem,
    changeQty,
    toggleChecked,
    applyTemplate,
    clearList,
    categories: CATEGORIES,
  };
}
