// implementation of reduce function

const multipleBy2 = (num) => num * 2;
const addThree = (num) => num + 3;
const divideByFive = (num) => num / 5;

const reduce = (array, combine, buildUp) => {
  for (let i = 0; i < array.length; i++) {
    buildUp = combine(buildUp, array[i]);
  }
  return buildUp;
};

function runFn(input, fn) {
  return fn(input);
}

console.log(reduce([multipleBy2, addThree, divideByFive], runFn, 11));
