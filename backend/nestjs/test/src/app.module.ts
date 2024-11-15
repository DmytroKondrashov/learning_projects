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
// import { ConfigModule } from './config/config.module';
import { LazyModule } from './lazy/lazy.module';
import { ConfigModule } from '@nestjs/config';
import someConfig from '../config/some.config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Cat } from './cats/entites/cat.entity';

// When you want to provide a set of providers which should be available everywhere out-of-the-box - use @Global()
@Global()
@Module({
  imports: [
    CatsModule,
    // ConfigModule.register({ folder: './config' }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../config/development.env'],
      load: [someConfig],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        DATABASE_PORT: Joi.number().port().default(3000),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs_test',
      entities: [Cat],
      synchronize: true,
    }),
    LazyModule,
  ],
  // We can inject dependencies directly into the app module
  // controllers: [AppController, CatsController],
  // providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}

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
