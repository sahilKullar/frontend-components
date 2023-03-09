function zeroSumSubarray(nums) {
  const sums = new Set([0]);
  let currentSum = 0;
  for (let num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }
  return false;
}

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));
