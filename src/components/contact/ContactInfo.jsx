import { Mail, Instagram, Bug, Clock, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Kontakt ogólny",
      value: "kontakt@twojszlak.pl",
      href: "mailto:kontakt@twojszlak.pl",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      icon: <Bug className="w-6 h-6" />,
      label: "Zgłoś błąd / Wsparcie",
      value: "support@twojszlak.pl",
      href: "mailto:support@twojszlak.pl",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@twojszlak",
      href: "https://instagram.com",
      color: "text-pink-600",
      bg: "bg-pink-50",
      external: true,
    },
  ];

  return (
    <div className="flex items-center justify-center bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full">
      <h2 className="text-2xl font-bold text-emerald-900 mb-6">
        Dane kontaktowe
      </h2>

      {/* LISTA KART KONTAKTOWYCH */}
      <div className="space-y-4 flex-1">
        {contactMethods.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent bg-white/50 hover:bg-white hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300"
          >
            {/* IKONA */}
            <div
              className={`p-3 rounded-xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}
            >
              {item.icon}
            </div>

            {/* TREŚĆ */}
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                {item.label}
              </p>
              <p className="text-base font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                {item.value}
                {item.external && (
                  <ExternalLink className="w-3 h-3 opacity-50" />
                )}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* SEKJA GODZIN PRACY */}
      <div className="mt-8 pt-6 border-t border-emerald-100 flex items-start gap-3">
        <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Godziny pracy</p>
          <p className="text-sm text-gray-500 leading-relaxed mt-1">
            Odpowiadamy na wiadomości od poniedziałku do piątku w godzinach{" "}
            <strong>9:00 – 17:00</strong>.
            <br />
            Średni czas odpowiedzi: 24h.
          </p>
        </div>
      </div>
    </div>
  );
}
