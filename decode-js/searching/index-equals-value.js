// function indexEqualsValue(array) {
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (i === array[i]) return i;
//   }
//   return -1;
// }

function indexEqualsValue(array) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    const middleValue = array[middleIdx];
    if (middleValue < middleIdx) {
      leftIdx = middleIdx + 1;
    } else if (middleValue === middleIdx && middleIdx === 0) {
      return middleIdx;
    } else if (
      middleValue === middleIdx &&
      array[middleIdx - 1] < middleIdx - 1
    ) {
      return middleIdx;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}

console.log(indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]));
