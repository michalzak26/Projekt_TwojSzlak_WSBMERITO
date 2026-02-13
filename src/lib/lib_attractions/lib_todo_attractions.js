const KEY = "todo_attractions";

export function loadTodoList() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function saveTodoList(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addToTodo(item) {
  const list = loadTodoList();
  const updated = [item, ...list];
  saveTodoList(updated);
  return updated;
}

export function removeFromTodo(placeId) {
  const list = loadTodoList();
  const updated = list.filter((item) => item.properties.place_id !== placeId);
  saveTodoList(updated);
  return updated;
}
