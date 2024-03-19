import { addButton, addDiv, addHeader } from './createDOM';
import { displayTasks } from './displaytasks';

const target = document.querySelector('.main-section');
const tasks = [];

function createMainContent() {

    addDiv('', 'title-tasks', 'title-tasks', target);  
    addHeader('All projects', 'h2', document.querySelector('.title-tasks'));
    addButton('Add task', 'add-task', 'add-task', document.querySelector('.title-tasks'));

    addDiv('', 'task-cards', 'task-cards', target);     
    
    displayTasks();
}

export { createMainContent, tasks }