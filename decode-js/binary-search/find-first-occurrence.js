// First Occurrence

// Given a sorted array of integers and a target integer, find the first
// occurrence of the target and return its index. Return -1 if the target is
// not in the array.

// Input:arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100],target = 3
// Output:1
// Explanation: The first occurrence of 3 is at index 1.

// The time complexity is O(log(N)).

function findFirstOccurrence(array, target) {
  let left = 0;
  let right = array.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (array[mid] === target) {
      boundaryIndex = mid;
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return boundaryIndex;
}

console.log(
  "Find occurrence :",
  findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3)
);
console.log(
  "Find occurrence :",
  findFirstOccurrence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)
);
console.log(
  "Find occurrence :",
  findFirstOccurrence([1, 22, 22, 33, 50, 100, 20000], 33)
);
console.log("Find occurrence :", findFirstOccurrence([4, 6, 7, 7, 7, 20], 8));
console.log(
  "Find occurrence :",
  findFirstOccurrence([6, 7, 9, 10, 10, 10, 90], 10)
);
console.log("Find occurrence :", findFirstOccurrence([4], 4));
