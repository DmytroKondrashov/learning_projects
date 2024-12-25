import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('MICROSERVICE_SERVICE') private readonly client: ClientKafka,
  ) {}

  @EventPattern('kafka.test')
  async handleKafkaTest(data: any) {
    console.log(data);
    await this.client.emit('kafka.response', { foo: 'bar' });
  }
}
