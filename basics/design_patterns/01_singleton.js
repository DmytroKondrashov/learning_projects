class Singleton {
  // JS private property
  #instance = null;
  constructor() {
    // more strict check!!!
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

singleton1.instance = []

console.log(singleton1 === singleton2);
