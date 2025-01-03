import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecuredModule } from './secured/secured.module';

@Module({
  imports: [SecuredModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
