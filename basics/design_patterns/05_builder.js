class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }

  addAutopilot() {
    this.car.autopilot = true;
    return this;
  }

  addParktronic() {
    this.car.parktronic = true;
    return this;
  }

  addSignaling() {
    this.car.signaling = true;
    return this;
  }

  updatePrice(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder().addAutopilot().addParktronic().updatePrice("V8").build();

console.log(myCar);
