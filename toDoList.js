const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

let toDos = [ ]

function saveToDos() {
    // console.log(toDos)
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(e) {
    const li = e.target.parentElement
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    span.innerText = newTodo;
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit (event) {
    event.preventDefault();
    // console.log(toDoInput.value)
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // 그려주는 함수
    paintToDo(newTodo);
    // 로컬스토리지에 저장
    toDos.push(newTodo)
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos")

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    toDos.forEach((item) => paintToDo(item))
}