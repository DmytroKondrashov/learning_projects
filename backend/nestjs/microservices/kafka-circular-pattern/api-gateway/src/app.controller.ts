import { Controller, Inject } from '@nestjs/common';
import {
  ClientKafka,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientKafka) {}

  @EventPattern('user.created')
  async handleCreatedUser(@Payload() message: any) {
    console.log('User created: ', message);
    this.client.emit('user.created.init', { userId: message.userId });
  }

  @MessagePattern('user.created.success')
  async handleCreatedUserSuccess(@Payload() message: any) {
    console.log('User created successfully: ', message);
  }
}
