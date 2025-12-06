import { useState } from "react";

import Navbar from "../components/Navbar.jsx";
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
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <Navbar />
      <TipsHeader />
      <TipsFilters category={category} setCategory={setCategory} />
      <TipsList tips={tips} />
    </div>
  );
}
