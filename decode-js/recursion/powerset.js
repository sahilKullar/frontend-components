function powerset(array) {
  const subsets = [[]];
  for (let ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}

function sortAndStringify(array) {
  return array.sort((a, b) => a - b).join(",");
}

console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3]).map(sortAndStringify));
