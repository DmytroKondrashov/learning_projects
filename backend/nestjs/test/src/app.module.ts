import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { logger } from './middleware/functional.logger.middleware';

// When you want to provide a set of providers which should be available everywhere out-of-the-box - use @Global()
@Global()
@Module({
  imports: [CatsModule],
  // We can inject dependencies directly into the app module
  // controllers: [AppController, CatsController],
  // providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      // We can simply pass the controller
      // .forRoutes(CatsController)

      // We can also exclude some routes
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )

      // Or define the rotes (including wildcards)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}

// A module class can inject providers as well (e.g., for configuration purposes):
// export class CatsModule {
//   constructor(private catsService: CatsService) {}
// }
