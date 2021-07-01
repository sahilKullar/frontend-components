// The Peak of a Mountain Array

// A mountain array is defined as an array that:
//
// 1. Has at least 3 elements.
// 2. Has an element with the largest value called the “peak”, at an index k. T
//    he array elements monotonically increase from the first element to A[k], and
//    then monotonically decreases from A[k + 1] to the last element of the array.
//    Thus creating a “mountain” of numbers.
//
// Find the index of the peak element. Assume there are no duplicates.

// Input: 0 1 2 3 2 1 0
// Output: 3
// Explanation: The largest element is 3 and its index is 3.

// The time complexity is O(log(N)).

function peakOfMountainArray(array) {
  let left = 0;
  let right = array.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (mid === array.length - 1 || array[mid] >= array[mid + 1]) {
      result = mid;
      right = mid - 1;
    } else {
      left = left + 1;
    }
  }
  return result;
}

// Driver code
console.log(
  "Find Peak of mountain :",
  peakOfMountainArray([0, 1, 2, 3, 2, 1, 0])
);
console.log(
  "Find Peak of mountain :",
  peakOfMountainArray([0, 10, 3, 2, 1, 2])
);
console.log("Find Peak of mountain :", peakOfMountainArray([0, 10, 0]));
