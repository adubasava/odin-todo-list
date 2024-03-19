import { addButton, addCheckbox, addDiv, addSpan } from './createDOM';
import { removeTask, editTask } from './handletasks';
import { allTasks } from './managelocalstorage';

function displayTask(id) {
    const target = document.querySelector('.task-cards');

    let colorClass;
    if (allTasks[id].priority == 'low') {
        colorClass = 'low';
    } else if (allTasks[id].priority == 'medium') {
        colorClass = 'medium';
    } else {
        colorClass = 'high';
    }

    addDiv(``, `${colorClass}`, `task-${id}`, target);
    const newTarget = document.querySelector(`#task-${id}`);
    addCheckbox(`check-${id}`, newTarget);
    addSpan(`${allTasks[id].title}`, 'task-title', newTarget);
    addSpan(`${allTasks[id].dueDate}`, 'task-due-date', newTarget);

    addDiv(``, `btns`, `div-t-${id}`, newTarget);   
    addButton(`View / edit`, 'task-view-edit', `btn-task-${id}`, document.getElementById(`div-t-${id}`));
    addButton(`Delete`, 'task-delete', `del-task-${id}`, document.getElementById(`div-t-${id}`));

    document.querySelector(`#btn-task-${id}`).addEventListener('click', () => editTask(id));
    document.querySelector(`#del-task-${id}`).addEventListener('click', () => removeTask(`task-${id}`)); 

    const checkbox = document.getElementById(`check-${id}`);

    if (allTasks[id].status == true) {
        checkbox.checked = true; 
        document.getElementById(`task-${id}`).style.textDecoration = 'line-through';
        document.getElementById(`task-${id}`).style.backgroundColor = 'gray'; 
    } 

    checkbox.addEventListener('change', () => {
        handleCheckbox(id);
    });  
}

function handleCheckbox(id) {
    const checkbox = document.getElementById(`check-${id}`);
    if (checkbox.checked) {
        document.getElementById(`task-${id}`).style.textDecoration = 'line-through';
        document.getElementById(`task-${id}`).style.backgroundColor = 'gray';
        allTasks[id].status = true;
        localStorage.setItem(`task-${id}`, JSON.stringify(allTasks[id]));  
    } else {
        document.getElementById(`task-${id}`).style.textDecoration = 'none';
        document.getElementById(`task-${id}`).style.backgroundColor = 'rgb(115, 179, 18)';
        allTasks[id].status = false;
        localStorage.setItem(`task-${id}`, JSON.stringify(allTasks[id]));  
    }
}

function displayTasks() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = 'All projects';

    for (let i = 0, j = allTasks.length; i < j; i++) {
        if (allTasks[i].status == false) {
            displayTask(i);  
        }             
    }
}

function sortByProject(projecttitle) {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = projecttitle;

    for (let i = 0, j = allTasks.length; i < j; i++) {

        if (allTasks[i].project == projecttitle && allTasks[i].status == false) {
            displayTask(i);
        }           
    }
}

function displayDoneTasks() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";
    document.querySelector('.title-tasks h2').textContent = 'Done tasks';

    for (let i = 0, j = allTasks.length; i < j; i++) {

        if (allTasks[i].status == true) {
            displayTask(i);

            const checkbox = document.getElementById(`check-${i}`);
            checkbox.checked = true;
            document.getElementById(`task-${i}`).style.textDecoration = 'line-through';
            document.getElementById(`task-${i}`).style.backgroundColor = 'gray';

            checkbox.addEventListener('change', () => {
                handleCheckbox(i);

                if (allTasks[i].status == false) {
                    displayDoneTasks();
                }
            });
        }           
    }
}

export { displayTasks, sortByProject, displayDoneTasks }