// ============================== ARRAYS ==============================
function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b]
}

const result = calcValues(10, 5)

const [sum, sub, mul, div] = result
console.log(sum, sub, mul, div)

// ============================== OBJECTS ==============================
const person = {
  name: 'Alex',
  age: 25,
}

const {name: firstName, age, car = 'No car'} = person
console.log(firstName, age, car)
