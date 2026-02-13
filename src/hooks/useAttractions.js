import { useEffect, useMemo, useState } from "react";
import { fetchAttractions } from "../lib/lib_attractions/lib_geoapify.js";

export function useAttractions(center, sortBy, category, radius, biasEnabled) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);

  // POBIERANIE DANYCH Z GEOAPIFY, Pobieranie atrakcji gdy zmienia się lokalizacja LUB promień LUB bias
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [lat, lng] = center;
        const list = await fetchAttractions(lat, lng, radius, biasEnabled);

        // Gdy bias OFF usuwamy odległość
        if (!biasEnabled) {
          list.forEach((a) => delete a.properties.distance);
        }

        setAttractions(list);
      } catch (e) {
        console.error("Błąd pobierania atrakcji:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [center, radius, biasEnabled]);

  // SORTOWANIE + FILTROWANIE
  const filtered = useMemo(() => {
    // tylko atrakcje z nazwą
    let list = attractions.filter((a) => a.properties?.name);

    // FILTROWANIE PO KATEGORII
    if (category !== "all") {
      list = list.filter((a) => {
        const cats = a.properties?.categories || [];

        // z ["commercial", "commercial.clothing"] robimy ["commercial", "commercial"]
        const prefixes = cats.map((c) => c.split(".")[0]);

        // jeśli którakolwiek kategoria ma prefix = np. "commercial" / "catering" itd.
        return prefixes.includes(category);
      });
    }

    // SORTOWANIE
    const sorted = [...list].sort((a, b) => {
      const pa = a.properties;
      const pb = b.properties;

      if (sortBy === "distance") return (pa.distance || 0) - (pb.distance || 0);
      if (sortBy === "name")
        return (pa.name || "").localeCompare(pb.name || "");

      return 0;
    });

    return sorted;
  }, [attractions, sortBy, category]);

  return { attractions, loading, filtered };
}
