function countInversions(array) {
  return countSubArrayInversions(array, 0, array.length);
}

function countSubArrayInversions(array, start, end) {
  if (end - start <= 1) return 0;

  const middleIdx = start + Math.floor((end - start) / 2);
  const leftInversions = countSubArrayInversions(array, start, middleIdx);
  const rightInversions = countSubArrayInversions(array, middleIdx + 1, end);
  const mergedArrayInversions = mergeSortAndCountInversions(
    array,
    start,
    middleIdx,
    end
  );
  return leftInversions + rightInversions + mergedArrayInversions;
}

function mergeSortAndCountInversions(array, start, middle, end) {
  const sortedArray = [];
  let left = start;
  let right = middle;
  let inversions = 0;

  while (left < middle && right < end) {
    if (array[left] <= array[right]) {
      sortedArray.push(array[left]);
      left++;
    } else {
      inversions += middle - left;
      sortedArray.push(array[right]);
      right++;
    }
  }

  sortedArray.push(...array.slice(left, middle), ...array.slice(right, end));
  for (let i = 0; i < sortedArray.length; i++) {
    array[start + i] = sortedArray[i];
  }

  return inversions;
}

console.log(countInversions([2, 3, 3, 1, 9, 5, 6]));
