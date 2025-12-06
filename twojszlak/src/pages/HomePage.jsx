import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import InspirationSection from "../components/home/InspirationSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import Footer from "../components/Footer.jsx";

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO – pełna szerokość */}
      <HeroSection />

      {/* SEKCJE W KONTENERZE */}
      <div className="max-w-6xl mx-auto p-6 space-y-16">
        <FeaturesSection />
        <InspirationSection />
        <TestimonialsSection />
      </div>

      {/* FOOTER – pełna szerokość */}
      <Footer />
    </div>
  );
}

// export function HomePage() {
//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6 text-text">
//       <Navbar />
//       <HeroSection />
//       <FeaturesSection />
//       <InspirationSection />
//       <TestimonialsSection />
//       <Footer />
//     </div>
//   );
// }
