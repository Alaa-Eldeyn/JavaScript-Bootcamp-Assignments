let myTask = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let taskList = document.querySelector(".tasks");

// Empty array to store the tasks
let arrayOfTasks = [];

// Check if there is tasks in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

// Trigger Get data from local storage function
getDataFromLS();

// Add task
addBtn.onclick = function () {
    if (myTask.value !== "") {
        addTaskToArr(myTask.value); // Add task to Array of tasks
        myTask.value = ""; // Empty input field
    };
};

// Update data
taskList.addEventListener("click", e => {
    // Delete button
    if (e.target.classList.contains("del")) {
        deleteTask(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    };
    // Complete task
    if (e.target.classList.contains("task")) {
        completedTask(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done");
    };
});

function addTaskToArr(taskText) {
    // Task data
    const task = {
        id: Date.now(),
        title: taskText,
        statue: false
    };
    // Push tasks to Array of tasks
    arrayOfTasks.push(task);
    // Add tasks to page
    addElementsToPageFrom(arrayOfTasks);
    // Add tasks to local storage from array of tasks
    storeData(arrayOfTasks);
};

function addElementsToPageFrom(arrayOfTasks) {
    // Empty tasks list container
    taskList.innerHTML = "";
    // looping on tasks items
    arrayOfTasks.forEach(task => {
        // Create task div
        let div = document.createElement("div");
        div.className = "task";
        if (task.stat) {
            div.className = "task done";
        };
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create delete button
        let del = document.createElement("button");
        del.className = "del";
        del.appendChild(document.createTextNode("delete"));
        div.appendChild(del);
        // Append task div to page
        taskList.appendChild(div);
    });
};

function storeData(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}

function getDataFromLS() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    };
};

function deleteTask(taskId) {
    arrayOfTasks = arrayOfTasks.filter(task => task.id != taskId);
    storeData(arrayOfTasks);
};

function completedTask(taskId) {
    for (i = 0; i < arrayOfTasks.length; i++){
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].statue == false ? (arrayOfTasks[i].statue = true) : (arrayOfTasks[i].statue = false);
        };
    };
    storeData(arrayOfTasks);
};

document.addEventListener("keydown", (el) => {
    if (el.key === "Enter") {
        if (myTask.value !== "") {
            addTaskToArr(myTask.value);
            myTask.value = "";
            myTask.focus();
        }
    }
});