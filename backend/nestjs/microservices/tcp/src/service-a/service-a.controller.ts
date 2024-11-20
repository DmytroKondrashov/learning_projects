import { Controller, Get } from '@nestjs/common';
import { ServiceAService } from './service-a.service';

@Controller('service-a')
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @Get('send-message')
  async sendMessage() {
    const response = await this.serviceAService.sendMessageToServiceB();
    return response;
  }
}
