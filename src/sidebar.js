import { addButton, addDiv, addHeader, addImage } from './pageload';
import { ToDo, Project } from './todo';
import { sortProjects } from './displayToDos';
import { removeProject, editProject } from './handleprojects';

const target = document.querySelector('.sidebar');
const projects = [];


function createSidebar() {
    addDiv('', 'title', 'title', target);  
    addHeader('Your projects', 'h4', document.querySelector('.title'));
    addButton('Add project', 'add-project', 'add-project', document.querySelector('.title'));

    addDiv('', 'projects', 'projects', target);  

    const defaultProject = new Project('Default project');
    projects.push(defaultProject);
    const defaultProject2 = new Project('Default project 2');
    projects.push(defaultProject2);

    displayProjects();
}

function displayProjects() {
    const target = document.querySelector('.projects');
    target.textContent = "";

    for (let i = 0, j = projects.length; i < j; i++) {

        addDiv('', 'proj', `project-${i}`, target);
        const newTarget = document.querySelector(`#project-${i}`);

        addButton(`${projects[i].title}`, 'project', `btn-project-title-${i}`, newTarget);        
        addButton('', 'project-edit', `btn-project-${i}`, document.getElementById(`btn-project-title-${i}`));
        addImage('../src/pencil.svg', 10, 'filter-white', document.getElementById(`btn-project-${i}`));
        addButton(``, 'project-delete', `del-project-${i}`, document.getElementById(`btn-project-title-${i}`));        
        addImage('../src/delete.svg', 10, 'filter-white', document.getElementById(`del-project-${i}`));

        document.querySelector(`#project-${i}`).addEventListener('click', () => {
            sortProjects(projects[i]);
        });

        document.getElementById(`btn-project-${i}`).addEventListener('click', () => {
            editProject(i); 
        });    

        document.getElementById(`del-project-${i}`).addEventListener('click', () => {
            removeProject(`project-${i}`); 
        });  
    }
}

export { createSidebar, projects, displayProjects }