let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log(`Task added: ${name}`);
}

function viewTasks() {
    console.log("Task List:");
    console.table(tasks);
}

function updateTask(id, newName, newDescription) {
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated: ${newName}`);
    } else {
        console.log("Task not found!");
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
}

addTask(1, "Jeff-L Ginolos", "Study JavaScript for 2 hours");
addTask(2, "JUAN DELA CRUZ", "Go for a run");
viewTasks();
updateTask(1, "Leomord", "Complete JavaScript exercises");
deleteTask(2);
viewTasks();
