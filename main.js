const todoInput = document.querySelector("#todo")
const todoList = document.querySelector("#todo__list")
const saveBtn = document.querySelector("#saveBtn")

let todoItem = ""

// Add an event listener directly to an element ( note it's not document )
todoInput.addEventListener("keyup", () => {
  // keep re-assigning todoItem as long as the person is typing
  todoItem = todoInput.value
})

// Same as first event listener, we attach this one directly to our button
saveBtn.addEventListener("click", () => {
  todoList.innerHTML += `<li class="todo-item">${todoItem}</li>`
  todoInput.value = ""
  todoItem = ""
})

// There could be multiple todo items, and they don't even exist when this event listener is created, so we can't attach to them. Instead, we attach to the whole document object and inside the callback function we check to see if it was a todo item that was clicked on.
// Then we add or remove a class ( "high-priority"). Adding the class causes the CSS to kick in. So cool!
document.addEventListener("click", (event) => {
  console.log(event)
  if ( event.target.classList.contains("todo-item") ) {
    event.target.classList.toggle("high-priority")
  }
})

