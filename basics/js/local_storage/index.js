// ============================== BASIC USAGE ==============================
const myNumber = 43;

localStorage.setItem('number', myNumber);
// will return 43, but it will be a string
console.log(localStorage.getItem('number'));
localStorage.removeItem('number')
localStorage.clear();

// ============================== PRACTICAL IMPLEMENTATION ==============================
const myObject = {
  name: 'Alex',
  age: 25,
}

// We need to use JSON.stringify to store an object, because storage only supports strings
localStorage.setItem('person', JSON.stringify(myObject));

// To get an object back, we need to use JSON.parse
const parsedObject = JSON.parse(localStorage.getItem('person'));
// This will not work
parsedObject.age = 100
console.log(parsedObject);