import { addButton, addDiv, addHeader, addImage, addSpan } from './createDOMelements';
import { displayToDos, sortProjects } from './displayToDos';
import { ToDo } from './todoClasses';
import { projects } from './sidebar';

const target = document.querySelector('.main-section');
const tasks = [];

function createMainContent() {

    addDiv('', 'title-tasks', 'title-tasks', target);  
    addHeader('All projects', 'h2', document.querySelector('.title-tasks'));
    addButton('Add task', 'add-task', 'add-task', document.querySelector('.title-tasks'));

    addDiv('', 'task-cards', 'task-cards', target);  
    
    const defaultTask = new ToDo({title: 'High priority task', description: 'Get started here', dueDate: '2024-03-24', priority: 'high', status: false, project: projects[0].title});
    tasks.push(defaultTask);

    const defaultTask2 = new ToDo({title: 'Medium priority task', description: 'Get started here 2', dueDate: '2024-03-24', priority: 'medium', status: false, project: projects[1].title});
    tasks.push(defaultTask2);
    
    const defaultTask3 = new ToDo({title: 'Low priority task', description: 'Get started here 3', dueDate: '2024-03-24', priority: 'low', status: false, project: projects[1].title});
    tasks.push(defaultTask3);   

    displayToDos();
}

export { createMainContent, tasks }