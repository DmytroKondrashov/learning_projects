import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller('service-b')
export class ServiceBController {
  // // eslint-disable-next-line @typescript-eslint/no-require-imports
  // amqp = require('amqplib/callback_api');
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'queue_a',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  @MessagePattern({ cmd: 'message' })
  handleMessage(@Payload() message: any) {
    return `ServiceB received message: ${message.data}`;
  }

  @Get('send')
  sendMessage() {
    // Also possible, but way too much code
    // this.amqp.connect('amqp://127.0.0.1:5672', (error0, connection) => {
    //   if (error0) {
    //     throw error0;
    //   }
    //   connection.createChannel((error1, channel) => {
    //     if (error1) {
    //       throw error1;
    //     }
    //     const queue = 'queue_a';
    //     const msg = JSON.stringify({
    //       cmd: 'message',
    //       data: 'Hello, ServiceA!',
    //     });

    //     channel.assertQueue(queue, {
    //       durable: false,
    //     });
    //     channel.sendToQueue(queue, Buffer.from(msg));
    //     console.log(' [x] Sent %s', msg);
    //   });
    //   setTimeout(() => {
    //     connection.close();
    //     process.exit(0);
    //   }, 500);
    // });

    console.log('sendMessage');
    return this.client.send(
      { cmd: 'message' },
      { data: 'Hello from ServiceB' },
    );
  }
}
