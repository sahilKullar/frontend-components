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
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}

const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const expected = new LinkedList(0).addMany([1, 2, 3, 4, 5, 7, 8, 9]);
removeKthNodeFromEnd(test, 4);
// chai.expect(test.getNodesInArray()).to.deep.equal(expected.getNodesInArray());
console.log(test.getNodesInArray());
