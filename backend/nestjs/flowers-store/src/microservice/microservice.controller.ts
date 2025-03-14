import { Controller } from '@nestjs/common';
import { MicroserviceService } from './microservice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @EventPattern('flowers-store')
  handleMessage(message) {
    this.microserviceService.handleMessage(message);
  }
}
