// function twoNumberSum(array, targetSum) {
//   const nums = {};
//   for (const num of array) {
//     const potentialMatch = targetSum - num;
//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const currentSum = array[leftIdx] + array[rightIdx];
    if (currentSum === targetSum) {
      return [array[leftIdx], array[rightIdx]];
    } else if (currentSum < targetSum) {
      leftIdx++;
    } else if (currentSum > targetSum) {
      rightIdx--;
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
