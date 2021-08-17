function bubbleSort(array) {
  let swapped = false;
  let counter = 0;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        swapped = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

const input = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(input));
