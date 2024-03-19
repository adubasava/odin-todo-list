import './style.css';
import { createHeader } from './header';
import { createSidebar } from './sidebar';
import { createMainContent } from './maincontent';
import { addTask } from './handletasks';
import { addProject } from './handleprojects';

createHeader();
createSidebar();
createMainContent();

document.querySelector('.add-task').addEventListener('click', addTask);
document.querySelector('.add-project').addEventListener('click', addProject);