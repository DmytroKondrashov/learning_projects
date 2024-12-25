import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('MICROSERVICE2_SERVICE') private readonly client: ClientKafka,
  ) {}

  @EventPattern('kafka.response')
  async handleKafkaTest(data: any) {
    console.log(data);
  }
}
