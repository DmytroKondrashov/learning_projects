import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microserviceAOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['127.0.0.1:9092'],
      },
      consumer: {
        groupId: 'service-a-consumer',
      },
    },
  };

  // Microservice B configuration
  const microserviceBOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['127.0.0.1:9092'],
      },
      consumer: {
        groupId: 'service-b-consumer',
      },
    },
  };

  const microserviceA =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microserviceAOptions,
    );
  await microserviceA.listen();
  console.log('Microservice A is listening on topic_a');

  const microserviceB =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microserviceBOptions,
    );
  await microserviceB.listen();
  console.log('Microservice B is listening on topic_b');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
