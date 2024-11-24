import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('subscriber')
export class SubscriberController {
  @EventPattern('pubsub_queue')
  handleMessage(payload: any) {
    console.log('Received message:', payload);
  }
}
