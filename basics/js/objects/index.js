const person = Object.create({
  // this oobject is a created object's prototype.
  // by default it is an Object
}, {
  name: {
    value: 'John',
    // enables field to be iterable
    enumerable: true,
    // enables field to be rewritten
    writable: true,
    // enables field to be deleted
    configurable: true,
  },
  birthYear: {
    value: 1990,
    // disables field to be iterable
    enumerable:false
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    // triggered on somethng like person.age = 100
    set(value) {
      document.body.style.background = 'red';
      console.log('Set age', value);
    }
  }
});

person.name = 'test';

for (let key in person) {
  if(person.hasOwnProperty(key)) { 
    console.log(key, person[key])
  }
}
