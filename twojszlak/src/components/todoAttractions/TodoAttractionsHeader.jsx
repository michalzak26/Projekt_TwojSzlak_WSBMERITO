import { Link } from "react-router-dom";

export default function TodoAttractionsHeader() {
  const exportPDF = async () => {
    const { jsPDF } = await import("jspdf");
    const html2canvas = (await import("html2canvas")).default;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const list = JSON.parse(localStorage.getItem("todo_attractions") || "[]");
    let y = 20;

    for (const item of list) {
      const p = item.properties;

      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text(p.name || "Bez nazwy", 20, y);
      y += 18;

      if (p.datasource?.raw?.image) {
        try {
          const img = await fetch(p.datasource.raw.image)
            .then((r) => r.blob())
            .then((b) => createImageBitmap(b));

          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          const imgData = canvas.toDataURL("image/jpeg", 0.9);
          pdf.addImage(imgData, "JPEG", 20, y, 120, 90);
        } catch {}
      }

      const mapDiv = document.getElementById(`map-preview-${p.place_id}`);

      if (mapDiv) {
        const canvas = await html2canvas(mapDiv, {
          useCORS: true,
          scale: 2,
        });
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 160, y, 220, 120);
      }

      y += 140;
      pdf.setFontSize(11);
      pdf.text(`Kategorie: ${p.categories?.join(", ") || "brak"}`, 20, y);
      y += 15;

      if (p.distance) {
        pdf.text(`Dystans: ${Math.round(p.distance)} m`, 20, y);
      }

      y += 25;
      pdf.line(20, y, 400, y);
      y += 20;

      if (y > 750) {
        pdf.addPage();
        y = 20;
      }
    }

    pdf.save("TwojSzlak-do-zwiedzenia.pdf");
  };

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-green-700">
        📌 Lista „Do zwiedzenia”
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={exportPDF}
          className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
        >
          📄 Eksportuj do PDF
        </button>

        <Link
          to="/attractions"
          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
        >
          ← Wróć do atrakcji
        </Link>
      </div>
    </header>
  );
}
