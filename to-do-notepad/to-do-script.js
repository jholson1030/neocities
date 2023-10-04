// Set variables to all page elements

const noteContainer = document.getElementById('note-container');
const noteInput = document.getElementById('note-input');
const noteSubmit = document.getElementById('note-submit');

// Note array
let noteTasks = [];

// Listening for a button click
noteSubmit.addEventListener('click', function(event) {
    // Prevent the default behavior of the form submission
    event.preventDefault();

    // Grab value from the input
    const noteInputValue = noteInput.value.trim();

    // Checks if the input is not empty
    if (noteInputValue.length) {
        // Add the task to the task array
        noteTasks.push(noteInputValue);

        // Update the DOM
        updateNotes();

        // Clear the input field
        noteInput.value = '';
    }
});

function updateNotes() {
    // Clearing noteContainer first
    noteContainer.innerHTML = '';

    // Append each task to the noteContainer
    noteTasks.forEach(function (task) {
        // Wrapper for the taskElement and deleteButton
        const taskWrapper = document.createElement('div');
        taskWrapper.className = 'task-wrapper';

        const taskElement = document.createElement('div');
        const deleteButton = document.createElement('button');
        taskElement.className = 'task'; // For styling purposes
        deleteButton.className = 'delete';
        taskElement.textContent = task;
        deleteButton.textContent = 'X';

        saveTasks();

        // Append taskElement and deleteButton to taskWrapper
        taskWrapper.appendChild(taskElement);
        taskWrapper.appendChild(deleteButton);

        // Append the taskElement and deleteButton to the noteContainer
        noteContainer.appendChild(taskWrapper);

        // Delete completed tasks
        deleteButton.addEventListener('click', function(task) {
            taskWrapper.remove(task);
        })
    });
}


// Function to save tasks to local storage

function saveTasks() {
    localStorage.setItem('noteTasks', JSON.stringify(noteTasks));
}

// Function to load tasks from local storage

function loadTasks() {
    const storedTasks = localStorage.getItem('noteTasks');
    if (storedTasks) {
        noteTasks = JSON.parse(storedTasks);
        updateNotes();
    }
}

loadTasks();