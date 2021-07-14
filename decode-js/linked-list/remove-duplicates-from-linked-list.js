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

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next;
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return linkedList;
}

const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
const expected = new LinkedList(1).addMany([3, 4, 5, 6]);
// const actual = program.removeDuplicatesFromLinkedList(input);
console.log(input);
console.log("-------------");
console.log(removeDuplicatesFromLinkedList(input));
// chai.expect(actual.getNodesInArray()).to.deep.equal(expected.getNodesInArray());
