import { Map, Search, Calendar, Backpack } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Wyznaczanie trasy",
      desc: "Planuj etapy podróży i punkty pośrednie z łatwością, korzystając z interaktywnej mapy.",
      icon: <Map className="w-12 h-12" />,
    },
    {
      title: "Wyszukiwanie miejsc",
      desc: "Odkrywaj ukryte atrakcje, przytulne noclegi i lokalne restauracje na Twoim szlaku.",
      icon: <Search className="w-12 h-12" />,
    },
    {
      title: "Asystent Pakowania",
      desc: "Zapomnij o robieniu list na papierze. Skorzystaj z gotowych szablonów i miej pewność, że zabrałeś co niezbędne.",
      icon: <Backpack className="w-12 h-12" />,
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wszystko, czego potrzebujesz <br />
            <span className="text-emerald-600">w jednej aplikacji</span>
          </h2>
        </div>

        {/* GRID KART */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <article
              key={index}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* IKONA */}
              <div className="w-24 h-24 mx-auto bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* TREŚĆ */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
