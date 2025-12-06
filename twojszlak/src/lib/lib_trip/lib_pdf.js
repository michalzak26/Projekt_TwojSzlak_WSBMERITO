import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function generateTripPDF(trip, containerElement) {
  if (!containerElement) {
    alert("Nie znaleziono sekcji do wygenerowania PDF!");
    return;
  }

  await new Promise((res) => setTimeout(res, 300));

  const canvas = await html2canvas(containerElement, {
    useCORS: true,
    scale: 2,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

  while (position + imgHeight > pdfHeight) {
    pdf.addPage();
    position -= pdfHeight;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  }

  pdf.save(`${trip.title || "trasa"}.pdf`);
}
