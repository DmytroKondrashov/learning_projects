import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can use guard globally
  // app.useGlobalGuards(new RolesGuard());
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
