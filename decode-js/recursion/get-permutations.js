function getPermutations(array) {
  const permutations = [];
  getPermutationsHelper(0, array, permutations);
  return permutations;
}

function getPermutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      getPermutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(getPermutations([1, 2, 3]));
