import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherService } from './publisher/publisher.service';
import { PublisherController } from './publisher/publisher.controller';

@Module({
  imports: [],
  controllers: [AppController, PublisherController],
  providers: [AppService, PublisherService],
})
export class AppModule {}
