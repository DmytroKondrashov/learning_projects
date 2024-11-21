import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ServiceAService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'service_b_queue',
        // queueOptions: {
        //   durable: false,
        // },
      },
    });
  }

  sendMessage() {
    return this.client.send(
      { cmd: 'message' },
      { data: 'Hello from ServiceA' },
    );
  }
}
