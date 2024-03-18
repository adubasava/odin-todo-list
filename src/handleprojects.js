import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';
import { ToDo, Project } from './todo';
import { displayToDos } from './displayToDos';
import { tasks } from './currenttasks';
import { projects, displayProjects } from './sidebar';

function addProject() {

    const dialog = document.createElement('dialog');
    dialog.id = 'dialogaddproj';
    document.body.appendChild(dialog);
    dialog.showModal();
        
    dialog.innerHTML += [
        '<center><button class="close">',
        'X',
        '</button></center>',
        '<h3>',
        'Add project',
        '<h3>',
        '<form action="#"><br>',                
        '<label for="ptitle">',
        'Title:',
        '</label>',
        '<input type="text" name="ptitle" id="ptitle"><br><br>',
        '<center><button type="submit" class="submit">',
        'Add project',
        '</button></center>',
        '</form>'
    ].join('');

    addEventListener('submit', (event) => {
        event.preventDefault();
    
        const newProject = new Project(document.querySelector('#ptitle').value);
        projects.push(newProject);
        displayProjects();
        dialog.close();
        document.getElementById(`dialogaddproj`).remove();
    });

    document.querySelector('.close').addEventListener('click', () => {
        dialog.close();
        document.getElementById(`dialogaddproj`).remove();
    });
}

function removeProject(id) {
    // if to remove from DOM
    document.getElementById(id).remove();
    
    // if to remove from array:
    //projects.splice(id, 1);    
}

function editProject(id) {
    const dialEdit = document.createElement('dialog');
    dialEdit.id = `dial-proj-${id}`;
    document.body.appendChild(dialEdit);
    dialEdit.showModal();
    dialEdit.innerHTML += [
        '<form action="#"><br>',                
        '<label for="epttitle">',
        'Title:',
        '</label>',
        '<input type="text" name="epttitle" id="epttitle"><br>',
        '<br><br>',
        '<center><button type="submit" class="submit" id=', id, '>',
        'Edit task',
        '</button>',
        '<button class="cancel">',
        'Cancel',
        '</button></center>',
        '</form>'
    ].join(''); 

    document.querySelector('#epttitle').value = projects[id].title;

    document.getElementById(id).addEventListener('click', () => {
        projects[id].title = document.querySelector('#epttitle').value;
        displayProjects();
        dialEdit.close();
        document.getElementById(`dial-proj-${id}`).remove();
    });

    document.querySelector('.cancel').addEventListener('click', () => {
        dialEdit.close();
        document.getElementById(`dial-proj-${id}`).remove();
    });
}

export { addProject, removeProject, editProject }