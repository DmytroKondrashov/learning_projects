import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ServiceAService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'localhost', port: 8877 },
    });
  }

  sendMessage(pattern: any, data: any) {
    return this.client.send(pattern, data);
  }

  async sendMessageToServiceB() {
    const response = await this.sendMessage(
      { cmd: 'message' },
      { data: 'Hello from ServiceA' },
    );
    return response;
  }
}
