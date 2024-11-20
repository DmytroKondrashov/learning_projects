import { Injectable } from '@nestjs/common';
import { ServiceBClient } from '../service-b/client';

@Injectable()
export class ServiceAService {
  private serviceBClient: ServiceBClient;

  constructor() {
    this.serviceBClient = new ServiceBClient();
  }

  async sendMessageToServiceB() {
    const response = await this.serviceBClient.sendMessage(
      { cmd: 'message' },
      { data: 'Hello from ServiceA' },
    );
    return response;
  }
}
