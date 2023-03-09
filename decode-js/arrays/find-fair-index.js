function findFairIndex(a, b) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < a.length; i++) {
    sumA += a[i];
    sumB += b[i];
  }
  let count = 0;
  let tempA = a[0];
  let tempB = b[0];
  for (let j = 1; j < a.length; j++) {
    if (
      j !== 1 &&
      tempA === tempB &&
      2 * tempA === sumA &&
      2 * tempB === sumB
    ) {
      count++;
    }
    tempA += a[j];
    tempB += b[j];
  }
  return count;
}

console.log(findFairIndex([0, 4, -1, 0, 3], [0, -2, 5, 0, 3]));
