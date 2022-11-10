function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let current = Infinity;
  let smallest = Infinity;
  let smallestPair = [];
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstValue = arrayOne[idxOne];
    const secondValue = arrayTwo[idxTwo];
    if (firstValue < secondValue) {
      current = secondValue - firstValue;
      idxOne++;
    } else if (firstValue > secondValue) {
      current = firstValue - secondValue;
      idxTwo++;
    } else {
      return [firstValue, secondValue];
    }
    if (current < smallest) {
      smallest = current;
      smallestPair = [firstValue, secondValue];
    }
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
