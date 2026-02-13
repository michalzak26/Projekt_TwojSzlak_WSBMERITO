import { categoryLabels } from "./categoryLabels.js";

export function translateCategories(categories = []) {
  const results = new Set();

  categories.forEach((full) => {
    const parts = full.split(".");

    for (let i = parts.length; i > 0; i--) {
      const key = parts.slice(0, i).join(".");
      if (categoryLabels[key]) {
        results.add(categoryLabels[key]);
        return;
      }
    }
  });

  return Array.from(results).join(" · ");
}
