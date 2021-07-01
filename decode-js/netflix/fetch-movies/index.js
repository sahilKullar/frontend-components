// import {LinkedListNode, createLinkedList, toList} from './LinkedList.js'

const { toList } = require("./LinkedList");
const { createLinkedList } = require("./LinkedList");
let merge2Country = function(head1, head2) {
  // if both lists are empty then merged list is also empty
  // if one of the lists is empty then other is the merged list
  if (!head1) {
    return head2;
  } else if (!head2) {
    return head1;
  }

  let mergedHead = null;
  if (head1.data <= head2.data) {
    mergedHead = head1;
    head1 = head1.next;
  } else {
    mergedHead = head2;
    head2 = head2.next;
  }

  let mergedTail = mergedHead;

  while (head1 && head2) {
    let temp = null;
    if (head1.data <= head2.data) {
      temp = head1;
      head1 = head1.next;
    } else {
      temp = head2;
      head2 = head2.next;
    }

    mergedTail.next = temp;
    mergedTail = temp;
  }

  if (head1) {
    mergedTail.next = head1;
  } else if (head2) {
    mergedTail.next = head2;
  }

  return mergedHead;
};

function mergeKCounty(lists){ // Main function

  if (lists.length > 0){
    res = lists[0];
    for (var i = 1; i < lists.length; i++) {
      res = merge2Country(res, lists[i]);
    }
    return res;
  }
}



// Driver code
a = createLinkedList([11,41,51]);
b = createLinkedList([21,23,42]);
c = createLinkedList([25,56,66,72]);

res = mergeKCounty([a, b, c]);
console.log(toList(res));