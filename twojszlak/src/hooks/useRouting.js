import { useEffect, useState } from "react";
import { fetchRoute } from "../lib/lib_trip/lib_routing.js";

export function useRouting(points) {
  const [route, setRoute] = useState(null);
  const [distanceKm, setDistanceKm] = useState(0);
  const [durationDrivingMin, setDurationDrivingMin] = useState(0);

  useEffect(() => {
    async function calc() {
      if (points.length < 2) {
        setRoute(null);
        setDistanceKm(0);
        setDurationDrivingMin(0);
        return;
      }

      const res = await fetchRoute(points);
      if (!res) return;

      setRoute(res);
      setDistanceKm(res.distanceKm);
      setDurationDrivingMin(res.durationMin);
    }

    calc();
  }, [points]);

  return { route, distanceKm, durationDrivingMin };
}
