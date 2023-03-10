function shiftedBinarySearch(array, target) {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}

function shiftedBinarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (array[left] <= potentialMatch) {
      if (target < potentialMatch && target >= array[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > potentialMatch && target <= array[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33));
