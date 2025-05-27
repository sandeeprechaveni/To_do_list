const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button class="complete" aria-label="Mark task complete">✔️</button>
      <button class="delete" aria-label="Delete task">🗑️</button>
    </div>
  `;

  // Event listeners
  li.querySelector(".complete").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete").addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
