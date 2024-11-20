import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

export class ServiceBClient {
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
}
