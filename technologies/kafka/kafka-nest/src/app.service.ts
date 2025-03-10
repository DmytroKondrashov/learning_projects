import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/prodcer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [{ value: 'Hello World!' }],
    });
    return 'Hello World!';
  }
}
