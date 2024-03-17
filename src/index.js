import './style.css';
import { createHeader } from './header';
import { createSidebar } from './sidebar';
import { createMainContent, tasks } from './currenttasks';
import { addTask } from './addtask';

createHeader();
createSidebar();
createMainContent();

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.add-task');
const closeButton = document.querySelector('.close');

showButton.addEventListener('click', () => {
  dialog.showModal();
  //addTask();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

addEventListener('submit', addTask);

console.log(tasks)

/* function addBook(event) {
    event.preventDefault();

    const newBook = new Book({
        title: document.querySelector('#title').value, 
        author: document.querySelector('#author').value, 
        genre: document.querySelector('#genre').value,  
        numberOfPages: document.querySelector('#pages').value, 
        isRead: document.querySelector('#isread').checked, 
    });
    myLibrary.push(newBook);
    dialog.close();
} */