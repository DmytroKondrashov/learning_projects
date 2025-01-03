import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Req,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AppController implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
    @Inject('SECURED_SERVICE') private readonly securedClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.authClient.subscribeToResponseOf('login');
    this.securedClient.subscribeToResponseOf('get_secured_data');
    await this.authClient.connect();
    await this.securedClient.connect();
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const pattern = 'login';
    const payload = { username: body.username, password: body.password };
    return this.authClient.send(pattern, payload).toPromise();
  }

  @UseGuards(JwtAuthGuard)
  @Get('secured')
  async getSecuredData(@Req() req) {
    const pattern = 'get_secured_data';
    const payload = { token: req.user.token };
    return this.securedClient.send(pattern, payload).toPromise();
  }
}
