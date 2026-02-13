import { useEffect, useState } from "react";
import {
  addToTodo,
  removeFromTodo,
  loadTodoList,
} from "../lib/lib_attractions/lib_todo_attractions.js";

export function useTodoAttractions() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(loadTodoList());
  }, []);

  const isInTodo = (a) => {
    const id = a.properties?.place_id;
    return todoList.some((item) => item.properties?.place_id === id);
  };

  const toggleTodo = (a) => {
    const id = a.properties?.place_id;
    const updated = isInTodo(a) ? removeFromTodo(id) : addToTodo(a);
    setTodoList(updated);
  };

  // usuwa tylko element o konkretnym place_id
  const remove = (placeId) => {
    const updated = removeFromTodo(placeId); // USUNIĘCIE z localStorage
    setTodoList(updated); // aktualizacja stanu
  };

  return { todoList, isInTodo, toggleTodo, remove };
}
