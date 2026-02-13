import { useEffect, useState } from "react";
import { fetchRoute } from "../lib/lib_trip/lib_routing.js";

export function useRouting(points) {
  const [route, setRoute] = useState(null);
  const [distanceKm, setDistanceKm] = useState(0);
  const [durationDrivingMin, setDurationDrivingMin] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function calc() {
      if (points.length < 2) {
        setRoute(null);
        setDistanceKm(0);
        setDurationDrivingMin(0);
        return;
      }

      const res = await fetchRoute(points);

      if (!controller.signal.aborted && res) {
        setRoute(res);
        setDistanceKm(res.distanceKm);
        setDurationDrivingMin(res.durationMin);
      }
    }

    calc();

    return () => controller.abort();
  }, [points]);

  return { route, distanceKm, durationDrivingMin };
}
