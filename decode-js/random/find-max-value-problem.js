// using recursion

function findMax(arr) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0];
  const max_subarray = findMax(arr.slice(1));
  if (arr[0] > max_subarray) return arr[0];
  else return max_subarray;
}

const ar = [1, 2, 3, 4, 5];
console.log("Find max number in array", findMax(ar));
