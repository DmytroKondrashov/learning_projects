const stack = [];
const queue = [];

// Stack - last in, first out O(1)
stack.push("First");
stack.push("Second");
stack.push("Third");

stack.pop(); // "Third"
stack.pop(); // "Second"
stack.pop(); // "First"

// Queue - first in, first out O(n)
queue.push("First");
queue.push("Second");
queue.push("Third");

queue.shift(); // "First"
queue.shift(); // "Second"
queue.shift(); // "Third"

// Custom queue realisation
class Queue {
  startIndex = 0;
  endIndex = 0;

  elements = new Map();

  enqueue(item) {
    this.elements.set(this.endIndex, item);
    this.endIndex++;
  }

  dequeue() {
    const item = this.elements.get(this.startIndex);
    this.elements.delete(this.startIndex);
    this.startIndex++;
    return item;
  }
}
