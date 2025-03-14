import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  handleMessage(message) {
    console.log('microservice message', message);
  }
}
