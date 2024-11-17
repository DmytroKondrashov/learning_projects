// ============================== SHALLOW COPY ==============================
// A shallow copy creates a new object or array, but it only copies the references to nested objects, not the actual values. 
// Changes made to the nested objects in the copy will also affect the original, because they share the same references.
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
  },
};

const shallowCOpy = { ...original };
shallowCOpy.name = 'Bob';
shallowCOpy.address.city = 'Paris';
shallowCOpy.test = 'test';

console.log(original.name); // Output: Alice (not affected)
console.log(original.address.city); // Output: Paris (affected because of shared reference)
console.log(original.test); // Output: undefined (not affected)

// Other ways to implement shallow copy:
const shallowCopy2 = Object.assign({}, original);


// ============================== DEEP COPY ==============================
// A deep copy creates a completely new object or array, including all nested objects and their values. 
// Changes made to the nested objects in the copy do not affect the original, because they have their own separate copies of the nested objects.
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = 'Charlie';
deepCopy.address.city = 'London';
deepCopy.test = 'test';

console.log(original.name); // Output: Alice (not affected)
console.log(original.address.city); // Output: Wonderland (not affected)
console.log(original.test); // Output: undefined (not affected)

// Other ways to implement deep copy - use Lodash library or custom function:
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const deepCopyObj = deepCopy(original);
