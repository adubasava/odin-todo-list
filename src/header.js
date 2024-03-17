import { addDiv, addHeader, addImage, addSpan } from './pageload';

const target = document.querySelector('.header');
const user = 'Sherlock Holmes'

function createHeader() {    
    addDiv(`Welcome, `, 'welcome', 'welcome', target);
    addSpan(`${user}`, 'user', document.querySelector('.welcome'));
    addSpan(`!`, 'default', document.querySelector('.welcome'));
    addHeader('To-Do List', 'h1', target);
}

export { createHeader }