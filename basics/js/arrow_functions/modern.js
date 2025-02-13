const sum = (a, b) => a + b;
const result = sum(1, 2);

const sum2 = (a, b) => {
  return a + b;
};

// Default parameters
const sum3 = (a = 0, b = 0) => a + b;

// Single parameter (no need for parentheses)
const square = num => num * num;

// No parameters
const random = () => Math.random();

const numbers = [1, 2, 3, 4, 5];
numbers.sort((a, b) => a - b);

const person = {
  name: 'John',
  age: 30,
  languages: ['English', 'French', 'Spanish'],
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
    this.languages.forEach(language => {
      // this context will be the current object
      console.log(`${this.name} knows ${language}`);
    });
  }
}

