import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';
import { ToDo } from './todo';
import { displayToDos } from './displayToDos';
import { tasks } from './currenttasks';

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
        '</option></select><br><br>',
        '<center><button type="submit" class="submit">',
        'Add task',
        '</button></center>',
        '</form>'
    ].join('');

    addEventListener('submit', (event) => {
        event.preventDefault();
    
        const newTask = new ToDo({
            title: document.querySelector('#ttitle').value, 
            description: document.querySelector('#description').value, 
            dueDate: document.querySelector('#dueDate').value,  
            priority: document.querySelector('#priority').value, 
            status: false, 
        });

        tasks.push(newTask);
        displayToDos();
        dialog.close();
        document.getElementById(`dialogadd`).remove();
    });

    document.querySelector('.close').addEventListener('click', () => {
        dialog.close();
        document.getElementById(`dialogadd`).remove();
    });
}

function removeTask(id) {
    // if to remove from DOM
    document.getElementById(id).remove();
    
    // if to remove from array:
    //tasks.splice(id, 1);    
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
        '</option></select><br><br>',
        '<center><button type="submit" class="submit" id=', id, '>',
        'Edit task',
        '</button>',
        '<button class="cancel">',
        'Cancel',
        '</button></center>',
        '</form>'
    ].join(''); 

    document.querySelector('#ettitle').value = tasks[id].title;
    document.querySelector('#edescription').value = tasks[id].description; 
    document.querySelector('#edueDate').value = tasks[id].dueDate;   
    document.querySelector('#epriority').value = tasks[id].priority; 

    document.getElementById(id).addEventListener('click', () => {
        tasks[id].title = document.querySelector('#ettitle').value;
        tasks[id].description = document.querySelector('#edescription').value;
        tasks[id].dueDate = document.querySelector('#edueDate').value;
        tasks[id].priority = document.querySelector('#epriority').value;
    });

    document.querySelector('.cancel').addEventListener('click', () => {
        dialEdit.close();
        document.getElementById(`dial-${id}`).remove();
    });
}

export { addTask, removeTask, editTask }