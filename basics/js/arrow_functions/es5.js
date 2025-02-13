// This function can be called BEFORE it is defined
function sum(a, b) {
  return a + b;
}

// This function can NOT be called BEFORE it is defined
var sum = function(a, b) {
  return a + b;
}

function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}

function square(number) {
  return number * number;
}

var numbers = [1, 2, 3, 4, 5];
numbers.sort(sortAbc);

function sortAbc(a, b) {
  return a - b;
}

var person = {
  name: 'John',
  age: 30,
  languages: ['English', 'French', 'Spanish'],
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
    this.languages.forEach(function(language) {
      // this.name is undefined, because this is the global object window
      console.log(`${this.name} knows ${language}`);
    });
  }
}

