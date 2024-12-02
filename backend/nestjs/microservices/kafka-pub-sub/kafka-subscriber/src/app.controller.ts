import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('test-topic')
  handleEvent(data: any) {
    console.log('Received message:', data);
  }
}
