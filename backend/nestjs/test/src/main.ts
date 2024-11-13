import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can use guard globally
  // app.useGlobalGuards(new RolesGuard());
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
