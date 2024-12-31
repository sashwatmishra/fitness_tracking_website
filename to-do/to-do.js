// script.js
document.getElementById('submit-btn').addEventListener("click", addTask);
let myTasksUl = document.getElementById("my-ttasks-ul");

function addTask() {
    const task = document.getElementById('task').value;
    const due = document.getElementById('due').value;

    if (!task || !due) return; // Prevent adding empty tasks

    const li = document.createElement('li');
    const div = document.createElement('div');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span class="material-icons-outlined">delete</span>';
    deleteBtn.className = 'button delete';
    deleteBtn.addEventListener('click', () => {
        myTasksUl.removeChild(li);
    });

    const pTask = document.createElement('p');
    pTask.innerText = `Task: ${task}`;
    const pDue = document.createElement('p');
    pDue.innerText = `Due: ${due}`;
    
    const label = document.createElement('label');
    label.innerText = "Done: ";
    const input = document.createElement('input'); // Changed from 'label' to 'input'
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "done");
    input.addEventListener("change", toggleTask);
    
    div.append(deleteBtn, pTask, pDue, label, input);
    li.appendChild(div);
    myTasksUl.appendChild(li);

    // Clear the input fields after adding a task
    document.getElementById('task').value = '';
    document.getElementById('due').value = '';
}

function toggleTask(event) {
    const taskItem = event.target.closest('li');
    if (event.target.checked) {
        taskItem.style.textDecoration = 'line-through';
    } else {
        taskItem.style.textDecoration = 'none';
    }
}


//new stuff above 
/*
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
});
*/ 