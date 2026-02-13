import { useTodoAttractions } from "../hooks/useTodoAttractions.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TodoAttractionsHeader from "../components/todoAttractions/TodoAttractionsHeader.jsx";
import TodoAttractionsEmpty from "../components/todoAttractions/TodoAttractionsEmpty.jsx";
import TodoAttractionsList from "../components/todoAttractions/TodoAttractionsList.jsx";

export function TodoAttractionsPage() {
  const { todoList, remove } = useTodoAttractions();

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <Navbar />

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* NAGŁÓWEK */}
        <TodoAttractionsHeader count={todoList.length} />

        {/* LISTA */}
        {todoList.length === 0 ? (
          <div className="animate-fadeIn">
            <TodoAttractionsEmpty />
          </div>
        ) : (
          <div className="animate-slideInUp">
            <TodoAttractionsList todoList={todoList} remove={remove} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
