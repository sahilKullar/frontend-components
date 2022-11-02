const outer = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return "Sorry";
  };
  return inner;
};

const multiplyBy2 = (num) => num * 2;

const func = outer(multiplyBy2);
console.log(func(2));
console.log(func(2));
