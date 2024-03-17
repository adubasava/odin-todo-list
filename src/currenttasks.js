import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';
import { displayToDos, sortProjects } from './displayToDos';
import { ToDo } from './todo';
import { projects } from './sidebar';

const target = document.querySelector('.main-section');
const tasks = [];

function createMainContent() {

    addDiv('', 'title-tasks', 'title-tasks', target);  
    addHeader('All projects', 'h2', document.querySelector('.title-tasks'));
    addButton('Add task', 'add-task', 'add-task', document.querySelector('.title-tasks'));

    addDiv('', 'task-cards', 'task-cards', target);  
    
    const defaultTask = new ToDo({title: 'Get started here', description: 'Get started here', dueDate: '2024-03-24', priority: 'high', status: false, project: projects[0].title});
    tasks.push(defaultTask);

    const defaultTask2 = new ToDo({title: 'Get started here 2', description: 'Get started here 2', dueDate: '2024-03-24', priority: 'high', status: false, project: projects[1].title});
    tasks.push(defaultTask2);    

    //displayToDos();
    sortProjects(projects[1])
}

export { createMainContent, tasks }