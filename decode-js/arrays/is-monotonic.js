function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array < array[i - 1]) isNonDecreasing = false;
    if (array > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// const expected = true;
console.log(isMonotonic(array));
