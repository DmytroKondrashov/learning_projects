import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('service-b')
export class ServiceBController {
  @MessagePattern({ cmd: 'message' })
  handleMessage(@Payload() message: any): string {
    console.log('handleMessage');
    return `Received message: ${message.data} by RabbitMQ`;
  }
}
