function add() {
  let task = document.getElementById("task-input");
  let task_value = task.value;
  let list = document.getElementById("listed-task");
  let element = document.getElementsByTagName("li");

  if (task_value === "" || task_value === null) {
    alert("Enter a task to add, don't leave it blank");
  } else {
    let li = document.createElement("li");
    li.innerHTML =
      task_value +
      `
    <button class="delete">
      <i class="fas fa-trash"></i>
    </button>`;
    list.insertBefore(li, list.childNodes[0]);
    task.value = "";
  }

  var current_task = document.querySelectorAll(".delete");
  for (var i = 0; i < current_task.length; i++) {
    current_task[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  var updated_task = document.querySelectorAll("LI");
  for (var i = 0; i < updated_task.length; i++) {
    updated_task[i].onclick = function () {
      this.classList.toggle("checked");
    };
  }
}
