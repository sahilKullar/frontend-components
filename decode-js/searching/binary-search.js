function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const potentialMatch = array[mid];
    if (potentialMatch === target) {
      return mid;
    } else if (potentialMatch < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
