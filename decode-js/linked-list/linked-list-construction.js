class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) {
      node = node.next;
      // currentPosition++;
    }
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
}

function bindNodes(nodeOne, nodeTwo) {
  nodeOne.next = nodeTwo;
  nodeTwo.prev = nodeOne;
}

function getNodeValuesHeadToTail(linkedList) {
  const values = [];
  let node = linkedList.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead(linkedList) {
  const values = [];
  let node = linkedList.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

const linkedList = new DoublyLinkedList();
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const three2 = new Node(3);
const three3 = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
bindNodes(one, two);
bindNodes(two, three);
bindNodes(three, four);
bindNodes(four, five);
linkedList.head = one;
linkedList.tail = five;

linkedList.setHead(four);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 3, 5]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([5, 3, 2, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.setTail(six);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 3, 5, 6]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 3, 2, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.insertBefore(six, three);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 3, 6]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 3, 5, 2, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.insertAfter(six, three2);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 3, 6, 3]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 6, 3, 5, 2, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.insertAtPosition(1, three3);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([3, 4, 1, 2, 5, 3, 6, 3]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([3, 6, 3, 5, 2, 1, 4, 3]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.removeNodesWithValue(3);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 2, 5, 6]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 2, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

linkedList.remove(two);
// chai.expect(getNodeValuesHeadToTail(linkedList)).to.deep.equal([4, 1, 5, 6]);
// chai.expect(getNodeValuesTailToHead(linkedList)).to.deep.equal([6, 5, 1, 4]);
console.log(getNodeValuesHeadToTail(linkedList));
console.log(getNodeValuesTailToHead(linkedList));

// chai.expect(linkedList.containsNodeWithValue(5)).to.deep.equal(true);
console.log(linkedList.containsNodeWithValue(5));
