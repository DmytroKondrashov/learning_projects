// run this file with node map.js

const obj = {
  name: 'John',
  age: 20,
  job: 'developer',
}

const entries = [
  ['name', 'John'],
  ['age', 20],
  ['job', 'developer'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

map
  .set('newField', 42)
  .set(obj, 'Value of obj')
  .set(NaN, 'NaNi?')

map.delete('job')

// console.log(map)
// console.log(map.has('job'))
// console.log(map.size)
// console.log(map.get('name'))

// map.clear()
// console.log(map.size)

// ================================================

// for (entry of map.entries()) {
//   console.log(entry)
// }

// for (let [key, value] of map.entries()) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((value, key, map) => {
//   console.log(value, key)
// })

// ================================================
const array = [...map]
const array2 = Array.from(map)
// console.log(array)
// ================================================

const users = [
  { name: 'Elena' },
  { name: 'Alex' },
]

const visits = new Map()

visits.set(users[0], new Date())
visits.set(users[1], new Date(new Date().getTime() + 1000 * 60))

function lastVisits(user) {
  return visits.get(user)
}

console.log(lastVisits(users[0]))
