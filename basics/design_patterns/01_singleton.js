let instance = null;

class Singleton {
  constructor() {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
    }
    this.count = 0;
    Singleton.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increment() {
    this.count++;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2);
