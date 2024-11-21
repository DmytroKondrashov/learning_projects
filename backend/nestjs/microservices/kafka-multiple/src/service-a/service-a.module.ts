import { Module } from '@nestjs/common';
import { ServiceAController } from './service-a.controller';

@Module({
  controllers: [ServiceAController]
})
export class ServiceAModule {}
