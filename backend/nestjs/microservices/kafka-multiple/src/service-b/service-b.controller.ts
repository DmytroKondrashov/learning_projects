import { Controller, OnModuleInit, OnModuleDestroy, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Kafka, Producer } from 'kafkajs';

@Controller('service-b')
export class ServiceBController implements OnModuleInit, OnModuleDestroy {
  kafka = new Kafka({ clientId: 'service-b', brokers: ['127.0.0.1:9092'] });
  producer: Producer;

  async onModuleInit() {
    this.producer = this.kafka.producer();
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  @MessagePattern('topic_b')
  handleMessage(@Payload() message: any) {
    console.log(message);
  }

  @Get('send')
  async sendMessage() {
    await this.producer.send({
      topic: 'topic_a',
      messages: [
        {
          value: JSON.stringify({
            cmd: 'message_a',
            data: 'Hello, ServiceA from ServiceB!',
          }),
        },
      ],
    });
    return 'Message sent';
  }
}
