import {
  Controller,
  Get,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('API_GATEWAY_SERVICE') private readonly client: ClientKafka,
  ) {}

  onModuleInit() {
    ['user.created'].forEach((key) => this.client.subscribeToResponseOf(key));
  }

  onModuleDestroy() {
    this.client.close();
  }

  @Get('kafka-test')
  async kafkaTest() {
    return this.client.emit('user.created', {
      foo: 'bar',
      data: new Date().toString(),
    });
  }

  @Get('kafka-test-response')
  async kafkaTestResponse() {
    return this.client.send('user.created', {
      foo: 'bar',
      data: new Date().toString(),
    });
  }
}
