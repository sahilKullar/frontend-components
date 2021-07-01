class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " ";
    }
    return str;
  }
}

let queue = new Queue();
//insert items into the queue
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(1);
//print the queue (I'll discuss this function in detail later in this lesson)
console.log("Your queue is:\n" + queue.printQueue());

queue.dequeue();
console.log("Your queue after deletion is:\n" + queue.printQueue());
