class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count(model);
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const factory = new AutoFactory();

factory.create('bmw');
factory.create('bmw');
factory.create('audi');

console.log(factory.getModels());