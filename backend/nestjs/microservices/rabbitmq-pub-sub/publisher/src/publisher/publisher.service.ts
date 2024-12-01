import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class PublisherService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'pubsub_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  publishMessage() {
    return this.client.emit('pubsub_queue', {
      message: 'Hello from Publisher!',
    });
  }
}
