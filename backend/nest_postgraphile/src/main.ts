import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostgraphileService } from './postgraphile/postgraphile.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const postgraphileService = app.get(PostgraphileService);
  await postgraphileService.onModuleInit();
  app.use(postgraphileService.postgraphileMiddleware);
  await app.listen(3000);
}
bootstrap();
