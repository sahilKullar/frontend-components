// passing two argument in backpack

const multiply = (numOne, numTwo) => numOne * numTwo;

const outer = (fn, prefilledValue) => {
  const inner = (value) => {
    return fn(prefilledValue, value);
  };
  return inner;
};

const multiplyBy2 = outer(multiply, 2);
console.log(multiplyBy2(5));

// currying
const multiplyByTwo = outer(multiply, 2)(5);
console.log(multiplyByTwo);
