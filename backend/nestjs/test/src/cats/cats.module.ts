import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
// import { ConfigService } from '../config/config.service';
import { LazyModule } from '../lazy/lazy.module';
import { ConfigService } from '@nestjs/config';
import { Cat } from './entites/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV === 'development' ? 'devConfig' : 'prodConfig';
  },
};

@Module({
  // We can register the Config Module
  // imports: [ConfigModule.register({ folder: './config' }), LazyModule],
  imports: [LazyModule, TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  // This is actually a shorthand for associating the token CatsService with the class CatsService:
  // {
  //   provide: CatsService,
  //   useClass: CatsService,
  // },

  // A provider can supply any value, including a primitive, an object, or a function.
  providers: [CatsService, configFactory, ConfigService],
})
export class CatsModule {}
