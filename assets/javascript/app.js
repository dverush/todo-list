const createTodoButton = document.querySelector(".create-todo-button");

const passValue = () => {
  let todoInputName = document.getElementById("full-name").value;
  localStorage.setItem("fullName", todoInputName);
  return false;
};

createTodoButton.addEventListener("click", passValue);
