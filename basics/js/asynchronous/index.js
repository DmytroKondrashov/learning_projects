// Will be executed after 1 second, the callback function will be sent to the event loop
window.setTimeout(() => {
    console.log('Hello');
}, 1000);

// Will be executed after 0 seconds, the callback function will be sent to the event loop
setTimeout(() => console.log('Test'), 0);

// Will be executed immediately
console.log('World');
