const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl + '?_limit=10'); // Limita a 10 tarefas para simplicidade
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

function displayTasks(tasks) {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = ''; // Limpa o conteúdo existente
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `<span>${task.title}</span>`;
        tasksContainer.appendChild(taskElement);
    });
}
