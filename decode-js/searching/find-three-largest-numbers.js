function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];
  for (let num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    updateAndShift(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    updateAndShift(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    updateAndShift(threeLargest, num, 0);
  }
}

function updateAndShift(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
