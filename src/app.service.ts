import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Se supone que cambia segun gurade porque estoy en modo desarrollador ';
  }
}
