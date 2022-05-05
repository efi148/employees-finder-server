import { Injectable } from '@nestjs/common';
import { Employee } from "./interfaces/employee.interface";

@Injectable()
export class EmployeesService {
  private readonly employees: Employee[] = [
    {
      id: 10,
      name: "mammal",
      age: 15,
      companyID: 10
    }
  ];

  findAll(): Employee[] {
    return this.employees;
  }

  findById(id: number): Employee | boolean {
    return this.employees.find(employee => employee.id === id) || false;
  }

  create(employee: Employee) {
    this.employees.push(employee);
    return this.employees;
  }

  update(newEmployee: Employee): Employee[] | boolean {
    console.log(newEmployee);
    const objIndex = this.employees.findIndex(employee => employee.id === newEmployee.id);
    if (objIndex > -1) {
      this.employees[objIndex] = newEmployee;
      return this.employees;
    }
    return false;
  }

  delete(id: number): Employee[] | boolean {
    const index = this.employees.findIndex(employee => employee.id === id);
    if (index > -1) {
      this.employees.splice(index, 1);
      return this.employees;
    }
    return false;
  }
}
