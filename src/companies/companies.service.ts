import { Injectable } from "@nestjs/common";
import { Company } from "./interfaces/company.interface";

@Injectable()
export class CompaniesService {
  private readonly companies: Company[] = [
    {
      "id": 10,
      "name": "mammal",
      "color": "red",
      "state": "USA"
    }
  ];

  findAll(): Company[] {
    return this.companies;
  }

  findById(id: number): Company | boolean {
    return this.companies.find(company => company.id === id) || false;
  }

  create(company: Company) {
    this.companies.push(company);
    return this.companies;
  }

  update(newCompany: Company): Company[] | boolean {
    console.log(newCompany);
    const objIndex = this.companies.findIndex(company => company.id === newCompany.id);
    if (objIndex > -1) {
      this.companies[objIndex] = newCompany;
      return this.companies;
    }
    return false;
  }

  delete(id: number): Company[] | boolean {
    const index = this.companies.findIndex(company => company.id === id);
    if (index > -1) {
      this.companies.splice(index, 1);
      return this.companies;
    }
    return false;
  }
}



