import { Module } from '@nestjs/common';
import { ServiceAService } from './service-a.service';
import { ServiceAController } from './service-a.controller';

@Module({
  providers: [ServiceAService],
  controllers: [ServiceAController]
})
export class ServiceAModule {}
