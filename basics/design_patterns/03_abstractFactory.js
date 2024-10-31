// Abstract Factory
function bmwProducer(kind) {
  return kind === "sport" ? sportFactory : familyFactory;
}

function sportFactory() {
  return new Z4();
}

function familyFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a sport car!";
  }
}

class I3 {
  info() {
    return "I3 is a family car!";
  }
}

const produce = bmwProducer("sport");

const myCar = produce();

console.log(myCar.info())