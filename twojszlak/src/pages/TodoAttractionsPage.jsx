import { useTodoAttractions } from "../hooks/useTodoAttractions.js";

// KOMPONENTY
import Navbar from "../components/Navbar.jsx";
import TodoAttractionsHeader from "../components/todoAttractions/TodoAttractionsHeader.jsx";
import TodoAttractionsEmpty from "../components/todoAttractions/TodoAttractionsEmpty.jsx";
import TodoAttractionsList from "../components/todoAttractions/TodoAttractionsList.jsx";

export function TodoAttractionsPage() {
  const { todoList, remove } = useTodoAttractions();

  /* ------------------------------ */
  /*      JEŚLI PUSTA LISTA        */
  /* ------------------------------ */
  if (!todoList.length) return <TodoAttractionsEmpty />;

  /* ------------------------------ */
  /*          LISTA STRONY          */
  /* ------------------------------ */
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Navbar />;
      <TodoAttractionsHeader />
      <TodoAttractionsList todoList={todoList} remove={remove} />
    </div>
  );
}
