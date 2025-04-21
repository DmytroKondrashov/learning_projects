const name = "John";
const age = 20;
const isStudent = true;
const hobbies = ["reading", "traveling", "coding"];
const address = {
  street: "123 Main St",
  city: "Anytown",
  zip: "12345"
};

age = 30;

const summarizeUser = (name, age, isStudent, hobbies, address) => {
  return `Name: ${name}, Age: ${age}, Is Student: ${isStudent}, Hobbies: ${hobbies}, Address: ${address.street}, ${address.city}, ${address.zip}`;
};            

console.log(summarizeUser(name, age, isStudent, hobbies, address));
