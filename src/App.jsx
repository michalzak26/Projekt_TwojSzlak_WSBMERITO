import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TripsPage } from "./pages/TripsPage";
import { PdfTripView } from "./pages/PdfTripView.jsx";
import { AttractionsPage } from "./pages/AttractionsPage";
import { TodoAttractionsPage } from "./pages/TodoAttractionsPage";
import { TodoPackingPage } from "./pages/TodoPackingPage";
import { TipsPage } from "./pages/TipsPage";
import { TipPage } from "./pages/TipPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  // Przewijanie strony do góry po każdej zmianie trasy
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HomePage />
            </Motion.div>
          }
        />
        <Route
          path="/trips"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TripsPage />
            </Motion.div>
          }
        />
        <Route
          path="/trips/:id/pdf"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <PdfTripView />
            </Motion.div>
          }
        />
        <Route
          path="/attractions"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <AttractionsPage />
            </Motion.div>
          }
        />
        <Route
          path="/todoAttractions"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TodoAttractionsPage />
            </Motion.div>
          }
        />
        <Route
          path="/todoPacking"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TodoPackingPage />
            </Motion.div>
          }
        />
        <Route
          path="/tips"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TipsPage />
            </Motion.div>
          }
        />
        <Route
          path="/tips/:id"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TipPage />
            </Motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ContactPage />
            </Motion.div>
          }
        />
        <Route
          path="*"
          element={
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <NotFoundPage />
            </Motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
