function mergeSort(array) {
  if (array.length <= 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIdx);
  const rightHalf = array.slice(middleIdx);
  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftArray, rightArray) {
  const sortedArray = new Array(leftArray.length + rightArray.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      sortedArray[k] = leftArray[i];
      i++;
    } else {
      sortedArray[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    sortedArray[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    sortedArray[k] = rightArray[j];
    j++;
    k++;
  }
  return sortedArray;
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
