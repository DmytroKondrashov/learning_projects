### Kafka Pub-Sub

1. Start publisher microservice:
```bash
cd backend/nestjs/microservices/kafka-pub-sub/kafka-publisher
yarn start:dev
```

2. Start subscriber 1 microservice:
```bash
cd backend/nestjs/microservices/kafka-pub-sub/kafka-subscriber
yarn start:dev
```

3. Start subscriber 2 microservice:
```bash
cd backend/nestjs/microservices/kafka-pub-sub/kafka-subscriber-2
yarn start:dev
```

4. Publish message to common topic (both subscribers will receive it):
```bash
curl http://localhost:3001/publish-message?topic=common-topic
```

5. Publish message to subscriber 1 topic (only subscriber 1 will receive it):
```bash
curl http://localhost:3001/publish-message?topic=kafka-subscriber-topic
```

6. Publish message to subscriber 2 topic (only subscriber 2 will receive it):
```bash
curl http://localhost:3002/publish-message?topic=kafka-subscriber-2-topic
```
