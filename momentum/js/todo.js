const toDoForm = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")
const toDoInput = toDoForm.querySelector("input")

const TODO_CONTENT = "toDoContent"

function handleToDoSubmit(event) {
    event.preventDefault();
    toDoForm.classList.add(HIDDEN_CLASSNAME)
    const toDoContent = toDoInput.value
    toDoInput.value = "";
    localStorage.setItem(TODO_CONTENT, toDoContent)


}


toDoForm.addEventListener("submit", handleToDoSubmit)


