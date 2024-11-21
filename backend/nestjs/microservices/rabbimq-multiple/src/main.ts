import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microserviceAOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://127.0.0.1:5672'],
      queue: 'queue_a',
      queueOptions: {
        durable: false,
      },
    },
  };

  const microserviceBOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://127.0.0.1:5672'],
      queue: 'queue_b',
      queueOptions: {
        durable: false,
      },
    },
  };

  const microserviceA = await NestFactory.createMicroservice(
    AppModule,
    microserviceAOptions,
  );
  await microserviceA.listen();
  console.log('Microservice A is listening on queue_a');

  const microserviceB = await NestFactory.createMicroservice(
    AppModule,
    microserviceBOptions,
  );
  await microserviceB.listen();
  console.log('Microservice B is listening on queue_b');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
