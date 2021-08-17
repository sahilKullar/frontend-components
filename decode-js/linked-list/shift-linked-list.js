function shiftLinkedList(head, k) {
  let listLength = 1;
  let listTail = head;
  while (listTail.next !== null) {
    listTail = listTail.next;
    listLength++;
  }

  const offset = Math.abs(k) % listLength;
  if (offset === 0) return head;
  const newTailPosition = offset > 0 ? listLength - offset : offset;

  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  // console.log(newTail);
  const newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListToArray(head) {
  const array = [];
  let current = head;
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
}

const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(4);
head.next.next.next.next.next = new LinkedList(5);
const result = shiftLinkedList(head, 2);
const array = linkedListToArray(result);
console.log(array);

// var expected = [4, 5, 0, 1, 2, 3];
// chai.expect(array).to.deep.equal(expected);
