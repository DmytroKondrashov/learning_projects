import { Controller, Get } from '@nestjs/common';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get('publish')
  publishMessage() {
    this.publisherService.publishMessage();
    return { message: 'Message published' };
  }
}
