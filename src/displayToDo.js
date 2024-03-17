import { ToDo } from './todo';
import { addButton, addCheckbox, addDiv, addHeader, addImage, addSpan } from './pageload';
import { tasks } from './currenttasks';

/* function displayToDo(todo, id, target) {
    addDiv(``, 'task', `task-${id}`, target);
    const newTarget = document.querySelector(`#task-${id}`);
    addCheckbox(newTarget);
    addSpan(`${todo.title}`, 'task-title', newTarget);
    addSpan(`${todo.dueDate}`, 'task-due-date', newTarget);
    addSpan(`View/edit`, 'task-view-edit', newTarget);
    addSpan(`Delete`, 'task-delete', newTarget);
} */


function displayToDos() {
    const target = document.querySelector('.task-cards');
    target.textContent = "";

    for (let i = 0, j = tasks.length; i < j; i++) {

        addDiv(``, 'task', `task-${i}`, target);
        const newTarget = document.querySelector(`#task-${i}`);
        addCheckbox(newTarget);
        addSpan(`${tasks[i].title}`, 'task-title', newTarget);
        addSpan(`${tasks[i].dueDate}`, 'task-due-date', newTarget);
        addSpan(`View/edit`, 'task-view-edit', newTarget);
        addSpan(`Delete`, 'task-delete', newTarget);
        
/*         
        document.querySelector('#task-3').remove()
newDiv.querySelector('.task-delete').addEventListener("click", () => removeBook(i));
        newDiv.querySelector(".status").addEventListener("click", () => {
            myLibrary[i].toggleStatus();
            displayBookCards();
        }); */             
    }
}

export { displayToDos }