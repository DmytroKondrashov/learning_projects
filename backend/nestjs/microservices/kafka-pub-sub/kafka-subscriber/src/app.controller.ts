import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('test-topic')
  handleEvent(data: any) {
    console.log('Received message:', data.value);
  }
}
