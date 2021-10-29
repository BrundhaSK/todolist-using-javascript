function add() {
  var task = document.getElementById("task-input").value;

  if (task === "" || task === null) {
    alert("Enter a task to add, don't leave it blank");
  }
}
