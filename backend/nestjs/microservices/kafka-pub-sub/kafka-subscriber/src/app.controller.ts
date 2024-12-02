import { Controller, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
  kafka = new Kafka({
    clientId: 'kafka-subscriber',
    brokers: ['127.0.0.1:9092'],
  });
  private readonly consumer = this.kafka.consumer({ groupId: 'test-group' });

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topics: ['common-topic', 'kafka-subscriber-topic'],
      fromBeginning: false,
    });

    await this.consumer.run({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value}`);
      },
    });

    console.log('Kafka consumer initialized and listening...');
  }

  async onModuleDestroy() {
    await this.consumer.disconnect();
  }

  // This will not work!
  // @MessagePattern('test-topic')
  // handleMessage(@Payload() message: any) {
  //   console.log(message);
  // }
}
