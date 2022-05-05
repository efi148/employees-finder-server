import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { Employee } from "./interfaces/employee.interface";
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Controller("employees")
export class EmployeesController {

  constructor(private employeesService: EmployeesService) {
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(":id")
  findById(@Param("id", ParseIntPipe) id: number): Employee | boolean {
    return this.employeesService.findById(id);
  }

  @Post()
  async createNewEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee[]> {
    return this.employeesService.create(createEmployeeDto);
  }

  @Put()
  editEmployee(@Body() employee: Employee): Employee[] | boolean {
    return this.employeesService.update(employee);
  }

  @Delete(":id")
  deleteEmployee(@Param("id", ParseIntPipe) id: number): Employee[] | boolean {
    return this.employeesService.delete(id);
  }
}