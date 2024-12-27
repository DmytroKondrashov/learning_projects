const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { KafkaClient, Producer, Consumer, Admin } = require("kafka-node");

const app = express();
app.use(bodyParser.json());

const kafkaClient = new KafkaClient({ kafkaHost: "localhost:9092" });

const admin = new Admin(kafkaClient);
admin.createTopics(
  [
    { topic: 'user-topic', partitions: 1, replicationFactor: 1 },
    { topic: 'response-topic', partitions: 1, replicationFactor: 1 }
  ],
  (err, result) => {
    if (err) {
      console.error('Error creating topics:', err);
    } else {
      console.log('Topics created or already exist:', result);
    }
  }
);

const producer = new Producer(kafkaClient);

producer.on("ready", () => {
  console.log("Kafka producer is ready");
});

producer.on("error", (err) => {
  console.error("Kafka producer error:", err);
});

const responseConsumer = new Consumer(
  kafkaClient,
  [{ topic: "response-topic", partition: 0 }],
  { autoCommit: true }
)

responseConsumer.on("message", (message) => {
  console.log("Received message from Kafka:", message.value);
})

app.post("/publish", (req, res) => {
  const { topic, message } = req.body;

  const payload = [
    { topic, messages: JSON.stringify(message), partition: 0 }
  ]

  producer.send(payload, (err, data) => {
    if (err) {
      res.status(500).send("Error publishing message to Kafka");
    } else {
      res.status(200).send("Message published to Kafka");
    }
  })
})

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
