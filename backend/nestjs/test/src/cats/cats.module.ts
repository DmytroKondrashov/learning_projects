import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV === 'development' ? 'devConfig' : 'prodConfig';
  },
};

@Module({
  controllers: [CatsController],
  // This is actually a shorthand for associating the token CatsService with the class CatsService:
  // {
  //   provide: CatsService,
  //   useClass: CatsService,
  // },

  // A provider can supply any value, including a primitive, an object, or a function.
  providers: [CatsService, configFactory],
})
export class CatsModule {}
