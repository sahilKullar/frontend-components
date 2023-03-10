function waterArea(heights) {
  if (heights.length === 0) return 0;

  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let leftMax = heights[leftIdx];
  let rightMax = heights[rightIdx];
  let surfaceArea = 0;

  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftMax = Math.max(leftMax, heights[leftIdx]);
      surfaceArea += leftMax - heights[leftIdx];
      leftIdx++;
    } else {
      rightMax = Math.max(rightMax, heights[rightIdx]);
      surfaceArea += rightMax - heights[rightIdx];
      rightIdx--;
    }
  }
  return surfaceArea;
}

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
