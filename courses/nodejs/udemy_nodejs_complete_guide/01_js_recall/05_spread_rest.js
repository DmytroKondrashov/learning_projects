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

// spread operator
const copiedArray = hobbies.slice();
const copiedArray2 = [...hobbies];

console.log(copiedArray);
console.log(copiedArray2);

const copiedPerson = {...person};

console.log(copiedPerson);


// rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5));


// destruction
const { name, age } = person;

console.log(name, age);



