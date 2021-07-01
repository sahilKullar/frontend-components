// remove the first two elements of an array using array destructuring

function removeFirstTwo(array) {
  const [, , ...arr] = array;
  return arr;
}

let arrLiteral = [8, 9, 10, 11, 12];
console.log("arr contains: " + removeFirstTwo(arrLiteral));
