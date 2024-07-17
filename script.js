document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task !== '') {
            addTask(task);
            input.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", (e) => {
            li.remove();
        });
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = 'Complete';
        toggleBtn.addEventListener("click", (e) => {
            li.classList.toggle("completed");
        });

        li.appendChild(deleteBtn);
        li.appendChild(toggleBtn);
        list.appendChild(li);
    }
});