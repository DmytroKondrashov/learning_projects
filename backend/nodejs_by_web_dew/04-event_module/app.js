// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('some_event', (args) => {
//   const { name, age } = args;
//   console.log(`Name: ${name}, Age: ${age}`);
// })

// emitter.emit('some_event', {
//   name: 'John',
//   age: 20
// });

const Logger = require('./log');
const logger = new Logger();

logger.on('some_event', (args) => {
  const { id, text } = args;
  console.log(`ID: ${id}, Text: ${text}`);
})

logger.log('Hello world!');
