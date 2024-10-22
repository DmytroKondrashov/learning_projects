const express = require('express');
const redis = require('redis');

const client = redis.createClient({
  host: 'redis',
  port: 6379,
});

const app = express();

app.get('/', (req, res) => {
  client.set('message', 'Hello World from Node.js and Redis!', (err, reply) => {
    if (err) throw err;
  });

  client.get('message', (err, reply) => {
    if (err) throw err;
    res.send(reply);
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
