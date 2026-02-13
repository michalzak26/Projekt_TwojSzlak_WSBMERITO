import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <Navbar />

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* NAGŁÓWEK */}
        <ContactHeader />

        {/* DANE KONTAKTOWE  */}
        <section>
          <div>
            <ContactInfo />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
