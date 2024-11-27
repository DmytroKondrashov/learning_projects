// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { Transport } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.RMQ,
//     options: {
//       urls: [process.env.RABBITMQ_URL],
//       queue: 'pubsub_queue',
//       queueOptions: {
//         durable: false,
//       },
//     },
//   });
//   console.log('Publisher microservice is running');
//   await app.listen();
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microserviceAOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'pubsub_queue',
      queueOptions: {
        durable: false,
      },
    },
  };

  const publisherMicroservice = await NestFactory.createMicroservice(
    AppModule,
    microserviceAOptions,
  );
  console.log('Preparing publisher microservice');
  await publisherMicroservice.listen();
  console.log('publisher Microservice is listening on pubsub_queue');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
