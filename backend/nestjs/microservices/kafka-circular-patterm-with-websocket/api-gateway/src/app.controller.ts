import {
  Controller,
  Get,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('API_GATEWAY_SERVICE') private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    ['kafka.test'].forEach((key) => this.client.subscribeToResponseOf(key));
  }

  async onModuleDestroy() {
    this.client.close();
  }

  @Get('kafka-test')
  async kafkaTest() {
    return this.client.emit('test', { foo: 'bar' });
  }

  @EventPattern('kafka.response')
  async response(data: any) {
    console.log(data);
  }
}
