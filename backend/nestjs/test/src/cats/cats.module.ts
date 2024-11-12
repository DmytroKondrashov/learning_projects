import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  // This is actually a shorthand for associating the token CatsService with the class CatsService:
  // {
  //   provide: CatsService,
  //   useClass: CatsService,
  // },
  providers: [CatsService],
})
export class CatsModule {}
