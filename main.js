document.querySelector('.button').addEventListener('click', () => {
    const newTask = document.getElementById('new-task').value;
    if (newTask) {
        const taskList = document.querySelector('.task-list');
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = newTask;
        taskList.appendChild(taskItem);
        document.getElementById('new-task').value = '';
    }
});
