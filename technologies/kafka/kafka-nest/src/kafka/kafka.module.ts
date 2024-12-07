import { Module } from '@nestjs/common';
import { ProducerService } from './prodcer.service';
import { ConsumerService } from './consumer.service';

@Module({
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
