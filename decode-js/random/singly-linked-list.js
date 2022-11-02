function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const node = new Node(data);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let current = this.head;
    let previous = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();

console.log("-- Adding --");
list.addNode(23);
list.addNode(16);
list.addNode(9);
list.addNode(40);
console.log(list);

console.log("-- Adding after --");
list.insertAfter(23, 16);
console.log(list);

console.log("-- Removing --");
list.removeNode(16);
list.removeNode(23);
console.log(list);
