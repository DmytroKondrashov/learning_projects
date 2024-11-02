class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.getName;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(500);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.reduce((acc, curr) => acc + curr.getPrice(), 0);
  }
}

const myCar = new Composite();
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(myCar.getPrice());
