// class Singleton {
//   // JS private property
//   static #instance = null;

//   constructor() {
//     // Check if instance already exists, but do we really need it?
//     // if (Singleton.#instance instanceof Singleton) {
//     //   return Singleton.#instance;
//     // }
//     this.count = 0;
//     Singleton.#instance = this;
//     return this;
//   }

//   getCount() {
//     return this.count;
//   }

//   increment() {
//     this.count++;
//   }

//   static getInstance(){
//     if (!Singleton.#instance) {
//       Singleton.#instance = new Singleton();
//     }
//     return Singleton.#instance;
//   }
// }

// const singleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();

// // Will throw an error
// // const test = new Singleton();
// // test.#instance = [];

// // Will throw an error
// // singleton1.#instance = [];

// console.log(singleton1 === singleton2);








class Singleton {
  static #instance = null;

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    this.name = '';
    Singleton.#instance = this;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  static getInstance() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    Singleton.#instance = new Singleton();
    return Singleton.#instance;
  }
}

const sing1 = Singleton.getInstance();
const sing2 = Singleton.getInstance();

sing1.setName("Ilon");
console.log(sing2.getName());
