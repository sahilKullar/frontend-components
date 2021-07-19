class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

function reverseLinkedList(head) {
  let currentNode = head;
  let previousNode = null;
  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

const test = new LinkedList(0).addMany([1, 2, 3, 4, 5]);
console.log(reverseLinkedList(test).getNodesInArray());
// const result = program.reverseLinkedList(test).getNodesInArray();
// const expected = new LinkedList(5).addMany([4, 3, 2, 1, 0]).getNodesInArray();
// chai.expect(result).to.deep.equal(expected);
