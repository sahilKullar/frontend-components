// First Element Not Smaller Than Target

// Given an array of integers sorted in increasing order and a target, find the index
// of the first element in the array that is larger or equal to the target. Assume
// that it is guaranteed to find a satisfying number.

// Input: arr = [1, 3, 3, 5, 8, 8, 10],target = 2
// Output: 1
// Explanation: the first element larger than 2 is 3, which has index 1.

// The time complexity is O(log(N)).

function firstNotSmaller(array, target) {
  let left = 0;
  let right = array.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (array[mid] >= target) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

console.log("Find first element :", firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 2));
console.log("Find first element :", firstNotSmaller([0], 0));
console.log(
  "Find first element :",
  firstNotSmaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
);
console.log("Find first element :", firstNotSmaller([1, 1, 1, 1, 4, 5], 3));
