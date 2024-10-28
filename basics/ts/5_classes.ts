class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `${name} ${this.version}`;
  }
}

// The following is the same as the class Car below
// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// Modificatiors
// public - default
// private - only within the class
// protected - within the class and subclasses
class Animal {
  protected voice: string = "";
  public color: string = "black";

  // will be available only within the class (not in subclasses)
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");
// Will throw an error, the property is protected
console.log(cat.voice);
