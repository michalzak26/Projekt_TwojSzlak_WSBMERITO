import L from "leaflet";

/**
 *
 * @param {number} number
 * @returns {L.DivIcon}
 */
export function createNumberedIcon(number) {
  return L.divIcon({
    html: `
      <div style="
        background:#2563eb;
        color:white;
        width:28px;
        height:28px;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:14px;
        font-weight:bold;
        border:2px solid white;
        box-shadow:0 0 3px rgba(0,0,0,0.5);
      ">
        ${number}
      </div>
    `,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}
