import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Integrantes: Orvin Reid de la hoz';
   
  }
 
}
