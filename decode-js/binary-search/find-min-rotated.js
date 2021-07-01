// Find Minimum in Rotated Sorted Array

// A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50]
// becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

// Input: [30, 40, 50, 10, 20]
// Output: 3
// Explanation: The smallest element is 10 and its index is 3.

function findMinRotated(array) {
  let left = 0;
  let right = array.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (array[mid] <= array[array.length - 1]) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// Driver code
console.log("Find minimum rotated :", findMinRotated([30, 40, 50, 10, 20]));
console.log("Find minimum rotated :", findMinRotated([0, 1, 2, 3, 4, 5]));
console.log("Find minimum rotated :", findMinRotated([0]));
