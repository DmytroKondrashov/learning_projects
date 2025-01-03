import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class SecuredController {
  @UseGuards(JwtAuthGuard)
  @MessagePattern('get_secured_data')
  async getSecuredData(data: { token: string }) {
    return { message: 'This is secured data', token: data.token };
  }
}
