import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://127.0.0.1:5672'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
