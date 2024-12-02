import { Controller, Get, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
  kafka = new Kafka({ clientId: 'service-a', brokers: ['127.0.0.1:9092'] });
  producer: Producer;

  async onModuleInit() {
    this.producer = this.kafka.producer();
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  @Get('publish')
  async publishMessage() {
    await this.producer.send({
      topic: 'test-topic',
      messages: [
        {
          value: JSON.stringify({
            cmd: 'test-topic',
            data: 'Pub-Sub is working!',
          }),
        },
      ],
    });
    return 'Message sent';
  }
}
