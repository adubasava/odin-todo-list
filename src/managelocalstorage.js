import { ToDo, Project } from './todoClasses';

let allProjects = [];
let allTasks = [];

function saveProjectToLocalStorage(project) {
    localStorage.setItem(`project-${allProjects.length}`, JSON.stringify(project));
}

function saveTaskToLocalStorage(task) {
    localStorage.setItem(`task-${allTasks.length}`, JSON.stringify(task));
}

function retreiveFromLocalStorage() {  
    allProjects = [];
    allTasks = [];
    let projectCount = 0;
    let taskCount = 0;
    for (let i = 0, j = localStorage.length; i < j; i++) { 
        if (localStorage.key(i)[0] == 'p') {
            allProjects.push(JSON.parse(localStorage.getItem([`project-${projectCount}`])));
            projectCount++;
        } else if (localStorage.key(i)[0] == 't') {
            allTasks.push(JSON.parse(localStorage.getItem([`task-${taskCount}`])));
            taskCount++;
        }        
    }
    return allProjects, allTasks;
}

function saveDefault() {
    const defaultProject = new Project('Default project');
    localStorage.setItem(`project-0`, JSON.stringify(defaultProject));

    const defaultProject2 = new Project('Default project 2');
    localStorage.setItem(`project-1`, JSON.stringify(defaultProject2));   
    
    const defaultTask = new ToDo({title: 'High priority task', description: 'Get started here', dueDate: '2024-03-24', priority: 'high', status: false, project: defaultProject.title});
    localStorage.setItem(`task-0`, JSON.stringify(defaultTask)); 

    const defaultTask2 = new ToDo({title: 'Medium priority task', description: 'Get started here 2', dueDate: '2024-03-24', priority: 'medium', status: false, project: defaultProject2.title});
    localStorage.setItem(`task-1`, JSON.stringify(defaultTask2)); 
    
    const defaultTask3 = new ToDo({title: 'Low priority task', description: 'Get started here 3', dueDate: '2024-03-24', priority: 'low', status: false, project: defaultProject2.title});
    localStorage.setItem(`task-2`, JSON.stringify(defaultTask3)); 
}

export { retreiveFromLocalStorage, allProjects, allTasks, saveDefault, saveProjectToLocalStorage, saveTaskToLocalStorage }