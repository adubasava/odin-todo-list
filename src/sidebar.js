import { addButton, addDiv, addHeader, addImage } from './createDOMelements';
import { ToDo, Project } from './todoClasses';
import { sortProjects, displayToDos, displayDoneTasks } from './displayToDos';
import { removeProject, editProject } from './handleprojects';

const target = document.querySelector('.sidebar');
const projects = [];

function createSidebar() {
    addDiv('', 'title', 'title', target);  
    addHeader('Your projects', 'h4', document.querySelector('.title'));
    addButton('Add project', 'add-project', 'add-project', document.querySelector('.title'));

    addDiv('', 'sort', 'sort', target);
    addButton(`Show all tasks`, 'sort-tasks', `all-tasks`, document.querySelector(`#sort`)); 
    addButton(`Show done tasks`, 'sort-tasks', `done-tasks`, document.querySelector(`#sort`)); 

    addDiv('', 'projects', 'projects', target);  

    const defaultProject = new Project('Default project');
    projects.push(defaultProject);
    const defaultProject2 = new Project('Default project 2');
    projects.push(defaultProject2);

    displayProjects();

    document.querySelector('#all-tasks').addEventListener('click', displayToDos);
    document.querySelector('#done-tasks').addEventListener('click', displayDoneTasks);
}

function displayProjects() {
    const target = document.querySelector('.projects');
    target.textContent = "";

    for (let i = 0, j = projects.length; i < j; i++) {

        addDiv('', 'proj', `project-${i}`, target);
        const newTarget = document.querySelector(`#project-${i}`);

        addButton(`${projects[i].title}`, 'project', `btn-project-title-${i}`, newTarget);   
        addDiv('', 'buttons', `div-${i}`, document.getElementById(`btn-project-title-${i}`));
        addButton('', 'project-edit', `btn-project-${i}`, document.getElementById(`div-${i}`));
        addImage('../src/pencil.svg', 10, 'filter-white', document.getElementById(`btn-project-${i}`));
        addButton(``, 'project-delete', `del-project-${i}`, document.getElementById(`div-${i}`));        
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