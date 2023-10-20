import { IEmployee } from "./IEmployee.js";

export class Frontend implements IEmployee{
    private name:string;
    private currentProject: string = 'Not assigned to project';

    constructor(name: string, currentProject?: string) {
        this.name = name;
        if(currentProject)
            this.currentProject = currentProject;
    }

    public setCurrentProject(currentProject: string): void {
        this.currentProject = currentProject;
    }

    public getName(): string {
        return this.name;
    }

    public getCurrentProject(): string {
        return this.currentProject;
    }
}

export class Backend implements IEmployee{
    private name:string;
    private currentProject: string = 'Not assigned to project';

    constructor(name: string, currentProject?: string) {
        this.name = name;
        if(currentProject)
            this.currentProject = currentProject;
    }

    public setCurrentProject(currentProject: string): void {
        this.currentProject = currentProject;
    }

    public getName(): string {
        return this.name;
    }

    public getCurrentProject(): string {
        return this.currentProject;
    }
}