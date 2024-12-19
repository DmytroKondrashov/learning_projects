import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('API_GATEWAY_SERVICE') private readonly client: ClientKafka,
  ) {}

  @EventPattern('user.created.init')
  async handleUserCreated(@Payload() message: any) {
    console.log('User created: ', message);
    this.client.emit('user.created.success', {
      userId: message.userId,
      status: 'success',
    });
  }
}
