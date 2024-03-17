import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';
import { ToDo } from './todo';
import { displayToDos } from './displayToDo';
import { tasks } from './currenttasks';

const dialog = document.querySelector('dialog');

function addTask(event) {
    console.log('dd')
    event.preventDefault();

    //addHeader('Add task', 'h3', dialog);
        /* dialog.innerHTML += [
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
    ].join('');     */

    //const newTask = new ToDo({title: 'XDDD', description: 'fffffffffffffffffffffff', dueDate: 'dffffffffdf', priority: 'low', status: false});
  

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
}

export { addTask }