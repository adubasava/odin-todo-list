function addDiv(content, className, id, target) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    newDiv.id = id;
    const newContent = document.createTextNode(content);
    newDiv.appendChild(newContent);    
    target.appendChild(newDiv);
}

function addSpan(content, className, target) {
    const newSpan = document.createElement('span');
    newSpan.classList.add(className);
    const newContent = document.createTextNode(content);
    newSpan.appendChild(newContent);    
    target.appendChild(newSpan);
}

function addHeader(content, level, target) {
    const newHeading = document.createElement(level);
    const headingContent = document.createTextNode(content);
    newHeading.appendChild(headingContent);
    target.appendChild(newHeading);
}

function addImage(source, width, className, target) {
    const newImg = new Image();
    newImg.src = source;
    newImg.width = width;
    newImg.classList.add(className);
    target.appendChild(newImg);
}

function addButton(name, className, id, target) {
    const newButton = document.createElement('button');
    newButton.classList.add(className);
    newButton.id = id;
    const newName = document.createTextNode(name);
    newButton.appendChild(newName);    
    target.appendChild(newButton);
}

function addCheckbox(id, target) {    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;   
    target.appendChild(checkbox);
}

export { addDiv, addHeader, addImage, addSpan, addButton, addCheckbox };