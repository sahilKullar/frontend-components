function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // <= because left and right could point to the same element, < would miss it
    let mid = left + Math.trunc((right - left) / 2); // use `(right - left) /2` to prevent `left + right` potential overflow
    // let mid = Math.trunc((left + right) / 2);
    if (arr[mid] === target) return mid; // found target, return its index
    if (arr[mid] < target) {
      // middle less than target, discard left half by making left search boundary `mid + 1`
      left = mid + 1;
    } else {
      // middle greater than target, discard right half by making right search boundary `mid - 1`
      right = mid - 1;
    }
  }
  // if we get here we didn't hit above return so we didn't find target
  return -1;
}

// Driver code
console.log("Binary search :", binarySearch([1, 3, 5, 7, 8], 5));
console.log("Binary search :", binarySearch([1, 2, 3, 4, 5, 6, 7], 0));
console.log("Binary search :", binarySearch([2, 8, 89, 120, 1000], 120));
