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

  getNthNode(n) {
    let counter = 1;
    let current = this;
    while (counter < n) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

function findLoop(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  first = second;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}

const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// test.getNthNode(10).next = test.getNthNode(5);
// chai.expect(program.findLoop(test)).to.deep.equal(test.getNthNode(5));
console.log(findLoop(test));
