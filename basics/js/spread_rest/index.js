// ============================== ARRAYS ==============================
const russianCities = ['Moscow', 'Saint-Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan']
const europeanCities = ['Paris', 'London', 'Berlin', 'Madrid', 'Rome']

// will return a simple string
console.log(...russianCities)

// will combine two arrays into a new one
const cities = [...russianCities, 'Test city', ...europeanCities]
console.log(cities)

// ============================== OBJECTS ==============================
const person = {
  name: 'Alex',
}
const person2 = {
  ...person,
  age: 25,
}

console.log(person2)

// will cause an error
// console.log(...person)
// correct way
console.log({...person})

// ============================== PRACTICAL IMPLEMENTATION ==============================
// this is a NodeList, not an array
const divs = document.querySelectorAll('div')
console.log(divs, Array.isArray(divs))

// this is an array now
const nodes = [...divs]
console.log(nodes, Array.isArray(nodes))


// ============================== REST ==============================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function sum(a, b) {
//   return a + b;
// }
// // will return 3, because function accepts only two arguments
// console.log(sum(...numbers))


function sum(a, b, ...args) {
  return a + b + args.reduce((acc, curr) => acc + curr, 0);
}
// will return 55, because function accepts any amount of arguments
console.log(sum(...numbers))