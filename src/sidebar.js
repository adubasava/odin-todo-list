import { addButton, addDiv, addHeader, addImage, addSpan } from './pageload';

const target = document.querySelector('.sidebar');

function createSidebar() {
    addDiv('', 'title', 'title', target);  
    addHeader('Your projects', 'h4', document.querySelector('.title'));
    addButton('Add project', 'add-project', 'add-project', document.querySelector('.title'));

    addDiv('', 'projects', 'projects', target);  
    addButton('Personal', 'project', 'personal', document.querySelector('.projects'));
    addButton('Work', 'project', 'work', document.querySelector('.projects'));
}

export { createSidebar }