document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        addEditDeleteEvents(li);
    }

    function addEditDeleteEvents(li) {
        const editBtn = li.querySelector('.editBtn');
        const deleteBtn = li.querySelector('.deleteBtn');

        editBtn.addEventListener('click', function() {
            const span = li.querySelector('span');
            const newText = prompt('Edit task:', span.textContent);
            if (newText !== null) {
                span.textContent = newText.trim();
            }
        });

        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this task?')) {
                li.remove();
            }
        });
    }
});
