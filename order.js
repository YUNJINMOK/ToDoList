const ul = document.querySelector("ul");
const lists = ul.querySelectorAll("li:not(.dragging)");

lists.forEach((list) => {
    list.addEventListener("dragstart", () => {
        setTimeout(() => list.classList.add("dragging"), 0)
    })
    list.addEventListener("dragend", () => {
        list.classList.remove("dragging")
    })
})

const initSortableList = e => {
    e.preventDefault(); 
    const draggingItem = ul.querySelector(".dragging"); 
    const siblings = [...ul.querySelectorAll("li:not(.dragging)")]

    let nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })

    ul.insertBefore(draggingItem, nextSibling)
}


function reSave(newLi) {
    toDos = [ ]
    newLi.forEach(item => {
        const text = item.querySelector("span")
        const newTodoObj = {
            text: text.innerText,
            id: item.id
        }
        toDos.push(newTodoObj);
        saveToDos()
    })
}

ul.addEventListener("dragover", initSortableList);
ul.addEventListener("dragenter", (e) => e.preventDefault())
ul.addEventListener("drop",() => {
    const newLi = document.querySelectorAll("li")
    reSave(newLi)
})

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos))
}