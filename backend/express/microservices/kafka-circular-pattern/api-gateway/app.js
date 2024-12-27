const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { KafkaClient, Producer } = require("kafka-node");

const app = express();
app.use(bodyParser.json());

const kafkaClient = new KafkaClient({ kafkaHost: "localhost:9092" });
const producer = new Producer(kafkaClient);

producer.on("ready", () => {
  console.log("Kafka producer is ready");
});

producer.on("error", (err) => {
  console.error("Kafka producer error:", err);
});

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
