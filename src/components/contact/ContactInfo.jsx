import { Mail, Instagram, MapPin, Bug } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-green-700">Dane kontaktowe</h2>

      <div className="space-y-3 text-gray-700 text-sm">
        <p className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-green-600" />
          kontakt@twojszlak.pl
        </p>

        <p className="flex items-center gap-2">
          <Instagram className="w-5 h-5 text-green-600" />
          instagram.com/twojszlak
        </p>

        <p className="flex items-center gap-2">
          <Bug className="w-5 h-5 text-green-600" />
          Zgłoś błąd: support@twojszlak.pl
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Odpowiadamy zazwyczaj w 24–48h (od poniedziałku do piątku).
      </p>
    </div>
  );
}
