let btnAdd = document.querySelector("#btn-add");
// let btnDel = document.querySelector("#btn-del"); //Expérience
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input input");
let btnRem = document.querySelector("#btn-rem");

function countTask() {
  document.querySelector(".task-count").innerText = todoList.children.length;
  document.querySelector(".task-count-end").innerText =
    document.querySelectorAll(".task-finished").length;
}
/*//Expérience
function countTask() {
  document.querySelector(".task-count").innerText = todoList.children.length;
}*/

function createTask() {
  if (todoInput.value.trim() == "") {
    alert("Veuillez renseigner la tâche à faire");
  } else {
    let task = `<li><span><input type="checkbox" name="" class="check"><p class="edit-text">${todoInput.value}</p></span><button class="btn btn-warning btn-del">X</button></li>`;
    todoList.innerHTML += task;
    countTask();
  }
  todoInput.value = "";
  todoInput.focus();
}

function finishTask(e) {
  if (e.target.checked) {
    e.target.parentElement.classList.add("task-finished");
  } else {
    e.target.parentElement.classList.remove("task-finished");
  }
  countTask();
}

function deleteTask(e) {
  e.target.parentElement.remove();
  countTask();
  todoInput.focus();
}

function deleteTaskList() {
  let tasksEnd = document.querySelectorAll(".task-finished");

  for (let task of tasksEnd) {
    task.parentElement.remove();
    // btnRem.style.display = "none"; //Expérience
  }
  countTask();
}

btnAdd.onclick = function () {
  createTask();
};
btnRem.onclick = function () {
  deleteTaskList();
};
todoList.onclick = function (e) {
  if (e.target.classList.contains("btn-del")) {
    deleteTask(e);
  }
  /*//Expérience
  if (e.target.classList.contains("btn-edit")) {
    editTask(e.target);
  }*/
  if (e.target.classList.contains("check")) {
    // btnRem.style.display = "initial"; //Expérience
    finishTask(e);
  }
};
todoInput.onkeyup = function (e) {
  if (e.keyCode == 13) {
    createTask();
  }
};

/*// Expérience
function editTask(e) {
  var editText = document.querySelector(".edit-text");
  editText.setAttribute("contenteditable", "true");
  editText.focus();
}*/
