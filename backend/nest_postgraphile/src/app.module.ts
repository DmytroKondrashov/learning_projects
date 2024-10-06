import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigService } from '@nestjs/config';
import { PostgraphileService } from './postgraphile/postgraphile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_postgraphile',
      synchronize: false,
      entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
      migrations: ['src/migrations/*{.ts,.js}'],
      retryAttempts: 10,
      retryDelay: 3000,
    }),
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, PostgraphileService],
})
export class AppModule {}
