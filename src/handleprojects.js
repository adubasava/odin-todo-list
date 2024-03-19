import { Project } from './todoClasses';
import { displayProjects } from './sidebar';
import { saveProjectToLocalStorage, allTasks } from './managelocalstorage';

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
        saveProjectToLocalStorage(newProject);
        displayProjects();
        dialog.close();
        document.getElementById(`dialogaddproj`).remove();
    });

    document.querySelector('.close').addEventListener('click', () => {
        dialog.close();
        document.getElementById(`dialogaddproj`).remove();
    });
    //document.body.append(form);
}

function removeProject(id) {
    document.getElementById(id).remove();
    localStorage.removeItem(id);
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
    //document.body.append(form);
    let oldTitle = JSON.parse(localStorage.getItem([`project-${id}`])).title;
    document.querySelector('#epttitle').value = oldTitle;

    document.getElementById(id).addEventListener('click', () => {

        let newTitle = document.querySelector('#epttitle').value;        

        for (let i = 0, j = allTasks.length; i < j; i++) {
            if (allTasks[i].project == oldTitle) {
                allTasks[i].project = newTitle;
                localStorage.setItem(`task-${i}`, JSON.stringify(allTasks[i]));
            }
        }        
        
        localStorage.setItem(`project-${id}`, `{"title":"${newTitle}"}`);
        displayProjects();
        dialEdit.close();
        document.getElementById(`dial-proj-${id}`).remove();
    });

    document.querySelector('.cancel').addEventListener('click', (event) => {
        event.preventDefault;
        dialEdit.close();
        document.getElementById(`dial-proj-${id}`).remove();
    });
}

export { addProject, removeProject, editProject }