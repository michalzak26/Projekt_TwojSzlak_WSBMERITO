// ----------------------------------------
//   Lista atrakcji „Do zwiedzenia”
//   (LocalStorage API)
// ----------------------------------------

const KEY = "todo_attractions";

/* -------------------------------
   Pobierz listę z LocalStorage
-------------------------------- */
export function loadTodoList() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/* -------------------------------
   Zapisz listę do LocalStorage
-------------------------------- */
export function saveTodoList(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

/* -------------------------------
   Dodaj atrakcję
-------------------------------- */
export function addToTodo(attraction) {
  const list = loadTodoList();

  const placeId = attraction?.properties?.place_id;
  if (!placeId) return list;

  // unikamy duplikatów
  const exists = list.some((item) => item?.properties?.place_id === placeId);

  if (!exists) {
    list.push(attraction);
    saveTodoList(list);
  }

  return list;
}

/* -------------------------------
   Usuń atrakcję
-------------------------------- */
export function removeFromTodo(placeId) {
  const updated = loadTodoList().filter(
    (item) => item?.properties?.place_id !== placeId
  );

  saveTodoList(updated);
  return updated;
}
