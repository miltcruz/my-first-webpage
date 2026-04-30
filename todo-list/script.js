// initialize an empty array to hold our todo items
let todoItems = [];

document.addEventListener("DOMContentLoaded", function () {
  // get DOM elements after the content has loaded
  const addBtn = document.getElementById("add-btn");
  const todoContainer = document.getElementById("todo-container");
  const todoInput = document.getElementById("todo-item");

  // function to render the todo items in the container
  function renderTodoItems() {
    // clear the container before rendering
    todoContainer.innerHTML = "";

    // loop through the todo items and create elements for each
    todoItems.forEach((singleTodo, index) => {
      const todoDiv = document.createElement("div"); // <div></div>

      const todoText = document.createElement("span"); // <span></span>
      todoText.textContent = singleTodo.text; // getting the text from the object and setting it as the content of the span

      // change the style of the text if the item is marked as completed
      if (singleTodo.completed) {
        todoText.classList.add("completed"); // add the completed class to the span if the item is marked as completed
      }

      // create a complete button for each todo item
      const completeBtn = document.createElement("button"); // <button></button>
      completeBtn.textContent = "✓"; // set the button text
      completeBtn.addEventListener("click", function () {
        // toggle the completed status of the todo item
        todoItems[index].completed = !todoItems[index].completed; // !false = true, !true = false
        renderTodoItems(); // recursively call the render function to update the UI
      }); // add click event listener to the complete button

      // create a remove button for each todo item
      const removeBtn = document.createElement("button"); // <button></button>
      removeBtn.textContent = "✗";
      removeBtn.addEventListener("click", function () {
        todoItems.splice(index, 1); // remove the item from the array
        renderTodoItems(); // re-render the todo items to reflect the change
      }); // add click event listener to the remove button


      // <div>
      //   <span>Buy groceries</span>
      //   <button>✓</button>
      //   <button>✗</button>
      // </div>
      todoDiv.appendChild(todoText); // add the text span to the div
      todoDiv.appendChild(completeBtn); // add the complete button to the div
      todoDiv.appendChild(removeBtn); // add the remove button to the div

      // add the <div> to the container
      todoContainer.appendChild(todoDiv);
    });
  }

  // add click event listener to the add button
  addBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      todoItems.push({ text: todoText, completed: false }); // add new item to the array
      todoInput.value = ""; // clear the input field
      renderTodoItems();
    }
  });
});
