const users = [
  { name: 'Elena' },
  { name: 'Alex' },
]

const weakSet = new WeakSet(users)
weakSet.add(users[0]).add(users[1])

console.log(weakSet.has(users[0]))
console.log(weakSet.has(users[1]))

users.splice(0, 1)
console.log(weakSet.has(users[0]))
