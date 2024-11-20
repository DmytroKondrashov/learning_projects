import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservicesOptions: MicroserviceOptions = {
    transport: Transport.REDIS,
    options: { host: 'localhost', port: 6379 },
  };

  app.connectMicroservice(microservicesOptions);
  await app.startAllMicroservices();

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Service A is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
