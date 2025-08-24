const inputBox = document.getElementById("inputBox");
const taskcontainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write something !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // ×
    li.appendChild(span);

    taskcontainer.appendChild(li);
    saveData(); // LocalStorage update
  }
  inputBox.value = "";
}

taskcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("tasks", taskcontainer.innerHTML);
}

function showTask() {
  taskcontainer.innerHTML = localStorage.getItem("tasks") || "";
}
showTask();

