import { Module } from '@nestjs/common';
import { ServiceBController } from './service-b.controller';

@Module({
  controllers: [ServiceBController],
  providers: [],
})
export class ServiceBModule {}
