class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(9);
stack.push(1);
stack.pop();
console.log("Your stack is:\n" + stack.printStack());

let str = "sahil";
for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
}

let reverse = "";
for (let i = 0; i < str.length; i++) {
  reverse += stack.pop();
}

console.log(reverse);
