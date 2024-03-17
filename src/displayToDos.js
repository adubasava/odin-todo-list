import { ToDo } from './todo';
import { addButton, addCheckbox, addDiv, addHeader, addImage, addSpan } from './pageload';
import { tasks } from './currenttasks';
import { removeTask, editTask } from './handletasks';
import { projects } from './sidebar';

function displayToDos() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";

    for (let i = 0, j = tasks.length; i < j; i++) {

        addDiv(``, 'task', `task-${i}`, target);
        const newTarget = document.querySelector(`#task-${i}`);
        addCheckbox(newTarget);
        addSpan(`${tasks[i].title}`, 'task-title', newTarget);
        addSpan(`${tasks[i].dueDate}`, 'task-due-date', newTarget);
        addButton(`View / edit`, 'task-view-edit', `btn-task-${i}`, newTarget);
        addButton(`Delete`, 'task-delete', `del-task-${i}`, newTarget);

        document.querySelector(`#btn-task-${i}`).addEventListener('click', () => editTask(i));
        document.querySelector(`#del-task-${i}`).addEventListener('click', () => removeTask(`task-${i}`));    
    }
}

function sortProjects(project) {
    const target = document.querySelector('.task-cards');
    target.textContent = "";

    for (let i = 0, j = tasks.length; i < j; i++) {

        if (tasks[i].project == project.title) {
            addDiv(``, 'task', `task-${i}`, target);
            const newTarget = document.querySelector(`#task-${i}`);
            addCheckbox(newTarget);
            addSpan(`${tasks[i].title}`, 'task-title', newTarget);
            addSpan(`${tasks[i].dueDate}`, 'task-due-date', newTarget);
            addButton(`View / edit`, 'task-view-edit', `btn-task-${i}`, newTarget);
            addButton(`Delete`, 'task-delete', `del-task-${i}`, newTarget);
    
            document.querySelector(`#btn-task-${i}`).addEventListener('click', () => editTask(i));
            document.querySelector(`#del-task-${i}`).addEventListener('click', () => removeTask(`task-${i}`));  
        } 
          
    }
}

export { displayToDos, sortProjects }