import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TipsHeader from "../components/tips/TipsHeader.jsx";
import TipsFilters from "../components/tips/TipsFilters.jsx";
import TipsList from "../components/tips/TipsList.jsx";

import { TIPS_DATA } from "../components/tips/TipsData.js";

export function TipsPage() {
  const [category, setCategory] = useState("all");

  const tips =
    category === "all"
      ? TIPS_DATA
      : TIPS_DATA.filter((t) => t.category === category);

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <Navbar />

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* NAGŁÓWEK */}
        <TipsHeader />

        {/* SEKCJA TREŚCI */}
        <div className="space-y-8">
          {/* Filtry */}
          <TipsFilters category={category} setCategory={setCategory} />

          {/* Lista z animacją */}
          <div className="animate-slideInUp">
            <TipsList tips={tips} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
