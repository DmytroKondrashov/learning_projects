import { Global, Module } from '@nestjs/common';
// import { AppDataSource } from './database.providers';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import dataSource from './data.source';
@Global()
@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'postgres',
  //     database: 'nest_postgraphile',
  //   }),
  // ],
  // // exports: [...AppDataSource],
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          await dataSource.initialize();
          console.log('Database connected successfully');
          return dataSource;
        } catch (error) {
          console.log('Error connecting to database');
          throw error;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class DatabaseModule {}
