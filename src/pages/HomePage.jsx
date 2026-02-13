import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import AdviceSection from "../components/home/AdviceSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import Footer from "../components/Footer.jsx";

export function HomePage() {
  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <HeroSection />
      <div className="relative bg-white">
        <FeaturesSection />
        <AdviceSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
