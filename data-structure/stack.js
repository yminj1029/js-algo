class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
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

const stack = new Stack();
console.log(stack.isEmpty()); // 출력: true

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); // 출력: 3
console.log(stack.isEmpty()); // 출력: false
console.log(stack.peek()); // 출력: 30

console.log(stack.pop()); // 출력: 30
console.log(stack.pop()); // 출력: 20
console.log(stack.size()); // 출력: 1
