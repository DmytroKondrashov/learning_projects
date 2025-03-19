import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

// Important! In order for tests to pass you need to comment out the AuthGuard in the Flowers controller

describe('FlowersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleMixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleMixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/flowers (GET)', async () => {
    return request(app.getHttpServer())
      .get('/flowers')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'Rose',
          color: 'Red',
          price: 10,
        },
      ]);
  });

  it('/flowers (POST)', async () => {
    return request(app.getHttpServer())
      .post('/flowers')
      .send({ name: 'Rose', color: 'Red', price: 10 })
      .expect(201)
      .expect({
        id: 1,
        name: 'Rose',
        color: 'Red',
        price: 10,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
