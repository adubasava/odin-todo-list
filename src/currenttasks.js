import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';
import { displayToDos } from './displayToDo';
import { ToDo } from './todo';

const target = document.querySelector('.main-section');
const tasks = [];

function createMainContent() {

    addDiv('', 'title-tasks', 'title-tasks', target);  
    addHeader('All projects', 'h2', document.querySelector('.title-tasks'));
    addButton('Add task', 'add-task', 'add-task', document.querySelector('.title-tasks'));

    addDiv('', 'task-cards', 'task-cards', target);  
    const cardTarget = document.querySelector('.task-cards');

    const defaultTask = new ToDo({title: 'Get started here', description: 'Get started here', dueDate: '2024-03-24', priority: 'high', status: false});
    tasks.push(defaultTask);

/*     for (let i=0, j=tasks.length; i < j; i++) {
        displayToDo(tasks[i], i, cardTarget);
    } */
    
   // displayToDo(defaultTask, '1', cardTarget);
   displayToDos();
}

export { createMainContent, tasks }