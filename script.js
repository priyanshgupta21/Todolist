/*const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.querySelector("#wrapper input");
const tasksContainer=document.querySelector("#tasks");
const error=document.getElementById("error");
const countValue=document.querySelector(".count-value");
let taskCount=0;

const displayCount=(taskCount)=>{
    countValue.innertext=taskCount;
};
const addTask=()=>{
    const taskName=newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }
    const task=`<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
</button>
<button class="delete">
<i class="fa fa-trash" aria-hidden="true"></i>
</button>
    </div>`;
    tasksContainer.insertAdjacentHTML("beforeend",task);
    const deleteButtons=document.querySelectorAll(".delete");
    deleteButtons.forEach((button)=>{
        button.onclick=()=>{
            button.parentNode.remove();
            taskCount= -1;
            displayCount(taskCount);
        };
  });
  /*const editButtons=document.querySelectorAll(".edit");
  editButtons.forEach((editBtn)=>{
      editBtn.onclick=(e)=>{
          let targetElement=e.target;
          if(!(e.target.className=="edit")){
              targetElement=e.target.parentElement;
          }
      
      newTaskInput.value=targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount-=1;
      displayCount(taskCount);
  };
});*/
/*const editTask = (editBtn) => {
    let targetElement = editBtn.parentNode;
    const taskName = targetElement.querySelector(".taskname").innerText;
    newTaskInput.value = taskName;
    targetElement.remove();
    taskCount -= 1;
    displayCount(taskCount);
};

const addTask = () => {
  

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((editBtn) => {
        editBtn.addEventListener("click", () => {
            editTask(editBtn);
        });
    });

  
};

const tasksCheck=document.querySelectorAll(".task-check");
tasksCheck.forEach((checkBox)=>{
    checkBox.onChange=()=>{
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkBox.checked){
            taskCount-=1;
        }else{
            taskCount+=1;
        }
        displayCount(taskCount);
    };
});
taskCount+=1;displayCount(taskCount);
newTaskInput.value="";
};
addBtn.addEventListener("click",addTask);
window.onload=()=>{
    taskCount=0;
    displayCount(taskCount);
    newTaskInput.value="";
};*/
/*const itemsArray=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):
[];
console.log(itemsArray)
const saveItemsToLocalStorage = () => {
    localStorage.setItem("items", JSON.stringify(itemsArray));
};


const createItem = (itemValue) => {
    itemsArray.push(itemValue);
    saveItemsToLocalStorage();
    location.reload(); 
};
document.querySelector("#add-btn").addEventListener("click", () => {
    const item = document.querySelector("#item").value.trim();
    if (item !== "") {
        createItem(item);
    }
});

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

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
    window.onload = () => {
    itemsArray.forEach((taskName) => {
        const task = `<div class="task">
            <input type="checkbox" class="task-check">
            <span class="taskname">${taskName}</span>
            <button class="edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>`;
        tasksContainer.insertAdjacentHTML("beforeend", task);
    });

  

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
            button.parentNode.remove();
            itemsArray.splice(itemsArray.indexOf(button.parentNode.querySelector(".taskname").innerText),1);
            displayCount(itemsArray.length);
            saveItemsToLocalStorage();

        };
    });

 

    const tasksCheck = document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkBox) => {
        checkBox.addEventListener("change", () => {
            checkBox.nextElementSibling.classList.toggle("completed");
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

addBtn.addEventListener("click", addTask);

/*window.onload = () => {
    taskCount = itemsArray.length;
    displayCount(taskCount);
    newTaskInput.value = "";
};*/
/*const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

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
    const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>`;
    tasksContainer.insertAdjacentHTML("beforeend", task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
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

addBtn.addEventListener("click", addTask);

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
};*/
const addBtn = document.querySelector("#add-btn");
const completedBtn = document.querySelector("#completed-btn"); 
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const completedList = document.querySelector("#completed-list");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

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
    const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>`;
    tasksContainer.insertAdjacentHTML("beforeend", task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
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
            if (checkBox.checked) {
                taskCount -= 1;
                console.log(taskCount)
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

/*const moveCompletedTasks = () => {
    const checkedTasks = document.querySelectorAll(".task-check:checked");
    checkedTasks.forEach((task) => {
        const taskName = task.nextElementSibling.innerText;
        const completedTask = `<li>${taskName}</li>`;
        completedList.insertAdjacentHTML("beforeend", completedTask);
        task.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    });
};
const moveCompletedTasks = () => {
    const checkedTasks = document.querySelectorAll(".task-check:checked");
    checkedTasks.forEach((task) => {
        if (task.parentNode.classList.contains("completed")) return; // Skip if already completed
        const taskElement = task.parentNode;
        const taskName = taskElement.querySelector(".taskname").innerText;
        const completedTask = `
            <div class="completed-task">
                <span class="taskname">${taskName}</span>
            </div>`;
        completedList.insertAdjacentHTML("beforeend", completedTask);
        taskElement.remove();
        taskCount -= 1;
        console.log(taskCount);
        displayCount(taskCount);
    });
};*/
const moveCompletedTasks = () => {
    const checkedTasks = document.querySelectorAll(".task-check:checked");
    checkedTasks.forEach((task) => {
        const taskElement = task.parentNode;
        const taskName = taskElement.querySelector(".taskname").innerText;
        const completedTask = `
            <div class="completed-task">
                <span class="taskname">${taskName}</span>
            </div>`;
        completedList.insertAdjacentHTML("beforeend", completedTask);
        if (!taskElement.classList.contains("completed")) {
            // Decrement taskCount only for unchecked tasks
            taskCount -= 1;
            displayCount(taskCount);
        }
        taskElement.remove();
    });
};



addBtn.addEventListener("click", addTask);
completedBtn.addEventListener("click", moveCompletedTasks); 

/*window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";*/
    window.onload = () => {
    taskCount = document.querySelectorAll(".task").length;
    displayCount(taskCount);
};



