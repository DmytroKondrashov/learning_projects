let obj = { name: 'weakmap' }

// In weak maps keys can only be objects!
//  has only 'get', 'set', 'delete' and 'has methods
const map = new WeakMap([
  [obj, 'obj data']
])

// map will not have obj as a key from now on to prevent the memory leaks
obj = null
console.log(map.has(obj))