const person = {
  name: "John",
  age: 20,
  isStudent: true,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  // arrow function will return undefined
  greet() {
    console.log('Hello' + this.name);
  }
};

console.log(person);
