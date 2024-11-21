import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ServiceAService } from './service-a.service';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';

@Controller('service-a')
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @Get('message')
  @UseInterceptors(LoggerInterceptor)
  async sendMessage() {
    return this.serviceAService.sendMessage();
  }
}
