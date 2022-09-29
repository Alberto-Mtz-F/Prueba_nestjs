import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Este es un mensaje de prueba al igual que el proyecto';
  }
}
