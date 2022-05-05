import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  welcomePage(): string {
    return `<div>Welcome</div>`;
  }
}
