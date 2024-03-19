import { ToDo } from './todoClasses';
import { displayTasks, sortByProject } from './displaytasks';
import { allTasks, allProjects, saveTaskToLocalStorage, retreiveFromLocalStorage } from './managelocalstorage';

function addTask() {

    const dialog = document.createElement('dialog');
    dialog.id = 'dialogadd';
    document.body.appendChild(dialog);
    dialog.showModal();
        
    dialog.innerHTML += [
        '<center><button class="close">',
        'X',
        '</button></center>',
        '<h3>',
        'Add task',
        '<h3>',
        '<form action="#"><br>',                
        '<label for="ttitle">',
        'Title:',
        '</label>',
        '<input type="text" name="ttitle" id="ttitle"><br>',
        '<label for="description">',
        'Description:',
        '</label>',
        '<input type="text" name="description" id="description"><br>',
        '<label for="dueDate">',
        'Due date:',
        '</label>',
        '<input type="date" name="dueDate" id="dueDate"><br>',
        '<label for="priority">',
        'Priority:',
        '</label>',
        '<select name="priority" id="priority">',
        '<option value="high" selected>',
        'High',
        '</option>',
        '<option value="medium">',
        'Medium',
        '</option>',
        '<option value="low">',
        'Low',
        '</option></select><br>',
        '<label for="tproject">',
        'Project:',
        '</label>',
        '<select name="tproject" id="tproject">',
        '<option disabled>',
        'Choose a project',
        '</option></select><br>',
        '<br><br>',
        '<center><button type="submit" class="submit">',
        'Add task',
        '</button></center>',
        '</form>'
    ].join('');    

    const dropdown = document.getElementById('tproject');
    for (let i = 0; i < allProjects.length; ++i) {        
        dropdown[dropdown.length] = new Option(allProjects[i].title, allProjects[i].title);
    }

    addEventListener('submit', (event) => {
        event.preventDefault();
    
        const newTask = new ToDo({
            title: document.querySelector('#ttitle').value, 
            description: document.querySelector('#description').value, 
            dueDate: document.querySelector('#dueDate').value,  
            priority: document.querySelector('#priority').value, 
            status: false, 
            project: document.querySelector('#tproject').value,
        });

        saveTaskToLocalStorage(newTask);
        retreiveFromLocalStorage();

        if (document.querySelector('.title-tasks h2').textContent == 'All projects') {
            displayTasks();
        } else {
            sortByProject(document.querySelector('.title-tasks h2').textContent);
        }
        
        dialog.close();
        document.getElementById(`dialogadd`).remove();
    });

    document.querySelector('.close').addEventListener('click', () => {
        dialog.close();
        document.getElementById(`dialogadd`).remove();
    });
}

function removeTask(id) {
    document.getElementById(id).remove();
    localStorage.removeItem(id);
}

function editTask(id) {
    const dialEdit = document.createElement('dialog');
    dialEdit.id = `dial-${id}`;
    document.body.appendChild(dialEdit);
    dialEdit.showModal();
    dialEdit.innerHTML += [
        '<form action="#"><br>',                
        '<label for="ettitle">',
        'Title:',
        '</label>',
        '<input type="text" name="ettitle" id="ettitle"><br>',
        '<label for="edescription">',
        'Description:',
        '</label>',
        '<input type="text" name="edescription" id="edescription"><br>',
        '<label for="edueDate">',
        'Due date:',
        '</label>',
        '<input type="date" name="edueDate" id="edueDate"><br>',
        '<label for="epriority">',
        'Priority:',
        '</label>',
        '<select name="epriority" id="epriority">',
        '<option value="high" selected>',
        'High',
        '</option>',
        '<option value="medium">',
        'Medium',
        '</option>',
        '<option value="low">',
        'Low',
        '</option></select><br>',
        '<label for="etproject">',
        'Project:',
        '</label>',
        '<select name="etproject" id="etproject">',
        '<option disabled>',
        'Choose a project',
        '</option></select><br>',
        '<br><br>',
        '<center><button type="submit" class="submit" id=', id, '>',
        'Edit task',
        '</button>',
        '<button class="cancel">',
        'Cancel',
        '</button></center>',
        '</form>'
    ].join(''); 
    
    retreiveFromLocalStorage();
    const dropdown = document.getElementById('etproject');
    for (let i = 0; i < allProjects.length; ++i) {        
        dropdown[dropdown.length] = new Option(allProjects[i].title, allProjects[i].title);
    }   

    document.querySelector('#ettitle').value = allTasks[id].title;
    document.querySelector('#edescription').value = allTasks[id].description; 
    document.querySelector('#edueDate').value = allTasks[id].dueDate;   
    document.querySelector('#epriority').value = allTasks[id].priority; 
    document.querySelector('#etproject').value = allTasks[id].project;

    document.getElementById(id).addEventListener('click', () => {
        allTasks[id].title = document.querySelector('#ettitle').value;
        allTasks[id].description = document.querySelector('#edescription').value;
        allTasks[id].dueDate = document.querySelector('#edueDate').value;
        allTasks[id].priority = document.querySelector('#epriority').value;
        allTasks[id].project = document.querySelector('#etproject').value;

        localStorage.setItem(`task-${id}`, JSON.stringify(allTasks[id]));        
        sortByProject(allTasks[id].project);
        dialEdit.close();
        document.getElementById(`dial-${id}`).remove();
    });

    document.querySelector('.cancel').addEventListener('click', () => {
        dialEdit.close();
        document.getElementById(`dial-${id}`).remove();
    });
}

export { addTask, removeTask, editTask }