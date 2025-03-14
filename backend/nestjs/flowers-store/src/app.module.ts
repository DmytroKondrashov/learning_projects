import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './middleware/middleware';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
@Module({
  imports: [
    FlowersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MicroserviceModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
