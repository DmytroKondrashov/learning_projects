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

for (hobby of hobbies) {
  console.log(hobby);
}

// will NOT change the original array
console.log(hobbies.map(hobby => hobby.toUpperCase()));

// will change the original array
hobbies.push("cooking");

console.log(hobbies);

