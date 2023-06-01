// 연결 리스트 특징

// - 메모리가 허용하는 한 요소를 제한 없이 추가할 수 있다.
// - 탐색은 O(n)이 소요된다.
// - 요소를 추가하거나 제거할 때는 O(1)이 소요된다.
// - Singly Linked List, Doubly Linked List, Circular Linked List가 존재한다.

// Singly Linked List

// - Head에서 Tail까지 단방향으로 이어지는 연결 리스트
// - 가장 단순한 형태인 연결 리스트다.

// Doubly Linked List

// 양방향으로 이어지는 연결 리스트

// Singly Linked List 보다 자료 구조의 크기가 조금 더 크다

// Circular Linked List

// Singly 혹은 Doubly Linked List에서 Tail이 Head로 연결되는 연결리스트 메모리를 아껴쓸 수 있다. 원형 큐 등을 만들 때도 사용된다

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = "[";
    while (currentNode !== null) {
      displayString += `${currentNode.value},`;
      currentNode = currentNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
