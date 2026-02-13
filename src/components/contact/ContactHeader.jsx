import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactHeader() {
  return (
    <header className="relative bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden text-center">
      <div className="absolute bottom-0 left-0 opacity-[0.02] pointer-events-none"></div>

      {/* TREŚĆ */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Tytuł */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-900 tracking-tight leading-tight">
          Skontaktuj się z Nami
        </h1>

        {/* Opis */}
        <p className="text-lg text-gray-500 leading-relaxed">
          Masz pytania dotyczące działania aplikacji? Chcesz zgłosić błąd,
          zaproponować funkcję lub nową atrakcję? Napisz do nas, chętnie
          pomożemy!
        </p>
      </div>
    </header>
  );
}
