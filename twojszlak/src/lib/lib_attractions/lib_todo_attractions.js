const KEY = "todo_attractions";

export function loadTodoList() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTodoList(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addToTodo(attraction) {
  const list = loadTodoList();

  const placeId = attraction?.properties?.place_id;
  if (!placeId) return list;

  const exists = list.some((item) => item?.properties?.place_id === placeId);

  if (!exists) {
    list.push(attraction);
    saveTodoList(list);
  }

  return list;
}

export function removeFromTodo(placeId) {
  const updated = loadTodoList().filter(
    (item) => item?.properties?.place_id !== placeId
  );

  saveTodoList(updated);
  return updated;
}
