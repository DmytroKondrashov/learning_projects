const userName = "John";

const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

console.log(sayHello(userName));

module.exports = {userName, sayHello};