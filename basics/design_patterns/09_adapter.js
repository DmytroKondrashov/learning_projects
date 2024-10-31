class Engine {
  simpleInterface() {
    console.log("Simple engine started");
  }
}

class Engine2 {
  complicatedInterface() {
    console.log("Complicated engine started");
  }
}

class EngineAdapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

const engine = new EngineAdapter(new Engine2());

engine.simpleInterface();
