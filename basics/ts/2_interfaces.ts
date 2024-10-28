interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 20,
    height: 30
  }
}

// Override the type
const rect2: Rect = {} as Rect;


// Extending interfaces
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect3: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 30
  },
  getArea: () => {
    return rect3.size.width * rect3.size.height;
  }
}

// Interfaces for objects with many dynamic keys
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px"
}


