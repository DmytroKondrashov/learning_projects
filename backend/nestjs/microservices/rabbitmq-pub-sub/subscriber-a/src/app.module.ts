import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriberController } from './subscriber/subscriber.controller';

@Module({
  imports: [],
  controllers: [AppController, SubscriberController],
  providers: [AppService],
})
export class AppModule {}
