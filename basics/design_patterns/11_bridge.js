class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super('black');
  }
}

class SilverColor extends Color {
  constructor() {
    super('silver');
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  // bridge method. Color is a bridge between Audi and BlackColor/SilverColor
  paint() {
    return `Auto Audi, Color ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  // bridge method. Color is a bridge between Bmw and BlackColor/SilverColor
  paint() {
    return `Auto Bmw, Color ${this.color.get()}`;
  }
}


// We avoid creating a lot of super-specific classes for each color
// const blackBmw = new BlackColorBmw();

// Instead we do
const blackBmw = new Bmw(new BlackColor());

