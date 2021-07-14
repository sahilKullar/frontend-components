function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerIdx = 0;
  let largerIdx = array.length - 1;
  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerIdx];
    const largerValue = array[largerIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerIdx--;
    }
  }
  return sortedSquares;
}

const input = [1, 2, 3, 5, 6, 8, 9];
const inputTwo = [-5, -4, -3, -2, -1];
// const expected = [1, 4, 9, 25, 36, 64, 81];
console.log(sortedSquaredArray(input));
console.log(sortedSquaredArray(inputTwo));
