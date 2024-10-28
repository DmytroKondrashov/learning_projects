// Primitives are copied by value
let name = "John";
console.log(name);

let secondName = name;

console.log(secondName);

name = "Jane";

// secondName is still "John" because primitives are copied by value
console.log(secondName);

console.log("====================================");

// Reference types are copied by reference
let person = { name: "John" };
let secondPerson = person;

console.log(person);
console.log(secondPerson);

person.name = "Jane";

console.log(person);
// secondPerson is also "Jane" because reference types are copied by reference
console.log(secondPerson);