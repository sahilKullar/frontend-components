const functionCreater = () => {
  let counter = 0;
  const addThree = (num) => {
    return num + 3;
  };
  return addThree;
};

const generatedFunc = functionCreater();

console.log(generatedFunc(2));

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    return counter; // undefined if not returned
  };
  return incrementCounter;
};

const newFunc = outer();
console.log(newFunc());
console.log(newFunc());
console.log(newFunc());

function repeater(count) {
  return memoize(function allTheAs() {
    return "".padStart(count, "A");
  });
}
var A = repeater(10);
console.log(A());
console.log(A());
