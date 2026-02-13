import { useEffect, useState } from "react";
import { addTrip, loadTrips, saveTrips } from "../lib/lib_trip/lib_storage.js";

export function useTrips() {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null); // błąd limitu tras

  // ładujemy TYLKO raz
  useEffect(() => {
    const data = loadTrips();
    if (Array.isArray(data)) setTrips(data);
  }, []);

  // zapisz tylko gdy trips ma dane
  useEffect(() => {
    if (trips.length > 0) {
      saveTrips(trips);
    }
  }, [trips]);

  const saveTrip = (trip) => {
    if (trips.length >= 10) {
      setError(
        "❌ Nie można zapisać kolejnej trasy - osiągnięto limit 10 pozycji.\n👉 Usuń trasę, aby zwolnić miejsce."
      );
      return false;
    }

    const updated = addTrip(trip);
    setTrips(updated);
    setError(null);
    return true;
  };

  // usuwa zapisaną trase
  const deleteTrip = (id) => {
    const updated = trips.filter((t) => t.id !== id);
    setTrips(updated);
    saveTrips(updated);
  };

  return { trips, saveTrip, deleteTrip, error };
}
