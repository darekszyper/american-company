export class Frontend {
    constructor(name, currentProject) {
        this.currentProject = 'Not assigned to project';
        this.name = name;
        if (currentProject)
            this.currentProject = currentProject;
    }
    setCurrentProject(currentProject) {
        this.currentProject = currentProject;
    }
    getName() {
        return this.name;
    }
    getCurrentProject() {
        return this.currentProject;
    }
}
export class Backend {
    constructor(name, currentProject) {
        this.currentProject = 'Not assigned to project';
        this.name = name;
        if (currentProject)
            this.currentProject = currentProject;
    }
    setCurrentProject(currentProject) {
        this.currentProject = currentProject;
    }
    getName() {
        return this.name;
    }
    getCurrentProject() {
        return this.currentProject;
    }
}
//# sourceMappingURL=Roles.js.map