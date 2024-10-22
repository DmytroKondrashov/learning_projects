function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Dmitry",
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone) {
    console.group(`Info for ${this.name}`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

const lana = {
  name: "Lana",
  age: 31,
};

// function needs to be called
person.logInfo.bind(lana, "Frontend", "8-999-999-99-99")();
// function will be called immediately
person.logInfo.call(lana, "Frontend", "8-999-999-99-99");
person.logInfo.apply(lana, ["Frontend", "8-999-999-99-99"]);


const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n;
  });
};

console.log(array.multBy(3));
