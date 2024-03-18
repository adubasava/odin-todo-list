import { ToDo } from './todoClasses';
import { addButton, addCheckbox, addDiv, addHeader, addImage, addSpan } from './createDOMelements';
import { tasks } from './currenttasks';
import { removeTask, editTask } from './handletasks';
import { projects } from './sidebar';

function displayToDo(id) {
    const target = document.querySelector('.task-cards');

    let colorClass;
    if (tasks[id].priority == 'low') {
        colorClass = 'low';
    } else if (tasks[id].priority == 'medium') {
        colorClass = 'medium';
    } else {
        colorClass = 'high';
    }

    addDiv(``, `${colorClass}`, `task-${id}`, target);
    const newTarget = document.querySelector(`#task-${id}`);
    addCheckbox(`check-${id}`, newTarget);
    addSpan(`${tasks[id].title}`, 'task-title', newTarget);
    addSpan(`${tasks[id].dueDate}`, 'task-due-date', newTarget);
    addButton(`View / edit`, 'task-view-edit', `btn-task-${id}`, newTarget);
    addButton(`Delete`, 'task-delete', `del-task-${id}`, newTarget);

    document.querySelector(`#btn-task-${id}`).addEventListener('click', () => editTask(id));
    document.querySelector(`#del-task-${id}`).addEventListener('click', () => removeTask(`task-${id}`)); 

    const checkbox = document.getElementById(`check-${id}`);
    checkbox.addEventListener('change', () => {
        handleCheckbox(id);
    });  
}

function handleCheckbox(id) {
    const checkbox = document.getElementById(`check-${id}`);
    if (checkbox.checked) {
        document.getElementById(`task-${id}`).style.textDecoration = 'line-through';
        document.getElementById(`task-${id}`).style.backgroundColor = 'gray';
        tasks[id].status = true;
    } else {
        document.getElementById(`task-${id}`).style.textDecoration = 'none';
        document.getElementById(`task-${id}`).style.backgroundColor = 'rgb(115, 179, 18)';
        tasks[id].status = false;
    }
}

function displayToDos() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = 'All projects';

    for (let i = 0, j = tasks.length; i < j; i++) {
        displayToDo(i);       
    }
}

function sortProjects(project) {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = project.title;

    for (let i = 0, j = tasks.length; i < j; i++) {

        if (tasks[i].project == project.title) {
            displayToDo(i);
        }           
    }
}

function displayDoneTasks() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = 'Done tasks';

    for (let i = 0, j = tasks.length; i < j; i++) {

        if (tasks[i].status == true) {
            displayToDo(i);

            const checkbox = document.getElementById(`check-${i}`);
            checkbox.checked = true;
            document.getElementById(`task-${i}`).style.textDecoration = 'line-through';
            document.getElementById(`task-${i}`).style.backgroundColor = 'gray';

            checkbox.addEventListener('change', () => {
                handleCheckbox(i);

                if (tasks[i].status == false) {
                    displayDoneTasks();
                }
            });
        }           
    }
}

export { displayToDos, sortProjects, displayDoneTasks }