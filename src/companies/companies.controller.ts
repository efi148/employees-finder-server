import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { Company } from "./interfaces/company.interface";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Controller("companies")
export class CompaniesController {

  constructor(private companiesService: CompaniesService) {
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(":id")
  findById(@Param("id", ParseIntPipe) id: number): Company | boolean {
    return this.companiesService.findById(id);
  }

  @Post()
  async createNewCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company[]> {
    return this.companiesService.create(createCompanyDto);
  }

  @Put()
  editCompany(@Body() company: Company): Company[] | boolean {
    return this.companiesService.update(company);
  }

  @Delete(":id")
  deleteCompany(@Param("id", ParseIntPipe) id: number): Company[] | boolean {
    return this.companiesService.delete(id);
  }
}
