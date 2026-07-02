const taskInput = document.getElementById("taskInput");
        const addButton = document.getElementById("addButton");
        const taskList = document.getElementById("taskList");

        addButton.addEventListener("click", () => {
            const taskText = taskInput.value.trim();

            if (taskText === "") {
                return;
            }

            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = taskText;

            span.addEventListener("click", () => {
                span.classList.toggle("completed");
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "削除";

            deleteButton.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(deleteButton);

            taskList.appendChild(li);

            taskInput.value = "";
        });