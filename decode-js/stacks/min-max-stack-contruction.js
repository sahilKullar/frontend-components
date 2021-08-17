class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// driver's code

function testMinMaxPeek(min, max, peek, stack) {
  // chai.expect(stack.getMin()).to.deep.equal(min);
  console.log(stack.getMin());
  // chai.expect(stack.getMax()).to.deep.equal(max);
  console.log(stack.getMax());
  // chai.expect(stack.peek()).to.deep.equal(peek);
  console.log(stack.peek());
}

const stack = new MinMaxStack();
stack.push(5);
testMinMaxPeek(5, 5, 5, stack);
stack.push(7);
testMinMaxPeek(5, 7, 7, stack);
stack.push(2);
testMinMaxPeek(2, 7, 2, stack);
// chai.expect(stack.pop()).to.deep.equal(2);
console.log(stack.pop());
// chai.expect(stack.pop()).to.deep.equal(7);
console.log(stack.pop());
testMinMaxPeek(5, 5, 5, stack);
