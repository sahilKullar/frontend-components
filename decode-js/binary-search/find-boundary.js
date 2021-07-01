// Finding the Boundary

// An array of boolean values is divided into two sections: the left section consists of all false,
// and the right section consists of all true. Find the boundary of the right section, i.e. the index
// of the first true element. If there is no true element, return -1.

// Input: arr = [false, false, true, true, true]
// Output: 2
// Explanation: first true's index is 2.

// The time complexity is O(log(N)).

function findBoundary(array) {
  let left = 0;
  let right = array.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);

    if (array[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

console.log("Find Boundary :", findBoundary([false, false, true, true, true]));
console.log("Find Boundary :", findBoundary([true]));
console.log("Find Boundary :", findBoundary([false, false, false]));
console.log("Find Boundary :", findBoundary([true, true, true, true, true]));
console.log("Find Boundary :", findBoundary([false, true]));
