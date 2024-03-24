const inputBox = document.getElementById('todoInput');
const allList = document.getElementById('all-list');
const activeList = document.getElementById('active-list');
const completedList = document.getElementById('completed-list');
const clearCompletedBtn = document.getElementById('clear-completed');

const addTask = () => {
    const task = inputBox.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);

        allList.appendChild(listItem); // Add to allList
        activeList.appendChild(listItem.cloneNode(true)); // Add a clone to activeList
        inputBox.value = '';
        saveData();
    }
};

// Event delegation for handling task completion
activeList.addEventListener('click', (event) => {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskItem.classList.toggle('checked'); // Toggle completion status
        if (taskItem.classList.contains('checked')) {
            activeList.removeChild(taskItem); // Remove from activeList
            completedList.appendChild(taskItem); // Append to completedList
        }
        saveData();
    }
});

// Event delegation for handling task deletion
completedList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete');
    if (deleteButton) {
        const taskItem = deleteButton.parentElement;
        completedList.removeChild(taskItem); // Remove task from completedList
        saveData();
    }
});

// Function to save the task data to localStorage
function saveData() {
    localStorage.setItem('allList', allList.innerHTML);
    localStorage.setItem('activeList', activeList.innerHTML);
    localStorage.setItem('completedList', completedList.innerHTML);
}

function loadData() {
    allList.innerHTML = localStorage.getItem('allList');
    activeList.innerHTML = localStorage.getItem('activeList');
    completedList.innerHTML = localStorage.getItem('completedList');
}

loadData();




