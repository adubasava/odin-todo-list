import { addButton, addDiv, addHeader } from './pageload';
import { ToDo, Project } from './todo';

const target = document.querySelector('.sidebar');
const projects = [];


function createSidebar() {
    addDiv('', 'title', 'title', target);  
    addHeader('Your projects', 'h4', document.querySelector('.title'));
    addButton('Add project', 'add-project', 'add-project', document.querySelector('.title'));

    addDiv('', 'projects', 'projects', target);  
    //addButton('Personal', 'project', 'personal', document.querySelector('.projects'));
    //addButton('Work', 'project', 'work', document.querySelector('.projects'));

    displayProjects();
}

function displayProjects() {
    const defaultProject = new Project('Default project');
    projects.push(defaultProject);
    const defaultProject2 = new Project('Default project 2');
    projects.push(defaultProject2);

    const target = document.querySelector('.projects');
    //target.textContent = "";

    for (let i = 0, j = projects.length; i < j; i++) {

        addDiv('', 'proj', `project-${i}`, target);
        const newTarget = document.querySelector(`#project-${i}`);

        addButton(`${projects[i].title}`, 'project', `btn-project-title-${i}`, newTarget);
        addButton('Edit', 'project-edit', `btn-project-${i}`, document.getElementById(`btn-project-title-${i}`));
        addButton(`Delete`, 'project-delete', `del-project-${i}`, document.getElementById(`btn-project-title-${i}`));

        //document.querySelector(`#btn-task-${i}`).addEventListener('click', () => editTask(i));
        //document.querySelector(`#del-task-${i}`).addEventListener('click', () => removeTask(`task-${i}`));    
    }

}

export { createSidebar, projects }