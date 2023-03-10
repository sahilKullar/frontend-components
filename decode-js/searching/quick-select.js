function quickSelect(array, k) {
  const position = k - 1;
  return quickSelectHelper(array, 0, array.length - 1, position);
}

function quickSelectHelper(array, startIdx, endIdx, position) {
  while (true) {
    if (startIdx > endIdx) return;

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (leftIdx <= rightIdx) {
      if (
        array[leftIdx] > array[pivotIdx] &&
        array[rightIdx] < array[pivotIdx]
      ) {
        swap(leftIdx, rightIdx, array);
      }
      if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
      if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    }
    swap(pivotIdx, rightIdx, array);

    if (position === rightIdx) {
      return array[rightIdx];
    } else if (position < rightIdx) {
      endIdx = rightIdx - 1;
    } else {
      startIdx = rightIdx + 1;
    }
  }
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

console.log(quickSelect([8, 5, 2, 9, 7, 6, 3], 3));
