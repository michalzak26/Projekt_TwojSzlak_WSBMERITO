import { useEffect, useMemo, useState } from "react";
import { fetchAttractions } from "../lib/lib_attractions/lib_geoapify.js";

export function useAttractions(center, sortBy, category) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);

  // pobieranie danych
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [lat, lng] = center;
        const list = await fetchAttractions(lat, lng, 8000);
        setAttractions(list);
      } catch (e) {
        console.error("Błąd pobierania atrakcji:", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [center]);

  // sortowanie + filtrowanie
  const filtered = useMemo(() => {
    let list = attractions.filter((a) => a.properties?.name);

    if (category !== "all") {
      list = list.filter((a) => {
        const cats = (a.properties?.categories || []).join(", ").toLowerCase();
        if (category === "cultural")
          return cats.includes("museum") || cats.includes("culture");
        if (category === "historic")
          return cats.includes("heritage") || cats.includes("architecture");
        if (category === "natural")
          return cats.includes("park") || cats.includes("natural");
        return true;
      });
    }

    list.sort((a, b) => {
      const pa = a.properties;
      const pb = b.properties;

      if (sortBy === "distance") return pa.distance - pb.distance;
      if (sortBy === "rating") return (pb.rating || 0) - (pa.rating || 0);
      if (sortBy === "name")
        return (pa.name || "").localeCompare(pb.name || "");

      return 0;
    });

    return list;
  }, [attractions, sortBy, category]);

  return { attractions, loading, filtered };
}
