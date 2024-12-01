import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
  ) {}

  @Get('publish')
  async publishMessage() {
    const payload = { message: 'Hello from Publisher!' };
    await this.kafkaClient.emit('test-topic', payload).toPromise();
    return 'Message published!';
  }
}
