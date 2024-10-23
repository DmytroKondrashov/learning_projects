const people = [
  { name: 'Max', age: 25, budget: 40000 },
  { name: 'John', age: 30, budget: 35000 },
  { name: 'Jane', age: 28, budget: 30000 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person);
// }

// ForEach
// people.forEach(function(person, index, pArray) {
//   console.log(person);
//   console.log(index);
//   console.log(pArray);
// })

// Map
// Crucial: returns a new array, so you need to RETURN something on each iteration
const newPeople = people.map(person => {return person.age * 3})

// Filter
// Crucial: returns a new array, so you need to RETURN something on each iteration
const adults = people.filter(person => person.age >= 18)

// Reduce
// Crucial: returns a new array, so you need to RETURN something on each iteration
const amount = people.reduce((total, person) => total + person.budget, 0)

// Find
// Crucial: returns a single object, so you need to RETURN something on each iteration
const max = people.find(person => person.budget === 40000)

