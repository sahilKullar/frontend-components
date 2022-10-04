function increment(x) {
  return x + 1;
}

function decrement(x) {
  return x - 1;
}

function double(x) {
  return x * 2;
}

function half(x) {
  return x / 2;
}

// pipe take arguments left to right
function pipe(...fns) {
  return function piped(value) {
    for (let fn of fns) {
      value = fn(value);
    }
    return value;
  };
}

// compose take arguments right to left
function compose(...fns) {
  return pipe(...fns.reverse());
}

const f1 = pipe(increment, decrement, double)(2);
console.log(f1);
