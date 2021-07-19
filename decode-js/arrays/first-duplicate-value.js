function firstDuplicateValue(array) {
  let seen = new Set();
  for (let value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}

const inputOne = [2, 1, 5, 2, 3, 3, 4];
const inputTwo = [2, 1, 5, 3, 3, 2, 4];
console.log(firstDuplicateValue(inputOne));
console.log(firstDuplicateValue(inputTwo));
