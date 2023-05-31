class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // 출력: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // 출력: 3
console.log(queue.isEmpty()); // 출력: false
console.log(queue.front()); // 출력: 10

console.log(queue.dequeue()); // 출력: 10
console.log(queue.dequeue()); // 출력: 20
console.log(queue.size()); // 출력: 1
