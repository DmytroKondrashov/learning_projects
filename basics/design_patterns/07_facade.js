class Conveyor {
  setBody() {
    console.log("Body set!");
  }

  getCarInfo() {
    console.log("Car info");
  }

  changeEngine() {
    console.log("Engine changed");
  }

  addElectronics() {
    console.log("Electronics added");
  }

  paint() {
    console.log("Car painted");
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.getCarInfo();
    this.car.changeEngine();
    this.car.addElectronics();
    this.car.paint();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());

console.log(conveyor.assembleCar());
