import { IsString, IsInt } from 'class-validator';
export class CreateCompanyDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  state: string;
}