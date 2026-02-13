import { useState } from "react";
import { usePackingList } from "../hooks/usePackingList.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
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

  /* Eksport PDF */
  const exportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none print:hidden" />

      {/* NAVBAR (Ukryty w druku) */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* SEKCJA 1: KONTROLKI (Ukryte w druku) */}
        <div className="space-y-8 print:hidden">
          <PackingHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <PackingTemplates
              onApply={applyTemplate}
              onExport={exportPDF}
              onClear={clearList}
            />

            <PackingAddItem
              item={item}
              setItem={setItem}
              category={category}
              setCategory={setCategory}
              categories={categories}
              onAdd={() => {
                addItem(item, category);
                setItem("");
              }}
            />
          </div>
        </div>

        {/* SEKCJA 2: LISTA (Widoczna zawsze) */}
        <div className="animate-slideInUp">
          {/* NAGŁÓWEK TYLKO DO DRUKU */}
          <div className="hidden print:block text-center border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-black">
              Asystent Pakowania
            </h1>
          </div>

          <PackingList
            grouped={grouped}
            toggleChecked={toggleChecked}
            changeQty={changeQty}
            removeItem={removeItem}
          />
        </div>
      </main>

      {/* FOOTER (Ukryty w druku) */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
