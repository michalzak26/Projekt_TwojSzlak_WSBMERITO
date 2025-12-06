import { useEffect, useState } from "react";
import { addTrip, loadTrips, saveTrips } from "../lib/lib_trip/lib_storage.js";

export function useTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(loadTrips());
  }, []);

  useEffect(() => {
    saveTrips(trips);
  }, [trips]);

  const saveTrip = (trip) => {
    const updated = addTrip(trip);
    setTrips(updated);
  };

  return { trips, saveTrip };
}
