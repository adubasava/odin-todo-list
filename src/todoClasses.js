﻿export class ToDo {
    constructor({title, description, dueDate, priority, status, project}) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project;
    }    
}

export class Project {
    constructor(title) {
        this.title = title;
    }
}