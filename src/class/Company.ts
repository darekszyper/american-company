import { IEmployee } from "./IEmployee.js";

export class Company {
    private employees: IEmployee[] = [];

    public addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }

    public getProjectList(): string[] {
        return this.employees.map(e => e.getCurrentProject());
    }

    public getNameList(): string[] {
        return this.employees.map(e => e.getName());
    }
}