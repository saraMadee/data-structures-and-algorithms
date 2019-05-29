'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if(this.front === null) {
      this.front = node;
      this.rear = node;
      this.length++
    }
    else {
      node.next = this.rear;
      this.rear = node;
      this.length++;
    }
  }

  dequeue() {
    let currentNode = this.rear
    if(currentNode === this.front) {
      this.length--;
      return currentNode && currentNode.value || null;
    }
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    let result = currentNode.next.value;
    currentNode.next = null;
    this.front = currentNode;
    this.length--;
    return result;
  }

  peek() {
    return this.front && this.front.value || null;
  }
}

module.exports = Queue;