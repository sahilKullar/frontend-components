function curry(callback) {
  const curriedCallback = (...args) => {
    if (args.length === 0) {
      return callback();
    }

    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      return curriedCallback(...args, ...otherArgs);
    };
  };
  return curriedCallback;
}

const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);

console.log(curriedSum());
console.log(curriedSum(1)());
console.log(curriedSum(1)(2)());
console.log(curriedSum(1)(2)(4)());
console.log(curriedSum(1));
