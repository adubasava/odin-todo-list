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
        addCheckbox(`check-${i}`, newTarget);
        addSpan(`${tasks[i].title}`, 'task-title', newTarget);
        addSpan(`${tasks[i].dueDate}`, 'task-due-date', newTarget);
        addButton(`View / edit`, 'task-view-edit', `btn-task-${i}`, newTarget);
        addButton(`Delete`, 'task-delete', `del-task-${i}`, newTarget);

        document.querySelector(`#btn-task-${i}`).addEventListener('click', () => editTask(i));
        document.querySelector(`#del-task-${i}`).addEventListener('click', () => removeTask(`task-${i}`)); 
        
        const checkbox = document.getElementById(`check-${i}`);

        checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById(`task-${i}`).style.textDecoration = 'line-through';
            document.getElementById(`task-${i}`).style.backgroundColor = 'gray';
            tasks[i].status = true;
        } else {
            document.getElementById(`task-${i}`).style.textDecoration = 'none';
            document.getElementById(`task-${i}`).style.backgroundColor = 'rgb(115, 179, 18)';
            tasks[i].status = false;
        }
});
    }
}

function sortProjects(project) {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = project.title;

    for (let i = 0, j = tasks.length; i < j; i++) {

        if (tasks[i].project == project.title) {
            addDiv(``, 'task', `task-${i}`, target);
            const newTarget = document.querySelector(`#task-${i}`);
            addCheckbox(`check-${i}`, newTarget);
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