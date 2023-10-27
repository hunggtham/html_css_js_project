const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let task = document.createElement("li");
    task.innerHTML = inputBox.value;
    listContainer.appendChild(task);
    let xIcon = document.createElement("span");
    xIcon.classList.add("closeIcon");
    xIcon.innerHTML = "\u00d7";
    task.appendChild(xIcon);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
