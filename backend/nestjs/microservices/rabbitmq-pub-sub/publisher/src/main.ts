import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'pubsub_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  console.log('Publisher microservice is running');
  await app.listen();
}
bootstrap();
