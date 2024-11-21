import { Controller, Get, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Kafka, Producer } from 'kafkajs';

@Controller('service-a')
export class ServiceAController implements OnModuleInit, OnModuleDestroy {
  kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092'],
  });

  producer: Producer;

  async onModuleInit() {
    this.producer = this.kafka.producer();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  @MessagePattern('message_a')
  handleMessage(@Payload() message: any): string {
    return `ServiceA received message: ${message.data}`;
  }

  @Get('send')
  async sendMessage() {
    await this.producer.connect();
    await this.producer.send({
      topic: 'topic_b',
      messages: [
        {
          value: JSON.stringify({
            cmd: 'message_b',
            data: 'Hello, ServiceB from ServiceA!',
          }),
        },
      ],
    });
  }
}
