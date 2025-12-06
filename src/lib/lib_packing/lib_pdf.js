import jsPDF from "jspdf";
import leafletImage from "leaflet-image";

/**
 * Tworzy PDF z tytułem, notatką, listą punktów i mini-mapą (Leaflet screenshot).
 * @param {Object} trip
 * @param {HTMLElement|null} mapElement
 */
export async function generateTripPDF(trip, mapElement) {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("🗺️ Plan podróży", 14, 20);

  doc.setFontSize(14);
  doc.text(trip.title, 14, 30);

  const date = new Date(trip.createdAt).toLocaleString("pl-PL");
  doc.setFontSize(10);
  doc.text(`Utworzono: ${date}`, 14, 38);

  if (trip.note && trip.note.trim()) {
    doc.setFontSize(12);
    doc.text("Notatka:", 14, 50);

    doc.setFontSize(11);
    doc.text(trip.note, 14, 58, { maxWidth: 180 });
  }

  if (mapElement) {
    try {
      const map = mapElement._leaflet_map;
      if (!map) throw new Error("❌ Nie znaleziono instancji mapy Leaflet.");

      const imgData = await new Promise((resolve, reject) => {
        leafletImage(map, (err, canvas) => {
          if (err || !canvas) return reject(err);
          resolve(canvas.toDataURL("image/png"));
        });
      });

      const imgWidth = 180;
      const imgHeight = 120;
      const startY = trip.note && trip.note.trim() ? 80 : 60;

      doc.addImage(imgData, "PNG", 15, startY, imgWidth, imgHeight);
    } catch (err) {
      console.error("❌ Błąd generowania mapy:", err);
    }
  }

  const tableStart = trip.note && trip.note.trim() ? 210 : 190;

  doc.setFontSize(12);
  doc.text("📍 Punkty trasy:", 14, tableStart);

  doc.setFontSize(10);

  let y = tableStart + 6;
  trip.points.forEach((p, index) => {
    const [lat, lng] = p;
    doc.text(`${index + 1}. ${lat.toFixed(5)}, ${lng.toFixed(5)}`, 18, y);
    y += 6;
  });

  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text("Wygenerowano przez TwójSzlak.pl — demo offline", 14, 285);

  doc.save(`Plan_${trip.title.replace(/\s+/g, "_")}.pdf`);
}
