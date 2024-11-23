import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://127.0.0.1:5672'],
      queue: 'pubsub_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
  console.log('Publisher microservice is running');
}
bootstrap();
