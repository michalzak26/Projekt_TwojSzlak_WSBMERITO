import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// HOOK
import { usePackingList } from "../hooks/usePackingList.js";

// KOMPONENTY
import Navbar from "../components/Navbar.jsx";
import PackingHeader from "../components/packing/PackingHeader.jsx";
import PackingTemplates from "../components/packing/PackingTemplates.jsx";
import PackingAddItem from "../components/packing/PackingAddItem.jsx";
import PackingList from "../components/packing/PackingList.jsx";

export function TodoPackingPage() {
  const {
    grouped,
    categories,
    addItem,
    removeItem,
    changeQty,
    toggleChecked,
    applyTemplate,
    clearList,
  } = usePackingList();

  const [item, setItem] = useState("");
  const [category, setCategory] = useState("other");

  /* ---------------------------------
      Eksport PDF
  --------------------------------- */
  const exportPDF = async () => {
    const element = document.getElementById("packing-pdf");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height / canvas.width) * width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("TwojSzlak-lista-pakowania.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* HEADER */}
      <Navbar />
      <PackingHeader onExport={exportPDF} onClear={clearList} />

      {/* SZABLONY */}
      <PackingTemplates onApply={applyTemplate} />

      {/* INPUT + KATEGORIA */}
      <PackingAddItem
        item={item}
        setItem={setItem}
        category={category}
        setCategory={setCategory}
        categories={categories}
        onAdd={() => {
          addItem(item, category);
          setItem(""); // reset input
        }}
      />

      {/* LISTA */}
      <PackingList
        grouped={grouped}
        toggleChecked={toggleChecked}
        changeQty={changeQty}
        removeItem={removeItem}
      />
    </div>
  );
}
