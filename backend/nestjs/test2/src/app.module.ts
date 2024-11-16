import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { CacsheModule } from './cacshe/cacshe.module';

@Module({
  imports: [CacheModule.register(), CacsheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
