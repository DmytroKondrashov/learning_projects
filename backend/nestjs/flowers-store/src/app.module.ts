import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App1Controller } from './app-1/app-1.controller';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [FlowersModule],
  controllers: [AppController, App1Controller],
  providers: [AppService],
})
export class AppModule {}
