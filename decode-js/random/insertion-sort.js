function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

sortArray = [4, 2, 8, 5, 1];
console.log(`Array to be sorted: ${sortArray}`);
console.log(`Array after sorting: ${insertionSort(sortArray)}`);
