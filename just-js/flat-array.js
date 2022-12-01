function flatArray(array) {
  // if (typeof array !== "object" || array === null) return array;
  // if (Array.isArray(array)) return flatMyArray(array);

  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// function flatMyArray(array) {
//   return array.reduce((acc, item) => acc.concat(flatArray(item)), []);
// }

console.log(flatArray([1, 2, [3, 4, [], 5]]));
