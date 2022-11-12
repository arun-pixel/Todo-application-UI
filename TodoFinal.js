const form = document.querySelector("#taskform")
const input = document.querySelector("#taskinput")
const list = document.querySelector("#tasks")

form.addEventListener('submit', (e)=> {
    e.preventDefault()


  const task = input.value;

  if(!task){
    alert("please fill out the task")
    return;
  }

  const taskElement = document.createElement("div")
  taskElement.classList.add("task")

  const taskContent = document.createElement("div")
  taskContent.classList.add("content")

  taskElement.appendChild(taskContent);

  const taskInput = document.createElement("input")
  taskInput.classList.add("text")
  taskInput.type = "text";
  taskInput.value = task;
  taskInput.setAttribute("readonly", "readonly");

  taskContent.appendChild(taskInput);

  const taskActions = document.createElement("div")
  taskActions.classList.add("actions")

  const taskEdit = document.createElement("button")
  taskEdit.classList.add("edit")
  taskEdit.innerHTML = "Edit"

  const taskDelete = document.createElement("button")
  taskDelete.classList.add("delete")
  taskDelete.innerHTML = "Delete"

  taskActions.appendChild(taskEdit)
  taskActions.appendChild(taskDelete)

  taskElement.appendChild(taskActions)

  list.appendChild(taskElement)

  input.value = "";

 taskEdit.addEventListener('click', () => {
    if(taskEdit.innerHTML.toLowerCase() == "edit"){
    taskInput.removeAttribute("readonly")
    taskInput.focus()
    taskEdit.innerText = "Save";
    }
    else{
        taskInput.setAttribute("readonly","readonly");
        taskEdit.innerHTML = "Edit";
    }

 })
 taskDelete.addEventListener('click', () => {
    list.removeChild(taskElement)
 })


  })

