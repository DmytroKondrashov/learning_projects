import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller('service-a')
export class ServiceAController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'queue_b',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  @MessagePattern({ cmd: 'message' })
  handleMessage(@Payload() message: any) {
    return `ServiceA received message: ${message.data}`;
  }

  @Get('send')
  sendMessage() {
    console.log('sendMessage');
    return this.client.send(
      { cmd: 'message' },
      { data: 'Hello from ServiceA' },
    );
  }
}
