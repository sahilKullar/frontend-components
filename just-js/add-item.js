function addItem(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(1, 0, ...arr1);
  return newArr;
}

console.log(addItem([1, 2, 3], [4, 5, 6], 1));
