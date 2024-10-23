// ============================== OBJECT PROXY ==============================
const person = {
  name: 'John',
  age: 25,
  job: 'Fullstack',
}

const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },

  has(target, prop) {
    return ['age', 'job', 'name'].includes(prop);
  },

  deleteProperty(target, prop) {
    delete target[prop];
    return true;
  }
})


// ============================== FUNCTION PROXY ==============================
function log(msg) {
  console.log(msg);
}

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('running function')
    return target.apply(thisArg, args).toUpperCase();
  }
})


// ============================== CLASSES ==============================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Constructing...');
    return new target(...args);
  },

  get(target, prop) {
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  }
})

const p = new PersonProxy('Max', 30);
console.log(p);
