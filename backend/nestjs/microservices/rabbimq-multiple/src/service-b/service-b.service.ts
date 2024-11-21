import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class ServiceBService {
  @MessagePattern({ cmd: 'message' })
  handleMessage(@Payload() message: any): string {
    return `ServiceB received message: ${message.data}`;
  }
}
