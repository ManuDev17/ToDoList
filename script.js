// Seleccionar elementos
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para añadir tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Crear un nuevo elemento de lista
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        
        // Agregar el texto de la tarea
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        
        // Agregar el elemento a la lista
        taskList.appendChild(listItem);
        
        // Limpiar el input
        taskInput.value = "";
    }
}

// Función para eliminar tarea
function removeTask(taskElement) {
    taskElement.parentElement.remove();
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
