const set = new Set([1, 2, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(30)

console.log(set)
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(6))
console.log(set)

// set.clear()
// console.log(set)
// the two following methods will return the same data
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set) {
//   console.log(key)
// }

// ================================================
function uniqueValues(array) {
  return [...new Set(array)]
}

console.log(uniqueValues([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]))
