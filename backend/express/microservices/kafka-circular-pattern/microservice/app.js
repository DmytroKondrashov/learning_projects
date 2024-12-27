const express = require("express");
const bodyParser = require("body-parser");
const { KafkaClient, Consumer, Producer } = require("kafka-node")

const app = express();
app.use(bodyParser.json())

const kafkaClient = new KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(kafkaClient, [{ topic: "response-topic", partition: 0 }], { autoCommit: true });
const producer = new Producer(kafkaClient);

producer.on("ready", () => {
  console.log("Kafka producer is ready");
})

producer.on("error", (error) => {
  console.error("Kafka producer error:", error);
})

consumer.on("message", (message) => {
  const receivedData = JSON.parse(message.value);
  console.log('Message received:', receivedData);

  const response = {
    status: "success",
    userId: receivedData.userId,
    message: "User processed successfully!"
  }

  const payload = [
    { topic: "response-topic", messages: JSON.stringify(response), partition: 0 }
  ]

  producer.send(payload, (err) => {
    if (err) {
      console.error('Error sending response:', err);
    } else {
      console.log('Response sent to API Gateway:', response);
    }
  })
})

app.listen(3001, () => {
  console.log("Microservice running on port 3001");
})

