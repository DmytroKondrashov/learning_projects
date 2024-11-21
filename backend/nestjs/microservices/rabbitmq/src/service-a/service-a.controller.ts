import { Controller, Get } from '@nestjs/common';
import { ServiceAService } from './service-a.service';

@Controller('service-a')
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @Get('message')
  async sendMessage() {
    return this.serviceAService.sendMessage();
  }
}
