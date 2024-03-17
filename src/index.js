import './style.css';
import { createHeader } from './header';
import { createSidebar } from './sidebar';
import { createMainContent, tasks } from './currenttasks';
import { addTask } from './handletasks';

createHeader();
createSidebar();
createMainContent();

document.querySelector('.add-task').addEventListener('click', addTask);