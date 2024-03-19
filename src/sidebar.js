import { addButton, addDiv, addHeader, addImage } from './createDOM';
import { sortByProject, displayTasks, displayDoneTasks } from './displaytasks';
import { removeProject, editProject } from './handleprojects';
import editLogo from './pencil.svg';
import deleteLogo from './delete.svg';
import { retreiveFromLocalStorage, allProjects, saveDefault } from './managelocalstorage';

const target = document.querySelector('.sidebar');

function createSidebar() {
    addDiv('', 'title', 'title', target);  
    addHeader('Your projects', 'h4', document.querySelector('.title'));
    addButton('Add project', 'add-project', 'add-project', document.querySelector('.title'));

    addDiv('', 'sort', 'sort', target);
    addButton(`Show all tasks`, 'sort-tasks', `all-tasks`, document.querySelector(`#sort`)); 
    addButton(`Show done tasks`, 'sort-tasks', `done-tasks`, document.querySelector(`#sort`)); 

    addDiv('', 'projects', 'projects', target);      

    displayProjects();

    document.querySelector('#all-tasks').addEventListener('click', displayTasks);
    document.querySelector('#done-tasks').addEventListener('click', displayDoneTasks);
}

function displayProjects() {

    if (localStorage.length > 0) {
        retreiveFromLocalStorage();
        displayProjectsFromArray(allProjects);        
    } else {
        saveDefault();   
        displayProjects();   
    }  
}

function displayProjectsFromArray(array) {

    const target = document.querySelector('.projects');
    target.textContent = "";

    for (let i = 0, j = array.length; i < j; i++) {

        addDiv('', 'proj', `project-${i}`, target);
        const newTarget = document.querySelector(`#project-${i}`);

        addButton(`${array[i].title}`, 'project', `btn-project-title-${i}`, newTarget);   
        addDiv('', 'buttons', `div-${i}`, document.getElementById(`btn-project-title-${i}`));
        addButton('', 'project-edit', `btn-project-${i}`, document.getElementById(`div-${i}`));
        addImage(editLogo, 10, 'filter-white', document.getElementById(`btn-project-${i}`));
        addButton(``, 'project-delete', `del-project-${i}`, document.getElementById(`div-${i}`));        
        addImage(deleteLogo, 10, 'filter-white', document.getElementById(`del-project-${i}`));

        document.querySelector(`#project-${i}`).addEventListener('click', () => {
            sortByProject(array[i].title);
        });

        document.getElementById(`btn-project-${i}`).addEventListener('click', (event) => {
            event.stopPropagation();
            editProject(i); 
        });    

        document.getElementById(`del-project-${i}`).addEventListener('click', (event) => {
            event.stopPropagation();
            removeProject(`project-${i}`);           
        });  
    }
}

export { createSidebar, displayProjects }