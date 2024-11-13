import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { LazyModule } from 'src/lazy/lazy.module';

const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV === 'development' ? 'devConfig' : 'prodConfig';
  },
};

@Module({
  imports: [ConfigModule.register({ folder: './config' }), LazyModule],
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
