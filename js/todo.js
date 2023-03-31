const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input:first-child");
const todoList = document.querySelector(".todo-list");

let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.composedPath()[1];
  todos = todos.filter((item) => item.id != li.id);
  saveTodos();
  li.remove();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { id: Date.now(), text: newTodo };
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = JSON.parse(localStorage.getItem("todos"));
if (savedTodos) {
  todos = savedTodos;
  savedTodos.forEach(paintTodo);
}
