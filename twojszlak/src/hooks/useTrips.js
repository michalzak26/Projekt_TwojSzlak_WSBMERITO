import { useEffect, useState } from "react";
import { addTrip, loadTrips, saveTrips } from "../lib/lib_trip/lib_storage.js";

export function useTrips() {
  const [trips, setTrips] = useState([]);

  // ładowanie z localStorage
  useEffect(() => {
    setTrips(loadTrips());
  }, []);

  // automatyczne zapisywanie przy każdej zmianie
  useEffect(() => {
    saveTrips(trips);
  }, [trips]);

  const saveTrip = (trip) => {
    const updated = addTrip(trip);
    setTrips(updated);
  };

  return { trips, saveTrip };
}
