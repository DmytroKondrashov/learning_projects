import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostgraphileService } from './postgraphile/postgraphile.service';
import postgraphile from 'postgraphile';
import loginPlugin from './plugins/loginPlugin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const postgraphileService = app.get(PostgraphileService);
  await postgraphileService.onModuleInit();
  app.use(postgraphileService.postgraphileMiddleware);
  app.use(
    postgraphile(
      'postgresql://postgres:root@127.0.0.1:5432/nest_postgraphile',
      'public',
      {
        appendPlugins: [loginPlugin],
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
      },
    ),
  );
  await app.listen(3000);
}
bootstrap();
