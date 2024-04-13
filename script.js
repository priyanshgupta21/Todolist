const addBtn = document.querySelector("#add-btn");
const completedBtn = document.querySelector("#completed-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const completedList = document.querySelector("#completed-list");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;
let tasks = [];
let completedTasks = [];

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

const editTask = (editBtn) => {
    let targetElement = editBtn.parentNode;
    const taskName = targetElement.querySelector(".taskname").innerText;
    newTaskInput.value = taskName;
    targetElement.remove();
    taskCount -= 1;
    displayCount(taskCount);
    updateLocalStorage();
};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }
    const task = {
        name: taskName,
        completed: false
    };
    tasks.push(task);
    updateLocalStorage();
    renderTask(task);
};

const renderTask = (task) => {
    const taskHTML = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${task.name}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>`;
    if (task.completed) {
        completedList.insertAdjacentHTML("beforeend", taskHTML);
    } else {
        tasksContainer.insertAdjacentHTML("beforeend", taskHTML);
    }

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
            const taskIndex = tasks.findIndex(t => t.name === task.name);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
            } else {
                const completedTaskIndex = completedTasks.findIndex(t => t.name === task.name);
                completedTasks.splice(completedTaskIndex, 1);
            }
            updateLocalStorage();
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
    });

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((editBtn) => {
        editBtn.addEventListener("click", () => {
            editTask(editBtn);
        });
    });

    const tasksCheck = document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkBox) => {
        checkBox.addEventListener("change", () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            const taskIndex = tasks.findIndex(t => t.name === task.name);
            if (taskIndex !== -1) {
                tasks[taskIndex].completed = !tasks[taskIndex].completed;
            } else {
                const completedTaskIndex = completedTasks.findIndex(t => t.name === task.name);
                completedTasks[completedTaskIndex].completed = !completedTasks[completedTaskIndex].completed;
            }
            updateLocalStorage();
            if (checkBox.checked) {
                taskCount -= 1;
            } else {
                taskCount += 1;
            }
            displayCount(taskCount);
        });
    });

    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};

const moveCompletedTasks = () => {
    const checkedTasks = document.querySelectorAll(".task-check:checked");
    checkedTasks.forEach((task) => {
        const taskName = task.nextElementSibling.innerText;
        const taskIndex = tasks.findIndex(t => t.name === taskName);
        const completedTask = tasks.splice(taskIndex, 1)[0];
        completedTask.completed = true;
        completedTasks.push(completedTask);
        updateLocalStorage();
        task.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
        renderTask(completedTask);
    });
};

const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
};

addBtn.addEventListener("click", addTask);
completedBtn.addEventListener("click", moveCompletedTasks);

window.onload = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            renderTask(task);
        });
        taskCount = tasks.length;
        displayCount(taskCount);
    }

    const storedCompletedTasks = localStorage.getItem("completedTasks");
    if (storedCompletedTasks) {
        completedTasks = JSON.parse(storedCompletedTasks);
        completedTasks.forEach(task => {
            renderTask(task);
        });
    }
};
