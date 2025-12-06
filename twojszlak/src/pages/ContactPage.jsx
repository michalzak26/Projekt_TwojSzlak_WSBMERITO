import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";

export function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <Navbar />

      <ContactHeader />

      <section className="grid lg:grid-cols-2 gap-10 center">
        <ContactInfo />
      </section>

      <Footer />
    </div>
  );
}
