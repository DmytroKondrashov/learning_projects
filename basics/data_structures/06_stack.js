// using built-in methods
// const stack = [];

// stack.push('a');
// stack.push('b');
// stack.push('c');

// stack.pop();

// console.log(stack);

// using classes
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
