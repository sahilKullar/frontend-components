// Square Root

// Given an integer, find its square root without using the built-in square root function.
// Only return the integer part (truncate the decimals).

// Input: 16
// Output: 4
// Input: 8
// Output: 2
// Explanation: Square root of 8 is 2.83..., return integer part 2

// The time complexity is O(log(N)).

function squareRoot(n) {
  if (n === 0) return 0;
  let left = 0;
  let right = n;
  let result = -1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (mid * mid <= n) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// Driver code
console.log("Square root :", squareRoot(4));
console.log("Square root :", squareRoot(8));
console.log("Square root :", squareRoot(100000));
