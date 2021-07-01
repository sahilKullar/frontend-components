let LinkedListNode = function(data){
  this.data = data
  this.next = null
}


let insertAtHead = function(head, data) {
  let newNode = new LinkedListNode(data)
  newNode.next = head
  return newNode
}

exports.createLinkedList = function(lst) {
  let listHead = null
  lst.reverse()
  for (let x = 0; x < lst.length; x++) {
    listHead = insertAtHead(listHead, lst[x])
  }
  return listHead
}

exports.toList = function(head) {
  let lst = []
  let temp = head
  while (temp) {
    lst.push(temp.data)
    temp = temp.next
  }
  return lst
}