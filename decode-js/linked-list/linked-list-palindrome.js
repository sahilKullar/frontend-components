class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  let slowNode = head;
  let fastNode = head;
  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  let reversedSecondHalfNode = reverseLinkedList(slowNode);
  let firstHalfNode = head;
  while (reversedSecondHalfNode !== null) {
    if (reversedSecondHalfNode.value !== firstHalfNode.value) {
      return false;
    }
    reversedSecondHalfNode = reversedSecondHalfNode.next;
    firstHalfNode = firstHalfNode.next;
  }
  return true;
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

const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(2);
head.next.next.next.next = new LinkedList(1);
head.next.next.next.next.next = new LinkedList(0);
console.log(linkedListPalindrome(head));
