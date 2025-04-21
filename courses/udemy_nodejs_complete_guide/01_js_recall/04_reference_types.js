const person = {
  name: "John",
  age: 20,
  isStudent: true,
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

const hobbies = ["reading", "traveling", "coding"];

// no error because array is a reference type
hobbies.push("cooking");

console.log(hobbies);
