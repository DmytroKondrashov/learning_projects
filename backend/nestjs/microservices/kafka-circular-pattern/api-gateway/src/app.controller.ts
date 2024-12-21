import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('API_GATEWAY_SERVICE') private readonly client: ClientKafka,
  ) {}

  @Post('create-user')
  async createUser(@Body() userData: any) {
    // Simulate user creation logic
    const userId = '12345'; // Replace with actual user ID
    const message = {
      userId,
      username: userData.username,
      email: userData.email,
    };

    // Send message to user.created topic
    this.client.emit('user.created', message);

    return { message: 'User creation message sent', userId };
  }
}
