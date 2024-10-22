// const person = {
//   name: "Dmitry",
//   age: 30,
//   greet() {
//     console.log("Hi, I'm " + this.name);
//   },
// };

person = new Object({
  name: "Dmitry",
  age: 30,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello");
};

const lana = Object.create(person);
lana.name = "Lana";
